const word = prompt("Write a word for know if she it is a palindrome: ")
let palindrome = ""

for(let i = word.length -1; i >= 0; i--) {
  palindrome += word[i]
}

if (word === palindrome) {
  alert("The word typed this is a palindrome")
} else {
  alert("The word typed not is a palindrome \n" +
  "word typed: " + word +
  "\nword inverted: " + palindrome)
}

