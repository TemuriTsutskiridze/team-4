import "./app.css";

import { Route, Routes } from "react-router";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";
import Roadmap from "./pages/Roadmap";
import FeedbackDetails from "./pages/FeedbackDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/new-feedback" element={<NewFeedback />} />
      <Route path="/edit-feedback" element={<EditFeedback />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/feedbackDetails" element={<FeedbackDetails />} />
    </Routes>
  );
};

export default App;
