class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxK($nums) {
        $arr = [];
        $maxnum = -1;
        foreach($nums as $n){
            if (isset($arr[-$n])){
                if (abs($n) > $maxnum){
                    $maxnum = abs($n);
                }
            }
            $arr[$n]=1;
        }
        return $maxnum;
    }
}