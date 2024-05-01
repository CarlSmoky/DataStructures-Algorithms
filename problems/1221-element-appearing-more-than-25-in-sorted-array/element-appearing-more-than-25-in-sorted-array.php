class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function findSpecialInteger($arr) {
        $char = [];

        foreach ($arr as $key => $value) {
            $char[$value] = ($char[$value] ?? 0) + 1;
        }

        foreach ($char as $key => $value) {
            if ($value > count($arr) * 0.25) {
                return $key;
            }
        }
    }
}