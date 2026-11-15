import AVFoundation
import CoreGraphics
import CoreVideo
import Foundation
import ImageIO

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let inputURL = root.appendingPathComponent("assets/banner.gif")
let outputURL = root.appendingPathComponent("public/og.mp4")

try? FileManager.default.removeItem(at: outputURL)

guard let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil), CGImageSourceGetCount(source) > 0 else {
    fatalError("could not read assets/banner.gif")
}

let frameCount = CGImageSourceGetCount(source)
guard let first = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
    fatalError("banner.gif has no frames")
}

let width = first.width - first.width % 2
let height = first.height - first.height % 2

let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
let settings: [String: Any] = [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: width,
    AVVideoHeightKey: height,
    AVVideoCompressionPropertiesKey: [
        AVVideoAverageBitRateKey: 2_400_000,
        AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
    ],
]

let videoInput = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
videoInput.expectsMediaDataInRealTime = false
let adaptor = AVAssetWriterInputPixelBufferAdaptor(
    assetWriterInput: videoInput,
    sourcePixelBufferAttributes: [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
        kCVPixelBufferWidthKey as String: width,
        kCVPixelBufferHeightKey as String: height,
    ]
)

writer.add(videoInput)
guard writer.startWriting() else {
    fatalError("could not start writer: \(String(describing: writer.error))")
}
writer.startSession(atSourceTime: .zero)

let frameDurationMs = 80
let repetitions = 3
var frameIndex = 0

for _ in 0..<repetitions {
    for index in 0..<frameCount {
        guard let image = CGImageSourceCreateImageAtIndex(source, index, nil) else { continue }
        guard let pool = adaptor.pixelBufferPool else { fatalError("no pixel buffer pool") }

        var buffer: CVPixelBuffer?
        CVPixelBufferPoolCreatePixelBuffer(nil, pool, &buffer)
        guard let pixelBuffer = buffer else { fatalError("could not allocate pixel buffer") }

        CVPixelBufferLockBaseAddress(pixelBuffer, [])
        guard let context = CGContext(
            data: CVPixelBufferGetBaseAddress(pixelBuffer),
            width: width,
            height: height,
            bitsPerComponent: 8,
            bytesPerRow: CVPixelBufferGetBytesPerRow(pixelBuffer),
            space: CGColorSpaceCreateDeviceRGB(),
            bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue
        ) else {
            fatalError("could not create drawing context")
        }

        context.setFillColor(CGColor(red: 0, green: 0, blue: 0, alpha: 1))
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))
        context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))
        CVPixelBufferUnlockBaseAddress(pixelBuffer, [])

        while !videoInput.isReadyForMoreMediaData {
            usleep(1_000)
        }

        let time = CMTime(value: Int64(frameIndex * frameDurationMs), timescale: 1_000)
        guard adaptor.append(pixelBuffer, withPresentationTime: time) else {
            fatalError("could not append frame: \(String(describing: writer.error))")
        }
        frameIndex += 1
    }
}

videoInput.markAsFinished()
let semaphore = DispatchSemaphore(value: 0)
writer.finishWriting { semaphore.signal() }
semaphore.wait()

guard writer.status == .completed else {
    fatalError("could not finish writer: \(String(describing: writer.error))")
}

let size = (try? FileManager.default.attributesOfItem(atPath: outputURL.path)[.size] as? Int) ?? 0
print("wrote public/og.mp4 — \(width)x\(height), \(frameIndex) frames, \(size / 1024) KB")
