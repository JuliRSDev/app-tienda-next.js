import Layout from "../../components/layout";
import Product from "../../components/product";
import {getItemData, getPathsFromIds} from "../../lib/utils";

export default function ProductPage( { productInfo } ) {
    return (
        <Layout title='Item'>
            <Product item={productInfo} showAs='Page' />
        </Layout>
    );
}

/* getStaticPaths = Nos va permitir generar las rutas dinamicas para cada uno de nustros elementos */
export async function getStaticPaths() {
    /* Estamos llamando a una función y esta, nos va a regresar todos los ids de mis objetos */
    const paths = await getPathsFromIds();
    return {
        paths: paths,
        fallback: false,
    };
    /* fallback: false = Acá estamos indicando que is una ruta no existe, nos mande a una pagina con el error 404.
    *                    Si no queremos que mande la 404(la que viene por defecto), pues le colocamos true, y tocaría investigar
    *                    como se podria direccionar a la pagina que uno quiere. */
}

/* la funcion -> getStaticPaths() no nos va regresar, o no va a inyectar dentro de ProductPage el prop que necesitamos para
   renderizar nuestro componente, aquí solo estamos permitiendo que Next.js tome las rutas como ids y las genere, necesitamos
   ahora en que ruta estamos para cargar ese id, para eso vamos a usar la funcion getStaticProps() */

export async function getStaticProps( { params } ) {
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            productInfo: product.data
        }
    }
}
