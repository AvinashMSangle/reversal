const rootEl = document.querySelector("html");
const imgEl = document.querySelector("span img");

function handleToggleTheme(){
    rootEl.classList.toggle("dark-theme")
    if(rootEl.classList.contains("dark-theme")) {
        imgEl.src ="";
    }else{
        imgEl.src ="";
    }
}


function handleToggleTheme() {}

export default handleToggleTheme;