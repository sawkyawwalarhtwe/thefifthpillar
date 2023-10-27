import { Button } from "@mui/material";

export default function MPublication(){
    return(
        <div className="mb-24">
            <div className="md:mx-24 my-10 border border-b-2 rounded md:flex">
                <div className="w-[70%] p-4 md:p-16">
                    <h1 className="text-xl md:text-4xl md:mt-24 font-bold opacity-70">Publication</h1>
                    <p className="text-xs md:text-base mt-4 md:mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
                    <a className="text-[14px] md:text-base text-blue-500 underline cursor-pointer">Read More</a>
                </div>
                <img width={500} src="book-1.jpg" alt="..."/>
            </div>
            <div className="md:mx-24 my-10 border border-b-2 rounded md:flex">
                <div className="w-[70%] p-4 md:p-16">
                    <h1 className="text-xl md:text-4xl md:mt-24 font-bold opacity-70">Books</h1>
                    <p className="text-xs md:text-base mt-4 md:mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
                    <a className=" text-[14px] md:text-base text-blue-500 underline cursor-pointer">Read More</a>
                </div>
                <img width={500} src="book-2.jpg" alt="..."/>
            </div>

            <Button variant="contained"  className=' bg-[#8e72fd] w-[200px] h-[50px] md:mx-[45%] mx-[20%]'>More Publication</Button>       
        </div>
        
    )
}