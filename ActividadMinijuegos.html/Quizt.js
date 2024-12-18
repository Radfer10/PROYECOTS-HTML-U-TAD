let indexPregunta = 0;

cargarPregunta(indexPregunta);

function cargarPregunta(index)
{
    objetoPregunta = baseDePreguntas[index];
    opciones = [...objetoPregunta.opciones];
    if (!opciones.includes(objetoPregunta.respuesta))
    {
        opciones.push(objetoPregunta.respuesta);
    }

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    document.getElementById("imagen").src = objetoPregunta.imagen;

    for (let i = opciones.length - 1; i > 0; i--)
    {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = opciones[i];
        opciones[i] = opciones[randomIndex];
        opciones[randomIndex] = temp;
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    document.getElementById("opcion1").innerHTML = opciones[0];
    document.getElementById("opcion2").innerHTML = opciones[1];
    document.getElementById("opcion3").innerHTML = opciones[2];
    document.getElementById("opcion4").innerHTML = opciones[3];
}
let contador = 0;
let contadorTotalPreguntas = 0;

function elegirOpcion(index)
{
    let validez = opciones[index] == objetoPregunta.respuesta;
    let opcionSeleccionada = document.getElementById("opcion" + (index + 1));
    let opcionCorrecta = document.querySelector(`#opcion${opciones.indexOf(objetoPregunta.respuesta) + 1}`);

    if (validez)
    {
        opcionCorrecta.style.backgroundColor = 'green';
        contador++;
        contadorTotalPreguntas++;
        document.getElementById("score").textContent = contador + "/" + contadorTotalPreguntas;
    }
    else
    {
        opcionSeleccionada.style.backgroundColor = 'red';
        opcionCorrecta.style.backgroundColor = 'green';
        contadorTotalPreguntas++;
    }
    document.getElementById("siguiente").style.display = "block";
    
}



function siguientePregunta()
{
    if (indexPregunta >= baseDePreguntas.length - 1)
        {
            document.getElementById("ventanaResumen").style.display = "block";
            document.getElementById("ventanaResumen").scrollIntoView({ behavior: 'smooth' });

            document.getElementById("contadorRespuestas").textContent = contador; 
            document.getElementById("totalPreguntas").textContent = baseDePreguntas.length; 

        }
        else
        {
            indexPregunta++;
            resetColor();
            cargarPregunta(indexPregunta)
        }
        document.getElementById("siguiente").style.display = "none";
       
    
}
function resetColor()
{
    for (let i = 0; i < 4; i++)
    {
        let opcion = document.getElementById("opcion" + (i + 1));
        opcion.style.backgroundColor = '';
    }
}
  


