import React from "react";
import Candidates from "../components/Candidates";
function Rejected({ rejectedCandidates }) {
  return (
    <div>
      <Candidates candidates={rejectedCandidates}></Candidates>
    </div>
  );
}

export default Rejected;
