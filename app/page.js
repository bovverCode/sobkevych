import Header from './Header'
import AboutBlock from './Block/AboutBlock';
import ServiceBlock from './Block/ServiceBlock';
import ExperienceBlock from './Block/ExperienceBlock';
import { menu as menuData, aboutBlockData, serviceBlockData, experienceBlockData } from './data';

export default function Home() {
 return (
    <>
        <Header menu={menuData}/>
        <AboutBlock aboutData={aboutBlockData}/>
        <ServiceBlock serviceData={serviceBlockData}/>
        <ExperienceBlock experienceData={experienceBlockData}/>
    </>
 )
}
