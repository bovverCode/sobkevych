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

export default function Home() {
 return (
    <>
        <Header menu={menuData}/>
        <AboutBlock aboutData={aboutBlockData}/>
        <ServiceBlock serviceData={serviceBlockData}/>
        <ExperienceBlock experienceData={experienceBlockData}/>
        <Footer>
            <SkillBlock skillData={skillBlockData}/>
            <ContactBlock contactData={contactBlockData}/>
        </Footer>
    </>
 )
}
