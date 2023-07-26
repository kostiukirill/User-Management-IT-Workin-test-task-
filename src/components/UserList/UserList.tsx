import styles from './UserList.module.css'
import { store } from '../../app/store'
import { UserType } from '../../types';


interface UserListProps {
  users: UserType[] | null;
  update: Function
}


const UserList = ({users, update}: UserListProps) => {

  console.log(users)
  

  const usersTableRows: JSX.Element[] = []
if(users)

  users.map(user => {
    const deleteHandler = (e: React.MouseEvent) => {
      store.dispatch({type:'REMOVE_USER', payload: user})
      update()
    }
    usersTableRows.push(
      <tr className={styles.trow} key={user.id}>
        <td className={styles.tdata}> {user.name} </td>
        <td className={styles.tdata}> {user.surname} </td>
        <td className={styles.tdata}> <a className={styles.link}href={`mailto: ${user.e_mail}`}> {user.e_mail} </a></td>
        <td className={styles.tdata}>
          <button className={styles.delBtn} onClick={e => deleteHandler(e)}>
            Delete
          </button>
        </td>
      </tr>
    )
  })


  return (
    <div> 
        <table className={styles.table}>
      <thead>
        <td className={styles.tdata}>Name</td>
        <td className={styles.tdata}>Surame</td>
        <td className={styles.tdata}>Email</td>
        <td className={styles.tdata}>Action</td>
      </thead>
      <tbody>
          {usersTableRows}
      </tbody>
        </table>
    </div>
  )
}

export default UserList