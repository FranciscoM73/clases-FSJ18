let qrdiv = document.getElementById('qrcode');
let btnConvertir = document.getElementById('convertir');

const qrcode = new QRCode(qrdiv, {
    width: 200,
    height: 200
});

function crearQR() {
    let texto = document.getElementById('text');

    btnConvertir.addEventListener('click', e => {
        if (!texto.value) {
            alert("Ingrese un texto coherente");
            texto.focus();
            return;
        } else {
            qrcode.makeCode(texto.value);
        }
    });
}

crearQR();
