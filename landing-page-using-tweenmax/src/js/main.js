TweenMax.to(".block-1", 2, {
				x: "-220",
				y: "-150",
				scale: "2.2",
				ease: Expo.easeInOut,
});
TweenMax.to(".block-2", 2, {
    x: "-200",
    y: "180",
    scale: "1",
    ease: Expo.easeInOut,
});

TweenMax.to(".block-3", 2, {
    x: "200",
    y: "300",
    scale: "1.5",
    ease: Expo.easeInOut,
});

TweenMax.to(".block-4", 2, {
    x: "400",
    y: "-150",
    scale: "1.5",
    ease: Expo.easeInOut,
});

TweenMax.to(".block-5", 2, {
    x: "-70",
    y: "-250",
    scale: "2.3",
    ease: Expo.easeInOut,
});

TweenMax.from(".bg-circle", 2.4, {
    scale: "0",
    ease: Expo.easeInOut,
});

TweenMax.from(".showreel", 1.6, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
    delay: 0.6,
});

TweenMax.from(".header", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0.6,
});

TweenMax.from(".main-img", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 1.5,
});

TweenMax.staggerFrom(
    ".detail > div",
    1,
    {
        opacity: 0,
        y: 60,
        ease: Power2.easeOut,
    },
    0.2
);

TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
});