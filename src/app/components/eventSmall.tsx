'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function EventSmall(props: { img: string | undefined; }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <Card sx={{ display: 'flex' }} className='mb-6 h-[200px] font-serif' 
      ref={ref} 
      style={{
      transform: isInView ? "none" : "translateY(50px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className="p-2">
        <CardContent sx={{ flex: '1 0 auto' }}>
        <div className='flex p-2 md:p-4 text-[12px] md:text-sm opacity-50'>
                <AccessTimeIcon/>
                <span className='mx-4'>2.3.2022</span>
            </div>
            <div className='flex p-2 md:p-4 md:text-base text-sm'>
                <ErrorOutlineIcon/>
                <h1 className="mx-4">Legal laws changes</h1>
            </div>
            <div className='flex p-2 md:p-4 opacity-70 md:text-base text-sm'>
                <PlaceIcon/>
                <p className="mx-4 text-gray-800">
                     Lorem ipsum dolor sit amet,
                </p>
            </div>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.img}
        alt="Live from space album cover"
      />
    </Card>
  );
}