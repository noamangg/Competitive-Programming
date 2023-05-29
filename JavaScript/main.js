var isPalindrome = function (x) {
    let z = x.toString();

    for (let i = 0; i < Math.floor(z.length / 2); i++) {
        if (z[i] !== z[z.length - i - 1])
            return false;
    }
    return true;
};
var isPalindromen = function (x) {
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};

// /////////////////////

let arrRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var romanToInt = function (s) {
    s = s.split("");
    let sum = 0;
    if (s.length === 1)
        return convert(s[0]);
    for (let i = 0; i < s.length - 1; i++) {
        if (arrRoman.indexOf(s[i]) < arrRoman.indexOf(s[i + 1]))
            sum -= convert(s[i]);

        else
            sum += convert(s[i]);

        if (i === s.length - 2)
            sum += convert(s[i + 1]);
    }
    return sum;
};
function convert(symbol) {
    switch (symbol) {
        case "I": return 1; break;
        case "V": return 5; break;
        case "X": return 10; break;
        case "L": return 50; break;
        case "C": return 100; break;
        case "D": return 500; break;
        case "M": return 1000; break;
        default: return 0;
    }
}
/////////////////////////////////////


// var longestCommonPrefix = function(strs) {
//     let flag = true;
//     let first = strs[0] || "";
//     for(let i = 0; i < strs[0].length; i++) {
//         for(let j = 1; j < strs.length; j++) {
//             if(! strs[j].startsWith(first)) {
//             flag = false;
//             break;
//             }
//         }
//         if(!flag) {
//             first = first.substring(0, first.length - 1);
//             flag = true;
//         }
//     }


// return first;
// };

var longestCommonPrefix = function (strs) {

    let first = strs[0] || "";
    for (let i = 0; i < strs.length; i++) {
        let firstElement = strs[i] || "";
        while (!(firstElement.startsWith(first)) && first !== "")
            first = first.substring(0, first.length - 1);
    }

    return first;
};


// console.log(longestCommonPrefix([]));

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


var plusOne = (digits) => (BigInt(digits.join("")) + 1n).toString().split("");


///////////////////////////////////

var strStr = (haystack, needle) => haystack.indexOf(needle);

////////////

// var removeElement = (nums, val) => nums.filter((e) => e !== val);
// var removeElement = function (nums, val) {
//     nums = nums.filter((e) => e !== val);
//     return nums;
//   };
function removeElement(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
}

////////////

// var lengthOfLastWord = (s) => s.split(" ")[s.split(" ").length - 1].length;
var lengthOfLastWord = function (s) {
    let i = s.length - 1, count = 0;
    while (s[i] === " ") {
        i--;
    }
    while (s[i] !== " " && i >= 0) {
        count++;
        i--;
    }
    return count;

}


///////////////////////

// var mySqrt = function(x) {
//     let i = 1;
//     let count = 0;
//     while(x - i >= 0) {
//         x = x - i;
//         i+= 2;
//         count++
//     }
//     return count;
// };
// var mySqrt = function(x) {
//     if(x ===0)
//     return 0;
//     if(x === 1 || x === 2)
//     return 1;
//     for(let i = 1; i <= x / 2; i++) {
//         if(i * i >= x) {
//             if(i * i > x)
//             return i - 1;
//         return i;
//         } 
//     }
//     return 1;
// };

///////////////////

var addBinary = function (a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    let d;
    let c = new Array(a.length > b.length ? a.length : b.length);
    let curry = '0';
    for (let i = 0; i < c.length; i++) {
        if (a[i] === '0' && b[i] === '0') {
            c[i] = curry;
            curry = '0';
        }
        else if (a[i] === '1' && b[i] === '1') {
            c[i] = curry;
            curry = '1';
        }
        else {
            if (curry === '1')
                c[i] = '0';
            else
                c[i] = '1';
        }
    }
    if (curry === '1')
        d = new Array(...c, curry);
    else
        d = new Array(...c);

    return d.reverse().join("");
}

console.log(addBinary("1010", "1011"));