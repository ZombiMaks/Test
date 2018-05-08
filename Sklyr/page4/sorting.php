<?php

//Сортировка по значению

$bigCity = [
    'New York, NY' => 8175133,
    'Los Angeles, СА' => 3792621,
    'Chicago, IL' => 2695598,
    'Houston, ТХ' => 2100263,
    'Philadelphia, РА' => 1526006,
    'Phoenix, AZ' => 1445632,
    'San Antonio, ТХ' => 1323407,
    'San Diego, СА' => 1307402,
    'Dallas, ТХ' => 1197816,
    'SanJose, СА' => 945942
];

asort($bigCity);

$sum = 0;
print "<table>\n";
foreach ($bigCity as $city => $popylation){
   $sum += $popylation;
   print "<tr><td>$city</td><td>$popylation</td></tr>\n";
}
print "<tr><td>Total</td><td>$sum<td></tr>\n"; 
print "</table>";
print "\n\n\n";

// Сортировка по ключу

ksort($bigCity);

$sum = 0;
print "<table>\n";
foreach ($bigCity as $city => $popylation){
   $sum += $popylation;
   print "<tr><td>$city</td><td>$popylation</td></tr>\n";
}
print "<tr><td>Total</td><td>$sum<td></tr>\n"; 
print "</table>";
