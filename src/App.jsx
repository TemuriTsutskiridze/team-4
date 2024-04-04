
import { Route, Routes } from 'react-router';
import NewFeedback from './components/NewFeedback';
import EditFeedback from './components/EditFeedback';
import Roadmap from './components/Roadmap';


const App = () => {
    return (
        <Routes>

          <Route path="/new-feedback" element={<NewFeedback />}/>
          <Route path="/edit-feedback" element={<EditFeedback />}/>
          <Route path="/roadmap" element={<Roadmap />}/>
        </Routes>
    );
};

export default App;
