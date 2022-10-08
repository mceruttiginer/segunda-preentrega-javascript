const productos = [  
    {nombre: "Sorrentinos", precio: 550, variedad: "4 quesos, calabaza, ricota"},
    {nombre: "Tartas", precio: 600, variedad: "verduras, jamon y queso, atun"},
    {nombre: "Fideos", precio: 350, variedad: "puro huevo, verduras"},
    {nombre: "Canelones", precio: 450, variedad: "choclo, jamón y queso"}
  ]
  
    let carrito = [] 
    let seleccion =  prompt ("Hola! Desea comprar algun producto? Si o No")
    while(seleccion != "si" && seleccion != "no") {
        alert ("Por favor ingrese si o no")
        seleccion = prompt ("Hola! Desea comprar algun producto? Si o No")

    }
    if (seleccion === "si") {
        alert ("Te mostramos nuestros productos")
        let todosLosProductos = productos.map(productos => productos.nombre + " " + "$" + productos.precio + " veriedades: " + productos.variedad);
        alert(todosLosProductos.join(" - "))
    } else if (seleccion === "no") {
        alert ("Gracias por visitarnos!")
    }

    while(seleccion != "no"){
        let productos = prompt("Agrega un producto a tu carrito")
        let precio = 0

    if(productos === "sorrentinos" || productos === "tartas" || productos === "fideos" || productos === "canelones"){
        switch(productos){
            case "sorrentinos":
                precio=550
                break
            case "fideos":
                 precio=500
                 break
            case "canelones":
                precio=450
                break
            case "tartas":
                precio=600
                break
            default: 
            break;
        }
    let unidades = parseInt(prompt("Cuantas unidades llevará? Una unidad de sorrentinos o canelones es igual a una docena y una unidad de fideos es igual a un kilo."))
    carrito.push({productos, unidades, precio})
    console.log(carrito)
    }else {
        alert ("No disponemos de ese productos, te pedimos discultas!")
    }
    seleccion = prompt ("Queres comprar algo más?")

    while(seleccion === "no"){
        alert("Gracias por elegirnos!")
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
    }

    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El total a pagar es: ${total}`)
