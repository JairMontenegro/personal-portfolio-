const flagsElement = document.getElementById("flagsc");
const textsChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`)
    const text = await requestJson.json();

    for (const textsToChange of textsChange){
        const section = textsToChange.dataset.section;
        const value = textsToChange.dataset.value;

        textsToChange.innerHTML = text[section][value];
    }

};




flagsElement.addEventListener("click",(e) => {
    changeLanguage(e.target.parentElement.dataset.language)

})