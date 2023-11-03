// Business Logic
function substitution(userInput) {
    const resultArray = [];
    for (let i = 0; i <= userInput; i++) {
        const numString = i.toString();
        let highPriority = '0';  

        for (let j = numString.length - 1; j >= 0; j--) {
            if (numString[j] === '3') {
                highPriority = '3';
                break;  
            } else if (numString[j] === '2' && highPriority !== '3') {
                highPriority = '2';
            } else if (numString[j] === '1' && highPriority !== '3' && highPriority !== '2') {
                highPriority = '1';
            }
        }

        if (highPriority === '3') {
            resultArray.push("Won't you be my neighbor?");
        } else if (highPriority === '2') {
            resultArray.push('Boop!');
        } else if (highPriority === '1') {
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
