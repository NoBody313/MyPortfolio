import {useState} from "react";

const EduCards = () => {
    const cardsItem = [
        {
            key: "smk_idn",
            schName: "SMK IDN Boarding School",
            schImg: "https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10347.png",
            schImgAlt: "SMK IDN Boarding School",
            startYear: "2020",
            graduatedYear: "2023",
            desc: "While attending school here, I acquired a wealth of skills that are crucial for my career.\nOver the course of three years of learning here, I developed various frontend skills, including web fundamentals, React.js, Laravel, and database management, such as MySQL.\n\nAdditionally, I have honed my skills in UI/UX design through participation in several competitions, serving as the head of the design department during competency exams, and completing numerous independent projects.\n\nI successfully completed my education with a final grade of 87.",
            skills: ["kotlin", "html", "css", "javascript", "tailwind CSS", "bootstrap", "firebase", "UI/UX"]
        },
        {
            key: "telkom university",
            schName: "Universitas Telkom Bandung",
            schImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_Telkom_University_potrait.png/1200px-Logo_Telkom_University_potrait.png",
            schImgAlt: "Universitas Telkom Bandung",
            startYear: "2023",
            graduatedYear: "Current",
            desc: "Currently, I have actively participated in several activities, including Dicoding For University, which I have found instrumental in enhancing my skills for academic excellence. \nI am continuously improving my skills step by step. \n\nAs the class president, which I consider as my initial achievement in my early college days during the first semester, my goal is to excel in my studies and perform to the best of my abilities to achieve high grades. \n\nMy ultimate aim is to make my parents proud with the talents and achievements I will attain in the future.",
            skills: ["frontend", "backend", "PHP native", "laravel", "react JS", "IAM", "Auth0", "fusion auth", "wordpress", "LDAP", "MySQL", "SSO"]
        }
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
                        {item.startYear}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" viewBox="0 0 2 160" fill="none"
                         className="text-blue-900">
                        <path
                            d="M-6.9064e-06 158.5C-6.93054e-06 159.052 0.447708 159.5 0.999993 159.5C1.55228 159.5 1.99999 159.052 1.99999 158.5L-6.9064e-06 158.5ZM-3.4532e-07 8.4C-3.69461e-07 8.95228 0.447715 9.4 1 9.4C1.55228 9.4 2 8.95228 2 8.4L-3.4532e-07 8.4ZM2 24.2C2 23.6477 1.55228 23.2 0.999999 23.2C0.447714 23.2 -1.01182e-06 23.6477 -1.03596e-06 24.2L2 24.2ZM-1.7266e-06 40C-1.75074e-06 40.5523 0.447713 41 0.999998 41C1.55228 41 2 40.5523 2 40L-1.7266e-06 40ZM2 55.8C2 55.2477 1.55228 54.8 0.999998 54.8C0.447713 54.8 -2.3931e-06 55.2477 -2.41724e-06 55.8L2 55.8ZM-3.10788e-06 71.6C-3.13202e-06 72.1523 0.447712 72.6 0.999997 72.6C1.55228 72.6 2 72.1523 2 71.6L-3.10788e-06 71.6ZM2 87.4C2 86.8477 1.55228 86.4 0.999996 86.4C0.447711 86.4 -3.77438e-06 86.8477 -3.79852e-06 87.4L2 87.4ZM-4.48916e-06 103.2C-4.5133e-06 103.752 0.447711 104.2 0.999995 104.2C1.55228 104.2 2 103.752 2 103.2L-4.48916e-06 103.2ZM1.99999 119C1.99999 118.448 1.55228 118 0.999995 118C0.44771 118 -5.15566e-06 118.448 -5.1798e-06 119L1.99999 119ZM-5.87044e-06 134.8C-5.89458e-06 135.352 0.447709 135.8 0.999994 135.8C1.55228 135.8 1.99999 135.352 1.99999 134.8L-5.87044e-06 134.8ZM1.99999 150.6C1.99999 150.048 1.55228 149.6 0.999993 149.6C0.447709 149.6 -6.53694e-06 150.048 -6.56108e-06 150.6L1.99999 150.6ZM0 0.5L-3.4532e-07 8.4L2 8.4L2 0.5L0 0.5ZM-1.03596e-06 24.2L-1.7266e-06 40L2 40L2 24.2L-1.03596e-06 24.2ZM-2.41724e-06 55.8L-3.10788e-06 71.6L2 71.6L2 55.8L-2.41724e-06 55.8ZM-3.79852e-06 87.4L-4.48916e-06 103.2L2 103.2L2 87.4L-3.79852e-06 87.4ZM-5.1798e-06 119L-5.87044e-06 134.8L1.99999 134.8L1.99999 119L-5.1798e-06 119ZM-6.56108e-06 150.6L-6.9064e-06 158.5L1.99999 158.5L1.99999 150.6L-6.56108e-06 150.6Z"
                            fill="currentColor"/>
                    </svg>
                    <div
                        className="flex items-center justify-center bg-blue-300 text-blue-800 rounded-full w-fit h-fit px-4 py-6 text-center text-xs font-semibold border-[0.8px]">
                        {item.graduatedYear}
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row justify-start items-center w-full bg-blue-100 bg-opacity-90 border border-blue-900 rounded p-6 my-4 gap-6">
                    <div className="flex mx-24 items-center justify-center">
                        <img src={item.schImg} alt={item.schImgAlt} className="object-contain" width={128} height={128}/>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-xl text-blue-900 font-bold tracking-wide raleway capitalize">
                            {item.schName}
                        </h3>
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

export default EduCards;
