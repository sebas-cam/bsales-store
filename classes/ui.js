
//producto - palabra recibida del buscador en la parte superior derecha
//categoria - recibe el value de la categoria clickeada

//CLASES PARA LA VISTAS
export default class UI{
    //VISTA PRINCIPAL
    mainPage(){   
        const CONTENEDOR = document.getElementById("app")
        this.replaceContent(CONTENEDOR) 
        try {
            fetch(`https://bsale-restapi.herokuapp.com/productos`)
            .then(datos => datos.json())
            .then(res =>{   
                insertarDato(res)
        })
        } catch (e) {
            console.log(e)
        }
    }

    //BUSCADOR DE PRODUCTOS
    async searchProduct(producto){    
        this.replaceContent() 
        try {
            const data = await fetch(`https://bsale-restapi.herokuapp.com/productos/${producto}`)
            
            if (data.status === 200) {
                const datos = await data.json()
                insertarDato(datos)

            } else if(data.status === 404) {
                //MUESTRA MENSAJE DE PRODUCTO NO ENCONTRADO
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Producto no encontrado!'                            
                })
                this.mainPage()

            } else{
                console.log("error en status")
            }
        } catch (e) {
            console.log(e)
        }
    }

    //REEMPLAZADOR DE CONTENIDO
    replaceContent(){
        const CONTENEDOR = document.getElementById("app")
        while (CONTENEDOR.hasChildNodes()) {CONTENEDOR.removeChild(CONTENEDOR.firstChild)}
    }

    //MOSTRAR CATEGORIA SELECCIONADA
    sortProduct(categoria){
        this.replaceContent()
        try {
            fetch(`https://bsale-restapi.herokuapp.com/productos/categorias/${categoria}`)
            .then(datos => datos.json())
            .then(res =>{
                
                insertarDato(res)
        })
        } catch (e) {
            console.log(e)
        }

    }

    //MOSTRAR CONTENIDO CON DESCUENTO
    discountProduct(){
        const CONTENEDOR = document.getElementById("app")
        this.replaceContent()
        try {
            fetch(`https://bsale-restapi.herokuapp.com/descuentos`)
            .then(datos => datos.json())
            .then(res =>{
                res.productos.forEach(element => {
                    let contenedorCard= document.createElement('div.content'); 
                    contenedorCard.innerHTML +=`
                    <div class="col">
                        <div class="card h-100 ">
                            <img src="${element.url_img}" class="card-img-top" alt="" >
                            <div class="card-body">
                                <h5 class="card-title">${element.name}</h5>
                                <p class="card-text">$${element.price}</p>
                                <p class="card-text"><b>Con un descuento de $${element.discount}</b> </p>
                            </div>
                                <div class="card-footer">
                                <small class="text-muted">${element.category_name} </small>
                            </div>
                        </div>
                    </div>
                    `
                    CONTENEDOR.appendChild(contenedorCard);   
                })
        })
        } catch (e) {
            console.log(e)
        }

    }

}

//datos - fetch recibido por las funciones dentro de la clase UI

//FUNCION PARA INSERTAR DATOS    
function insertarDato(datos){
    const CONTENEDOR = document.getElementById("app")
       
    datos.productos.forEach(element => {
        let contenedorCard= document.createElement('div.content'); 
        contenedorCard.innerHTML +=`
        <div class="col">
            <div class="card h-100 ">
                <img src="${element.url_img}" class="card-img-top imgwg" alt="" >
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text"><b>$${element.price}</b></p>
                </div>
                    <div class="card-footer">
                    <small class="text-muted">${element.category_name} </small>
                </div>
            </div>
        </div>
        `
        CONTENEDOR.appendChild(contenedorCard);   
    })
}
