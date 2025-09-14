import Header from './Header'
import AboutBlock from './Block/AboutBlock';
import { menu as menuData, aboutBlockData } from './data';

export default function Home() {
 return (
    <>
        <Header menu={menuData}/>
        <AboutBlock aboutData={aboutBlockData}/>
        <ServicesBlock />
    </>
 )
}
