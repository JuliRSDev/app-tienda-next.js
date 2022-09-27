import stylesProduct from "../styles/product.module.css";
import {useAppContext} from "./stateWrapper";

export default function CardButtonAdd( { item } ) {

    const cart = useAppContext();

    function handleAddItemToCart() {
        cart.addItemToCart(item);
        cart.openCart();
    }

    return <button className={stylesProduct.addToCard} onClick={handleAddItemToCart}>Add to Card</button>;

}
