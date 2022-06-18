const url = "https://icanhazdadjoke.com/";

const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetchDadJokes();
});

const fetchDadJokes = async () => {
  result.textContent = `Loading...`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok) {
      throw new Error("No content");
    }
    const data = await response.json();
    result.innerHTML = data.joke;
  } catch (error) {
    console.log(error);
    result.textContent = `There was an error...`;
  }
};

fetchDadJokes();
