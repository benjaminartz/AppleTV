// src/App.js

import React from "react";
import './App.css';
import GenericList from "./components/GenericList";

function App() {

    const [state, setState] = React.useState({});
    const [loading, setLoading] = React.useState(true);

  const handleAdd = (myItem) => {
    setState({recommendations: state.recommendations.filter((item) => item.id !== myItem.id), mylist: [...state.mylist, myItem]});
  }

  const handleRemove = (myItem) => {
    setState({recommendations: [...state.recommendations, myItem], mylist: state.mylist.filter((item) => item.id !== myItem.id)})
  }

  React.useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setState(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) {
    return (
      <span>Loading...</span>
    );
  }
 else {
    return (
      <div className="App">
        <div>
          <GenericList name="My List" list={state.mylist} actionFunction={handleRemove} actionText="Remove (-)" />
          <GenericList name="Recommendations" list={state.recommendations} actionFunction={handleAdd} actionText="Add (+)" />
        </div>
        <footer>
          My List: {state.mylist.map( (item, index) =>
            <>{item.title}{index !== state.mylist.length-1?", ":""}</>
          )}
        </footer>
      </div>
    );
  }
}

export default App;
