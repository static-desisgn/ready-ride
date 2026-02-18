//=============== img move animation ==================//
const tilts = document.querySelectorAll(".tilt");
tilts.forEach(img => {
    img.addEventListener("mousemove", event => {
        const { top, bottom, left, right } = img.getBoundingClientRect();
        const width = right - left;
        const height = bottom - top;
        const middleX = width / 2;
        const middleY = height / 2;
        const offsetX = (event.clientX - left - middleX) / middleX;
        const offsetY = (middleY - (event.clientY - top)) / middleY;
        img.style.transform = `perspective(1000px) rotateY(${offsetX * 7}deg) rotateX(${offsetY * 7}deg) scale3d(1,1,1)`;
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    });
});
