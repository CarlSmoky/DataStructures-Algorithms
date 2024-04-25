class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function totalMoney($n) {
        $result = 0;
        $step = 1;
        $initial = 1;
        
        for ($i = 1; $i <= $n; $i++) {
            $result += $initial;
            ++$initial;
            
            if ($i % 7 == 0) {
                ++$step;
                $initial = $step; 
            }
        }
        
        return $result;
    }
}