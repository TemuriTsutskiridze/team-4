import { GiHamburgerMenu } from "react-icons/gi";

function HeaderFeedbacks() {
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
      <GiHamburgerMenu className="fill-white-100 w-[20px] h-[20px]" />
    </div>
  );
}

export default HeaderFeedbacks;
