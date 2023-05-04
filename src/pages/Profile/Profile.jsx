import MyPosts from '../../components/Profile/MyPosts/MyPosts';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts messageData={props.state.posts} />
      </div>
    );
}

export default Profile;