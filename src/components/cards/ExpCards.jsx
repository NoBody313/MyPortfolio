import {useState} from "react";

const ExpCards = () => {
    const cardsItem = [
        {
            key: "pt_admedika",
            jobTitle: "IT Strategy & Security Management",
            jobPlace: "PT. Administrasi Medika (AdMedika) - Telkom Indonesia Group",
            status: "Intern",
            compImg: "src/assets/admedika-logo.png",
            compImgAlt: "PT. Administrasi Medika",
            startDate: "July 2023",
            endDate: "Current",
            desc: "While working here until now, I have been responsible for developing the backend of a user management system using \"Identity and Access Management\" solutions such as OpenIAM, Keycloak, and FusionAuth. Subsequently, I implemented it as a Single Sign-On (SSO) solution to enhance the security of user identities on websites, ensuring their safety and proper authentication.\n" +
                "\n" +
                "Some of the technologies and frameworks I have utilized in this project include:\n" +
                "• React JS\n" +
                "• Laravel\n" +
                "• WebAuthn\n" +
                "• Two-Factor Authentication\n" +
                "\n" +
                "Additionally, some of my project responsibilities have involved:\n" +
                "• Creating documentation for my web projects\n" +
                "• Conducting testing on various authentication methods.",
            skills: ["kotlin", "html", "css", "javascript", "tailwind CSS", "bootstrap", "firebase", "UI/UX"]
        },
        {
            key: "kemenag_sulteng",
            jobTitle: "Web & User Interface Designer",
            jobPlace: "Kementerian Agama Prov. Sulawesi Tengah",
            status: "Intern",
            compImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg/1200px-Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg.png    ",
            compImgAlt: "Kemenag Sulteng",
            startDate: "June 2022",
            endDate: "Oct 2022",
            desc: "During my internship at the Ministry of Religious Affairs in Central Sulawesi, I was tasked with operating WordPress as the core of the website. Throughout my 4-month internship, I dedicated the first 2 weeks to learning how to use WordPress effectively. Following that, I spent two and a half months focusing on designing the desired website layout as guided by my mentor. The remaining 2 weeks were dedicated to successfully launching the website without any issues and carrying out incremental maintenance when requested by my mentor.",
            skills: ["kotlin", "html", "css", "javascript", "tailwind CSS", "bootstrap", "firebase", "UI/UX"]
        },
        {
            key: "lab_tech",
            jobTitle: "UI Designer",
            jobPlace: "PT. Labtech Indonesia",
            status: "Intern",
            compImg: "https://labtech-indonesia.com/wp-content/uploads/2024/02/Logo-Labtech-512px.jpg",
            compImgAlt: "PT. Labtech Indonesia",
            startDate: "January 2022",
            endDate: "April 2022",
            desc: "During my internship at the Ministry of Religious Affairs in Central Sulawesi, I was tasked with operating WordPress as the core of the website. Throughout my 4-month internship, I dedicated the first 2 weeks to learning how to use WordPress effectively. Following that, I spent two and a half months focusing on designing the desired website layout as guided by my mentor. The remaining 2 weeks were dedicated to successfully launching the website without any issues and carrying out incremental maintenance when requested by my mentor.",
            skills: ["kotlin", "html", "css", "javascript", "tailwind CSS", "bootstrap", "firebase", "UI/UX"]
        },
    ];

    const [showShortDesc, setShowShortDesc] = useState(true);

    const toggleDesc = (key) => {
        setShowShortDesc((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const renderDesc = (desc, key) => {
        const shortDesc = desc.substring(0, 150) + "...";
        const isLongDesc = desc.length > 150;

        if (!showShortDesc[key] && isLongDesc) {
            return shortDesc;
        } else {
            return desc;
        }
    };
    const renderCards = () => {
        return cardsItem.map((item) => (
            <div key={item.key} className="flex flex-row gap-4">
                <div
                    className="flex flex-col h-full justify-center items-center md:w-6 w-full mx-24 mt-6 md:mt-0 py-6">
                    <div
                        className="flex items-center justify-center bg-blue-300 text-blue-800 rounded-full w-fit h-fit px-4 py-6 text-center text-xs font-semibold border-[0.8px]">
                        {item.startDate}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" viewBox="0 0 2 160" fill="none" className="text-blue-900">
                        <path
                            d="M-6.9064e-06 158.5C-6.93054e-06 159.052 0.447708 159.5 0.999993 159.5C1.55228 159.5 1.99999 159.052 1.99999 158.5L-6.9064e-06 158.5ZM-3.4532e-07 8.4C-3.69461e-07 8.95228 0.447715 9.4 1 9.4C1.55228 9.4 2 8.95228 2 8.4L-3.4532e-07 8.4ZM2 24.2C2 23.6477 1.55228 23.2 0.999999 23.2C0.447714 23.2 -1.01182e-06 23.6477 -1.03596e-06 24.2L2 24.2ZM-1.7266e-06 40C-1.75074e-06 40.5523 0.447713 41 0.999998 41C1.55228 41 2 40.5523 2 40L-1.7266e-06 40ZM2 55.8C2 55.2477 1.55228 54.8 0.999998 54.8C0.447713 54.8 -2.3931e-06 55.2477 -2.41724e-06 55.8L2 55.8ZM-3.10788e-06 71.6C-3.13202e-06 72.1523 0.447712 72.6 0.999997 72.6C1.55228 72.6 2 72.1523 2 71.6L-3.10788e-06 71.6ZM2 87.4C2 86.8477 1.55228 86.4 0.999996 86.4C0.447711 86.4 -3.77438e-06 86.8477 -3.79852e-06 87.4L2 87.4ZM-4.48916e-06 103.2C-4.5133e-06 103.752 0.447711 104.2 0.999995 104.2C1.55228 104.2 2 103.752 2 103.2L-4.48916e-06 103.2ZM1.99999 119C1.99999 118.448 1.55228 118 0.999995 118C0.44771 118 -5.15566e-06 118.448 -5.1798e-06 119L1.99999 119ZM-5.87044e-06 134.8C-5.89458e-06 135.352 0.447709 135.8 0.999994 135.8C1.55228 135.8 1.99999 135.352 1.99999 134.8L-5.87044e-06 134.8ZM1.99999 150.6C1.99999 150.048 1.55228 149.6 0.999993 149.6C0.447709 149.6 -6.53694e-06 150.048 -6.56108e-06 150.6L1.99999 150.6ZM0 0.5L-3.4532e-07 8.4L2 8.4L2 0.5L0 0.5ZM-1.03596e-06 24.2L-1.7266e-06 40L2 40L2 24.2L-1.03596e-06 24.2ZM-2.41724e-06 55.8L-3.10788e-06 71.6L2 71.6L2 55.8L-2.41724e-06 55.8ZM-3.79852e-06 87.4L-4.48916e-06 103.2L2 103.2L2 87.4L-3.79852e-06 87.4ZM-5.1798e-06 119L-5.87044e-06 134.8L1.99999 134.8L1.99999 119L-5.1798e-06 119ZM-6.56108e-06 150.6L-6.9064e-06 158.5L1.99999 158.5L1.99999 150.6L-6.56108e-06 150.6Z"
                            fill="currentColor"/>
                    </svg>
                    <div
                        className="flex items-center justify-center bg-blue-300 text-blue-800 rounded-full w-fit h-fit px-4 py-6 text-center text-xs font-semibold border-[0.8px]">
                        {item.endDate}
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row justify-start items-center w-full bg-blue-100 bg-opacity-90 border border-blue-900 rounded p-6 my-4 gap-6">
                    <div className="flex mx-24 items-center justify-center">
                        <img src={item.compImg} alt={item.compImgAlt} className="object-contain" width={128} height={128}/>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-2xl text-blue-900 font-bold tracking-wide capitalize">
                            {item.status} | {item.jobTitle}
                        </h3>
                        <h4 className="text-base text-blue-900 font-medium tracking-wide capitalize">
                            {item.jobPlace}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, index) => (
                                <div key={index}
                                     className="bg-blue-200 text-blue-700 font-semibold text-sm p-1 px-4 rounded-full capitalize">
                                    {skill}
                                </div>
                            ))}
                        </div>
                        {item.desc.length > 150 && (
                            <div>
                                <p className="text-sm text-blue-700 tracking-wide font-normal whitespace-pre-line">
                                    {renderDesc(item.desc, item.key)}
                                </p>
                                <button
                                    onClick={() => toggleDesc(item.key)}
                                    className="text-xs mt-3 p-1 px-4 rounded-sm bg-blue-200 text-blue-700 font-semibold tracking-wide cursor-pointer"
                                >
                                    {showShortDesc[item.key] ? "Tutup!" : "Lihat Selengkapnya!"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex flex-col mt-2">
            {renderCards()}
        </div>
    );
};

export default ExpCards;
