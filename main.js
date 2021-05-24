const greetingContainer = document.querySelector(".greeting");
const h6 = greetingContainer.querySelector("h6");
const input = greetingContainer.querySelector("input");
const actionBtn = greetingContainer.querySelector("button");
const mainContainer = document.querySelector(".main");
const btns = mainContainer.querySelectorAll("button");
const img = mainContainer.querySelector("img");
const dogStatus = mainContainer.querySelector("h6");

let dogName = "";

const handleGreeting = (e) => {
  e.preventDefault();
  if (input.value === null || input.value === "") {
    return alert("Please type dog's name");
  }
  h6.innerText = `I'm ${input.value}`;
  input.style.display = "none";
  actionBtn.innerText = "Start!";
  dogName = input.value;
  if (actionBtn.innerText === "Start!") {
    actionBtn.addEventListener("click", paintingDogBreed);
  }
};
const paintingDogBreed = (e) => {
  e.preventDefault();
  greetingContainer.classList.add("hide");
  mainContainer.classList.remove("hide");
  btns.forEach((btn) => btn.addEventListener("click", handleDogBreed));
};
const handleDogBreed = (e) => {
  const btnTarget = e.target;
  if (btnTarget.innerText === "Feed") {
    img.src = "img/feed.png";
    h6.innerText = `${dogName} love bread!`;
    btnTarget.classList.add("btnClicked");
  }
};

actionBtn.addEventListener("click", handleGreeting);
