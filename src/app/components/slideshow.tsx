'use client'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

export default function SlideShow()
{

    const items = [
        {
            name: "Probably the most",
            description: "David Joe",
            img:"https://i.pinimg.com/originals/c5/34/44/c53444987b6fb2fc8549608881445f29.png",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Lorem ipsum dolor ",
            description: "Hello World!",
            img:"https://wallpapercrafter.com/sizes/2560x1440/239242-palmyra-black-and-white-package-and-printing-shop-.jpg",
            content:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
        },
        {
            name: "Consectetur",
            description: "John Doe,",
            img:"https://hannalawfirms.com/wp-content/uploads/2020/07/702861-1.jpg",
            content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    ]

    return (
        <Carousel className='mt-20 h-[700px] z-20'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: { item:any})
{
    return (
       
        <div className=''>
             <Paper style={{backgroundImage:`url(${props.item.img})`}} className='h-[370px] text-white bg-cover bg-no-repeat bg-center font-sans pt-[10%]'>
           
           
           </Paper>
           <div className="flex justify-evenly">
                <div className='bg-white   md:px-[8%] pt-[50px] transition duration-300'>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} gutterBottom className='text-black text-xl md:text-3xl font-bold'>
                        {props.item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} className='text-gray-700 text-base '>
                        {props.item.description}
                    </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="small" className='md:w-[200px] md:h-[50px] text-xs md:text-base p-2 bg-blue-500 text-white'>Learn More</Button>
                    </CardActions>
                </div>
                <div className='md:text-base text-xs font-sans font-bold md:pt-[5%] h-[200px]  md:h-[250px] w-[60%] md:w-[40%] mx-[4%] p-4 md:px-[4%] mt-[-100px] border shadow-md bg-slate-100 opacity-70 rounded-lg'>
                    <p>
                    {props.item.content}
                    </p>
                </div>
           </div>
            
        </div>
        
    )
}