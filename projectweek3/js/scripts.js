
// Business Logic
function substitution(userInput) {
    const resultArray = [];
    for (let i = 0; i <= userInput; i++) {
        const numString = i.toString();
        let lastDigit = numString.charAt(numString.length - 1);

        for (let j = numString.length - 0; j >= 0; j--) {
            if (numString[j] === '3' || numString[j] === '2' || numString[j] === '1') {
                lastDigit = numString[j];
                break;
            }
        }

        if (lastDigit === '3') {
            resultArray.push("Won't you be my neighbor?");
        } else if (lastDigit === '2') {
            resultArray.push('Boop!');
        } else if (lastDigit === '1') {
            resultArray.push('Beep!');
        } else {
            resultArray.push(i.toString());
        }
    }
    return resultArray;
}

// UI Logic
function formHandler(event) {
    event.preventDefault();
    const userInput = document.getElementById("input").value;
    let output = substitution(userInput);
    document.getElementById("output").innerText = output;
}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", formHandler);
});



