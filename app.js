import UI from "./classes/ui.js"
import buttons from "./buttons/button.js"

//INICIADOR DE LAS FUNCIONES 
document.addEventListener("DOMContentLoaded",()=>{
    //INICIA LA VISTA PRINCIPAL DE PRODUCTOS
    const IU = new UI()
    IU.mainPage()
    //INICIA TODOS LOS BOTONES
    buttons()
});
