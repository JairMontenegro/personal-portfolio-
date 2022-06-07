const flagsElement = document.getElementById("flagsc")

const textChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`)
    const text = await requestJson.json();

 for(textChange of textChange){
     console.log(textChange);
 }

}

flagsElement.addEventListener("click",(e) => {
    changeLanguage(e.target.parentElement.dataset.language)

})