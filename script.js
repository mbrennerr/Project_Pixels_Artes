const requisito1 = () => {
const header = document.createElement("header")
const h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.innerText = "Paleta de Cores";
header.appendChild(h1);
document.body.appendChild(header);
}

const requisito2 = () =>{
    const cores = ["black", "red", "green", "blue"];
    const divCores = document.createElement("div");
    const ul = document.createElement("ul");
    ul.setAttribute("id", "color-palette");
    ul.style.display = "flex";
    ul.style.listStyle = "none";
    ul.style.gap = "10px";

    for (let index =0; index < cores.length; index ++){
        const cor = cores[index]
        const li = document.createElement("li");
        const estilo = li.style
        li.classList.add ("color");
        estilo.backgroundColor = cor;

if(estilo.backgroundColor === "black"){
    li.classList.add("selected");
}

        estilo.border ="1px solid black";
        estilo.height = "40px";
        estilo.width = "40px";

        ul.appendChild(li);
        divCores.appendChild(ul);
        document.body.appendChild(divCores);
    }
}


const requisito4 = (number) =>{
    const ulPixels = document.createElement("ul");
        document.body.appendChild(ulPixels);
    ulPixels.setAttribute("id","pixel-board");
    for (let index = 0; index < 5; index++) {

        const divPixels = document.createElement("div");
        divPixels.style.display = "flex"
        ulPixels.appendChild(divPixels);
         for (let lindex = 0; lindex < number; lindex++) {
            const liPixels = document.createElement("li");
            liPixels.classList.add("pixel");
                divPixels.appendChild(liPixels);
        }

  }
    
}

const requisito7 = () => {
    const selectedColors = document.querySelectorAll(".color");
    for (const color of selectedColors) {
            color.addEventListener("click", (event) =>{
                const selected = document.querySelector(".selected");
                selected.classList.remove("selected");
                event.target.classList.add("selected");
            })
        
    }

}

const requisito8 = () =>{
    const pixels = document.querySelectorAll(".pixel");
    
    for (const pixel of pixels) {        
        pixel.addEventListener("click", () => {
            const colorSelected = document.querySelector(".selected");
        pixel.style.backgroundColor = colorSelected.style.backgroundColor;
    })

}
}


const requisito9 = () => {
    const ulPixel = document.querySelector("#pixel-board");
    const eraseButton = document.createElement("button");
    eraseButton.innerHTML = "limpar";
    eraseButton.setAttribute("id", "clear-board");
    document.body.insertBefore(eraseButton,ulPixel );
       const pixels = document.querySelectorAll(".pixel");
    eraseButton.addEventListener("click", () => {
        for (const pixel of pixels) {
            pixel.style.backgroundColor = "white"
        }
    })
}








window.onload = () => {
    requisito1();
    requisito2();
    requisito4(5);
    requisito7();
    requisito8();
    requisito9();
}


