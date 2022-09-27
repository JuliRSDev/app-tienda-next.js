import styles from "../styles/menu.module.css";
import Link from "next/link";
import {useAppContext} from "./stateWrapper";

export default function Menu() {

    const cart = useAppContext();

    function handleOpenCart() {
        cart.openCart();
    }

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
             <a className={styles.link} onClick={handleOpenCart}>
                 Cart ({cart.getNumerOfItems()})
             </a>
          </div>
       </nav>
   );

}
