import Layout from "../../components/layout";
import {getItems} from "../../services/itemService";
import Image from "next/image";
import Product from "../../components/product";
import styleItems from "../../styles/product.module.css";

export default function Index( {items} ) {

   return (
       /* Con static generation next.js */
       <Layout title='Store'>
           <h2>Store</h2>
           <div className={styleItems.items}>
               {
                   items && items.map( (item) => (
                       <Product key={item.id} item={item} showAs='Default' />
                   ) )
               }
           </div>
       </Layout>
   );

}

/* getServerSideProps */
export async function getStaticProps() {
    const responseItems = await getItems();
    return {
        props: {
            items: responseItems
        }
    }
}
