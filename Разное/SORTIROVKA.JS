var descendingOrder = (1234567);
function descendingOrder(n){ return parseInt(String(n).split('').sort().reverse().join('')) }
console.log(Test.assertEquals(descendingOrder(1), 1));
Test.assertEquals(descendingOrder(111), 111)
Test.assertEquals(descendingOrder(15), 51)
