import Header from "./Components/Header/Header";
import "./Components/Header/Header.css"
import PostAdd from "./Components/PostAdd/PostAdd";
import PostPublish from "./Components/PostPublish/PostPublish";
import { useState } from "react";
import './App.css'

function App() { 
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('light')
  return (
    <>
      <div className={`Main Main-${theme}`}>
        <Header theme={theme} setTheme={setTheme}/>
        <PostAdd addPost={post => setPosts([...posts, post])}/>
        <PostPublish posts={posts}/>
      </div>
    </>);
}

export default App;
