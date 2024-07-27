function saludar(){
    //tipo_dato Nombre <inicializar>:
    //let para definr variables
    //const pata definir =3.1416
    const mes='enero' + 'julio';
    var name = document.getElementById("user-name").Value; /*declara variable*/
    var elements=document.getElementsByClassName("first");
   /* revisar ciclo
   for(let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor="#ff1493";
    }
       
    alert('Se encontraron '+ elements.length);
}
 hasta acá */   
    elements[0].style.backgroundColor="darkpink";
    alert('Hola '+ name);
    }
/*
function reiniciar(){
    var elements=document.getElementsByClassName("first");
    elements[0].style.backgroundColor="yellow";
    
}
*/
function showConfirm(){
    var texto;
    if(confirm("Selecciona un botón")){
        texto="Has presionado aceptar";
            }
        else {
                texto="has cancelado la acción";
            }
            document.getElementById("demo").innerHTML=texto;
             }   
             
 /*agregar código*/            
/*
 function mostrarPrompt(){
    let texto;
    let persona=prompt("Por favor ingresa tu nombre ","Usuario");
    if(persona==null||persona=="")
        {
            texto="Usuario canceló el comando";
        }
    else{
        texto="Hola "+persona+" ¿cómo estas?";
    }
    document.getElementById("demo").innerHTML=texto;
}

/*hasta acá*/
/*function getRoot(){
    var r=getComputedStyle(root);
    alert("El valor de --micolor" + r.getPropertyValue('--miColor'));
}

function cambiarValor(){
    root.style.setProperty('--micolor','blue');
}

function cambiarValor(){
    root.style.setProperty(('--micolor','purple'));
}
*/
function showImage(image){
    var newImage=document.createElement('img');
    newImage.src=image.src;  /* agregarda*/
    newImage.removeAttribute("onclick");
    var modal=document.getElementById('preview');
    modal.classList.toggle('showModal');
    modal.appendChild(newImage);
}
/* revisar este código*//*
window.addEventListener("scroll", fixPhotoOnScroll, false);

function showImage(image0){
	var newImage=document.createElement('img');
	newImage.src=image.src;
	newImage.removeAttribute(onclick);
	var modal=document.getElementById('preview');
	modal.classList.toggle('showModal');
	modal.appendChild(newImage);

}
/*hasta acá*/



function toggleMenu(){
    var button= document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu=document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}

function fixPhotoOnScroll()
{
var photo=document.getElementById("photo-profile");
this.scrollY > 50 ? photo.style.marginTop = 0: photo.style.marginTop = '-7rem';
}

window.addEventListener("scroll", fixPhotoOnScroll, false);

function cerrar()
{
    newImage.removeAttribute('onclick');
    var modal= document.getElementById('preview');
        document.getElementById('showImage').style.display="none";
}

