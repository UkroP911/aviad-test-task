import React from 'react';
import './App.css';

import Post from './components/Post';
import Comment from './components/Comment';
import AddComment from './components/AddComment';


const rangeComments = async (startFrom, rangeNumber) => {
  let responses = [];
  for(let i = startFrom + 1; i <= rangeNumber; ++i){
    const request = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${i}`);
    await request.json().then(res => {
      responses.push(...res)
    })
  }
  
  const result = Promise.all(responses);
  try{
    return result;
  } catch (error) {
    return error;
  }
};



const App = () => {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [errors, setErrors] = React.useState(null);
  const [commentsRange, setCommentsRange] = React.useState(20);
  
  
  async function fetchPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?id=1");
    res.json()
      .then(res => setPost(res))
      .catch(err => setErrors(err));
  }
  
  React.useEffect(() => {
    fetchPost();
    rangeComments(0, commentsRange).then(res => {
      
      setComments(res)
    })
  }, []);
  
  
  const loadMore = () => {
    rangeComments(commentsRange,commentsRange + 20).then(res => setComments(comments.concat(res)))
    setCommentsRange(commentsRange + 20)
  };
  
  const scrollHandler = (e) => {
  
    const d = e.target.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight;
  
    
    
    
    if ((Math.floor(offset) - height) === 0) {
      loadMore()
      
    }
    
  };
  
  // window.addEventListener('scroll',scrollHandler)
  
  return (
    <div className="App">
      <Post {...post[0]}/>
      
      {
        comments.length && comments.map((item, id) => <Comment {...item} key={id}/>)
      }
      <button onClick={loadMore}>load more</button>
    </div>
  );
}

export default App;
