const pageLoad = async () => {
  let data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=33CMnTMxUkjhGlKagjFu3wNxnMdGMtUzcfx9h37N"
  ).then((response) => response.json());

  console.log(data);

  const rootE = document.getElementById("root");
  rootE.insertAdjacentHTML(
    "beforeend",
    `
  <h1>${data.title}</h1> 
  <p>${data.explanation}</p> 
  <img  src="${data.url}" />
  
  `
  );
};
window.addEventListener("load", pageLoad);
