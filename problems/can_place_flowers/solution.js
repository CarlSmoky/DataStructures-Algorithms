/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 const canPlaceFlowers = (flowerbed, n) => {
    if (n === 0) return true;
    // iterate
    for (let i = 0; i < flowerbed.length; i++){
        if (flowerbed[i] === 0) {
            if ( !flowerbed[i - 1]  &&  !flowerbed[i + 1]) {
                n--;
                flowerbed[i] = 1;
                if (n === 0) return true;
            }
        }
    }
    // find 0, how to count 0? 
    return false;
};