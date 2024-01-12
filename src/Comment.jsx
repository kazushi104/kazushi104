import React from 'react';
import './App.css'
import { collection, getDocs, addDoc,doc, deleteDoc } from "@firebase/firestore"; 
import { db } from './Fire-config';
import { useState, useEffect } from 'react';
import Cats from "./Cat/background.jpg";
export default function Comment() {
 

  const [posts, setPosts] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  const [newText, setNewText] = useState("");
  const [checked, setChecked] = React.useState(false);
useEffect(() => {
getData()
}, [])
  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      console.log("Document deleted with ID: ", postId);
      getData(); // Refresh the list after deletion
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const postData = async (author, text) => {
   try {
    const docRef = await addDoc(collection(db, "posts"), {
      Author: author,
  Text: text
    });
    console.log("Document written with ID: ", docRef.id);
     getData()
     setNewText("")
     setNewAuthor("")
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    }


  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsArray = []; // Step 1: Create an empty array
    querySnapshot.forEach((doc) => {
      let post = doc.data();
      post.id = doc.id; // Step 2: Add the ID to each post
      postsArray.push(post); // Step 3: add each post to the array
    });
    console.log(postsArray)
    setPosts(postsArray); // Step 4: Update the posts state
  }

  return (
    <main>
     
      <button className='button-1'> <a href="/Comment">comment </a></button>

      <button className='button-1'> <a href="/Shop">shop</a></button>

      <button className='button-1'><a href="/Refunds">refunds</a></button>

      <button className='button-1'><a href="/"> home </a></button>

     
      <button className='button-1'><a href="/Login"> Login </a></button>

      <button className='button-1'><a href="/Donate"> Donate </a></button>
      
      Author
      <input
        type="text"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      Text
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />

      <button onClick = {() => postData(newAuthor,newText)}>submit</button>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
          <h1>{post.Author}</h1>
            <p>{post.Text}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
      <img className="Kitty" src={Cats} />
    </main>
  )
}
