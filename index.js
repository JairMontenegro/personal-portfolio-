const flagsElement = document.getElementById("flagsc")

const changeLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`)
    const text = await requestJson.json();

    console.log(text)
}

flagsElement.addEventListener("click",(e) => {
    changeLanguage(e.target.parentElement.dataset.language)

})