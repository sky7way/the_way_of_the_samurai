import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={style.dialog}>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    const dialogsData = [
        {
            id: 1,
            name: 'Alex'
        },
        {
            id: 2,
            name: 'Vasya'
        },
        {
            id: 3,
            name: 'Dayana'
        }
    ]

    const postData = [
        {
            id: 1,
            message: 'Hello, world!'
        },
        {
            id: 2,
            message: 'Yo!'
        },
        {
            id: 3,
            message: 'Hi, men!'
        }
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={style.messages}>
                <Message message={postData[0].message} />
                <Message message={postData[1].message} />
                <Message message={postData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;