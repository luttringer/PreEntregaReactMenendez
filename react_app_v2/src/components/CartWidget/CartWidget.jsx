import "./CartWidget.css"
const CartWidget = (props) => 
{
  let {nombreP,descP,precioP,imgP} = props;

  const bd_items_stock =  //codigo,nombre, descripcion, precio, imgURL, stock
  [
    ["#a0001","Vino Tinto Tannat Cabernet Gran Guarda H. STAGNARI 750 ml", "sin descripcion de momento.",449, "https://prod-resize.tiendainglesa.com.uy/images/large/P387628-2.jpg?20220505151608,Vino-Tinto-Tannat-Cabernet-Gran-Guarda-H.-STAGNARI-750-ml-en-Tienda-Inglesa", 35],
    ["#a0002","Vino Tinto Malbec Cafayate Reserve BODEGA ETCHART 750 ml", "Color rojo violáceo intenso con reflejos púrpuras.Olfato aromático,con notas de ciruela madura, uvas pasas, especias dulces y tostadas de su crianza en roble. Ideal para acompañar carnes vacunas o de cerdo.Temperatura de servicio 15-17°C.", 435, "https://prod-resize.tiendainglesa.com.uy/images/large/P398380-2.jpg?20210504132800,Vino-Tinto-Malbec-Cafayate-Reserve-BODEGA-ETCHART-750-ml-en-Tienda-Inglesa", 33],
    ["#a0003","Vino Tinto JUAN CARRAU Cabernet Sauvignon 750 ml", "Frutos rojos en armonía con notas herbáceas son evidentes en el aroma.Seco y redondo, muy agradable al paladar. Ideal para acompañar todo tipo de carnes, pastas y fiambres.Se recomienda en el verano servir fresco a 18º C.", 436, "https://prod-resize.tiendainglesa.com.uy/images/large/P004596-1.jpg?20210701173132,Vino-Tinto-JUAN-CARRAU-Cabernet-Sauvignon-750-ml-en-Tienda-Inglesa", 25],
    ["#a0004","Vino Tinto TRAPICHE Reserva Malbec 750 ml", "De color violáceo, ofrece a la nariz pain grillé, mineral, ciruela y guindas con un toque de pimiento negro. Al paladar es suave, redondo, maduro y con sabores a bayas. El final es especiado, con amplios taninos masticables.", 540, "https://prod-resize.tiendainglesa.com.uy/images/large/P094600-1.jpg?20210701173132,Vino-Tinto-TRAPICHE-Reserva-Malbec-750-ml-en-Tienda-Inglesa", 56],
    ["#a0005","Vino Tinto CONCHA Y TORO Cabernet Sauvignon Reservado 750 ml", "Color Rojo rubí, con notas violáceas. Aroma Aroma frutal con notas a ciruelas rojas, chocolate y un leve toque vegetal.", 540, "https://prod-resize.tiendainglesa.com.uy/images/large/P094600-1.jpg?20210701173132,Vino-Tinto-TRAPICHE-Reserva-Malbec-750-ml-en-Tienda-Inglesa",840],
    ["#a0006","Vino MASSIMO DEICAS Tinto Tannat 750 ml", "Color, es un vino que mantiene color profundo a pesar del paso del tiempo. Nariz: es donde su complejidad alcanza su plenitud, frutos negros ,casis , regaliz , higos en su tinta, se expresan sobre un fondo de madera fina y elegante. Boca potente con intensidad en taninos muy maduros que aportan estrucura y describen un gran cuerpo, una acidez viva asegura una noble y lento envejecimiento para este majestuoso tannat uruguayo.", 3353, "https://prod-resize.tiendainglesa.com.uy/images/large/P217435-1.jpg?20181119182803,Vino-MASSIMO-DEICAS-Tinto-Tannat-750-ml-en-Tienda-Inglesa", 53],
    ["#a0007","Vino Tinto Dinastia H. STAGNARI 750ml", "sin descripcion de momento.",1890,"https://prod-resize.tiendainglesa.com.uy/images/large/P140991-1.jpg?20190729125546,Vino-Tinto-Dinastia-H.-STAGNARI-750ml-en-Tienda-Inglesa",34],
    ["#a0008","Vino Tannat Marselan Garra H. STAGNARI", "sin descripcion de momento.", 565, "https://prod-resize.tiendainglesa.com.uy/images/large/P496743-2.jpg?20220505144931,Vino-Tannat-Marselan-Garra-H.-STAGNARI-en-Tienda-Inglesa", 87]
  ];

  return (
    <div class="productoItem">
        <img src={imgP} alt="" />
        <h4>{nombreP}</h4>
        <p>{descP}</p>
        <p>{precioP}</p>

        <div>
          <button>-</button>
          <input type="text" value="1"/>
          <button>+</button>
        </div>
        
        <button>agregar a carrito</button>
    </div>
  );
}

export default CartWidget;
