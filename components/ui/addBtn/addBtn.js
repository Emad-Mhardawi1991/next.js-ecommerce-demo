import styles from './addBtn.module.scss'
import { HiPlus, HiMinus } from "react-icons/hi";
const AddBtn = () => {
  return (
    <div className={styles.addBtn}>
        <button><HiMinus/></button>
        <span>22</span>
        <button><HiPlus/></button>
    </div>
  )
}

export default AddBtn