import style from '../styles/Home.module.css';
import styleProduct from '../styles/product.module.css';
import Layout from "../components/layout";
import {getLatestItem} from "../services/itemService";
import Product from "../components/product";

export default function Home( { items } ) {
  return (
      <Layout title='Home'>

          <div className={style.banner}>
              <div className={style.bannerBackground}>
                <div className={style.bannerInfo}>
                    <h2>Shop the Summer 2022 Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti dolorem eius enim
                       labore repellat, vel? Commodi, hic necessitatibus! Ad aperiam assumenda at commodi consequuntur</p>
                </div>
              </div>
          </div>

          <h3>Latest Product</h3>
          <div className={styleProduct.items}>
              { items && items.map( item => (
                  <Product key={item.id} item={item} showAs='item' />
              ) ) }
          </div>
      </Layout>
  );
}

export async function getStaticProps() {
    const latestItem= await getLatestItem();
    return {
        props: {
            items: latestItem
        }
    }
}
