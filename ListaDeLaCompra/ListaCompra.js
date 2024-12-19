const input = document.getElementById('ingresar-texto');
const boton = document.querySelector('button');
const listaCompra = document.getElementById('listaCompra');

function añadirProducto()
{
    if (input.value)
    {
        let productoExistente = false;
        let nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('producto');


        let texto = document.createElement('p');
        texto.innerText = input.value;
        nuevoProducto.appendChild(texto);

        let productos = listaCompra.getElementsByClassName('producto');
        for (let i = 0; i < productos.length; i++)
        {
            let producto = productos[i];
            let nombreProducto = producto.querySelector('p').innerText;

            if (nombreProducto == input.value)
                {
                    productoExistente = true;
                    let contador = producto.querySelector('.contador');
                    if (contador)
                    {
                        let cantidad = parseInt(contador.innerText.replace('x', ''));
                    contador.innerText = `x${cantidad + 1}`;

                    }
                    break;
                }
        }


        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        nuevoProducto.appendChild(iconos);

        let  completar = document.createElement('nuevoProducto');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarProducto);

        let eliminar = document.createElement('nuevoProducto');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarProducto);

        iconos.append(completar, eliminar);

        listaCompra.appendChild(nuevoProducto);


    }
    else
    {
        alert('Por favor ingrese un producto');
    }

}

function eliminarProducto(e)
{
    let producto = e.target.parentNode.parentNode;
    producto.remove();

}

function completarProducto(e)
{
    let producto = e.target.parentNode.parentNode;
    if (producto.style.backgroundColor == 'green')
    {
        producto.style.backgroundColor = '';
    }
    else
        producto.style.backgroundColor = 'green';


}

boton.addEventListener('click', añadirProducto);




