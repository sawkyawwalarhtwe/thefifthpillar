import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';

export default function Pamphlet(props: any){
    return (
        <Card sx={{ maxWidth: 500 }} className='relative cursor-pointer mx-2'>
          <CardMedia
            component="img"
            alt="green iguana"
            height="500px"
            image={props.img}
            className='h-full'
          />
          <a target='_blank' href="pam-1.jpg"><div className="transition ease-in delay-200 bg-[#494f5800] opacity-10 hover:bg-[#494f5877] hover:opacity-100 absolute h-full top-0 left-0 w-full text-white">
            <h1 className='text-[#ffffff] opacity-100 text-center my-[70%]'>Download</h1>
          </div>
          </a>
        </Card>
      );
}