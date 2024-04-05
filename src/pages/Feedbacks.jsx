import { useContext } from "react";
import { AppContext } from "../App";
import HeaderFeedbacks from "../components/HeaderFeedbacks";
import SortBy from "../components/SortBy";

function Feedbacks() {
  const { appData, setAppData } = useContext(AppContext);
  return (
    <div className="w-screen">
      <HeaderFeedbacks />
      <SortBy />
    </div>
  );
}

export default Feedbacks;
