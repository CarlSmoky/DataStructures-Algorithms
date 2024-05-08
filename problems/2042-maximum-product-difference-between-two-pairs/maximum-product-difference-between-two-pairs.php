class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxProductDifference($nums) {
        $max1 = PHP_INT_MIN;
        $max2 = PHP_INT_MIN;
        $min1 = PHP_INT_MAX;
        $min2 = PHP_INT_MAX;

        for($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] >= $max1) {
                $max2 = $max1;
                $max1 = $nums[$i];
            } else if ($nums[$i] >= $max2) {
                $max2 = $nums[$i];
            }

            if ($nums[$i] <= $min1) {
                $min2 = $min1;
                $min1 = $nums[$i];
            } else if ($nums[$i] <= $min2) {
                $min2 = $nums[$i];
            }
        }
        var_dump($max1, $max2, $min1, $min2);
        return $max1 * $max2 - $min1 * $min2;
    }
}