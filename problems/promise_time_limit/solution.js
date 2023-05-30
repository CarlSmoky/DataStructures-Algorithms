/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = (fn, t) => {
	return async (...args) => {
           const originalPromise = fn(...args);
           const rejectPromise=new Promise((resolve, reject)=>{ setTimeout(() => {
               reject("Time Limit Exceeded")
           }, t);
           });
          return Promise.race([originalPromise, rejectPromise]);  
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */