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
        }

        else {

            const newDiv = document.createElement("div") //crea un div

            newDiv.classList.add("list-item") //aggiungo classe

            newDiv.innerText = valoreInputField //aggiungo testo

            newDiv.onclick = aggiungiClasseSelected //onclick

            document.getElementById("list-items").appendChild(newDiv) //appendo il div al div list item

            document.getElementById("list-item-input").value = "" //svuoto il testo
        }
    }
}

const deleteSelected = e => {

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

