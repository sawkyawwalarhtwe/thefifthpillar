import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutFifthPillar(){
    const ref = useRef(null);
    const icRef = useRef(null);
    const isInView = useInView(ref, { once: true });
    const icons = useInView(icRef, {once: true})

    return(

        <>
        <div className="px-12 py-6 lg:px-24 lg:py-12 lg:mt-10"
            ref={ref} 
            style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                <h1 className="text-xl lg:text-3xl text-center mt-10 font-bold">About the fifth pillar</h1>
                <p className="text-xs lg:text-base mt-6 w-full lg:w-[50%] text-gray-600 mx-auto text-center">The Fifth Pillar is emerged as a non-profit, rights and legal based organization with a mission of strengthening democratic institutions in Myanmar.
                     The organization seeks to grantee that every citizens are enjoyed their rights without any kind of discrimination. 
                     The organization’s main area of focus include:</p>
            </div>
            <div className="flex px-[10%] lg:px-[25%] mb-10">
                <img src="4.png" className="w-[100px] h-[70px] lg:w-[250px] lg:h-[176.25px]" alt="IMG"
                ref={icRef} 
                style={{
                transform: icons ? "none" : "translateY(50px)",
                opacity: icons ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                }}
                />
                <img src="5.png" className="w-[100px] h-[70px] lg:w-[250px] lg:h-[176.25px]" alt="IMG"
                ref={icRef} 
                style={{
                transform: icons ? "none" : "translateY(50px)",
                opacity: icons ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                }}
                />
                <img src="6.png" className="w-[100px] h-[70px] lg:w-[250px] lg:h-[176.25px]" alt="IMG"
                ref={icRef} 
                style={{
                transform: icons ? "none" : "translateY(50px)",
                opacity: icons ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                }}
                />
            </div>
        </>
    )
}