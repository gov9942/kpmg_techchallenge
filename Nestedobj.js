var testObject = {'x' : {'y' : {'z' : 'a'}}};
var testKey = 'x/y/z';
var testvalue = testFunction(testObject, testKey);
console.log(testvalue);
function testFunction(obj, tk) {
  var spltKey = tk.split('/');
  var tempobj = obj;
  for(var i = 0; i < spltKey.length; i++) {
    tempobj = tempobj[spltKey[i]];
    if(spltKey.length -1 == i) 
    {
      return tempobj;
    }
  }  
}