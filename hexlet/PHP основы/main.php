

    // BEGIN (write your solution here)
    function result($a, $b, $c, $d){
        if (($a == $c) && ($b == $d)) {
            return 2;
        }elseif (($a == $c) || ($a == $d)) {
            return 1;
        }elseif (($b == $c) || ($b == $d)){
            return 1;
        }
        else{
            return 0;
        }
    }
    // END


result(1, 2, 1, 2); // 1:2 - реальный счет, 1:2 - предполагаемый
result(1, 3, 1, 2); // 1:3 - реальный счет, 1:2 - предполагаемый
result(4, 3, 0, 0); // 4:3 - реальный счет, 0:0 - предполагаемый
