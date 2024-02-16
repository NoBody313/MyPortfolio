import Navigation from "../components/navigation/index.jsx";
import EduCards from "../components/cards/EduCards.jsx";
import ExpCards from "../components/cards/ExpCards.jsx";

function Home() {
    return (
        <div>
            <Navigation/>
            <main id="cover" className="flex flex-col justify-center items-center h-[624px] gap-4">
                <img src="src/assets/Portfolio%20Title.png" alt="image title" width={420} height={166} className=""/>
                <h1 className="tracking-wider font-light text-base">&copy; 2024 - Muhammad Fatih Maulana</h1>
            </main>

            <content className="flex flex-col justify-center items-center gap-4">
                <div id="About" className="flex justify-between items-center h-screen gap-16">
                    <img src="src/assets/PP%20Gwech.jpg" alt="profile"
                         className="w-64 h-64 rounded-full border-2 border-blue-500 p-1"/>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <h1 className="font-semibold text-4xl tracking-wide capitalize">Hello code 👋</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h2 className="font-normal text-xl tracking-wide capitalize">It's Me Fatih</h2>
                        <p className="font-light text-base tracking-wide capitalize leading-relaxed w-[512px]">I am a
                            skilled and innovative
                            thinker, relishing the challenges of developing and expanding upon my ideas, without the
                            fear that inhibits me from exploring new things with great curiosity.</p>
                        <div className="flex flex-row justify-start items-start gap-8">
                            <a href="https://www.linkedin.com/in/mfatihmaulana/" target="_blank">
                                <i className="fi fi-brands-linkedin text-3xl text-blue-700 hover:text-blue-800"/>
                            </a>
                            <a href="https://github.com/NoBody313" target="_blank">
                                <i className="fi fi-brands-github text-3xl text-blue-700 hover:text-blue-800"/>
                            </a>
                            <a href="https://www.instagram.com/idkwhy.m1?igsh=cjZ1cWNobjdhemZi" target="_blank">
                                <i className="fi fi-brands-instagram text-3xl text-blue-700 hover:text-blue-800"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="education" className="flex flex-col justify-center items-center h-screen gap-4 mx-24" >
                    <h1 className="font-semibold text-2xl tracking-wide capitalize">My Education 🏫</h1>
                    <EduCards/>
                </div>
                <div id="experience" className="flex flex-col justify-center items-center h-screen gap-4 mx-24" >
                    <h1 className="font-semibold text-2xl tracking-wide capitalize">My Experience ✨</h1>
                    <ExpCards/>
                </div>
            </content>
        </div>
    )
}

export default Home;