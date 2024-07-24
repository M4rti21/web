const socials = [
    {
        name: "GitHub",
        username: "M4rti21",
        icon: <i className="fa-brands fa-github" />,
        color: "#000000",
        url: "https://github.com/m4rti21",
    },
    {
        name: "GitLab",
        username: "M4rti21",
        icon: <i className="fa-brands fa-gitlab" />,
        color: "#e95328",
        url: "https://gitlab.com/m4rti21",
    },
    {
        name: "Discord",
        username: "m4rti21",
        icon: <i className="fa-brands fa-discord" />,
        color: "#5865F2",
    }
];

const projects = [
    {
        name: "Wsyi",
        desc: "An osu website for osu players",
        repo: "https://github.com/wysi-inc/web",
        url: "https://wysi727.com",
        img: "./wysi.png",
    },
    {
        name: "compi.nvim",
        desc: "A plugin for NeoVim to compile & run programs",
        repo: "https://github.com/m4rti21/compi.nvim",
        url: "https://github.com/m4rti21/compi.nvim",
        img: "./compi.png",
    },
    {
        name: "HideOrHunt",
        desc: "Multiplayer Prop Hunt game",
        repo: "https://gitlab.com/estoesunademo/hideorhunt",
        url: "https://www.youtube.com/watch?v=1J5U7lFG6uQ",
        img: "./hideorhunt.png"
    },
    {
        name: "voosweeper",
        desc: "Cross-platform minesweeper game",
        repo: "https://github.com/m4rti21/voosweeper",
        url: "https://github.com/m4rti21/voosweeper",
        img: "./voosweeper.png",
    },
    {
        name: "tmux-sessionizer",
        desc: "Script to launch tmux sessions",
        repo: "https://github.com/m4rti21/tmux-sessionizer",
        url: "https://github.com/m4rti21/tmux-sessionizer",
        img: "./tmux-sessionizer.png",
    },
    {
        name: "Centre Clinic Podològic",
        desc: "Website for a podologic clinic",
        repo: "",
        url: "centreclinicpodologic.com",
        img: "./centreclinicpodologic.png"
    },
    {
        name: "Metalisteria Eupi",
        desc: "Website for a smith",
        repo: "",
        url: "metalisteriaeupi.cat",
        img: "./metalisteriaeupi.png"
    },
];

function Home() {
    return (<>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <img src="./jo.jpg" alt="me" className="size-32 rounded-lg" />
                <div>
                    <h2 className="text-2xl">Martí Comas Canal</h2>
                    <span>2004</span>
                    <p>Programmer or something... Lorem Ipsum blah blah blah</p>
                </div>
                <section className="ms-auto flex flex-col gap-2">
                    <span>Curriculum</span>
                    <a className="link" href="./MartiComas_en.pdf" download>MartiComas_en.pdf</a>
                    <a className="link" href="./MartiComas_es.pdf" download>MartiComas_es.pdf</a>
                    <a className="link" href="./MartiComas_ca.pdf" download>MartiComas_ca.pdf</a>
                </section>
            </div>
            <div className="flex flex-row gap-4 flex-wrap">
                {socials.map(s =>
                    <a className="rounded-full flex flex-row gap-2 px-2 py-1 items-center justify-center"
                        style={{ backgroundColor: s.color }} href={s.url} target="_blank">
                        {s.icon} {s.username}
                    </a>
                )}
            </div>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Projects" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div className="flex flex-col gap-2">
                    {projects.map(p =>
                        <article className="flex flex-row rounded-lg bg-base-300 shadow-lg">
                            <img src={p.img} className="rounded-lg aspect-video h-24" />
                            <div className="p-4 flex flex-col gap-2">
                                <h4>{p.name}</h4>
                                <span>{p.desc}</span>
                            </div>
                        </article>
                    )}
                </div>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 2
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 3
            </div>
        </div>
    </>)

}

export default Home;
