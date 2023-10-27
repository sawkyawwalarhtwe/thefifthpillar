"use client"
import BooksCard from "./bookCard";
import * as React from 'react';
import { useState} from "react";
import Pamphlet from "./pamphlet";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Videos from "./video";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
export default function Publication(){
    const [more, setMore] = useState("my-8 justify-between hidden mx-12")
    const [cond, setCond] = useState(false)
    const [page, setPage] = React.useState(1);
    const [value, setValue] = React.useState(0);
    const handleChangeCard = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };

    function expand(){
        if(!cond){
            setMore("my-8 justify-between flex mx-12")
            setCond(true)
        }else{
            setMore("my-8 justify-between hidden mx-12")
            setCond(false) 
        }
        
    }
    return(
        <Box sx={{ width: '100%' }} className="mt-24">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChangeCard} aria-label="basic tabs example" className="px-16">
            <Tab label="Books" {...a11yProps(0)} />
            <Tab label="Pamphlet" {...a11yProps(1)} />
            <Tab label="Videos" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <div className="mb-24">
                <h1 className="text-lg lg:text-2xl mb-6 lg:mb-10 font-bold mx-12">Books</h1>
                <div className="md:flex my-8 justify-evenly md:mx-12">
                    <BooksCard title="မိန်းမသားတို့ လျှောက်သောလမ်း"
                            details="မြန်မာစာစတင်ဖြစ်ပေါ်လာခြင်းသည် မြန်မာသည် ပျူနှင့်မွန်စာရေးနည်းကို စံတင်ပြီး (၁၂)ရာစုတွင် မြန်မာဘာသာ ပေါ်ထွန်းလာခဲ့ခြင်းဖြစ်သည်။ မြန်မာနိုင်ငံ စတင်တည်ထောင်စဉ်ကာလ အနော်ရထာမင်း၏ လက်ထက်တွင် သက္ကတဘာသာစာဖြင့် ရေးသောအုတ်ခွက်စာများ၊ ပါဠိစာများဖြင့်ရေးသော အုတ်ခွက်စာများကို အထောက်အထားပြုကာ မြန်မာ့တို့သည် မူလက ပါဠိနှင့် သက္ကတဘာသာတို့ကို ရင်းနှီးခဲ့ကြောင်း သိရသည်။ သက္ကတဘာသာသည် မဟာယာန ဗုဒ္ဓဘာသာနှင့် ဆက်နွယ်ပြီး ပါဠိဘာသာသည် ထေရဝါဒဗုဒ္ဓဘာသာနှင့် နှီးနွယ်ကြောင်းသိရသည်။"
                            description="မြန်မာနိုင်ငံ စတင်တည်ထောင်စဉ်ကာလ အနော်ရထာမင်း၏ လက်ထက်တွင် "
                            img="book-1.jpg"
                            link="https://thefifthpillar-my.sharepoint.com/personal/thefifthpillar_training_tfpmm_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fthefifthpillar%5Ftraining%5Ftfpmm%5Forg%2FDocuments%2FWomen%27s%20Journey%20to%20Justice%2FFinal%20Women%20Journey%20to%20Justice%20Layout%20Story%5FfinalRepair%207%5F3%5F2023%2Epdf&parent=%2Fpersonal%2Fthefifthpillar%5Ftraining%5Ftfpmm%5Forg%2FDocuments%2FWomen%27s%20Journey%20to%20Justice&ga=1"/>
                    <BooksCard title="အမျိုးသမီးနှင့် ဉပဒေရေးရာ"
                            details="မြန်မာစာစတင်ဖြစ်ပေါ်လာခြင်းသည် မြန်မာသည် ပျူနှင့်မွန်စာရေးနည်းကို စံတင်ပြီး (၁၂)ရာစုတွင် မြန်မာဘာသာ ပေါ်ထွန်းလာခဲ့ခြင်းဖြစ်သည်။ မြန်မာနိုင်ငံ စတင်တည်ထောင်စဉ်ကာလ အနော်ရထာမင်း၏ လက်ထက်တွင် သက္ကတဘာသာစာဖြင့် ရေးသောအုတ်ခွက်စာများ၊ ပါဠိစာများဖြင့်ရေးသော အုတ်ခွက်စာများကို အထောက်အထားပြုကာ မြန်မာ့တို့သည် မူလက ပါဠိနှင့် သက္ကတဘာသာတို့ကို ရင်းနှီးခဲ့ကြောင်း သိရသည်။ သက္ကတဘာသာသည် မဟာယာန ဗုဒ္ဓဘာသာနှင့် ဆက်နွယ်ပြီး ပါဠိဘာသာသည် ထေရဝါဒဗုဒ္ဓဘာသာနှင့် နှီးနွယ်ကြောင်းသိရသည်။"
                            description="မြန်မာသည် ပျူနှင့်မွန်စာရေးနည်းကို စံတင်ပြီး (၁၂)ရာစုတွင် မြန်မာဘာသာ ပေါ်ထွန်းလာခဲ့ခြင်းဖြစ်သည်။ မြန်မာနိုင်ငံ စတင်တည်ထောင်စဉ်ကာလ အနော်ရထာမင်း၏ "
                            img="book-2.jpg"
                            link="https://thefifthpillar-my.sharepoint.com/personal/thefifthpillar_training_tfpmm_org/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fthefifthpillar%5Ftraining%5Ftfpmm%5Forg%2FDocuments%2FWomen%2C%20GBV%20and%20Law%20Book%2FLayout%20gender%20Law%5F2023%20Repair%2030%2D3%2D2023%2Epdf&parent=%2Fpersonal%2Fthefifthpillar%5Ftraining%5Ftfpmm%5Forg%2FDocuments%2FWomen%2C%20GBV%20and%20Law%20Book"/>
                </div>
        <div className={more}>
        <BooksCard title="Law Firm"
                        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                        img="https://notionpress.com/blog/wp-content/uploads/2015/07/001-book-brand-cover-back-presentation-mockup-psd.jpg"/>
            <BooksCard title="Incident"
                        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur."
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                        img="https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?w=360"/>
            <BooksCard title="The fifth pillar"
                        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur."
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                        img="https://img.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg?w=2000"/>
        </div>

                <h1 className=" mr-24 float-right font-sans cursor-pointer underline text-gray-600 mb-12" onClick={()=>{expand()}}>
                    {cond?"Show Less":"Show More"}</h1>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1} >
                <div className="mb-24">
                <h1 className="text-lg lg:text-2xl mb-4 md:mb-24 lg:mb-10 font-bold md:mx-12" >Pamphlets</h1>
                <div className="flex justify-evenly md:mx-12">
                    <Pamphlet img="pam-1.jpg"/>
                    <Pamphlet img="pam-2.jpg"/>
                </div>
                <h1 className="mt-12 mr-24 float-right font-sans cursor-pointer underline text-gray-600 mb-12" onClick={()=>{expand()}}>
                    {cond?"Show Less":"Show More"}</h1>
                </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Videos/>
                </CustomTabPanel>
      </Box>
        

    )
}