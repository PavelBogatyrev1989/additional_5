module.exports = function check(str, bracketsConfig) {
  if (str.length%2>0){
    return false;
  }
  openBrackets = '';
  closeBrackets = '';
  status = true;
  for (var i = 0; i < bracketsConfig.length; i++) {
    openBrackets = openBrackets + bracketsConfig[i][0].toString();
    closeBrackets = closeBrackets + bracketsConfig[i][1].toString();
  }
  stack = [];
  for (var i = 0; i <= str.length; i++) {

    if (openBrackets.indexOf(str[i]) >= 0 ) {
      stack.push(str[i]);
    } 
    else
      if (closeBrackets.indexOf(str[i]) >= 0) {
        if (stack.length == 0) {       
          status = false;
          break;
        } else if (openBrackets.indexOf(stack[stack.length - 1]) != closeBrackets.indexOf(str[i])) {
          status = false;
          break;

        } else {
          stack.pop()
        }
      }



  }
  return status;
}
