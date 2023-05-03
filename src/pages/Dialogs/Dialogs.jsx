import DialogItem from '../../components/Dialogs/DialogItem/DialogItem';
import Message from '../../components/Dialogs/Message/Message';
import style from './Dialogs.module.css'

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
    ];

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
    ];

    const dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    const messages = postData.map(p => <Message message={p.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogs }
            </div>
            <div className={style.messages}>
                { messages }
            </div>
        </div>
    );
}

export default Dialogs;