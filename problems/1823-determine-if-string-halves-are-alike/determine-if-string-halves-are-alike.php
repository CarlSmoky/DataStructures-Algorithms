class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function halvesAreAlike($s) {
        $vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        $mid = strlen($s) / 2;
        
        $first = substr($s, 0, $mid);
        $second = substr($s, $mid);

        $countFirst = 0;
        $countSecond = 0;
        for ($i = 0; $i < $mid; $i++) {
            if (in_array($first[$i], $vowels)) {
                $countFirst++;
            }
            if (in_array($second[$i], $vowels)) {
                $countSecond++;
            }
        }
        return $countFirst === $countSecond;
    }
}