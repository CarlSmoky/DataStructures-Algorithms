/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    const history = new Set(["0,0"]);

    let coordinate = [0,0];
    for (const direction of path) {
        switch (direction) {
            case "N":
                coordinate[1] += 1;
            break;
            case "S":
                coordinate[1] -= 1;
            break;
            case "E":
                coordinate[0] += 1;
            break;
            case "W":
                coordinate[0] -= 1;
            break;
        }
        const newPos = coordinate.join(",");
        if (history.has(newPos)) return true;
        history.add(newPos);
    }
    return false;
};