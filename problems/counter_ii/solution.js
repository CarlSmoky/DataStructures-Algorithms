/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
    let cnt = init;
    return {
        increment: () => cnt += 1,
        reset: () => cnt = init,
        decrement: () => cnt -= 1
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */