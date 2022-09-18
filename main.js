let listaCiudades = document.getElementById("lista")
listaCiudades.innerHTML += ` <li>‎ ‎ ‎ ‎ Marcas mundialmente conocidas</li>`
        
        class Producto {
            constructor(id, prenda, precio, talle, imagen){
                this.id = id,
                this.prenda = prenda,
                this.precio = precio,
                this.talle = talle,
                this.imagen = imagen
            }
            mostrarData(){
                console.log(`[${this.id}] Productos de Adidas \nPrenda: ${this.prenda} \nPrecio: ${this.precio} \nTalle: ${this.talle}\n ${this.imagen}`)
            }
        }

        const prenda1 = new  Producto(1,"zapatillas", 45000, "42", "adidas1.png")
        const prenda2 = new  Producto(2,"Zapatillas GAMECOURT 2.0", 35600, "36", "adidas1.png")
        const prenda3 = new  Producto(3,"Camiseta TITULAR ARGENTINA 22", 15000, "xl", "argentina.png")
        const prenda4 = new  Producto(4,"Camiseta TITULAR BOCA JUNIORS 22/23", 28000, "M", "boca.png")

        const tiendaAdidas= []
        tiendaAdidas.push(prenda1, prenda2, prenda3, prenda4)
        let divProducto = document.getElementById("productos")
        function mostrarCatalogo(array){
            divProducto.innerHTML = ""
            array.forEach((prenda)=>{
                let nuevoProducto = document.createElement("div")
                nuevoProducto.innerHTML = `<div id="${prenda.id}" class="card" style="width: 18rem;">
                                            <img class="card-img-top" style="height: auto;" src="./assets/img/${prenda.imagen}" alt="${prenda.prenda}">
                                            <div class="card-body">
                                            <h4 class="card-title">${prenda.prenda}</h4>
                                            <p class="">Precio: $${prenda.precio}</p>
                                            <p class="">Talle: ${prenda.talle}</p>
                                            <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                            </div>
                </div>`
                divProducto.append(nuevoProducto)
            })
            let btnCompra = document.getElementsByClassName("btnComprar")
            for(let compra of btnCompra){
            compra.addEventListener("click", ()=>{
                alert("¡Has comprado el producto Satisfactoriamente!\n Visita la pagina oficial de Nike.com\n Gracias por tu compra. Hasta luego.")
            })
        }
        }

        let btnGuardar = document.getElementById("guardarProductoBtn")
        btnGuardar.addEventListener("click", ()=>{
            guardarProducto(tiendaAdidas)
        })
        let btnMostrarCatalogo = document.getElementById("verCatalogo")
        btnMostrarCatalogo.addEventListener("click", ()=>{
            mostrarCatalogo(tiendaAdidas)
        })
        let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
        btnOcultarCatalogo.onclick = ocultarCatalogo

        function ocultarCatalogo(){
            divProducto.innerHTML = ""
        }
        
        const filtro = tiendaAdidas.find(prenda => prenda.id === 3)
        console.log(filtro)
        const comprobacion = tiendaAdidas.some(prenda => prenda.nombre ===`Supremacy`)
        console.log(comprobacion)
        const menorPrecio = tiendaAdidas.filter(prenda => prenda.precio < 16000)
        console.log(menorPrecio)

        for(let producto of tiendaAdidas){
        producto.mostrarData()
        }

//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE
//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE
//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE

        class Producto2 {
            constructor(id2, prenda2, precio2, talle2, imagen2){
                this.id2 = id2,
                this.prenda2 = prenda2,
                this.precio2 = precio2,
                this.talle2 = talle2,
                this.imagen2 = imagen2
            }
            mostrarData(){
                console.log(`[${this.id2}] Productos de Nike \nPrenda: ${this.prenda2} \nPrecio: ${this.precio2} \nTalle: ${this.talle2}`)
            }
        }

        const prenda5 = new  Producto2(5,"Zapatillas Nike Air Vapormax", 105000, "42", "nike1.png")
        const prenda6 = new  Producto2(6,"Zapatillas Nike Droid", 55600, "36", "nike1.png")
        const prenda7 = new  Producto2(7,"Pantalon Nike Essentials 22", 25000, "xl", "nike2.png")
        const prenda8 = new  Producto2(8,"Campera Nike Pro Therma-fit", 20000, "M", "nike3.png")

        const tiendaNike= []
        tiendaNike.push(prenda5, prenda6, prenda7, prenda8)

        let divProducto2 = document.getElementById("productos")
        function mostrarCatalogo2(array2){
            divProducto2.innerHTML = ""
            array2.forEach((prenda2)=>{
                let nuevoProducto2 = document.createElement("div")
                nuevoProducto2.innerHTML = `<div id="${prenda2.id2}" class="card" style="width: 18rem;">
                                            <img class="card-img-top" style="height: auto;" src="./assets/img/${prenda2.imagen2}" alt="${prenda2.prenda2}">
                                            <div class="card-body">
                                            <h4 class="card-title">${prenda2.prenda2}</h4>
                                            <p class="">Precio: $${prenda2.precio2}</p>
                                            <p class="">Talle: ${prenda2.talle2}</p>
                                            <button class="btn btn-outline-success btnComprar2">Agregar al carrito</button>
                                            </div>
                </div>`
                divProducto2.append(nuevoProducto2)
            })
            let btnCompra2 = document.getElementsByClassName("btnComprar2")
            for(let compra2 of btnCompra2){
            compra2.addEventListener("click", ()=>{
                alert("¡Has comprado el producto Satisfactoriamente!\n Visita la pagina oficial de Nike.com\n Gracias por tu compra. Hasta luego.")
            })
        }
        }

        let btnGuardar2 = document.getElementById("guardarProductoBtn2")
        btnGuardar2.addEventListener("click", ()=>{
            guardarProducto2(tiendaNike)
        })
        let btnMostrarCatalogo2 = document.getElementById("verCatalogo2")
        btnMostrarCatalogo2.addEventListener("click", ()=>{
            mostrarCatalogo2(tiendaNike)
        })
        
        const filtro2 = tiendaNike.find(prenda2 => prenda2.id2 === 3)
        console.log(filtro2)
        const comprobacion2 = tiendaNike.some(prenda2 => prenda2.nombre2 ===`Pantalon`)
        console.log(comprobacion2)
        const menorPrecio2 = tiendaNike.filter(prenda2 => prenda2.precio2 < 26000)
        console.log(menorPrecio2)

        for(let producto2 of tiendaNike){
        producto2.mostrarData()
        }

//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper
//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper
//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper

        class Producto3 {
            constructor(id3, prenda3, precio3, talle3, imagen3){
                this.id3 = id3,
                this.prenda3 = prenda3,
                this.precio3 = precio3,
                this.talle3 = talle3,
                this.imagen3 = imagen3
            }
            mostrarData(){
                console.log(`[${this.id3}] Productos de Topper \nPrenda: ${this.prenda3} \nPrecio: ${this.precio3} \nTalle: ${this.talle3}`)
            }
        }

        const prenda9 = new  Producto3(9,"Zapatillas Topper X-Forcer", 16000, "42", "topper1.png")
        const prenda10 = new  Producto3(10,"Zapatillas Topper Ultralight II", 25600, "36", "topper1.png")
        const prenda11 = new  Producto3(11,"Buzo topper", 15000, "l", "topper3.png")
        const prenda12 = new  Producto3(12,"Camiseta topper estampada", 8000, "M", "topper2.png")

        const tiendaTopper= []
        tiendaTopper.push(prenda9, prenda10, prenda11, prenda12)
        let divProducto3 = document.getElementById("productos")
        function mostrarCatalogo3(array3){
            divProducto3.innerHTML = ""
            array3.forEach((prenda3)=>{
                let nuevoProducto3 = document.createElement("div")
                nuevoProducto3.innerHTML = `<div id="${prenda3.id3}" class="card" style="width: 18rem;">
                                            <img class="card-img-top" style="height: auto;" src="./assets/img/${prenda3.imagen3}" alt="${prenda3.prenda3}">
                                            <div class="card-body">
                                            <h4 class="card-title">${prenda3.prenda3}</h4>
                                            <p class="">Precio: $${prenda3.precio3}</p>
                                            <p class="">Talle: ${prenda3.talle3}</p>
                                            <button class="btn btn-outline-success btnComprar3">Agregar al carrito</button>
                                            </div>
                </div>`
                divProducto3.append(nuevoProducto3)
            })
            let btnCompra3 = document.getElementsByClassName("btnComprar3")
            for(let compra3 of btnCompra3){
            compra3.addEventListener("click", ()=>{
                alert("¡Has comprado el producto Satisfactoriamente!\n Gracias por tu compra. Hasta luego.")
            })
        }
        }

        let btnGuardar3 = document.getElementById("guardarProductoBtn3")
        btnGuardar3.addEventListener("click", ()=>{
            guardarProducto3(tiendaTopper)
        })
        let btnMostrarCatalogo3 = document.getElementById("verCatalogo3")
        btnMostrarCatalogo3.addEventListener("click", ()=>{
            mostrarCatalogo3(tiendaTopper)
        })
        
        const filtro3 = tiendaTopper.find(prenda3 => prenda3.id3 === 3)
        console.log(filtro3)
        const comprobacion3 = tiendaTopper.some(prenda3 => prenda3.nombre3 ===`Buzo`)
        console.log(comprobacion3)
        const menorPrecio3 = tiendaTopper.filter(prenda3 => prenda3.precio3 < 16000)
        console.log(menorPrecio3)

        for(let producto3 of tiendaTopper){
        producto3.mostrarData()
        }

//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans
//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans
//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans

        class Producto4 {
            constructor(id4, prenda4, precio4, talle4, imagen4){
                this.id4 = id4,
                this.prenda4 = prenda4,
                this.precio4 = precio4,
                this.talle4 = talle4,
                this.imagen4 = imagen4
            }
            mostrarData(){
                console.log(`[${this.id4}] Productos de Vans \nPrenda: ${this.prenda4} \nPrecio: ${this.precio4} \nTalle: ${this.talle4}`)
            }
        }

        const prenda13 = new  Producto4(13,"Zapatillas Vans Clasicc", 45000, "42", "vans1.png")
        const prenda14 = new  Producto4(14,"Zapatillas Vans Colors", 35600, "36", "vans1.png")
        const prenda15 = new  Producto4(15,"Buzo Vans", 15000, "xl", "vans2.png")
        const prenda16 = new  Producto4(16,"Zapatillas Vans Old Clasicc", 28000, "M", "vans3.png")

        const tiendaVans= []
        tiendaVans.push(prenda13, prenda14, prenda15, prenda16)
        let divProducto4 = document.getElementById("productos")
        function mostrarCatalogo4(array4){
            divProducto4.innerHTML = ""
            array4.forEach((prenda4)=>{
                let nuevoProducto4 = document.createElement("div")
                nuevoProducto4.innerHTML = `<div id="${prenda4.id4}" class="card" style="width: 18rem;">
                                            <img class="card-img-top" style="height: auto;" src="./assets/img/${prenda4.imagen4}" alt="${prenda4.prenda4}">
                                            <div class="card-body">
                                            <h4 class="card-title">${prenda4.prenda4}</h4>
                                            <p class="">Precio: $${prenda4.precio4}</p>
                                            <p class="">Talle: ${prenda4.talle4}</p>
                                            <button class="btn btn-outline-success btnComprar4">Agregar al carrito</button>
                                            </div>
                </div>`
                divProducto4.append(nuevoProducto4)
            })
            let btnCompra4 = document.getElementsByClassName("btnComprar4")
            for(let compra4 of btnCompra4){
            compra4.addEventListener("click", ()=>{
                alert("¡Has comprado el producto Satisfactoriamente!\n Gracias por tu compra. Hasta luego.")
            })
        }
        }

        let btnGuardar4 = document.getElementById("guardarProductoBtn4")
        btnGuardar4.addEventListener("click", ()=>{
            guardarProducto4(tiendaVans)
        })
        let btnMostrarCatalogo4 = document.getElementById("verCatalogo4")
        btnMostrarCatalogo4.addEventListener("click", ()=>{
            mostrarCatalogo4(tiendaVans)
        })
        
        const filtro4 = tiendaVans.find(prenda4 => prenda4.id4 === 15)
        console.log(filtro4)
        const comprobacion4 = tiendaVans.some(prenda4 => prenda4.nombre4 ===`Nike`)
        console.log(comprobacion4)
        const menorPrecio4 = tiendaVans.filter(prenda4 => prenda4.precio4 < 16000)
        console.log(menorPrecio4)

        for(let producto4 of tiendaVans){
        producto4.mostrarData()
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function nuevoProducto(array){
            let prendaIngresado = prompt("Ingrese la prenda")
            let precioIngresado = prompt("Ingrese el precio")
            let talleIngresado = parseInt(prompt("Ingrese el talle"))
            let prendaCreado = new Producto(tiendaAdidas.length+1, prendaIngresado , precioIngresado, talleIngresado)
            array.push(prendaCreado)
            
        }
        
        function guardarProducto(array){
            let prendaInput = document.getElementById("prendaInput")
            let precioInput = document.getElementById("precioInput")
            let talleInput = document.getElementById("talleInput")
            let prendaCreado = new Producto(array.length+1, prendaInput.value, parseInt(precioInput.value), talleInput.value, "nuevoProducto.png")
            console.log(prendaCreado)
            array.push(prendaCreado)
            console.log(array)
            prendaInput.value = ""
            precioInput.value = ""
            talleInput.value = ""
            mostrarCatalogo(array)
        }
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function nuevoProducto2(array2){
            let prendaIngresado2 = prompt("Ingrese la prenda")
            let precioIngresado2 = prompt("Ingrese el precio")
            let talleIngresado2 = parseInt(prompt("Ingrese el talle"))
            let prendaCreado2 = new Producto2(tiendaNike.length+1, prendaIngresado2 , precioIngresado2, talleIngresado2)
            array2.push(prendaCreado2)
            
        }
        
        function guardarProducto2(array2){
            let prendaInput2 = document.getElementById("prendaInput")
            let precioInput2 = document.getElementById("precioInput")
            let talleInput2 = document.getElementById("talleInput")
            let prendaCreado2 = new Producto2(array2.length+1, prendaInput2.value, parseInt(precioInput2.value), talleInput2.value, "nuevoProducto.png")
            console.log(prendaCreado2)
            array2.push(prendaCreado2)
            console.log(array2)
            prendaInput2.value = ""
            precioInput2.value = ""
            talleInput2.value = ""
            mostrarCatalogo2(array2)
        }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function nuevoProducto3(array3){
            let prendaIngresado3 = prompt("Ingrese la prenda")
            let precioIngresado3 = prompt("Ingrese el precio")
            let talleIngresado3 = parseInt(prompt("Ingrese el talle"))
            let prendaCreado3 = new Producto3(tiendaTopper.length+1, prendaIngresado3 , precioIngresado3, talleIngresado3)
            array3.push(prendaCreado3)
            
        }
        
        function guardarProducto3(array3){
            let prendaInput3 = document.getElementById("prendaInput")
            let precioInput3 = document.getElementById("precioInput")
            let talleInput3 = document.getElementById("talleInput")
            let prendaCreado3 = new Producto3(array3.length+1, prendaInput3.value, parseInt(precioInput3.value), talleInput3.value, "nuevoProducto.png")
            console.log(prendaCreado3)
            array3.push(prendaCreado3)
            console.log(array3)
            prendaInput3.value = ""
            precioInput3.value = ""
            talleInput3.value = ""
            mostrarCatalogo3(array3)
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function nuevoProducto4(array4){
            let prendaIngresado4 = prompt("Ingrese la prenda")
            let precioIngresado4 = prompt("Ingrese el precio")
            let talleIngresado4 = parseInt(prompt("Ingrese el talle"))
            let prendaCreado4 = new Producto4(tiendaVans.length+1, prendaIngresado4 , precioIngresado4, talleIngresado4)
            array4.push(prendaCreado4)
            
        }

        function guardarProducto4(array4){
            let prendaInput4 = document.getElementById("prendaInput")
            let precioInput4 = document.getElementById("precioInput")
            let talleInput4 = document.getElementById("talleInput")
            let prendaCreado4 = new Producto4(array4.length+1, prendaInput4.value, parseInt(precioInput4.value), talleInput4.value, "nuevoProducto.png")
            console.log(prendaCreado4)
            array4.push(prendaCreado4)
            console.log(array4)
            prendaInput4.value = ""
            precioInput4.value = ""
            talleInput4.value = ""
            mostrarCatalogo4(array4)
        }
