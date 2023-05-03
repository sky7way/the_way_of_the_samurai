import DialogItem from '../../components/Dialogs/DialogItem/DialogItem';
import Message from '../../components/Dialogs/Message/Message';
import style from './Dialogs.module.css'

const Dialogs = (props) => {

    const dialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    const messages = props.postData.map(p => <Message message={p.message} />);

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