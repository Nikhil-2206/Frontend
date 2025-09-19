const URL = "https://catfact.ninja/fact"; // direct CORS-friendly API
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    factPara.innerText = data.fact; // fixed typo
};



btn.addEventListener("click", getFacts);



