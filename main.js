let words = ["საქართველო", "პროგრამირება", "აიტისტეპი"];
const randomIndex = Math.floor(Math.random() * words.length);
const randomString = words[randomIndex];

console.log(randomString);

let stringLength = randomString.length;
let currentGuess = "-".repeat(stringLength);
document.getElementById("word-display").textContent = currentGuess;

let count = 2;

const alphabet = [
  "ა",
  "ბ",
  "გ",
  "დ",
  "ე",
  "ვ",
  "ზ",
  "თ",
  "ი",
  "კ",
  "ლ",
  "მ",
  "ნ",
  "ო",
  "პ",
  "ჟ",
  "რ",
  "ს",
  "ტ",
  "უ",
  "ფ",
  "ქ",
  "ღ",
  "ყ",
  "შ",
  "ჩ",
  "ც",
  "ძ",
  "წ",
  "ჭ",
  "ხ",
  "ჯ",
  "ჰ",
];

function createAlphabetButtons() {
  const alphabetCont = document.getElementById("alphabet-buttons");

  alphabet.forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter.toUpperCase();
    button.addEventListener("click", () => {
      if (randomString.includes(letter)) {
        for (let i = 0; i < randomString.length; i++) {
          if (randomString[i] === letter) {
            currentGuess =
              currentGuess.substring(0, i) +
              letter +
              currentGuess.substring(i + 1);
          }
        }
        document.getElementById("word-display").textContent = currentGuess;

        if (currentGuess === randomString) {
          alert(`თქვენ გამოიცანით სიტყვა: ${randomString}`);
          location.reload();
        }
      } else if (count == 0) {
        alert("სამწუხაროდ თქვენ ვერ გამოიცანით");
        location.reload();
      } else {
        alert(`არასწორი ასო-ბგერა, დარჩენილი მცდელობა ${count}`);
        count--;
      }
    });
    alphabetCont.appendChild(button);
  });
}
window.addEventListener("load", createAlphabetButtons);
