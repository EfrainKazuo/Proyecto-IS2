(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductBloc {
    
        loadProduct( id: number ) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    
    }
    
    class CartBloc {
        onAddToCart( productId: number ) {
            console.log("Agregando al carrito ", productId);
        }
    }

    class Mailer {
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();
    const mailer = new Mailer();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: "OLED TV" });
    cartBloc.onAddToCart(10);
    mailer.notifyClients();

})();