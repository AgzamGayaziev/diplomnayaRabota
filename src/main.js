var theKEY = require('./content');
const NodeRSA = require('node-rsa');
var CryptoJS = require('crypto-js');

//aes
if(document.getElementById("button_aes-crypt")!=null){

    var buttonAES = document.getElementById("button_aes-crypt");

    var buttonAESDecrypt = document.getElementById("button_aes-decrypt");

function cryptAEStext(){
    var messageAES = document.getElementById("message_aes").value;
    console.log(messageAES);
    var ciphertext = CryptoJS.AES.encrypt(messageAES, theKEY).toString();
    console.log(ciphertext);

    document.getElementById("message_aes-crypt").innerHTML =ciphertext;
}

function decryptAEStext(){
    var messageAESCrypt = document.getElementById("message_aes-message--crypt").value;
    console.log(messageAESCrypt);
    var bytes  = CryptoJS.AES.decrypt(messageAESCrypt, theKEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    document.getElementById("message_aes-decrypt").innerHTML = originalText;
}
buttonAES.addEventListener("click",cryptAEStext,false);
buttonAESDecrypt.addEventListener("click",decryptAEStext,false);
}

///////////////////////////////////////////
//rabbit

if (document.getElementById("button_rabbit-crypt")!=null){

    var buttonRabbit = document.getElementById("button_rabbit-crypt");


var buttonRabbitDecrypt = document.getElementById("button_rabbit-decrypt");



function cryptRabbittext (){
    
    var messageRabbit = document.getElementById("message_rabbit").value;
 
    var ciphertextR = CryptoJS.Rabbit.encrypt(messageRabbit, theKEY).toString();

    document.getElementById("message_rabbit-crypt").value = ciphertextR;

}
function decryptRabbittext(){
    var messageRabbitCrypt = document.getElementById("message_rabbit-message--crypt").value;

    var bytesR  = CryptoJS.Rabbit.decrypt(messageRabbitCrypt, theKEY);
    var originalTextR = bytesR.toString(CryptoJS.enc.Utf8);

    document.getElementById("message_rabbit-decrypt").value=originalTextR;
}

buttonRabbit.addEventListener("click",cryptRabbittext,false);
buttonRabbitDecrypt.addEventListener("click",decryptRabbittext,false);
}
///////////////////////////////////
///////////RC4
if(document.getElementById("message_rc4")!=null){
    var buttonRc4 = document.getElementById("button_rc4-crypt");


    var buttonRc4Decrypt = document.getElementById("button_rc4-decrypt");
    
    
    
    function cryptRc4text (){
        
        var messageRc4 = document.getElementById("message_rc4").value;
     
        var ciphertextRc4 = CryptoJS.RC4.encrypt(messageRc4, theKEY).toString();
    
        document.getElementById("message_rc4-crypt").value = ciphertextRc4;
    
    }
    function decryptRc4text(){
        var messageRc4Crypt = document.getElementById("message_rc4-message--crypt").value;
    
        var bytesRc4  = CryptoJS.RC4.decrypt(messageRc4Crypt, theKEY);
        var originalTextRc4 = bytesRc4.toString(CryptoJS.enc.Utf8);
    
        document.getElementById("message_rc4-decrypt").value=originalTextRc4;
    }
    
    buttonRc4.addEventListener("click",cryptRc4text,false);
    buttonRc4Decrypt.addEventListener("click",decryptRc4text,false);

}

///////////////////////////////////
////////////rsa

if(document.getElementById("message_rsa-message--crypt")!=null){
    var buttonRsaCrypt = document.getElementById("button_rsa-crypt");
    var buttonRsaDecrypt = document.getElementById("button_rsa-decrypt");
    const key = new NodeRSA({b: 512});
    function encryptRsa(){
        const text = document.getElementById("message_rsa").value;
        const encrypted = key.encrypt(text, 'base64');
        document.getElementById("message_rsa-crypt").value = encrypted;
    } 

    function decryptRsa(){
        var encryptText = document.getElementById("message_rsa-message--crypt").value;
        const decrypted = key.decrypt(encryptText, 'utf8');
        document.getElementById("message_rsa-decrypt").value = decrypted;
        console.log('decrypted: ', decrypted);
    }
    buttonRsaCrypt.addEventListener("click",encryptRsa,false);
    buttonRsaDecrypt.addEventListener("click",decryptRsa,false);

    }