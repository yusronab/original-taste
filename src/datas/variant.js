export const routeVariants = {
    initial: {
        y: "100vh",
    },
    final: {
        y: "0vh",
        transition: {
            type: "spring",
            mass: 0.4,
        },
    },
};

export const childVariants = {
    initial: {
        opacity: 0,
        y: "50px",
    },
    final: {
        opacity: 1,
        y: "0px",
        transition: {
            duration: 0.5,
            delay: 0.5,
        },
    },
};

export const containerVariants = {
    initial: {
        opacity: 0,
        x: '100vw',
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
        },
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
    },
};

export const itemVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            delay: 0.5,
        },
    },
};

export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};