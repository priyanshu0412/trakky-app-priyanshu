import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "../Icon";

// ------------------------------------------------------

const TaskOne = () => {
    const [formData, setFormData] = useState({
        spa_name: "",
        city: "",
        area: "",
        price: "",
        timing: "",
        images: []
    });


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "images") {
            setFormData({
                ...formData,
                images: [...formData.images, ...Array.from(files)]
            });
            e.target.value = "";
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            // append normal fields
            data.append("spa_name", formData.spa_name);
            data.append("city", formData.city);
            data.append("area", formData.area);
            data.append("price", formData.price);
            data.append("timing", formData.timing);

            // append multiple images
            formData.images.forEach((img) => {
                data.append("images", img);
            });

            for (let pair of data.entries()) {
                console.log(pair[0], pair[1]);
            }

            const res = await fetch(
                "http://20.193.149.47:2242/spas/vendor-spa-update-test/1/",
                {
                    method: "POST",
                    body: data,
                }
            );

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const result = await res.json();
            console.log("API Success:", result);
            alert("Spa details submitted successfully!");

        } catch (err) {
            console.error("API Error:", err);
            alert("Something went wrong!");
        }
    };


    return (
        <>
            <div className="w-full py-20 flex px-8 lg:px-0 flex-col lg:flex-row justify-center items-center ">
                {/* Left Side - Form */}
                <div className="w-full lg:w-[45%] px-8 lg:px-0 flex justify-center items-center bg-white shadow-xl rounded-2xl p-10">
                    <div className="max-w-[400px]  w-full">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            Add Spa Details
                        </h2>
                        <form className="flex flex-col !gap-y-4" onSubmit={onHandleSubmit}>
                            {/* Spa Name */}
                            <div className="flex flex-col gap-y-4">
                                <label className="text-gray-700 font-medium mb-2">Spa Name</label>
                                <input
                                    type="text"
                                    name="spa_name"
                                    value={formData.spa_name}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter Spa Name"
                                />
                            </div>

                            {/* City */}
                            <div className="flex flex-col gap-y-4">
                                <label className="text-gray-700 font-medium mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter City"
                                />
                            </div>

                            {/* Area */}
                            <div className="flex flex-col gap-y-4">
                                <label className="text-gray-700 font-medium mb-2">Area</label>
                                <input
                                    type="text"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter Area"
                                />
                            </div>

                            {/* Images */}
                            <div className="flex flex-col gap-y-4">
                                <label className="text-gray-700 font-medium mb-2">Upload Images</label>
                                <input
                                    type="file"
                                    name="images"
                                    multiple
                                    onChange={handleChange}
                                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Price */}
                            <div className="flex flex-col gap-y-4">
                                <label className="text-gray-700 font-medium mb-2">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter Price"
                                />
                            </div>

                            {/* Timing */}
                            <div className="flex flex-col gap-y-4">
                                <label className="text-gray-700 font-medium mb-2">Timing</label>
                                <input
                                    type="time"
                                    name="timing"
                                    value={formData.timing}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side - Live Preview */}
                <div className="w-full pt-10 lg:pt-0 lg:w-[45%] flex justify-center items-start lg:p-10">
                    <div className="w-full max-w-[500px] bg-white shadow-lg shadow-black  overflow-hidden">
                        <div className="flex w-full justify-between py-2 px-4">
                            <p className="flex gap-2 items-center"> <Icon width={20} height={20} icon={"ic:twotone-less-than"} /> Trakky</p>
                            <p><Icon icon={"clarity:user-solid"} width={30} height={30} /></p>
                        </div>
                        {/* Image Slider */}
                        {formData.images.length > 0 && (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ type: "progressbar" }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                className="w-full h-64"
                            >
                                {formData.images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img
                                            src={URL.createObjectURL(img)}
                                            alt={`preview-${i}`}
                                            className="w-full h-64 object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {/* Details */}
                        <div className="p-6">
                            <div className="text-sm text-gray-500 flex w-full justify-between ">
                                <p>Opens {formData.timing || "N/A"} </p>
                                <div className="flex gap-4">
                                    <Icon icon={"ic:baseline-share"} height={25} width={25} />
                                    <Icon icon={"icon-park-outline:like"} height={25} width={25} />
                                    <Icon />
                                </div>
                            </div>
                            <h2 className="text-xl pt-2 font-bold mb-2">{formData.spa_name || "Spa Name"}</h2>
                            <p className="text-gray-600">{formData.area || "Area"}, {formData.city || "City"}</p>
                            <p className="text-sm mt-2">₹ {formData.price || "N/A"} Onwards</p>
                            <p className="pt-2 text-gray-600 flex gap-2 justify-left items-center"><Icon icon={"streamline-plump:star-circle-solid"} /> 4.8 (15 Reviews) </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskOne;
