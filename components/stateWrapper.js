import {createContext, useState} from "react";

const AppContext = createContext(
    {
        isOpen: true,
        items: [],
        openCart: () => {},
        closeCart: () => {},
        addItemToCart: () => {},
        getNumerOfItems: () => {}
    }
);

export default function StateWrapper( { children } ) {

    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    function handleOpenCart() {
        setIsOpen(true);
    }

    function handleCloseCart() {
        setIsOpen(false);
    }

    function handleAddItemToCart( item ) {
        const temp = [...items];
        const found = temp.find( product => product.id === item.id );

        if ( found ) {
            found.gty++;
        } else {
            item.gty = 1;
            temp.push(item);
        }

        setItems([...temp]);
    }

    function handleNumberOfItems() {
        const total = items.reduce( ( accumulator, item ) => accumulator + item.gty, 0 );
        /* Vamos a regresar el acomulador de la suma de los productos de la propiedad gty para cada elemento */
        return total;
    }

    /* AppContext.Provider = con esto ya estamos pasando la información  */
    return <AppContext.Provider
        value={{
            isOpen,
            items,
            openCart: handleOpenCart,
            closeCart: handleCloseCart,
            addItemToCart: handleAddItemToCart,
            getNumerOfItems: handleNumberOfItems
        }}
    > {children} </AppContext.Provider>;

}
