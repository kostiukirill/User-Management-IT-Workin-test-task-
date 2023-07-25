import UserList from '../UserList/UserList'
import Form from '../Form/Form';
import styles from './Layout.module.css'


const Layout = () => {
  return (
    <div className={styles.layout}>
        <Form/>
        <UserList/>
    </div>
  )
}

export default Layout