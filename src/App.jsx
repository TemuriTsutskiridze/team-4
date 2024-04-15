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
  console.log(appData);
  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        showMenu,
        setShowMenu,
        activeCategory,
        setActiveCategory,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/feedbacks" />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedback />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedbackDetails/:id" element={<FeedbackDetails />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
