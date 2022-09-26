import styles from "../styles/menu.module.css";
import Link from "next/link";

export default function Menu() {

   return (
       <nav className={styles.menu}>
          <div>
             <Link href='/'>
                <a className={styles.link}>Home</a>
             </Link>
             <Link href='/store'>
                <a className={styles.link}>Store</a>
             </Link>
             <Link href='/faq'>
                <a className={styles.link}>FAQ</a>
             </Link>
          </div>

          <div>
             <a className={styles.link} href="#">Cart (0)</a>
          </div>
       </nav>
   );

}
