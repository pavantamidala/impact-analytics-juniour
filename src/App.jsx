import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { DATA_URL } from "./config/config";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SingleCandidate from "./pages/SingleCandidate";
import Home from "./pages/Home";
import Rejected from "./pages/Rejected";
import Shortlisted from "./pages/Shortlisted";
import NavBar from "./components/NavBar";
function App() {
  const [allCandidates, setAllCandidates] = useState([]);
  const [shorListedCandidates, setShorListedCandidates] = useState([]);
  const [rejectedCandidates, setRejectedCandidates] = useState([]);
  useEffect(() => {
    axios.get(DATA_URL).then((res) => {
      setAllCandidates(res.data);
    });
  }, []);

  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar></NavBar>
        <Route path="/" exact>
          <Home
            candidates={allCandidates}
            setAllCandidates={setAllCandidates}
          />
        </Route>
        <Route></Route>

        <Route path="/:id" exact>
          <SingleCandidate
            candidates={allCandidates}
            setAllCandidates={setAllCandidates}
            shorListedCandidates={shorListedCandidates}
            rejectedCandidates={rejectedCandidates}
            setShorListedCandidates={setShorListedCandidates}
            setRejectedCandidates={setRejectedCandidates}
          />
        </Route>

        <Route path="/shortlisted" exact>
          <Shortlisted shorListedCandidates={shorListedCandidates} />
        </Route>

        <Route path="/rejected" exact>
          <Rejected rejectedCandidates={rejectedCandidates} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
