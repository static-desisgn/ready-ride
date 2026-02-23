gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to("#bike", {
    scrollTrigger: {
        trigger: ".ride-section",
        start: "top -220%",
        end: "bottom 340%",
        scrub: 1,
        markers: false
    },
    motionPath: {
        path: "#roadPath",
        align: "#roadPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 265
    },
    ease: "none"
});