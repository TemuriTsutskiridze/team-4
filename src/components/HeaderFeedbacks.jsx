import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import Roadmap from "../pages/Roadmap";

function HeaderFeedbacks() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // Close the menu if the click is outside of the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
      document.body.style.overflowY = "auto";
    }
  };

  // Function to toggle the visibility of the div
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflowY = showMenu ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <div
      className="w-full px-6 py-4 flex justify-between items-center"
      style={{
        backgroundImage:
          "url('/assets/suggestions/mobile/background-header.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-start">
        <p className="text-[15px] text-white-100 font-bold">Frontend Mentor </p>
        <p className="text-[13px] text-white-50 font-normal">Feedback Board</p>
      </div>
      {!showMenu ? (
        <GiHamburgerMenu
          className="fill-white-100 w-[20px] h-[20px]"
          onClick={toggleMenu}
        />
      ) : (
        <svg
          width="18"
          height="17"
          xmlns="http://www.w3.org/2000/svg"
          onClick={closeMenu}
        >
          <path
            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )}

      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <div className="menu px-6 pt-6" ref={menuRef}>
            <div className="flex flex-wrap gap-2 items-center bg-white-100 pl-6 pr-[18px] pt-6 pb-9 rounded-lg">
              <button className=" rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
                All
              </button>
              <button className="rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
                UI
              </button>
              <button className="rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
                UX
              </button>
              <button className="mt-2 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
                Enhancement
              </button>
              <button className="mt-2 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
                Bug
              </button>
              <button className="mt-2 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
                Feature
              </button>
            </div>
            <div className="flex flex-wrap gap-2 items-center bg-white-100 px-6 pt-5 pb-6 rounded-lg w-full">
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
                    <p className="text-[16px] text-blue-10 font-normal">
                      Planned
                    </p>
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
        </div>
      )}
    </div>
  );
}

export default HeaderFeedbacks;
