class Solution {

    /**
     * @param String $word
     * @param String $ch
     * @return String
     */
    function reversePrefix($word, $ch) {
        $pos = strpos($word, $ch);
        if ($pos === false) {
            return $word;
        }
        $left = strrev(substr($word, 0, $pos + 1));
        $right = substr($word, $pos + 1);
        return $left . $right; 
    }
}