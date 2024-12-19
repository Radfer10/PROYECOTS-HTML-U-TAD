const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio()
{
    let digitos = '0123456789ABCDEF';
    let colorHexadecimal = '#';

    for (let i = 0; i < 6; i++)
    {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHexadecimal += digitos[indiceAleatorio];

    }
    return colorHexadecimal;
}

boton.addEventListener('click', function()
{
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
});