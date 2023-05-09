/**
 * @param {string} s
 * @return {string}
 */

const vowels = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true,
    A : true,
    E : true,
    I : true,
    O : true,
    U : true,
}

const reverseVowels = (s) => {
    let arrString = [...s];
    //left
    let left = 0;
    //right
    let right = arrString.length - 1;
    while (left < right) {
        //if letter isn't vowel move
        if (!vowels[arrString[left]]) {
            left ++;
        }
        if (!vowels[arrString[right]]) {
            right --;
        }
        // if both letters are vowels
        if (vowels[s[left]] && vowels[s[right]]) {
            let tmpL = arrString[left];
            let tmpR = arrString[right];
            arrString[left] = tmpR;
            arrString[right] = tmpL;
            left ++;
            right --;
        }
    }
    return arrString.join('');
};