import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
  const init = {
    joke: "",
    setup: "",
    delivery: ""
  }
  const [jokeObj, setJokeObj] = useState(init);
  const [showDel, setShowDel] = useState(false);

  const getJoke = () => {
    setShowDel(false)
    try {
      axios.get("https://v2.jokeapi.dev/joke/Any")
      .then(({data:{joke, setup, delivery}})=>{
        console.log(joke, setup, delivery);
        setJokeObj({joke: joke, setup: setup, delivery: delivery}
          )
      }
      );
      console.log("joke is",jokeObj)
    } catch (error) {
      console.log(error)
    }
  }
  
  if (jokeObj.joke !== undefined) {
    return (
      <div className={"App"}>
      <h1>{jokeObj.joke}</h1>
      <button onClick={getJoke}>Get Joke</button>
      </div>
    )
  } else {
    return (<div className={"App"}><h1>{jokeObj.setup}</h1><hr/>
    {showDel ? <h2>{jokeObj.delivery}</h2> : <button onClick={()=>setShowDel(true)}>Show</button>}
    <hr/>
    <button onClick={getJoke}>Get Joke</button></div>)
  }
}

export default App;
