import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";

function App() {
  const init = {
    joke: "",
    setup: "",
    delivery: ""
  }
  const [jokeObj, setJokeObj] = useState(init)
  const getJoke = () => {
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
  
  return (
    <div className="App">
      <div>{jokeObj.joke !== undefined ? <h1>{jokeObj.joke}</h1> : <h1>{jokeObj.setup - jokeObj.delivery}</h1>}</div>
          <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default App;
