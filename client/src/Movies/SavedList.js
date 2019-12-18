import React from 'react';
import { useHistory } from "react-router-dom";

// const SavedList = props => (
//   <div className="saved-list">
//     <h3>Saved Movies:</h3>
//     {props.list.map(movie => (
//       <span className="saved-movie">{movie.title}</span>
//       ))}
//     <button className="home-button">Home</button>
//   </div>
// );

// export default SavedList;

const SavedList = props => {
  const history = useHistory();
  console.log(history);
  // console.log(props);

  const routeToHome = () => {
    console.log("Loading...");
    history.push("/");
  };

  return(
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
      ))}
    <button onClick={routeToHome} className="home-button">Home</button>
  </div>
)}

export default SavedList