import "./app.css";

import { Navigate, Route, Routes } from "react-router";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";
import Roadmap from "./pages/Roadmap";
import FeedbackDetails from "./pages/FeedbackDetails";
import { createContext, useState } from "react";
import data from "./data.json";
import Feedbacks from "./pages/Feedbacks";

export const AppContext = createContext();

const App = () => {
  const [appData, setAppData] = useState(data);

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      <Routes>
        <Route path="/" element={<Navigate to="/feedbacks" />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedback />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedbackDetails" element={<FeedbackDetails />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
