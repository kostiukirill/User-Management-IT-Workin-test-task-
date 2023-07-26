import UserList from '../UserList/UserList'
import Form from '../Form/Form';
import { store } from '../../app/store';
import { useState } from 'react';
import { UserType } from '../../types';
import styles from './Layout.module.css'


const Layout = () => {


  let usersFromLoSt = store.getState().usersReducers
  const [users, setUsers] = useState<UserType[]>(usersFromLoSt)

  const update = () => {
    const newUsers = store.getState().usersReducers
    setUsers(newUsers)
  }

  return (
    <div className={styles.layout}>
      <h1>USER MANAGEMENT</h1>
        <Form update={update}/>
        <UserList update={update} users={(users !== undefined )? users : null}/>
    </div>
  )
}


export default Layout