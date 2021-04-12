// Selecting
const resultDisplay = document.querySelector('#result');
const generateBtn = document.querySelector('#generate')

// code generate function
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

// generate code for function Codes
const uppercaseCode = arrayFromLowToHigh(65, 90); //Here I used ASCII (https://lh4.googleusercontent.com/1cPd0L10vghSgF_lJVGFabR01p85C5HFMp_urm3VxviDpXwWPtSwW0JJjX_gMSlLpLZS9dnDm88_dnuI5YUirtTljn2aWmbissShm_qGteEUrNHNeFaH5iV03wheyEuUce01IpWm)
const lowercaseCode = arrayFromLowToHigh(97, 122);
const numberCode = arrayFromLowToHigh(48, 57);
const symbolsCode = arrayFromLowToHigh(33, 47)

.concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126));


// setting the password
generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const password = generatePassword(
    characterAmount = 10,
    includeUppercase = true,
    includeNumbers = true,
    includeSymbols = true
  );
  resultDisplay.innerText = password; //Actual password display.
});

// Password Generating Function
let generatePassword = (characterAmount, includeUppercase, includeNumbers,
  includeSymbols
) => {
  let charCodes = lowercaseCode;
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCode);
  if (includeSymbols) charCodes = charCodes.concat(symbolsCode);
  if (includeNumbers) charCodes = charCodes.concat(numberCode);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};
