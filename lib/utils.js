/* Acá vamos a colocar funciones que nos van a ayudar de forma general */

import { getItems } from "../services/itemService";

/* Función que me permite obtener la información de los ids de todos mis objetos  */
export async function getPathsFromIds() {
    const items = await getItems();

    /* Todos mis ids, ids -> tiene un arreglo de ids */
    const ids = items.map((item) => {
        return {
            params: {
                id: item.id.toString(),
            },
        };
    });

    /* Regresamos un objeto, en donde... en cada objeto exista un parametro que se llama 'params', este a su vez va a
    * regresar un objeto el cual contenga un id ( tendría que ir cada id de los objetos )  */
    return ids;

}

export async function getItemData( id ) {
    const items = await getItems();
    const product = items.find( (item) => item.id.toString() === id );

    return {
        id: id,
        data: product
    };
}

/* Esta funcion  */
export function convertToPath( title ) {
    return title.toLowerCase().replace(/\s/g, "-");
    /* /\s = encuentra todos los espacios vacios/g = de forma general, es decir... más de uno, "-" = y sustituyelo por un - */
}
