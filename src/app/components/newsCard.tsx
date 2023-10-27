export default function NewsCard(props: {
    width: string; img: string | undefined; 
}){
    return(
        <div className={"border border-b-2 rounded-sm shadow-sm pb-8 font-serif md:mx-8 mb-8 w-["+props.width+"]"}>
            <img src={props.img}
            alt="news" className={"object-cover h-[55%] rounded-t-sm w-["+props.width+"]"}
            ></img>
            <div className="px-6 pt-4 pb-2 text-[6px] md:text-[12px] justify-between text-gray-500">
                <p>Feb 7, 2023</p>
                <p>John Doe</p>
            </div>
            <h1 className=" font-medium text-xs md:text-lg mx-6">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
            <p className="py-2 px-6 text-gray-800 text-[7px] md:text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <a className="py-2 px-6 text-blue-700 text-[7px] md:text-[14px] cursor-pointer">Read more</a>
        </div>
    )
}