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
  const [loading, setLoading] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const getJoke = () => {
    setLoading(true);
    setShowDel(false)
    try {
      axios.get("https://v2.jokeapi.dev/joke/Any")
      .then(({data:{joke, setup, delivery}})=>{
        console.log(joke, setup, delivery);
        setJokeObj({joke: joke, setup: setup, delivery: delivery});
        setLoading(false);
      }
      );
      console.log("joke is",jokeObj)
    } catch (error) {
      console.log(error)
    }
  }
  
  if (jokeObj.joke !== undefined) {
    if (loading) {
      return (<div className={"App"}><div className={"container"}>
      <h1>. . . loading</h1>
      <button onClick={getJoke}>Get Joke</button>
      </div></div>)
    }
    return (
      <div className={"App"}><div className={"container"}>
      <h1>{jokeObj.joke}</h1>
      <button onClick={getJoke}>Get Joke</button>
      </div></div>
    )
  } else {
    if (loading) {
      return (<div className={"App"}><div className={"container"}>
      <h1>. . . loading</h1>
      <button onClick={getJoke}>Get Joke</button>
      </div></div>)
    }
    return (<div className={"App"}><div className={"container"}><h1>{jokeObj.setup}</h1><hr/>
    {showDel ? <h2>{jokeObj.delivery}</h2> : <button onClick={()=>setShowDel(true)}>Show</button>}
    <hr/>
    <button onClick={getJoke}>Get Joke</button></div></div>)
  }
}

export default App;
