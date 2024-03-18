let encriptar = 1;

var isActive = document.getElementById("input-message");
if(document.activeElement === isActive){
    isActive.placeholder = "";
}
else {
    isActive.placeholder = "Ingresa el texto aquí:";
}

// Al tocar el botón se recargaba la página. Para que no se recargue:

var buttons = Array.from(document.querySelectorAll("#button"));
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
    });
});

// Función para copiar:

function copyText(btn) {
    let contenedor = btn.closest(".flex-col");
    let areaDeTexto = contenedor.querySelector("textarea");
    //Si existe:
    if (areaDeTexto) {
        areaDeTexto.select();
        areaDeTexto.setSelectionRange(0, 99999);
        // Copia el texto al portapapeles
        document.execCommand("copy");

        // Deselecciona el texto
        areaDeTexto.setSelectionRange(0, 0);

        var toast = document.getElementById("toast-success");
        toast.style.display='flex';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
}  


// Función para encriptar el texto

function encriptado(){
    let contenido = document.getElementById("input-message").value;
    console.log(contenido);
    let notif = "";
    for(let i = 0; i<contenido.length;i++){
        if(contenido[i]=='a')notif+='ai';
        else if(contenido[i]=='e')notif+='enter';
        else if(contenido[i]=='i')notif+='imes';
        else if(contenido[i]=='o')notif+= 'ober';
        else if(contenido[i]=='u')notif+='ufat';
        else notif+=contenido[i];
    }

    return notif;
}

function desencriptado(){
    let contenido = document.getElementById("input-message").value;
    contenido = contenido.replace(/ai/g, 'a');
    contenido = contenido.replace(/enter/g, 'e');
    contenido = contenido.replace(/imes/g, 'i');
    contenido = contenido.replace(/ober/g, 'o');
    contenido = contenido.replace(/ufat/g, 'u');
    return contenido;
}

//Función que controla el texto que aparece en la pantalla según el usuario quiera encriptar o desencriptar.

function toggleController(){
    let toggleEncrypt = document.getElementById("encryptToggle");

    toggleEncrypt.addEventListener("change", function() {
        if (toggleEncrypt.checked) {
            document.getElementById("input-label").textContent = "Ingresa el texto que quieres Encriptar";
            document.getElementById("outputMessage").placeholder = "Aquí estará tu texto encriptado";
            document.getElementsByClassName("actionButton")[0].textContent="Encriptar Texto";
            encriptar = 1;

        } 

    }); 
    
    let toggleDecrypt = document.getElementById("decryptToggle");
    toggleDecrypt.addEventListener("change",function(){
        document.getElementById("input-label").textContent = "Ingresa el texto que quieres desencriptar";
        document.getElementById("outputMessage").placeholder = "Aquí estará tu texto desencriptado";
        document.getElementsByClassName("actionButton")[0].textContent="Desencriptar Texto";
        encriptar = 0;  // O el valor que desees asignar cuando el toggle está desactivado
    })
    
}

//Si se eligio encriptar o desencriptar
function actionController(){
if(encriptar){
    document.getElementById("outputMessage").value = encriptado();
    document.getElementsByClassName("actionButton").value="Decodificar Texto";

}
else{
    document.getElementById("outputMessage").value = desencriptado();
}
}

toggleController();