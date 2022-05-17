const Hero = () => {
    return (
    <div className="flex flex-col min-h-screen">
        <main className="flex justify-between px-48 py-20">
            <div className="text-5xl leading-relaxed font-medium select-none">
                Hey there<span className="inline-block origin-bottom-right animate-wave">👋</span>, I&apos;m<br />
                Mohamed Sami
            </div>
            <div className="flex text-2xl items-end text-gray-400 select-none">
                I craft memorable web experiences
            </div>
        </main>
        <div className="flex place-content-center animate-bounce pt-20">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path></svg>
        </div>
    </div>
    )
}

export default Hero;