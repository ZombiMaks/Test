<?php
// конвертируем с десятичной системв счю в шеснатыатиричную
// my
function colorConverter($numberOne = null, $numberTwo = null, $numberFhree = null) 
{
  if ($numberOne == 0){
    $numberOne .= '0';
  }else{
    $numberOne = dechex($numberOne);
  }
  if ($numberTwo == 0){
    $numberTwo .= '0';
  }else{
    $numberTwo = dechex($numberTwo);
  }
  if ($numberFhree == 0){
    $numberFhree .= '0';
  }else{
    $numberFhree = dechex($numberFhree);
  }
$result = '#' . $numberOne . $numberTwo . $numberFhree;
print $result;
}

colorConverter(34, 123, 0);

// author 1

function colorConverter1($numberOnel, $numberTwo, $numberFhree)
{
    print sprintf('#%02x%02x%02x', $numberOnel, $numberTwo, $numberFhree);
}

colorConverter1(34, 123, 0);

// 2

function colorConverter2($numberOne, $numberTwo, $numberFhree)
{
    $hex = [dechex($numberOne), dechex($numberTwo), dechex($numberFhree)];

    foreach ($hex as $key => $value) {
        if (strlen($value) == 1){
            $hex[$key] = "0$value";
        }
    }
    print '#' . implode('', $hex);
}

colorConverter2(34, 123, 0);
