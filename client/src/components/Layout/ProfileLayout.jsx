import React from 'react'
import { ImLab } from "react-icons/im";
import { HiOutlineCloudDownload } from "react-icons/hi";
const ProfileLayout = () => {
  return (
    <div className="absolute top-14 right-12 w-80 bg-white text-black px-2 py-4 rounded-2xl shadow-lg font-montserrat text-16 font-thin z-50">
            <div className="grid grid-cols-3 p-4 rounded-3xl font-montserrat bg-[#f4f4ff] justify-center items-center text-16 font-thin gap-4">
                <div className="flex  rounded-lg flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <ImLab className="w-10 h-10 object-contain rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                        alt="Search"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZRwOEqf22XIzYboMCyerdrVp92C_pOU3Qg&s"
                        alt="Business"
                        className="h-10 w-10 rounded-full"
                    />
                </div>

                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="News"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://i.pinimg.com/originals/96/41/d6/9641d6b5aa4c60eee46459b4274f68b4.png"
                        alt="Account"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                        alt="Search"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZRwOEqf22XIzYboMCyerdrVp92C_pOU3Qg&s"
                        alt="Business"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="News"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="News"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="News"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="News"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                    <HiOutlineCloudDownload className="h-10 w-10 rounded-full"
                    />

                </div>
                {/* End of repeated structure */}
            </div>
        </div>
  )
}

export default ProfileLayout
