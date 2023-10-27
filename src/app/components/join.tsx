"use client"
import Button from '@mui/material/Button';
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Join(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div className='' ref={ref} style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
          }}>
            <h1 className="text-center text-4xl mt-24 font-bold opacity-70">Join Training</h1>
            <p className="text-center mt-16 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempo.</p>
            <div className='flex w-[300px] justify-between mx-auto mt-12 mb-24'>
            <Button variant="contained"  className=' bg-[#7856FF] w-[150px] h-[50px]'>Join Now</Button>
            <a className='font-sans text-gray-600 underline cursor-pointer font-bold mt-2'>Browse Training</a>
            </div>
        </div>
    )
}