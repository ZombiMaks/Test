<?php

 $urlDirect = '/image/';
function image($url, $alt='Cat', $width='600', $heigth='400')
{
   $urlPrint = '<html><head></head><body><img src="' . $GLOBALS['urlDirect'] . $url . '"'; 
   $altPrint = ' alt="' . $alt . '"';
   $widthPrint = ' width="' . $width . 'px"'; 
   $heigthPrint = ' heigth="' . $heigth . 'px"></body></html>';

   return $urlPrint . $altPrint . $widthPrint . $heigthPrint;
}

image('main.jpg');

function image1($url, $alt=null, $width=null, $heigth=null)
{
   $html = '<img src="' . $url . '"'; 

   if (isset($width)) {
       $html .= ' alt="' . $alt . '"';
   }
   if (isset($heigth)) {
       $html .= ' width="' . $width . 'px"'; 
   }
   if (isset($alt)) {
       $html .= ' heigth="' . $heigth . 'px"';
   }
   $html .= '/>';
   return $html;
}

image1('main.jpg', 'name', 300, 600);
