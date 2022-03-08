function isPalindrome(s) {
    // remove all non alphanumeric charcaters and lowecasing
    s = s.toLowerCase().replace(/[\W_]/g, "")
    // creat a left and right pointer, initially at start and end of string
    let left = 0
    let right = s.length -1
    // while left less than right
    while(left < right){
        //if characters at left and right pointer are not equal return false
        if(s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
        return true
    }
    // return true


module.exports = isPalindrome;
