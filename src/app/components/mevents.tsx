import EventSmall from './eventSmall';

export default function MEvents(){
    return(
        <div  className="bg-[#f9ebd955] md:flex justify-between">
            <div className='p-4 md:p-24 z-10'>
                <h1 className="text-sm md:text-lg text-gray-800 mb-10">Browse the events</h1>
                <h1 className="text-xl md:text-4xl mb-10">The events of The Fifth Pillar</h1>
                <a className='text-blue-600 font-sans underline font-bold text-base md:text-xl cursor-pointer'>Browse</a>
            </div>
            <div className='py-4 md:py-10 px-2 md:pr-36'>
                <EventSmall img="https://c1.wallpaperflare.com/preview/452/747/819/meeting-business-conference-people-lecture.jpg"/>
                <EventSmall img="https://media.istockphoto.com/id/1418537236/photo/young-woman-clapping-in-a-seminar-or-group-therapy.jpg?b=1&s=612x612&w=0&k=20&c=oK4M-EYsgcnBH-6cFMfJpUlHMt1bGbR4VLoNA6s7k9o="/>
                            </div>
        </div>
        
    )
}