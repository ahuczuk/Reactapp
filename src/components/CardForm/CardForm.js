import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = props => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title}, props.columnId);
        setTitle('');
    }


	return (
        <form onSubmit={handleSubmit} className={styles.card}>
        <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <Button>Add Card</Button>
    </form>
);

};

export default CardForm;