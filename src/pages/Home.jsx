import React from "react";
import Candidates from "../components/Candidates";
function Home({ candidates }) {
  return (
    <div>
      <Candidates candidates={candidates}></Candidates>
    </div>
  );
}

export default Home;
