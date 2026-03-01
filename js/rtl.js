//================ page rtl =========================//
const body = document.body;

const rtlBtn = document.querySelector('.rtl__btn');
const ltrBtns = document.querySelectorAll('.ltr__btn');

// load saved state
const savedDir = localStorage.getItem('page-direction');
if (savedDir === 'rtl') {
    setRTL();
} else {
    setLTR();
}

// RTL button click
if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
        setRTL();
        localStorage.setItem('page-direction', 'rtl'); 
    });
}

// LTR buttons click
ltrBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setLTR();
        localStorage.removeItem('page-direction'); 
    });
});

// ===== functions ===== //
function setRTL() {
    body.setAttribute('dir', 'rtl');
    body.classList.add('rtl');
    body.classList.remove('ltr');
}

function setLTR() {
    body.setAttribute('dir', 'ltr');
    body.classList.add('ltr');
    body.classList.remove('rtl');
}