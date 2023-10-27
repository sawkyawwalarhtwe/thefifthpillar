import Image from 'next/image'
import Button from '@mui/material/Button';

export default function Footer(){
    return(
        <div className="bg-[#494f58] px-2 lg:px-24 py-4 lg:py-10 text-white">
            <div className="flex justify-between">
                <div>
                <img
                    src="/logo.png"
                    
                    alt="Picture of the author"
                    className="flex-shrink-0 text-[#434a45] w-[40px] lg:w-[80px] h-[40px] lg:h-[80px] "
                />
                </div>
                
                <div>
                    <h1 className='text-[10px] lg:text-base'>About</h1>
                    <ul className='text-[8px] lg:text-sm text-gray-200'>
                        <li >
                            Organization Profile
                        </li>
                        <li>
                            Organization Chart
                        </li>
                        <li>
                            Staff Profile
                        </li>
                        <li>
                            Our Partners
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[10px] lg:text-base'>Activities</h1>
                    <ul className='text-[8px] lg:text-sm text-gray-200'>
                        <li>
                            Legal training
                        </li>
                        <li>
                            Political training
                        </li>
                        <li>
                            Events
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[10px] lg:text-base'>Publications</h1>
                    <ul className='text-[8px] lg:text-sm text-gray-200'>
                        <li>
                            Books
                        </li>
                        <li>
                            Pamphlet
                        </li>
                        <li>
                            Videos
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[10px] lg:text-base'>Publications</h1>
                    <ul className='text-[8px] lg:text-sm text-gray-200'>
                        <li>
                            Books
                        </li>
                        <li>
                            Pamphlet
                        </li>
                        <li>
                            Videos
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-between border-t border-b py-2 lg:my-16 px-4 border-gray-300'>
                <div className='flex items-center'>
                <img
                    src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"
                    alt="Picture of the author"
                    className="mx-2 lg:mx-4 lg:w-[40px] w-[15px]"
                />
                
               {/* <img
                    src="https://assets.stickpng.com/images/64be60d72112bdfca69a01f0.png"
                    alt="Picture of the author"
                    className="mx-4 w-[40px]"
                /> */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="Picture of the author"
                    className="mx-2 lg:mx-4 lg:w-[40px] w-[15px] align-middle"
                />
               
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/024/983/601/small/youtube-logo-transparent-free-png.png"
                    alt="Picture of the author"
                    className="mx-2 lg:mx-4 lg:w-[40px] w-[15px] lg:h-[40px] align-middle"
                />
                </div>
                <div className='flex items-center lg:text-base text-[10px]'>
                    <h1>Got a question?</h1>
                    <Button variant="contained" className='text-[10px] lg:text-base ml-4 bg-blue-700'>Contact</Button>
                </div>
            </div>
            <div className='flex justify-between text-[6px] lg:text-xs mt-4 lg:mt-8 text-gray-200'>
                <h1>© 2019 - 2023 the fifth pillar - All Rights Reserved.</h1>
                <h1>Powered by Krost</h1>
            </div>
        </div>
    )
}