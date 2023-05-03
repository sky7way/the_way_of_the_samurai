import style from'./MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = (props) => {

    const postElement = props.messageData.map(m => <Post message={m.message} like={m.likesCount} />);

    return (
            <div className={style.posts}>
                My posts
                <div className={style.item}>
                    <div>
                    <textarea className={style.addText}></textarea>
                    </div>
                    <div className={style.addButton}>
                    <button>Add post</button>
                    </div>
                </div>
                { postElement }
            </div>
    );
}

export default MyPosts;