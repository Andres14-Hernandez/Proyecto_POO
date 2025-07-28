import Curso from "./classes/Curso.js"
import Profesor from "./classes/Profesor.js"

// Instanciando objetos
const html = new Curso("HTML desde Cero", "https://166tech.az/uploads/blogs/33915082.webp", 10)
const css = new Curso("CSS desde Cero", "https://uzbekdevs.uz/media/articles/css-bu-dasturlash-tilimi_uzbekdevs.png", 8)

const element = document.getElementById("cursos")

// Imprime un Curso en el DOM
// Recibe un objeto de tipo curso
function mostrarCursos(curso){
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h2 class="t5 s-mb-2 s-center">${curso.getNombre()}</h2>
            <div class="s-center">
                <span class"small">Numero de clases: ${curso.getClases()}</span>
            </div>
        </div>
    `
    element.appendChild(hijo)
}

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCursos(curso)
    target.reset();
})

const profe = new Profesor("Beto", "Quiroga", 25, "beto@encodeURI.team", true, ["React", "JavaScript"], 9.8)
console.log(profe)


mostrarCursos(html)
mostrarCursos(css)
