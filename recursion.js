/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === 0) return 0;

  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (words.length === 0 || i === words.length) return 0;

  let curr_word_length = words[i].length;

  return Math.max(curr_word_length, longest(words, i + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = [], i = 0) {
  if (str.length === i) return out.join('');

  if (i % 2 === 0) out.push(str[i]);

  return everyOther(str, out, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i >= str.length / 2) return true; // if it's gotten past the following check return true

  if (str[i] !== str[str.length - 1 - i]) return false;

  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out = [], i = 0) {
  if (i === str.length) return out.join('');

  out.push(str[str.length - 1 - i]);

  return revString(str, out, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {
  for (let k in obj) {
    if (typeof obj[k] === "string") {
      out.push(obj[k]);
    } else if (typeof obj[k] === "object" && obj[k] !== null) {
      gatherStrings(obj[k], out);
    }
  }

  return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) return -1;

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];

  if (middleVal === val) {
    return middleIdx;
  } else if (val < middleVal) {
    rightIdx = middleIdx - 1;
    return binarySearch(arr, val, leftIdx, rightIdx);
  } else {
    leftIdx = middleIdx + 1;
    return binarySearch(arr, val, leftIdx, rightIdx);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
