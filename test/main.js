const reverse = (str) => {
  let strLen = str.length - 1;
  let resultReverse = '';
  while ( strLen >= 0 ){
    resultReverse += str[strLen];
    strLen--;
  }
  console.log(resultReverse);
}

reverse('hello, world!'); // !dlrow ,olleh
reverse('cat')//.toBe('tac');
reverse('tac');//.toBe('cat');
reverse('');//toBe('');
reverse('aaaa');//.toBe('aaaa');
