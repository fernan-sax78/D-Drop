(function(){
"use strict";

const draggableElement = document.querySelector('#myDraggableElement');

draggableElement.addEventListener("dragstart", (e) => {
 e.dataTransfer.setData("text",draggableElement.id);

});

for ( const dropZone of  document.querySelectorAll(".drop-zone")){
    dropZone.addEventListener("dragover", (e) => {
       e.preventDefault();
       dropZone.classList.add("drop-zone--over");
    });

    dropZone.addEventListener("dragleave", (e) => {
        dropZone.classList.remove("drop-zone--over");
    })


    dropZone.addEventListener("drop",(e) => {
        e.preventDefault();

        

        const droppedElementId = e.dataTransfer.getData("text");
        const droppedElement = document.getElementById(droppedElementId);

        dropZone.appendChild(droppedElement);
        dropZone.classList.remove("drop-zone--over");
        
    })
}


// parte dos.................................---->>>>




const cuadritoUno = document.querySelector('#cuadrito');
const cuadritoDos = document.querySelector('#cuadritoDos');
const cuadritoTres = document.querySelector('#cuadritoTres');
const cuadritoCuatro = document.querySelector('#cuadritoCuatro');

cuadritoUno.addEventListener("dragstart", e => {
    e.dataTransfer.setData("textoUno/nuevo", cuadritoUno.id);
    console.log(cuadritoUno);
})
cuadritoDos.addEventListener("dragstart", e => {
    e.dataTransfer.setData("textoDos/nuevo", cuadritoDos.id);
    console.log(cuadritoDos);
})
cuadritoTres.addEventListener("dragstart", e => {
    e.dataTransfer.setData("textoTres/nuevo", cuadritoTres.id);
    console.log(cuadritoTres);
})
cuadritoCuatro.addEventListener("dragstart", e => {
    e.dataTransfer.setData("textoCuatro/nuevo", cuadritoCuatro.id);
    console.log(cuadritoCuatro);
})

for(const contenedorCuadrito of document.querySelectorAll('.boxUno')){


    contenedorCuadrito.addEventListener("dragover", (e) => {
        e.preventDefault();
        
     });
 
     contenedorCuadrito.addEventListener("dragleave", (e) => {
     
     })
 
 
     contenedorCuadrito.addEventListener("drop",(e) => {
         e.preventDefault();
         const cuadritoUnoElId= e.dataTransfer.getData("textoUno/nuevo");
         const cuadritoUnoDropped = document.getElementById(cuadritoUnoElId);
         contenedorCuadrito.appendChild(cuadritoUnoDropped);
            
         
        });

        contenedorCuadrito.addEventListener("drop",(e) => {
            e.preventDefault();
            const cuadritoDosElId= e.dataTransfer.getData("textoDos/nuevo");
            const cuadritoDosDropped = document.getElementById(cuadritoDosElId);
            contenedorCuadrito.appendChild(cuadritoDosDropped);

            
           });
 
           contenedorCuadrito.addEventListener("drop",(e) => {
            e.preventDefault();
            const cuadritoTresElId= e.dataTransfer.getData("textoTres/nuevo");
            const cuadritoTresDropped = document.getElementById(cuadritoTresElId);
            contenedorCuadrito.appendChild(cuadritoTresDropped);

            
           });




           contenedorCuadrito.addEventListener("drop",(e) => {
         
         const cuadritoCuatroElId= e.dataTransfer.getData("textoCuatro/nuevo");
         const cuadritoCuatroDropped = document.getElementById(cuadritoCuatroElId)
         contenedorCuadrito.appendChild(cuadritoCuatroDropped);
         
         
        });
         
     



}





}());