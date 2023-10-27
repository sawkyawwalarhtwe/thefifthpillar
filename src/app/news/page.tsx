import Footer from "../components/footer";
import NavBar from "../components/navigation";
import NewsCard from "../components/newsCard";

export default function News(){
    return(
        <>
        <NavBar/>
        <div className="mt-20">
            <h1 className="text-center text-2xl md:text-6xl font-bold font-sans tracking-wider mt-[120px]">
                News
            </h1>
            <div className="grid grid-rows-3 grid-flow-col p-2 gap-4 md:w-[70%] mx-auto mt-10 md:mt-20">
            <div className="col-span-2 ">
                    <NewsCard img="https://ychef.files.bbci.co.uk/1600x900/p0gf9pyn.png" width="500px"/>
                </div>
                <div className="row-span-2 col-span-2">
                    <NewsCard img="https://ychef.files.bbci.co.uk/960_540/p0g96kqs.jpg" width="400"/>
                </div>
                <div className="row-span-1 col-span-1 ">
                    <NewsCard img="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/9/19/568cc890-8579-4f26-9549-06ec69c2243c.jpg" width="800px"/>
                </div>
                <div className="col-span-2">
                <NewsCard img="https://ichef.bbci.co.uk/news/573/cpsprodpb/10B8/production/_131008240_mediaitem131007991.jpg" width="400"/>
                </div>
                
                
                </div>
            </div>
        
        <Footer/>
        </>
    )
}