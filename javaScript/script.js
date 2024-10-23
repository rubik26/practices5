const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function checkPalindrome() {
  const input = textInput.value;

  if (!input) {
    alert("Please input a value");
    return;
  } else {
    const cleanedInput = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

    const reversed = cleanedInput.split('').reverse().join('');

    if (cleanedInput == reversed) {
      result.innerText = `${input} is a palindrome`;
    } else {
      result.innerText = `${input} is not a palindrome`;
    }
  }
}

checkButton.addEventListener("click", checkPalindrome);
