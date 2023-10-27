import Footer from "../components/footer";
import NavBar from "../components/navigation";
import Publication from "../components/publication";

export default function Publica(){
    return(
        <div className="overflow-hidden">
            <NavBar></NavBar>
                <Publication/>
            <Footer></Footer>
        </div>
    )
}