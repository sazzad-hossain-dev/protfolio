export const popupFromLeft = {
    hidden: { x: "-100%", opacity: 0, scale: 0.8 },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
        },
    },
};
export const popupFromRight = {
    hidden: { x: "100%", opacity: 0, scale: 0.8 }, // Start from the right
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
        },
    },
};

export const popupFromTop = {
    hidden: { y: "-10%", opacity: 0, scale: 0.8 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
        },
    },
};
