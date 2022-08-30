import Link from "next/link";
import styles from './sidebar.module.css'

const Sidebar = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/todo">
      <a>To Do</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
);

export default Sidebar;
