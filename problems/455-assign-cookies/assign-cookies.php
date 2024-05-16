class Solution {

    /**
     * @param Integer[] $g
     * @param Integer[] $s
     * @return Integer
     */
    function findContentChildren($g, $s) {
        $count = 0;
        $gIndex = 0;
        $sIndex = 0;
        sort($g);
        sort($s);
        while ($gIndex < count($g) && $sIndex < count($s)) {
            if ($s[$sIndex] >= $g[$gIndex]) {
                $count ++;
                $gIndex ++;
            }
            $sIndex ++;
        }
        return $count;
    }
}