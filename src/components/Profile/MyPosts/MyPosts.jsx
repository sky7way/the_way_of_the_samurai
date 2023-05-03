import style from'./MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = () => {

    const messageData = [
        {
            id: 1,
            message: 'What\'s your name?',
            likesCount: 23
        },
        {
            id: 2,
            message: 'Hi! I\'m Alex!',
            likesCount: 11
        },
        {
            id: 3,
            message: 'Nice to meet you!',
            likesCount: 17
        }
    ]

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
                <Post message={messageData[0].message} like={messageData[0].likesCount} />
                <Post message={messageData[1].message} like={messageData[1].likesCount} />
                <Post message={messageData[2].message} like={messageData[2].likesCount} />
            </div>
    );
}

export default MyPosts;