import React from 'react';
import style from'./MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = (props) => {

    const postElement = props.messageData.map(m => <Post message={m.message} like={m.likesCount} />);
    const newPostElement = React.createRef();
    
    const newPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
            <div className={style.posts}>
               <h4>My posts</h4> 
                <div className={style.item}>
                    <div>
                    <textarea className={style.addText} ref={newPostElement}></textarea>
                    </div>
                    <div className={style.addButton}>
                    <button onClick={newPost}>Add post</button>
                    </div>
                </div>
                { postElement }
            </div>
    );
}

export default MyPosts;