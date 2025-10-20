import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowWidth, setWindowWitdth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWitdth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return windowWidth;
}