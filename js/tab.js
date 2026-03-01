// ====================== Tabs JS ====================== //
// All buttons & contents
const allButtons = document.querySelectorAll(".tab__button, .tab__button__2");
const autoButtons = document.querySelectorAll(".tab__button");
const tab2Buttons = document.querySelectorAll(".tab__button__2");
const tabContents = document.querySelectorAll(".tab-content");

let currentIndex = 0;
let autoSwitch;

// ---------- Activate a tab ---------- //
function activateTab(index) {
  allButtons.forEach(btn => {
    btn.classList.remove("text-primary1-600", "font-medium", "active", "border-primary1-600");
    btn.classList.add("border-[#e5e9eb]");
  });

  tabContents.forEach(content => content.classList.add("hidden"));

  const button = allButtons[index];
  button.classList.add("text-primary1-600", "font-medium", "active", "border-primary1-600");
  button.classList.remove("border-[#e5e9eb]");

  const tabId = button.getAttribute("data-tab");
  document.getElementById(tabId).classList.remove("hidden");

  currentIndex = index;
}

// ---------- Auto-switch click events (tab__button only) ---------- //
autoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = Array.from(allButtons).indexOf(btn);
    activateTab(index);
  });
});

// ---------- Manual click events (tab__button__2) ---------- //
tab2Buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = Array.from(allButtons).indexOf(btn);
    activateTab(index);
    if (autoSwitch) {
      clearInterval(autoSwitch);
      autoSwitch = null;
    }
  });
});

// ---------- Auto-switch function ---------- //
function startAutoSwitch() {
  if (autoButtons.length === 0) return;
  autoSwitch = setInterval(() => {
    let autoIndex = Array.from(autoButtons).indexOf(allButtons[currentIndex]);
    autoIndex = (autoIndex + 1) % autoButtons.length;
    const nextButton = autoButtons[autoIndex];
    const allIndex = Array.from(allButtons).indexOf(nextButton);
    activateTab(allIndex);
  }, 7000);
}

// ---------- Initialize ---------- //
if (tab2Buttons.length > 0) {
  const firstTab2Index = Array.from(allButtons).indexOf(tab2Buttons[0]);
  activateTab(firstTab2Index);
} else {
  startAutoSwitch();
}