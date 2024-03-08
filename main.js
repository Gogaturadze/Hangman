let words = [
  "ცეცხლი",
  "მომავალი",
  "კლავიატურა",
  "ასაკი",
  "ხელთათმანი",
  "წვიმა",
  "კიბე",
  "ნაბიჯები",
  "სველდება",
  "ცურვა",
];
const randomIndex = Math.floor(Math.random() * words.length);
const randomString = words[randomIndex];

console.log(randomString);

let stringLength = randomString.length;
let currentGuess = "-".repeat(stringLength);
document.getElementById("word-display").textContent = currentGuess;

let count = Math.ceil(0.5 * randomString.length);
console.log(count);

let hint = document.getElementById("hint");

switch (randomString) {
  case words[0]:
    document.getElementById("hint").innerHTML =
      "მე არ ვარ ცოცხალი, მაგრამ ვიზრდები; ფილტვები არ მაქვს, მაგრამ ჰაერი მჭირდება; პირი არ მაქვს, მაგრამ წყალი მკლავს. Რა ვარ მე? ";
    break;
  case words[1]:
    document.getElementById("hint").innerHTML =
      "რას ვერ ხედავ, მაგრამ მუდმივად შენს თვალწინ არის? ";
    break;
  case words[2]:
    document.getElementById("hint").innerHTML =
      "რას აქვს გასაღებები, მაგრამ ვერ ხსნის საკეტებს?";
  case words[3]:
    document.getElementById("hint").innerHTML =
      "რა იზრდება, მაგრამ არ მცირდება? ";
    break;
  case words[4]:
    document.getElementById("hint").innerHTML =
      "რას აქვს ცერა და ოთხი თითი, მაგრამ არ არის ცოცხალი? ";
    break;
  case words[5]:
    document.getElementById("hint").innerHTML =
      "რა ადის სადრენაჟე მილს ქვემოთ, მაგრამ არ ჩამოდის სანიაღვრე მილით ზემოთ?";
    break;
  case words[6]:
    document.getElementById("hint").innerHTML =
      "რა ადის და ქვევით, მაგრამ ერთსა და იმავე ადგილას რჩება? ";
    break;
  case words[7]:
    document.getElementById("hint").innerHTML =
      "რა არის ის, რაც უფრო მეტს იღებ, მით მეტს ტოვებ? ";
    break;
  case words[8]:
    document.getElementById("hint").innerHTML =
      "რა მოხდება, თუ წითელ მაისურს ჩააგდებ შავ ზღვაში?";
    break;
  case words[9]:
    document.getElementById("hint").innerHTML =
      "რომელი სიტყვა გამოითქმის ერთნაირად, თუ თავდაყირა დგება?";
    break;
}

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

let restrict = 1;

function myFunction() {
  if (restrict == 1) {
    let array = [];
    for (let i = 0; i < randomString.length; i++) {
      array.push(randomString[i]);
    }
    let randomLetter = array[0];

    currentGuess = currentGuess.replace("-", randomLetter);
    document.getElementById("word-display").textContent = currentGuess;

    restrict--;
  } else {
    alert("მცდელობების რაოდენობა ამოიწურა");
  }
}
