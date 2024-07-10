var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

document.getElementById("encryptButton").addEventListener("click", function() {
    var inputText = document.getElementById("cryptText").value;
    var encryptedText = criptografar(inputText);
    document.getElementById("outputResult").innerText = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    var inputText = document.getElementById("cryptText").value;
    var decryptedText = descriptografar(inputText);
    document.getElementById("outputResult").innerText = decryptedText;
});

function criptografar(text) {
    return text.replace(/[eioua]/g, function(match) {
        return cifrasParaCriptografar[match];
    });
}

function descriptografar(text) {
    for (var key in cifrasParaDescriptografar) {
        text = text.replace(new RegExp(key, 'g'), cifrasParaDescriptografar[key]);
    }
    return text;
}
