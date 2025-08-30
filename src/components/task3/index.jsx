import React from 'react'
import Icon from "../Icon"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FreeMode } from "swiper/modules";
import SANTA from "../../assets/merrychristmas.jpeg"
import dominos from "../../assets/dominos.png"
import amazonpay from "../../assets/amazonPay.png"
import zomatoCoupon from "../../assets/zomato-coupons.jpg"
import offerImg from "../../assets/offerImg.png"
import { Pagination } from 'swiper/modules';
import "../../style/task3.css"

const modules = [FreeMode, Pagination];
// -------------------------------------

const TaskThree = () => {

    const sm = useMediaQuery('(max-width:1024px)');

    const cards = [
        { id: 1, label: "Flash Sale 1" },
        { id: 2, label: "Flash Sale 2" },
        { id: 3, label: "Flash Sale 3" },
        { id: 4, label: "Flash Sale 4" },
        { id: 5, label: "Flash Sale 5" },
        { id: 6, label: "Flash Sale 6" },
        { id: 7, label: "Flash Sale 8" },

    ];

    return (
        <div className='w-full bg-white flex flex-col justify-center items-center pb-10 '>

            {/* Upper section  */}
            <div className='w-full flex flex-col justify-center items-center rounded-b-3xl pt-10 bg-[#58010d]'>
                <div className='max-w-[1400px] px-4 xl:px-8 w-full flex-col flex justify-center items-center'>
                    {/* Home and add  */}
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-[60%] lg:w-[45%] flex flex-col justify-center items-start'>
                            <div className='flex justify-left items-end gap-2'>

                                <Icon
                                    icon={"material-symbols:home-rounded"}
                                    className={"text-white"}
                                    height={sm ? 20 : 30}
                                    width={sm ? 20 : 30}
                                />

                                <p
                                    className='text-white text-sm lg:text-xl font-semibold'>
                                    Home
                                </p>

                                <Icon
                                    icon={"oui:arrow-down"}
                                    height={sm ? 10 : 30}
                                    width={sm ? 10 : 30}
                                    className={"text-white pb-1 lg:pb-0"}
                                />
                            </div>
                            <p className='text-[#FAF9F6] pt-2 text-xs lg:text-sm'>
                                Samras Boys Hostel , 132 Feet Ring Road
                            </p>
                        </div>

                        <div className='w-[20%] lg:w-[45%] gap-4 flex justify-end items-center'>
                            <div className='relative'>
                                <p className='text-xs absolute w-fit text-white left-[33%] top-[-20%]'>
                                    Buy
                                </p>
                                <button className='px-4 text-sm rounded-3xl py-2 text-white font-semibold bg-[#f26f45]'>
                                    One
                                </button>
                            </div>
                            <Icon
                                icon={"tdesign:user-circle-filled"}
                                width={sm ? 30 : 40}
                                height={sm ? 30 : 40}
                                className={"text-white"}
                            />
                        </div>
                    </div>

                    {/* Search  */}
                    <div className="w-full flex items-center justify-center py-6">
                        <div className="flex items-center bg-white rounded-2xl px-6 py-3 w-full">
                            <input
                                type="text"
                                placeholder="Search for 'Sweets'"
                                className="bg-transparent outline-none w-full text-gray-700"
                            />
                            <div className='flex justify-center items-center gap-x-1'>
                                <Icon
                                    icon={"material-symbols:search"}
                                    height={30}
                                    width={30} />
                                <Icon
                                    icon={"pepicons-pencil:line-y"}
                                    height={30}
                                    width={30} />
                                <Icon
                                    icon={"material-symbols:mic-rounded"}
                                    className={"text-[#fc6214]"}
                                    height={30}
                                    width={30} />
                            </div>
                        </div>
                    </div>

                    {/* Image  */}
                    <div className='w-full flex justify-center items-center h-[200px] lg:h-[400px]'>
                        <img src={SANTA} className='w-full h-full object-cover' />
                    </div>

                    {/* Flat Line  */}
                    <div className='flex w-full py-4 justify-between items-center'>
                        <span className='w-[30%] lg:w-[43%] h-[0.5px] bg-white'></span>
                        <p className='text-[#f0ad4e] text-xs lg:text-sm font-semibold '>
                            Get Flat ₹200 Off
                        </p>
                        <span className='w-[30%] lg:w-[43%] h-[0.5px] bg-white'></span>
                    </div>

                    {/* Offer Category  */}
                    <div className="pt-5 lg:pt-10 w-full">
                        <Swiper
                            modules={modules}
                            freeMode={true}
                            slidesPerView="auto"
                            spaceBetween={sm ? 15 : 32}
                        >
                            {cards.map((card) => (
                                <SwiperSlide
                                    key={card.id}
                                    className='!w-[200px] lg:!w-[250px]'
                                // style={{ width: "16rem" }}
                                >
                                    <div className="bg-[#6B0011] rounded-2xl p-5 flex flex-col items-center shadow-lg relative">
                                        <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 pointer-events-none"></div>
                                        <div className="flex items-center space-x-2 lg:mb-2 lg:mt-2">
                                            <span className="text-red-500 text-lg">●</span>
                                            <span className="text-white text-xs lg:text-sm font-semibold">
                                                LIVE NOW
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-orange-400 text-lg lg:text-3xl font-extrabold tracking-wide">
                                                FLASH
                                            </span>
                                            <span className="mx-1 text-white text-3xl font-extrabold">
                                                ⚡
                                            </span>
                                            <span className="text-orange-400 text-lg lg:text-3xl font-extrabold tracking-wide">
                                                SALE
                                            </span>
                                        </div>
                                        <div className="text-white text-sm lg:text-xl font-bold mt-2">
                                            Flat 50% OFF
                                        </div>
                                        <div className="text-white text-xs lg:text-sm font-bold mt-2">
                                            {card.label}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='w-full gap-x-8 flex justify-center py-2 lg:py-4 items-center rounded-b-3xl mt-8 bg-[#49000b]'>
                    <p className='text-white text-xs lg:text-sm font-bold'>
                        Powered By
                    </p>
                    <img
                        src={dominos}
                        className='w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' />
                    <span className='h-[20px] lg:h-[40px] w-[2px] bg-white'></span>
                    <img
                        src={amazonpay}
                        className='w-[25px] h-[15px] lg:w-[60px] lg:h-[20px]' />
                </div>
            </div>

            {/* Cards  Section*/}
            <div className='w-full flex justify-start items-start py-10 px-4'>
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    slidesPerView={1.5}
                    spaceBetween={sm ? 10 : 30}
                    centeredSlides={false}
                    loop={false}
                    slidesOffsetAfter={50}
                >
                    {[...Array(4)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full xl:w-[800px] 2xl:w-[950px] '>
                                <img
                                    src={zomatoCoupon}
                                    alt={`Zomato Coupon Slide ${index + 1}`}
                                    className='w-full h-auto rounded-2xl'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Welcome Offers  */}
            <div className='w-full flex flex-col gap-y-8 px-4'>
                <div className='flex justify-start items-center gap-4'>
                    <span className='text-4xl'>👇🏾</span>
                    <div className='flex flex-col '>
                        <p className='font-semibold'>
                            ENJOY YOUR WELCOME OFFER!
                        </p>
                        <p>
                            Get flat ₹125 off on your next order
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-start items-start py-10 px-4'>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={sm ? 10 : 30}
                        centeredSlides={false}
                        loop={false}
                        slidesOffsetAfter={50}
                    >
                        {[...Array(10)].map((_, index) => (
                            <SwiperSlide
                                className='w-full xl:!w-[300px] 2xl:!w-[400px] 2xl:!h-[300px]'
                                key={index}>
                                <div className='relative w-full h-[150px] lg:h-[220px] rounded-2xl overflow-hidden'>

                                    <img
                                        src={offerImg}
                                        alt={`Zomato Coupon Slide ${index + 1}`}
                                        className='w-full h-full object-cover rounded-2xl'
                                    />
                                    <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-12'>

                                        <div className='absolute top-[-5.25rem] left-3 flex items-center gap-2'>
                                            <span className='bg-white text-red-600 text-xs font-bold rounded-full px-2 py-1 shadow'>
                                                one
                                                <span className="font-thin bg-gray-200 rounded px-1 py-0.5 ml-1 text-[10px]">
                                                    LITE
                                                </span>
                                            </span>
                                        </div>
                                        <span className="absolute top-[-5.25rem] right-3 text-white text-lg">
                                            <Icon icon={"mdi:heart-outline"} />
                                        </span>
                                        <div>
                                            <p className='text-white font-bold text-xs lg:text-2xl'>
                                                ₹125 OFF
                                            </p>
                                            <p className='text-white text-sm font-semibold'>
                                                ABOVE ₹199
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-2 px-1'>
                                    <p className='font-semibold text-black leading-tight'>
                                        The Black Chimney
                                    </p>
                                    <div className="flex items-center text-[15px] gap-2 text-gray-700 font-medium">
                                        <span className="bg-green-500 text-white rounded px-2 py-0.5 text-sm">4.1</span>
                                        <span className="ml-1 font-semibold">
                                            25-30 mins
                                        </span>
                                    </div>
                                    <p className='text-gray-600 text-sm'>
                                        Biryani
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>

        </div >
    )
}

export default TaskThree
