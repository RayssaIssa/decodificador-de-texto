const textarea = document.getElementById('texto-inicial');
const btnCrip = document.getElementById('crip');
const btnDescrip = document.getElementById('descrip');

textarea.addEventListener('input', function() {
    const texto = textarea.value.trim();
    if (texto === '') {
        btnCrip.disabled = true;
        btnDescrip.disabled = true;
    } else {
        btnCrip.disabled = false;
        btnDescrip.disabled = false;
    }
});

textarea.dispatchEvent(new Event('input'));

btnCrip.addEventListener('click', function() {
    const texto = textarea.value.trim();
    if (texto === '') {
        alert('Por favor, insira um texto para criptografar.');
    } else {
        let textoCriptografado = criptografar(texto);

        document.querySelector('.antes').style.display = 'none';
        document.querySelector('.depois').style.display = 'block';
        document.querySelector('.texto-convertido').textContent = textoCriptografado;
        document.querySelector('.copiar').style.display = 'block';
    }
});

btnDescrip.addEventListener('click', function() {
    const texto = textarea.value.trim();
    if (texto === '') {
        alert('Por favor, insira um texto para descriptografar.');
    } else {
        let textoDescriptografado = descriptografar(texto);

        document.querySelector('.antes').style.display = 'none';
        document.querySelector('.depois').style.display = 'block';
        document.querySelector('.texto-convertido').textContent = textoDescriptografado;
        document.querySelector('.copiar').style.display = 'block';
    }
});

document.querySelector('.copiar').addEventListener('click', function() {
    let texto = document.querySelector('.texto-convertido').textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado para a área de transferência!');
    }, function(err) {
        alert('Falha ao copiar o texto: ', err);
    });
});

function criptografar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}