const jokeEl = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

get_joke.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // calling the icanhaz api
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await jokeRes.json();

  //   console.log(joke);

  jokeEl.innerHTML = joke.joke;
}
