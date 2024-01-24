function isPalindrome(str) {
    
    function cleanString(input) {
      let result = '';
      for (let char of input) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
          result += char.toLowerCase();
        }
      }
      return result;
    }
  
    const cleanStr = cleanString(str);
  
    
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  

  