import style from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://img-fotki.yandex.ru/get/236239/493212545.581/0_1df999_5b1c8fbb_orig.jpg' alt='mountains' className={style.img} />
            </div>
            <div className={style.descBlock}>
                <img src='https://image.winudf.com/v2/image1/Y29tLmNhbWVyYXAyLnR2X3NjcmVlbl80XzE2MDI3Nzg2NDJfMDYx/screen-4.jpg?fakeurl=1&type=.jpg' alt='myPhoto' className={style.myPhoto} />  
                description
            </div>
      </div>
    );
}

export default ProfileInfo;