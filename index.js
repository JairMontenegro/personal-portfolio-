const flagsElement = document.getElementById("flagsc")


flagsElement.addEventListener("click",(e) => {
    console.log(e.target.parentElement.dataset.language)
})