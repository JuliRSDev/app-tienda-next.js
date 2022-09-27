import Link from "next/link";
import Image from "next/image";
import styles from "../styles/product.module.css";
import CardButtonAdd from "./cardButtonAdd";

export default function Product( { item, showAs, qty } ) {

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
                        <CardButtonAdd item={item}/>
                    </div>
                </div>
            </div>
        );
    }

    if ( showAs === 'ListItem' ) {
        return (
            <div className={styles.listItem}>
                <div>
                    <Image src={item.image} alt={item.title} width='100' height='100' />
                </div>
                <div className={styles.listItemInfo}>
                    <h3>{item.title}</h3>
                    <div>{item.price}</div>
                    {qty === 0 ? '' : <div>{qty} units</div> }
                    {qty === 0 ? '' : <div>Subtotal: {qty * item.price}</div> }
                </div>
            </div>
        );
    }

    return (
        <div className={styles.item}>

            <div>
                <Link href={`/store/${item.id.toString()}`}>
                    <a>
                        <Image src={item.image} alt={item.title} width='500' height='500' />
                    </a>
                </Link>
            </div>

            <div>
                <h3>
                    <Link href={`/store/${item.id.toString()}`}>
                        <a>{item.title}</a>
                    </Link>
                </h3>
            </div>

            <div>$ {item.price}</div>

            <div>
                <CardButtonAdd item={item}/>
            </div>

        </div>
    );

}
