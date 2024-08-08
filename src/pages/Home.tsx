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
        desc: "A plugin for NeoVim to compile & run code",
        repo: "https://github.com/m4rti21/compi.nvim",
        url: "https://github.com/m4rti21/compi.nvim",
        img: "./compi.png",
    },
    {
        name: "HideOrHunt",
        desc: "Multiplayer Prop Hunt game",
        repo: "https://github.com/manulopeza/hideorhunt",
        trailer: "https://www.youtube.com/watch?v=1J5U7lFG6uQ",
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
        url: "https://centreclinicpodologic.com",
        img: "./centreclinicpodologic.png"
    },
    {
        name: "Metalisteria Eupi",
        desc: "Photo gallery for a smith's work",
        url: "https://metalisteriaeupi.cat",
        img: "./metalisteriaeupi.png"
    },
];

const skills = [
    {
        name: "Languages",
        items: [
            "TypeScript",
            "JavaScript",
            "Java",
            "C#",
            "Lua",
            "Python",
            "PHP",
            "Bash",
            "HTML",
            "XML",
            "MD",
            "LATEX"
        ],
    },
    {
        name: "Databases",
        items: [
            "MariaDB",
            "PosgreSQL",
            "MySQL",
            "MongoDB"
        ]
    },
    {
        name: "Frameworks",
        items: [
            "React",
            "Vue",
            "Angular"
        ]
    },
    {
        name: "Libraries",
        items: [
            "jQuery",
            "Express",
            "Fastyfy",
            "Elysiajs",
            "Mongoose",
            "mysql2",
            "htmx",
        ]
    }
];

function Home() {

    function calculateAge(birthDay: number, birthMonth: number, birthYear: number): number {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        var calculatedAge = currentYear - birthYear;

        if (currentMonth < birthMonth - 1) {
            calculatedAge--;
        }
        if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
            calculatedAge--;
        }
        return calculatedAge;
    }

    return (<>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <img src="./jo.jpg" alt="me" className="size-32 rounded-lg" />
                    <div>
                        <h2 className="text-2xl">Martí Comas Canal</h2>
                        <time>2004</time>
                        <p>
                            I am a {calculateAge(9, 12, 2004)} y/o studying Informatics Engineering at the Open University of Catalonia (UOC).<br />
                            I love learning new skills and improving on the ones I already know.<br />
                            My prefered workflow happens on the terminal, vim+tmux is all I need, a good TWM is also appreciated.<br />
                            I don't like social media I've been off of it for a while and it has been the best descision I've made.
                        </p>
                    </div>
                </div>
                <section className="flex flex-row gap-2">
                    <h5>Curriculum:</h5>
                    <a className="link" href="./MartiComas_en.pdf" download><i className="fa-regular fa-file-pdf" /> EN</a>
                    <a className="link" href="./MartiComas_es.pdf" download><i className="fa-regular fa-file-pdf" /> ES</a>
                    <a className="link" href="./MartiComas_ca.pdf" download><i className="fa-regular fa-file-pdf" /> CA</a>
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
        <div className="flex flex-col gap-4">
            {skills.map(s =>
                <section>
                    <h4>{s.name}:</h4>
                    <div className="flex flex-row flex-wrap">
                        {s.items.join(", ")}
                    </div>
                </section>
            )
            }
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map(p =>
                <article className="card card-compact rounded-lg bg-base-100 shadow-xl">
                    <figure>
                        <img src={p.img} alt="img" className="aspect-video object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{p.name}</h2>
                        <p>{p.desc}</p>
                        <div className="card-actions justify-end">
                            {p.url ?
                                <a href={p.url} target="_blank" className="btn btn-sm rounded-lg btn-primary"><i className="fa-solid fa-globe" />Visit</a>
                                : <></>
                            }
                            {p.trailer ?
                                <a href={p.trailer} target="_blank" className="btn btn-sm rounded-lg btn-primary"><i className="fa-solid fa-film" />Trailer</a>
                                : <></>
                            }
                            {p.repo ?
                                <a href={p.repo} target="_blank" className="btn btn-sm rounded-lg btn-primary"><i className="fa-solid fa-code" />Code</a>
                                : <></>
                            }
                        </div>
                    </div>
                </article>
            )}
        </div>
    </>)

}

export default Home;
