/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = (paths) => {
    //map el and count
    const hashMap = {};
    for (let arr of paths) {
        hashMap[arr[0]] = hashMap[arr[0]] ? hashMap[arr[0]] + 1 : 1;
        hashMap[arr[1]] = hashMap[arr[1]] ? hashMap[arr[1]] + 1 : 1;
    }
    //get arr[1]
    const destinationCandidates = paths.map(el => el[1]);
    for (let city of destinationCandidates) {
      if (hashMap[city] === 1) return city;  
    }
};