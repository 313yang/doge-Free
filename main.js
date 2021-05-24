const greetingContainer = document.querySelector(".greeting");
const h6 = greetingContainer.querySelector("h6");
const input = greetingContainer.querySelector("input");
const actionBtn = greetingContainer.querySelector("button");
const mainContainer = document.querySelector(".main");
const btns = mainContainer.querySelectorAll("button");
const img = mainContainer.querySelector("img");
const dogStatus = mainContainer.querySelector("h6");

let dogName = "";
let count = 0;

const handleGreeting = (e) => {
  e.preventDefault();
  if (input.value === null || input.value === "") {
    return alert("Please type dog's name");
  }
  document.querySelector("h4").innerText = "";
  h6.innerText = `Hi~ I'm ${input.value}!`;
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
  console.log(count);
  if (btnTarget.innerText === "Feed") {
    img.src = "img/feed.png";
    dogStatus.innerText = `${dogName} love bread!`;
    btnTarget.className = "btnClicked";
    btns[1].className = "btnNotClicked";
    btns[2].className = "btnNotClicked";
    btns[3].className = "btnNotClicked";
    count++;
  } else if (btnTarget.innerText === "Bath") {
    img.src = "img/bath.jpg";
    dogStatus.innerText = `${dogName} hate water...`;
    btnTarget.className = "btnClicked";
    btns[0].className = "btnNotClicked";
    btns[2].className = "btnNotClicked";
    btns[3].className = "btnNotClicked";
    count++;
  } else if (btnTarget.innerText === "Pat") {
    img.src = "img/pat.png";
    dogStatus.innerText = `${dogName} love you~~`;
    btnTarget.className = "btnClicked";
    btns[0].className = "btnNotClicked";
    btns[1].className = "btnNotClicked";
    btns[3].className = "btnNotClicked";
    count++;
  } else if (btnTarget.innerText === "Walk") {
    img.src = "img/walk.png";
    dogStatus.innerText = `Yoo-hoo~~ ${dogName} happy!`;
    btnTarget.className = "btnClicked";
    btns[0].className = "btnNotClicked";
    btns[1].className = "btnNotClicked";
    btns[2].className = "btnNotClicked";
    count++;
  }
  if (count >= 20) {
    img.src = "img/stop.png";
    dogStatus.innerText = `${dogName} is too tired...`;
  }
};

actionBtn.addEventListener("click", handleGreeting);
