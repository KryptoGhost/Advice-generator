//use async to return a promise using try and catch
//i made some changes when i was trying out out git branching

const adviceNum = document.getElementById("addy");
const adivce = document.querySelector(".advice");
const btn = document.querySelector(".btn");
const url = "https://api.adviceslip.com/advice";

async function fetchAdvice() {

    adviceNum.innerHTML = "...";
    adivce.innerHTML = "wait a minute...";

    try {
        const fetchit = await fetch(url).then(res => res.json());

        setTimeout(() => {
            const adviceObj = fetchit.slip
            const {advice, id } = adviceObj

            adviceNum.innerHTML = `${id}`
            adivce.innerHTML = advice
        }, 1000)

    } catch(error) {
        adivce.innerHTML = " An unknown error occured"
    }
}

btn.addEventListener("click", () => fetchAdvice())