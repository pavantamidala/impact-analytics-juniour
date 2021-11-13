import React from "react";
import Candidates from "../components/Candidates";
import { useHistory } from "react-router-dom";

function Shortlisted(props) {
  console.log(props);
  return (
    <div>
      <Candidates candidates={props.shorListedCandidates}></Candidates>
    </div>
  );
}

export default Shortlisted;
