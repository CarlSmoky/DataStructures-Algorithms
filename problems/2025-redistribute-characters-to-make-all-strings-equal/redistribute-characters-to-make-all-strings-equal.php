class Solution {

    /**
     * @param String[] $words
     * @return Boolean
     */
    function makeEqual($words) {
        $count = count($words);
        if ($count === 1) {
            return true;
        }
        
        $str = implode('', $words);
        $symbols = array_count_values(str_split($str));
        
        foreach ($symbols as $symbol) {
            if ($symbol % $count !== 0) {
                return false;
            }
        }

        return true;
    }
}