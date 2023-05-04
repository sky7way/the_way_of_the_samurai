import DialogItem from '../../components/Dialogs/DialogItem/DialogItem';
import Message from '../../components/Dialogs/Message/Message';
import style from './Dialogs.module.css'

const Dialogs = (props) => {

    const dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} photo={<img src={d.photo} alt='user avatar' />} id={d.id} />);
    const messages = props.state.messages.map(p => <Message message={p.message} />);

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