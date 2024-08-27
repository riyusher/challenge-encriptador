function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptar() {
    let texto = document.getElementById("input").value;
    if (!validarTexto(texto)) { 
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("input").value;
    
    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    document.querySelector('.presentacion__output__muñeco').classList.add('hidden');
    document.querySelector('.presentacion__output__texto1').classList.add('hidden');
    document.querySelector('.presentacion__output__texto2').classList.add('hidden');

    document.getElementById("output").value = texto;
    document.getElementById("output").classList.remove('hidden');
}
