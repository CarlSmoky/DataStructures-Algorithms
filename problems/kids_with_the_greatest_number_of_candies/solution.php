class Solution {

    /**
     * @param Integer[] $candies
     * @param Integer $extraCandies
     * @return Boolean[]
     */
    function kidsWithCandies($candies, $extraCandies) {
        $max = max($candies);
        $result = [];
        for ($x = 0; $x < count($candies); $x++) {
            $tmp = $extraCandies + $candies[$x];
            if ($tmp >= $max) {
                array_push($result, true);
            } else {
                array_push($result, false);
            }
        }
        return $result;
    }
}