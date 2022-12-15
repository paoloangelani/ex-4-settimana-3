window.onload = () => {
    const listContainer = document.getElementById("list-items")
}

const aggiungiClasseSelected = event => {

    const elementoCliccato = event.target

    elementoCliccato.classList.toggle("selected")
}

const gestisciKeyUpSuInput = event => {


    if (event.key === "Enter") {

        const valoreInputField = document.getElementById("list-item-input").value
        if (valoreInputField === "") {
            alert("Please enter text")
        } else {

            const newDiv = document.createElement("div")

            newDiv.classList.add("list-item")

            newDiv.innerText = valoreInputField

            newDiv.onclick = aggiungiClasseSelected

            document.getElementById("list-items").appendChild(newDiv)

            document.getElementById("list-item-input").value = ""
        }
    }
}

const eliminaSelezionati = e => {

    const list = document.getElementById("list-items")


    const elementiSelezionati = document.querySelectorAll(".selected")

    const elementiSelezionati2 = document.getElementsByClassName("selected")

    elementiSelezionati.forEach(element => list.removeChild(element))

    const arr = Array.from(elementiSelezionati2)


    for (let index = 0; index < elementiSelezionati2.length; index) {
        const element = elementiSelezionati2[index]
        list.removeChild(element)
    }

}

