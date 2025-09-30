'use client'
import Header from '@/app/Block/Header';
import Footer from '@/app/Block/Footer';
import AboutBlock from '@/app/Block/AboutBlock';
import ServiceBlock from '@/app/Block/ServiceBlock';
import ExperienceBlock from '@/app/Block/ExperienceBlock';
import SkillBlock from '@/app/Block/SkillBlock';
import ContactBlock from '@/app/Block/ContactBlock';
import { 
    menu as menuData,
    aboutBlockData,
    serviceBlockData, 
    experienceBlockData,
    skillBlockData,
    contactBlockData
 } from './data';
import { useState } from 'react';

export default function Home() {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const bodyClassName = !isLightTheme ? ['dark_theme'] : [];
    return (
        <body className={bodyClassName}>
            <Header menu={menuData} isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme}/>
            <AboutBlock aboutData={aboutBlockData} isLightTheme={isLightTheme}/>
            <ServiceBlock serviceData={serviceBlockData} isLightTheme={isLightTheme}/>
            <ExperienceBlock experienceData={experienceBlockData} isLightTheme={isLightTheme}/>
            <Footer>
                <SkillBlock skillData={skillBlockData} isLightTheme={isLightTheme}/>
                <ContactBlock contactData={contactBlockData} isLightTheme={isLightTheme}/>
            </Footer>
        </body>
    );
}
