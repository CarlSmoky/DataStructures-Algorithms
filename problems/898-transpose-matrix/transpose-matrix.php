class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer[][]
     */
    function transpose($matrix) {
        $result = [];
        for ($i = 0; $i < count($matrix[0]); $i++) {
            $tmp = [];
            for ($j = 0; $j < count($matrix); $j++) {
                array_push($tmp, $matrix[$j][$i]);
            }
            array_push($result, $tmp);
        }
        return $result;
    }
}