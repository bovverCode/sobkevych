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
    contactBlockData,
    menu
 } from './data';
import { useRef, useState } from 'react';

export default function Home() {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const bodyClassName = !isLightTheme ? ['dark_theme'] : [];
    const [aboutRef, serviceRef, experienceRef, footerRef] = menu.map(() => useRef(null));
    const menuHandlers = [aboutRef, serviceRef, experienceRef, footerRef].map(ref => {
        return () => {
            if (ref.current) {
                window.scroll({
                    top: ref.current.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
    return ( 
        <body className={bodyClassName}>
            <Header menu={menuData} isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} handlers={menuHandlers}/>
            <AboutBlock aboutData={aboutBlockData} isLightTheme={isLightTheme} ref={aboutRef}/>
            <ServiceBlock serviceData={serviceBlockData} isLightTheme={isLightTheme} ref={serviceRef}/>
            <ExperienceBlock experienceData={experienceBlockData} isLightTheme={isLightTheme} ref={experienceRef}/>
            <Footer ref={footerRef}>
                <SkillBlock skillData={skillBlockData} isLightTheme={isLightTheme}/>
                <ContactBlock contactData={contactBlockData} isLightTheme={isLightTheme}/>
            </Footer>
        </body>
    );
}
