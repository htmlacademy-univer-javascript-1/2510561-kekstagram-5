function checksStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checksStringLength('проверяемая строка', 10);

function palindromeChecking (string) {
  string = string.replaceAll(' ','').toLowerCase();
  let invertedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString === string;
}

palindromeChecking('Топот');

function getsNumbers (string) {
  string = string.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(+string[i])) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

getsNumbers(-22.3);
