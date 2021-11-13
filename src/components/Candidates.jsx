import React from "react";
import {useHistory} from 'react-router-dom'
import '../styles/Candidates.css'
function Candidates({ candidates }) {
    const history = useHistory()
    
    function clickHandle(id){
        console.log(history)
        if(history.location.pathname === '/'){
            history.push(`${id}`)
        }
    }
    if(candidates === undefined){
        candidates = []
    }
  return (
    <div className="candidate-container">
      { candidates.length?candidates.map((obj, i) => {
        return (
          <div onClick={()=>{clickHandle(obj.id)}} className="candidate" key={i}>
            <div className="image">
              <img className='candidate-img' src={obj.Image} alt={obj.name} />
            </div>
            <div className="details">
              <h5 className="name">{obj.name}</h5>
              <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias dolorum nisi ex assumenda corporis eaque necessitatibus blanditiis? Explicabo, eum?
              </div>
            </div>
          </div>
        );
      }): <h2 className='emaptycase'>
          No data to Display
      </h2> }
    </div>
  );
}

export default Candidates;
