import Nav from '../nav/nav';
import styles from './layout.module.scss'
const Layout = (props) => {
  return (
    <>
    <header className={styles.header}>
      <Nav/>
    </header>
    <main>{props.children}</main>
    <footer>footer</footer>
        
    </>
  )
}

export default Layout;