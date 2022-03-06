import UI from "../classes/ui.js"

//FUNCION CON TODOS LOS BOTONES

export default function buttons() {

    document.getElementById("form-search")
    .addEventListener("submit",function(e){    
        const ui = new UI();
        let product = (document.getElementById("input-search").value)
        ui.searchProduct(product);
        document.getElementById("form-search").reset();
        e.preventDefault()        
    })

    document.getElementById("btn_descuentos")
    .addEventListener("click",function(e){    
        const ui = new UI();
        ui.discountProduct();
        e.preventDefault()        
    })

    document.getElementById("btn_ron")
    .addEventListener("click",function(e){    
        const ui = new UI();
        let product = "ron"
        ui.sortProduct(product);
        e.preventDefault()        
    })

    document.getElementById("btn_pisco")
    .addEventListener("click",function(e){    
        const ui = new UI();
        let product = "pisco"
        ui.sortProduct(product);
        e.preventDefault()        
    })

    document.getElementById("btn_vodka")
    .addEventListener("click",function(e){    
        const ui = new UI();
        let product = "vodka"
        ui.sortProduct(product);
        e.preventDefault()        
    })

    document.getElementById("btn_energetica")
    .addEventListener("click",function(e){    
        const ui = new UI();
        let product = "bebida energetica"
        ui.sortProduct(product);
        e.preventDefault()        
    })

    document.getElementById("btn_bebida")
    .addEventListener("click",function(e){    
        const ui = new UI();
        let product = "bebida"
        ui.sortProduct(product);
        e.preventDefault()        
    })

    document.getElementById("btn_snack")
    .addEventListener("click",function(e){    
        const ui = new UI();
        let product = "snack"
        ui.sortProduct(product);
        e.preventDefault()        
    })

}