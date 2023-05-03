import style from'./Post.module.css';

const Post = (props) => {
    return (
            <div className={style.item}>
                <img src='https://img2.reactor.cc/pics/post/full/%D0%9A%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0-%D0%BE%D0%B1-%D0%90%D0%B0%D0%BD%D0%B3%D0%B5-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-6114161.jpeg' alt='avatar' />
                {props.message}
                <span className={style.favorite}>
                ⭐ {props.like}
                </span>
            </div>
    );
}

export default Post;