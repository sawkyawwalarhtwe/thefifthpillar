import TrainingCard from "./trainingCard";

export default function MupcomingTraining(){
    return(
        <div className="py-12 md:px-24 ">
            <h1 className="mx-4 text-xl font-bold mb-16">Upcoming Training</h1>
            <div className="md:flex mb-12">
                <TrainingCard img="https://wallpaper.dog/large/10985005.png"/>
                <TrainingCard img="https://www.academyoflearning.com/wp-content/uploads/2021/08/event_marketing.jpg"/>
                <TrainingCard img="https://www.efrontlearning.com/blog/wp-content/uploads/2017/11/EFRONT_20171121_1200x628-810x424.png"/>
            </div>
            
        </div>
    )
}