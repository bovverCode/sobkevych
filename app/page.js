import Header from './Header'
import AboutBlock from './Block/AboutBlock';
import ServiceBlock from './Block/ServiceBlock';
import ExperienceBlock from './Block/ExperienceBlock';
import { 
    menu as menuData,
    aboutBlockData,
    serviceBlockData, 
    experienceBlockData,
    skillBlockData,
    contactBlockData
 } from './data';
import Footer from './Footer';
import { FooterBlock } from './Footer';
import SkillBlock from './Block/SkillBlock';
import ContactBlock from './Block/ContactBlock';

export default function Home() {
 return (
    <>
        <Header menu={menuData}/>
        <AboutBlock aboutData={aboutBlockData}/>
        <ServiceBlock serviceData={serviceBlockData}/>
        <ExperienceBlock experienceData={experienceBlockData}/>
        <Footer>
            <FooterBlock>
                <SkillBlock skillData={skillBlockData}/>
            </FooterBlock>
            <FooterBlock>
                <ContactBlock contactData={contactBlockData}/>
            </FooterBlock>
        </Footer>
    </>
 )
}
