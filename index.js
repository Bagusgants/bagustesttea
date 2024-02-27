const isPalindrome = require('pemeriksa-palindrom-sederhana');

const teks = "kasur";
if (isPalindrome(teks)) {
  console.log(`${teks} adalah palindrom.`);
} else {
  console.log(`${teks} bukan palindrom.`);
}
