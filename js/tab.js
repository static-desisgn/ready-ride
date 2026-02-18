const buttons = document.querySelectorAll(".tab__button");
const contents = document.querySelectorAll(".tab-content");

let currentIndex = 0;
let autoSwitch;

function activateTab(index) {

  buttons.forEach(btn => {
    btn.classList.remove("text-primary1-600", "font-medium", "active");
  });

  contents.forEach(content => {
    content.classList.add("hidden");
  });

  const button = buttons[index];
  button.classList.add("text-primary1-600", "font-medium", "active");

  const tabId = button.getAttribute("data-tab");
  document.getElementById(tabId).classList.remove("hidden");

  currentIndex = index;
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {

    clearInterval(autoSwitch); 
    activateTab(index);
    startAutoSwitch(); 

  });
});

function startAutoSwitch() {
  autoSwitch = setInterval(() => {

    let nextIndex = currentIndex + 1;

    if (nextIndex >= buttons.length) {
      nextIndex = 0;
    }

    activateTab(nextIndex);

  }, 4000);
}


activateTab(0);
startAutoSwitch();
