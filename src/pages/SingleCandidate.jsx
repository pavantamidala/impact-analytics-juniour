import React from "react";
import "../styles/SingleCandidate.css";
import { useParams, useHistory } from "react-router-dom";
function SingleCandidate({
  candidates,
  setAllCandidates,
  shorListedCandidates,
  rejectedCandidates,
  setShorListedCandidates,
  setRejectedCandidates,
}) {
  const history = useHistory();
  function RejectHandler(id) {
    let filteredCandidates = candidates.filter((obj) => {
      return obj.id !== id;
    });
    setAllCandidates(filteredCandidates);
    let singleFilteredCandidate = candidates.filter((obj) => {
      return obj.id === id;
    });
    setRejectedCandidates([...rejectedCandidates, ...singleFilteredCandidate]);
    history.push("/");
  }

  function shorListHandler(id) {
    let filteredCandidates = candidates.filter((obj) => {
      return obj.id !== id;
    });
    setAllCandidates(filteredCandidates);
    let singleFilteredCandidate = candidates.filter((obj) => {
      return obj.id === id;
    });
    setShorListedCandidates([
      ...shorListedCandidates,
      ...singleFilteredCandidate,
    ]);
    history.push("/");
  }

  let { id } = useParams();

  let candidate = candidates.filter((obj) => {
    return obj.id === id;
  })[0];

  return (
    <React.Fragment>
      {candidate && (
        <div className="single-candidate">
          <div className="single-image">
            <img src={candidate.Image} alt="" />
          </div>
          <div className="candidate-details">
            <h5 className="candidate-name">{candidate.name}</h5>
            <div className="single-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              neque non error debitis magni ad! Quam magnam adipisci hic cumque!
              Amet nihil adipisci, non est placeat ut, aut cumque maiores
              repudiandae asperiores dolor, iste quasi eius? Dolore harum, quae,
              odio repellat quas, assumenda eaque repudiandae temporibus vel
              necessitatibus iusto dignissimos qui voluptatem earum perspiciatis
              sunt sint sapiente saepe sit provident possimus? Voluptates
              tempore doloremque cum debitis dignissimos odio sed eius quibusdam
              dolor architecto, quisquam sequi nesciunt, quasi repellendus
              libero perspiciatis?
            </div>
            <div className="controls">
              <div className="shortlist">
                <button
                  onClick={() => {
                    shorListHandler(candidate.id);
                  }}
                >
                  Shortlist
                </button>
              </div>
              <div className="reject">
                <button
                  onClick={() => {
                    RejectHandler(candidate.id);
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default SingleCandidate;
