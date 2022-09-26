import Link from "next/link";
import Image from "next/image";
import styles from "../styles/product.module.css";
import {convertToPath} from "../lib/utils";

export default function Product( { item, showAs } ) {

    if ( showAs === 'Page' ) {
        return (
            <div className={styles.page}>
                <div className={styles.image}>
                    <Image src={item.image} alt={item.title} width={500} height={500} />
                </div>

                <div className={styles.info}>
                    <div> <h2>{item.title}</h2> </div>
                    <div className={styles.price}>{item.price}</div>
                    <div> {item.description} </div>
                    <div>
                        <button className={styles.addToCard}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }

    if ( showAs === 'ListItem' ) {
        return (
            <>
                List Item
            </>
        );
    }

    return (
        <div className={styles.item}>

            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <a>
                        <Image src={item.image} alt={item.title} width='500' height='500' />
                    </a>
                </Link>
            </div>

            <div>
                <h3>
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        <a>{item.title}</a>
                    </Link>
                </h3>
            </div>

            <div>$ {item.price}</div>

            <div>
                <button className={styles.addToCard}>Add to cart</button>
            </div>

        </div>
    );

}
