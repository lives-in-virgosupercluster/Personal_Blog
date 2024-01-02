// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import harshpic from "./images/Logo-harsh-cool.png";
// import Navbar from './Navbar';

// function PostDetail() {
//   const { postId } = useParams();
//   const [post, setPost] = useState({});

//   useEffect(() => {
//     // Fetch post data based on the postId
//     axios.get(`http://localhost:3001/posts/posts/${postId}`)
//       .then((response) => {
//         console.log(response.data+"here");
//         setPost(response.data);
//       })
//       .catch((error) => {
//         console.error('API error:', error);
//       });
//   }, [postId]);

//   // Check if post.content exists before rendering it
//   if (!post.content) {
//     return null; // or display a loading indicator
//   }

//   return (
//     <>
    
//             <Navbar></Navbar>
//     <div className="post-detail">
//       <h1>{post.title}</h1>
//       {post.content.map((contentItem, index) => (
//         <p key={index} className="post-Name">
//           {contentItem}
//         </p>
//       ))}
//     </div>
//     </>
//   );
// }

// export default PostDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import harshpic from "./images/Logo-harsh-cool.png";
import Navbar from './Navbar';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    // Fetch post data based on the postId
    axios.get(`http://localhost:3001/posts/posts/${postId}`)
      .then((response) => {
        console.log(response.data + "here");
        setPost(response.data);
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  }, [postId]);

  // Check if post.content exists before rendering it
  if (!post.content) {
    return null; // or display a loading indicator
  }

  const renderContentWithLineBreaks = (contentItem) => {
    // Replace newline characters with <br /> tags
    const contentWithLineBreaks = contentItem.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

    return contentWithLineBreaks;
  };

  return (
    <>
      <Navbar />
      <div className="post-detail">
        <h1>{post.title}</h1>
        {post.content.map((contentItem, index) => (
          <p key={index} className="post-Name">
            {renderContentWithLineBreaks(contentItem)}
          </p>
        ))}
      </div>
    </>
  );
}

export default PostDetail;
