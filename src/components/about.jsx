import React, { useState } from "react";
import Speeker from '../assets/speeker.png';
import TabButton from '../components/TabButton.jsx';

const TAB_DATA = [
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul>
                <li>Tamil</li>
                <li>English</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Bachelor of Computer Application (2020 - 2023)</li>
                <li>Bharathiar University</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>UI UX Designer Intern (4 Months)</li>
                <li>PG Softwares</li>
            </ul>
        )
    }
];

const About = () => {
    const [tab, setTab] = useState("languages");

    const handleTabChange = (id) => {
        setTab(id);
    };

    return (
        <section>
            <div className="max-w-screen-lg mx-auto p-4 md:grid md:grid-cols-2 gap-8 items-center sm:py-8 px-4 xl:gap-16 xl:px-16">
                <img src={Speeker} alt="Speaker" className='m-auto w-[230px] sm:w-[420px]'/>
                <div className="mt-4 md:mt-0 text-left">
                    <h2 className="text-4xl font-bold border-b-4 border-b-gray-500 p-2 inline">About Me</h2>
                    <p className="text-base lg:text-lg mt-8 font-medium">
                    I am a passionate 21-year-old Frontend Developer, UI/UX Designer, and Graphic Designer from Tamil Nadu, India. With a strong focus on creating captivating user experiences, I blend creativity with technical expertise to craft innovative digital solutions that leave a lasting impact.
                    </p>
                    <div className="flex flex-row justify-start mt-5">
                        {TAB_DATA.map(({ id, title }) => (
                            <TabButton
                                key={id}
                                selectTab={() => handleTabChange(id)}
                                active={tab === id}
                            >
                                {title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-5 font-medium">
                        {tab && TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
