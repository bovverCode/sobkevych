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
import { useRef } from 'react';
import { ThemeProvider } from '@/app/Component/ThemeContext';

export default function Home() {
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
        <ThemeProvider>
            <Header menu={menuData} handlers={menuHandlers}/>
            <AboutBlock aboutData={aboutBlockData} ref={aboutRef}/>
            <ServiceBlock serviceData={serviceBlockData} ref={serviceRef}/>
            <ExperienceBlock experienceData={experienceBlockData} ref={experienceRef}/>
            <Footer ref={footerRef}>
                <SkillBlock skillData={skillBlockData}/>
                <ContactBlock contactData={contactBlockData}/>
            </Footer>
        </ThemeProvider>
    );
}
