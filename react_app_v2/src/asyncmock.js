const productos =  //codigo,nombre, descripcion, precio, imgURL, stock, inicialStock
[
    {codigoProducto:"#a0001", categoriaProducto:"1", nombreProducto:"Vino Tinto Tannat Cabernet Gran Guarda H. STAGNARI 750 ml", descriProducto:"sin descripcion de momento.",precioProducto:449, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P387628-2.jpg?20220505151608,Vino-Tinto-Tannat-Cabernet-Gran-Guarda-H.-STAGNARI-750-ml-en-Tienda-Inglesa", stockProducto:5, inicialStock:1},
    {codigoProducto:"#a0002", categoriaProducto:"3", nombreProducto:"Vino Tinto Malbec Cafayate Reserve BODEGA ETCHART 750 ml", descriProducto:"Color rojo violáceo intenso con reflejos púrpuras.Olfato aromático,con notas de ciruela madura, uvas pasas, especias dulces y tostadas de su crianza en roble. Ideal para acompañar carnes vacunas o de cerdo.Temperatura de servicio 15-17°C.", precioProducto:435, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P398380-2.jpg?20210504132800,Vino-Tinto-Malbec-Cafayate-Reserve-BODEGA-ETCHART-750-ml-en-Tienda-Inglesa", stockProducto:33, inicialStock:1},
    {codigoProducto:"#a0003", categoriaProducto:"2", nombreProducto:"Vino Tinto JUAN CARRAU Cabernet Sauvignon 750 ml", descriProducto:"Frutos rojos en armonía con notas herbáceas son evidentes en el aroma.Seco y redondo, muy agradable al paladar. Ideal para acompañar todo tipo de carnes, pastas y fiambres.Se recomienda en el verano servir fresco a 18º C.", precioProducto:436, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P004596-1.jpg?20210701173132,Vino-Tinto-JUAN-CARRAU-Cabernet-Sauvignon-750-ml-en-Tienda-Inglesa", stockProducto:25, inicialStock:1},
    {codigoProducto:"#a0004", categoriaProducto:"3", nombreProducto:"Vino Tinto TRAPICHE Reserva Malbec 750 ml", descriProducto:"De color violáceo, ofrece a la nariz pain grillé, mineral, ciruela y guindas con un toque de pimiento negro. Al paladar es suave, redondo, maduro y con sabores a bayas. El final es especiado, con amplios taninos masticables.", precioProducto:540, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P094600-1.jpg?20210701173132,Vino-Tinto-TRAPICHE-Reserva-Malbec-750-ml-en-Tienda-Inglesa", stockProducto:56, inicialStock:1},
    {codigoProducto:"#a0005", categoriaProducto:"2", nombreProducto:"Vino Tinto CONCHA Y TORO Cabernet Sauvignon Reservado 750 ml", descriProducto:"Color Rojo rubí, con notas violáceas. Aroma Aroma frutal con notas a ciruelas rojas, chocolate y un leve toque vegetal.", precioProducto:540, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P094600-1.jpg?20210701173132,Vino-Tinto-TRAPICHE-Reserva-Malbec-750-ml-en-Tienda-Inglesa", stockProducto:840, inicialStock:1},
    {codigoProducto:"#a0006", categoriaProducto:"4", nombreProducto:"Vino MASSIMO DEICAS Tinto Tannat 750 ml", descriProducto:"Color, es un vino que mantiene color profundo a pesar del paso del tiempo. Nariz: es donde su complejidad alcanza su plenitud, frutos negros ,casis , regaliz , higos en su tinta, se expresan sobre un fondo de madera fina y elegante. Boca potente con intensidad en taninos muy maduros que aportan estrucura y describen un gran cuerpo, una acidez viva asegura una noble y lento envejecimiento para este majestuoso tannat uruguayo.", precioProducto:3353, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P217435-1.jpg?20181119182803,Vino-MASSIMO-DEICAS-Tinto-Tannat-750-ml-en-Tienda-Inglesa", stockProducto:53, inicialStock:1},
    {codigoProducto:"#a0007", categoriaProducto:"4", nombreProducto:"Vino Tinto Dinastia H. STAGNARI 750ml", descriProducto:"sin descripcion de momento.", precioProducto:1890, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P140991-1.jpg?20190729125546,Vino-Tinto-Dinastia-H.-STAGNARI-750ml-en-Tienda-Inglesa", stockProducto:34, inicialStock:1},
    {codigoProducto:"#a0008", categoriaProducto:"4", nombreProducto:"Vino Tannat Marselan Garra H. STAGNARI", descriProducto:"sin descripcion de momento.", precioProducto:565, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P496743-2.jpg?20220505144931,Vino-Tannat-Marselan-Garra-H.-STAGNARI-en-Tienda-Inglesa", stockProducto:87, inicialStock:1},
];

/*
categorias:
    1) cabernet
    2) cabernet sauvignon
    3) malbec
    4) tannat
*/

//funcion que devuelve productos todos, array de objetos
export const getProductos = () => 
{
    return new Promise ( (resolve) => 
    {
        setTimeout(()=> 
        {
            resolve(productos);
        },100);
    });
}



//funcion que devuelve un unico producto, o sea, el objeto producto
export const getUnProducto = (id) => 
{
    return new Promise(resolve => 
    {
        setTimeout(() => 
        {
            const producto = productos.find(prod => prod.codigoProducto === id);
            resolve(producto);
        }, 100)
    })
}

/*
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}
*/

