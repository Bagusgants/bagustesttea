function isPalindrome(str) {
    // Ubah ke huruf kecil dan hapus karakter non-alfanumerik
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
    // Membalikkan string dan membandingkannya dengan yang asli
    return str === str.split('').reverse().join('');
  }
  
  module.exports = isPalindrome;
  