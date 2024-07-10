var cryptList = ["enter", "imes", "ai", "ober", "ufat"];
var normalList = ["e", "i", "a", "o", "u"];

const lettersToEncrypt = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const lettersToDecrypt = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

document.getElementById("encryptButton").addEventListener("click", function() {
    var inputText = document.getElementById("cryptText").value;
    var encryptedText = 
encrypt(inputText);
    document.getElementById("outputResult").innerText = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    var inputText = document.getElementById("cryptText").value;
    var decryptedText = 
decrypt(inputText);
    document.getElementById("outputResult").innerText = decryptedText;
});

function 
encrypt(text) {
    return text.replace(/[eioua]/g, function(match) {
        return lettersToEncrypt[match];
    });
}

function 
decrypt(text) {
    for (var key in lettersToDecrypt) {
        text = text.replace(new RegExp(key, 'g'), lettersToDecrypt[key]);
    }
    return text;
}
