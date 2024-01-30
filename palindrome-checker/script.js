const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = (input) => {
    const originalInput = input // for later output

    if (input === '') {
        alert('Please Input a value to check')
        return;
    }

    // Remove the previous result
    resultDiv.replaceChildren();

    const lowerCaseString = input.replace(/^A-Za-z0-9/gi, '').toLowerCase();
    const msgResult = `<strong>${originalInput}</strong> ${lowerCaseString === [...lowerCaseString].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = msgResult;
    resultDiv.append(pTag);

    // Show the result.
    resultDiv.classList.remove('hidden');
}

checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
})

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
});