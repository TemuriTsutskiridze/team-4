import React from "react";
import { Link } from "react-router-dom";

function HeaderTablet({ activeCategory, setActiveCategory }) {
  //function to get clicked category and set it as active category to then filter cards on Feedbacks page
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="hidden md:w-full md:flex mf:flex-row md:gap-x-[10px] lg:flex-col lg:gap-y-6 lg:w-[255px]">
      <div
        className="md:pl-6 md:pr-[46px] md:pb-6 md:pt-[103px] rounded-lg md:w-full lg:w-[255px]"
        style={{
          backgroundImage:
            "url('/assets/suggestions/tablet/background-header.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="md:text-[20px] md:font-bold md:text-white-100">
          Frontend Mentor
        </p>
        <p className="text-[15px] text-white-50">Feedback Board</p>
      </div>
      <div className="md:pt-6 md:pl-6 md:pr-[18px] md:pb-[42px] md:flex md:flex-wrap md:gap-2 md:items-center md:bg-white-100 md:rounded-lg md:md:w-full lg:w-[255px]">
        <button
          onClick={() => handleCategoryClick("All")}
          className=" rounded-lg text-[13px] font-bold capitalize py-[5px] px-4 lg:hover:bg-skyBlue-100"
          style={{
            background: activeCategory === "All" ? "#4661e6" : "#f2f4ff",
            color: activeCategory === "All" ? "#f2f4ff" : "#4661e6",
          }}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick("UI")}
          className="rounded-lg text-[13px] font-bold capitalize py-[5px] px-4 lg:hover:bg-skyBlue-100"
          style={{
            background: activeCategory === "UI" ? "#4661e6" : "#f2f4ff",
            color: activeCategory === "UI" ? "#f2f4ff" : "#4661e6",
          }}
        >
          UI
        </button>
        <button
          onClick={() => handleCategoryClick("UX")}
          className="rounded-lg text-[13px] font-bold capitalize py-[5px] px-4 lg:hover:bg-skyBlue-100"
          style={{
            background: activeCategory === "UX" ? "#4661e6" : "#f2f4ff",
            color: activeCategory === "UX" ? "#f2f4ff" : "#4661e6",
          }}
        >
          UX
        </button>
        <button
          onClick={() => handleCategoryClick("Enhancement")}
          className="mt-2 rounded-lg text-[13px] font-bold capitalize py-[5px] px-4 lg:hover:bg-skyBlue-100"
          style={{
            background:
              activeCategory === "Enhancement" ? "#4661e6" : "#f2f4ff",
            color: activeCategory === "Enhancement" ? "#f2f4ff" : "#4661e6",
          }}
        >
          Enhancement
        </button>
        <button
          onClick={() => handleCategoryClick("Bug")}
          className="mt-2 rounded-lg text-[13px] font-bold capitalize py-[5px] px-4 lg:hover:bg-skyBlue-100"
          style={{
            background: activeCategory === "Bug" ? "#4661e6" : "#f2f4ff",
            color: activeCategory === "Bug" ? "#f2f4ff" : "#4661e6",
          }}
        >
          Bug
        </button>
        <button
          onClick={() => handleCategoryClick("Feature")}
          className="mt-2 rounded-lg text-[13px] font-bold capitalize py-[5px] px-4 lg:hover:bg-skyBlue-100 "
          style={{
            background: activeCategory === "Feature" ? "#4661e6" : "#f2f4ff",
            color: activeCategory === "Feature" ? "#f2f4ff" : "#4661e6",
          }}
        >
          Feature
        </button>
      </div>
      <div className="flex flex-wrap gap-2 items-center bg-white-100 px-6 pt-5 pb-6 rounded-lg md:w-full lg:w-[255px]">
        <div className="flex flex-row items-center w-full justify-between">
          <p className="text-blue-50 font-bold text-[18px]">Roadmap</p>
          <Link to={"/roadmap"}>
            <p className="text-blue-200 text-[14px] font-semibold underline">
              View
            </p>
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-y-2 w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="w-[10px] h-[10px] rounded-full bg-tomato-50"></div>
              <p className="text-[16px] text-blue-10 font-normal">Planned</p>
            </div>
            <p className="font-bold text-blue-10 text-[16px]">2</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="w-[10px] h-[10px] rounded-full bg-purple-50"></div>
              <p className="text-[16px] text-blue-10 font-normal">
                In-Progress
              </p>
            </div>
            <p className="font-bold text-blue-10 text-[16px]">3</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="w-[10px] h-[10px] rounded-full bg-skyBlue-50"></div>
              <p className="text-[16px] text-blue-10 font-normal">Live</p>
            </div>
            <p className="font-bold text-blue-10 text-[16px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTablet;
