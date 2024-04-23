import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";
import Roadmap from "./pages/Roadmap";
import FeedbackDetails from "./pages/FeedbackDetails";
import Feedbacks from "./pages/Feedbacks";
import { createContext, useState } from "react";
import data from "./data.json";

export const AppContext = createContext();

const App = () => {
  const [appData, setAppData] = useState(data);
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  //Filtering out feedbacks with status "Planned"
  const plannedFeedbacks = appData.productRequests.filter(
    (feedback) => feedback.status === "planned"
  );

  //Filtering out feedbacks with status "In-Progress"
  const inProgressFeedbacks = appData.productRequests.filter(
    (feedback) => feedback.status === "in-progress"
  );

  //Filtering out feedbacks with status "Live"
  const liveFeedbacks = appData.productRequests.filter(
    (feedback) => feedback.status === "live"
  );

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        showMenu,
        setShowMenu,
        activeCategory,
        setActiveCategory,
        plannedFeedbacks,
        inProgressFeedbacks,
        liveFeedbacks,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/feedbacks" />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback/:id" element={<EditFeedback />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedbackDetails/:id" element={<FeedbackDetails />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
