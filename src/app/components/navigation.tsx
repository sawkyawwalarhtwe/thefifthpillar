"use client"
import Image from 'next/image'
import SearchBar from './searchbar'
import { useState } from 'react'
import Link from 'next/link'
export default function NavBar(){
  const [abDropdown, setabDropdown] = useState("invisible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
  const [wDropdown, setwDropdown] = useState("invisible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
  const [pbDropdown, setpbDropdown] = useState("invisible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
  const [mNav,setmNav] = useState("w-full flex-grow lg:flex lg:items-center lg:w-auto justify-end hidden")
  const [click,setClick] = useState(false)

  function mNavOnclick(){
    if(!click){
      setmNav("w-full flex-grow lg:flex lg:items-center lg:w-auto justify-end")
      setClick(true)
      console.log("activate the nav")
    }else{
      setmNav("w-full flex-grow lg:flex lg:items-center lg:w-auto justify-end hidden")
      setClick(false)
      console.log("deactivate")
    }
  }

 function abOnHover(condition: boolean){
  if(condition){
    setabDropdown("visible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
  }else{
    setabDropdown("invisible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
  }
    
  }
  function wOnHover(condition: boolean){
    if(condition){
      setwDropdown("visible  absolute bg-white w-[250px] font-sans text-gray-600	z-20")
    }else{
      setwDropdown("invisible  absolute bg-white w-[250px] font-sans text-gray-600	z-20")
    }
  }
  function pbOnHover(condition: boolean){
    if(condition){
      setpbDropdown("visible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
    }else{
      setpbDropdown("invisible absolute bg-white w-[250px] font-sans text-gray-600	z-20")
    }
  }

    return (
        <nav className=" font-sans flex items-center justify-between flex-wrap bg-[#ffffff] p-[0.5%] border border-b-2 shadow-sm lg:px-[5%] fixed top-0 left-0 right-0 z-30">
            <Link href="/"><Image
      src="/textlogo.png"
      width={250}
      height={70}
      alt="Picture of the author"
      className="flex-shrink-0 text-[#434a45] cursor-pointer"
    />
    </Link>
    {/* <h1 className=' mr-[10%] text-lg ml-4 font-[550] tracking-widest text-[#000000]'>The Fifth Pillar</h1> */}
  <div className="block lg:hidden" onClick={()=>{ mNavOnclick()}}>
    <button className="flex items-center px-3 py-2 border rounded text-[#4c4231] border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
   
  <div className={mNav}>
    <SearchBar />
    <div className="block md:flex text-sm w-[50%] justify-between ml-20">
    <div className='relative' onMouseEnter={()=>{wOnHover(true)}} onMouseLeave={()=>{wOnHover(false)}}>
        <a  className="text-lg block font-[550] mt-4 lg:inline-block lg:mt-0 text-[#3f3e3e] hover:text-[#D19697] cursor-pointer">
          What We Do
        </a>
        <ul className={wDropdown}>
          <Link href="works#demo"><li className='border-b p-4 cursor-pointer hover:bg-gray-100'>Democratic Enlightenment</li></Link>
          <Link href="works#rule"><li className='border-b p-4 cursor-pointer hover:bg-gray-100'>Promoting Rule of Law</li></Link>
        </ul>
      </div>

      <div className='relative' onMouseEnter={()=>{abOnHover(true)}} onMouseLeave={()=>{abOnHover(false)}}>
      <a className="text-lg block font-[550] mt-4 lg:inline-block lg:mt-0 text-[#3f3e3e] cursor-pointer">
        About Us
      </a>
      <ul className={abDropdown}>
          <Link href="about"><li className='border-b p-4 cursor-pointer hover:bg-gray-100'>Who we are</li></Link>
          <Link href="about#vision"><li className='border-b p-4 cursor-pointer hover:bg-gray-100'>Vision, Mission and Values</li></Link>
          <Link href="about#report"><li className='border-b p-4 cursor-pointer hover:bg-gray-100'>Annual Reports</li></Link>
          <Link href="about#partner"><li className='border-b p-4 cursor-pointer hover:bg-gray-100'>Our Partners</li></Link>
        </ul>

      </div>
      
      <div className='relative'  onMouseEnter={()=>{pbOnHover(true)}} onMouseLeave={()=>{pbOnHover(false)}}>
      <Link href="publication" className="text-lg block font-[550] mt-4 lg:inline-block lg:mt-0 text-[#3f3e3e] hover:text-[#D19697]">
          Publication
        </Link>
        <ul className={pbDropdown}>
          <li className='border-b p-4 cursor-pointer hover:bg-gray-100'>
            <Link href={{
          pathname: '/publication',
          query: {
            page: 0
          }
        }}>
           Booklets
            </Link>
           
            </li>
          <li className='border-b p-4 cursor-pointer hover:bg-gray-100'>
          <Link href={{
          pathname: '/publication',
          query: {
            page: 1
          }
        }}>
           Pamphlets
            </Link>
            
            </li>
          <li className='border-b p-4 cursor-pointer hover:bg-gray-100'>
          <Link href={{
          pathname: '/publication',
          query: {
            page: 1
          }
        }}>
           Videos
            </Link>
            
            </li>

        </ul>
      </div>
      
      <Link href="news" className="text-lg block font-[550] mt-4 lg:inline-block lg:mt-0 text-[#3f3e3e] hover:text-[#D19697]">
        News
      </Link>
      <a href="#responsive-header" className="text-lg block font-[550] mt-4 lg:inline-block lg:mt-0 text-[#3f3e3e] hover:text-[#D19697]">
        TFP Community
      </a>
      
    </div>
    
   
  </div>
</nav>
    )
}