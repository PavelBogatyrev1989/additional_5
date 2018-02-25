module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) {
    return false;
  }
  openBrackets = '';
  closeBrackets = '';
  status = true;
  sameBrackets = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {

      sameBrackets.push(bracketsConfig[i][1]);
    }
    openBrackets = openBrackets + bracketsConfig[i][0].toString();
    closeBrackets = closeBrackets + bracketsConfig[i][1].toString();
  }
  stack = [];
  isRight = [false, false];
  index = -1;
  for (var i = 0; i <= str.length; i++) {
    if (sameBrackets.indexOf(str[i]) >= 0) {
      index = sameBrackets.indexOf(str[i]);
      if (openBrackets.indexOf(str[i]) >= 0 && !isRight[index]) {
        stack.push(str[i]);
        isRight[index] = true;
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
            isRight[index] = false;
            stack.pop()
          }
        }
    } else {
      if (openBrackets.indexOf(str[i]) >= 0) {
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
  }
  return status;
}
