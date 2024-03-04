export function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
// const isPal = isPalindrome("abccba");
// console.log(isPal) ;




