import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage, AboutUsPage, MentorshipPage } from "./pages";
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutUsPage />
        </Route>
        <Route path='/mentorship'>
          <MentorshipPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
