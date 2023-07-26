
import { store } from '../../app/store'
import { UserType } from '../../types';
import { useRef, useState } from 'react';
import { validateHandler } from '../utils/validateHandler';
import { handlerBlur } from '../utils/handleBlur';
import styles from './Form.module.css';

const { v4: uuidv4 } = require('uuid');


interface FormSubmit {
    update: Function;
}

const Form = ({update}: FormSubmit) => {
    const _name = useRef<HTMLInputElement>(null)
    const _surname = useRef<HTMLInputElement>(null)
    const _email = useRef<HTMLInputElement>(null)

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);

    const [nameError, setNameError] = useState("This field is required. Please input user's name.");
    const [surnameError, setSurnameError] = useState("This field is required. Please input user's surname.");
    const [emailError, setEmailError] = useState("This field is required. Please input user's email.");

    const resetForm = () => {
        setName('');
        setSurname('');
        setEmail('')
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        try {
            if(name && surname && email) {
                const userData: Omit<UserType, 'type'> = {
                    id: uuidv4(),
                    name: _name.current? _name.current.value : '' ,
                    surname: _surname.current?_surname.current.value : '',
                    e_mail: _email.current?_email.current.value : '',
                }
                    store.dispatch({type: 'ADD_USER', payload:userData})
                    console.log(store.getState())
                    resetForm()
            }
            update()
        } catch (error) {
            console.log(error)

        }
    }
  return (
    <div>
        <form className={styles.form} onSubmit={handleSubmit}>

            {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}

            <input 
            className={styles.input}
            onBlur={e => handlerBlur(e, setNameDirty)} 
            onChange={e => validateHandler(e, setName, setNameError)}
            name='name' 
            ref={_name} 
            type="text" 
            placeholder='Name' 
            value={name}/>

            {(surnameDirty && surnameError) && <div style={{color: 'red'}}>{surnameError}</div>}
           
            <input 
            className={styles.input}
            onChange={e => validateHandler(e, setSurname, setSurnameError)}
            onBlur={e => handlerBlur(e, setSurnameDirty)} 
            name='surname' 
            ref={_surname} 
            type="text" 
            placeholder='Surname' 
            value={surname}/>

            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
           
            <input 
            className={styles.input}
            onChange={e => validateHandler(e, setEmail, setEmailError)} 
            onBlur={e => handlerBlur(e, setEmailDirty)} 
            name='email' 
            ref={_email} 
            type="email" 
            placeholder='E-Mail' 
            value={email}/>
            
            <button className={styles.button}>Submit</button>

        </form>
    </div>
  )
}
export default Form

