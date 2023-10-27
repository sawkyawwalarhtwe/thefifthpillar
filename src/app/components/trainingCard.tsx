'use client'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function TrainingCard(props: { img: string | undefined; }){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div className="w-[350px] md:w-[450px] pb-4 font-serif mx-4" 
        ref={ref} 
        style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
      }}>
            <p className="mb-4 text-gray-800">
            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                </p>
                <hr className=' border-[0.5px] border-gray-500 mb-4'/>
            <img src={props.img}
            alt="news" className="object-cover w-[450px] h-[50%]" 
            ></img>
            <div className='flex px-4 py-2 text-sm opacity-50'>
                <AccessTimeIcon fontSize="small"/>
                <span className='mx-4'>2.3.2022</span>
            </div>
            <div className='flex px-4 py-2 text-sm'>
                <ErrorOutlineIcon fontSize="small"/>
                <h1 className="mx-4 text-gray-800">Legal laws changes</h1>
            </div>
            <div className='flex px-4 py-2 opacity-70 text-sm'>
                <PlaceIcon fontSize="small"/>
                <p className="mx-4 text-gray-800">
                     Lorem ipsum dolor sit amet,
                </p>
            </div>
        </div>
    )
}