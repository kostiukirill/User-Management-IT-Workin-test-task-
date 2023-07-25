
import styles from './Form.module.css'
import { store } from '../../app/store'
import { UserType } from '../../types';
import { useRef, useState } from 'react';
const { v4: uuidv4 } = require('uuid');

const Form = () => {
    const _name = useRef<HTMLInputElement>(null)
    const _surname = useRef<HTMLInputElement>(null)
    const _email = useRef<HTMLInputElement>(null)

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const resetForm = () => {
        setName(name);
        setSurname(surname);
        setEmail(email)
    }

    let message: string = ''

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        try {
            if(_name.current && _surname.current && _email.current) {
                const userData: Omit<UserType, 'type'> = {
                    id: uuidv4(),
                    name: _name.current.value,
                    surname: _surname.current.value,
                    e_mail: _email.current.value,
                }
                    store.dispatch({type: 'ADD_USER', payload:userData})
                    console.log(store.getState())
                    resetForm()
            } else {
                return message = 'The form is invalid'
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div>
            {message}
        </div>
        <form onSubmit={handleSubmit}>
            <input ref={_name} type="text" placeholder='Name' value={name}/>
            <input ref={_surname} type="text" placeholder='Surname' value={surname}/>
            <input ref={_email} type="email" placeholder='E-Mail' value={email}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form

