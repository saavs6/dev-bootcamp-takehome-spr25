console.log("hello world");

function openLink(link){
    window.open(link, "_blank");
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const sound = document.getElementById("loberSound");
const loberImg = document.getElementById("lober");

btn1.addEventListener("click", () => {window.open("https://www.youtube.com/@hadopelagic-studios", "_blank");});
btn2.addEventListener("click", () => {window.open("https://sseguin2006.wixsite.com/eportfolio", "_blank");});

btn3.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
    loberImg.classList.remove("animate");
    void loberImg.offsetWidth;
    loberImg.classList.add("animate");
});