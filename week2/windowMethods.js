// using the prompt method

// let needAnswer = prompt("At tonight's movie night we're watching \"How to Train Your Dragon 2.\" \n Will you be coming?"); 
//add backslash to turn quotes into characters, \n makes new line

let needAnswer = prompt(`At tonight's movie night we're watching "How to Train Your Dragon 2." \n Will you be coming?`); // input answer is always considered string not a boolean or number

if(needAnswer == "Yes") {
    alert("Yay! Can't wait to see you there :)");
} else {
    alert("Aw :( \n Would you rather watch a different movie?");
}
