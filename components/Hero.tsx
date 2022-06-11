interface HeroProps {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
}

const Hero = ( {name, greetings, tags} : HeroProps) => {
    return (
    <div className="flex flex-col min-h-[85vh] content-padding">
        <main className="flex flex-col md:flex-row justify-between my-28">
            <div className="text-3xl md:text-4xl xl:text-5xl font-medium select-none">
                Hey there<span className="inline-block origin-bottom-right animate-wave">👋</span>, I&apos;m<br />
                {name}
            </div>
            <div className="flex text-xl xl:text-2xl items-end text-gray select-none">
                I craft memorable web experiences
            </div>
        </main>
        <div className="flex place-content-center animate-bounce pt-20 text-red">
            <a href="#skills"><svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path></svg>
            </a>
        </div>
    </div>
    )
}

export default Hero;
