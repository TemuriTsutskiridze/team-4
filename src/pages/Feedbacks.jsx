import { useContext } from "react";
import { AppContext } from "../App";

function Feedbacks() {
  const { appData, setAppData } = useContext(AppContext);
  return <div>feedbacks page</div>;
}

export default Feedbacks;
