/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    let position = "0-0";
    const mapPos = {};
    mapPos[position] = 1;
    let arr = position.split("-")
    
    for (let direction of path) {
        let tmp = 0;
        switch (direction) {
            case "N":
                tmp = parseInt(arr[1] + 1)
                arr[1] = tmp;
                break
            case "S":
                tmp = parseInt(arr[1] - 1)
                arr[1] = tmp;
                break;
            case "E":
                tmp = parseInt(arr[0] + 1)
                arr[0] = tmp;
                break;
            case "W":
                tmp = parseInt(arr[0] - 1)
                arr[0] = tmp;
                break;
        }
        position = arr.join("-");
        if (mapPos[position]) return true;
        mapPos[position] = 1;
    }
    return false;
};