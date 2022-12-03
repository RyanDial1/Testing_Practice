const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'bcdefghijklmnopqrstuvwxyza';

const isLower = (char) => {
    if(char !== char.toUpperCase() && char == char.toLowerCase()){
        return true;
    }
    return false;
};

const isUpper = (char) => {
    if(char !== char.toLowerCase() && char == char.toUpperCase()){
        return true;
    }
    return false;
}

const singleLowerCipher = (char) => { //shifts character to the right 
    const index = alphabet.indexOf(char);
    let cipherCharacter = cipher[index];
    return cipherCharacter;
};

const caesarCipher = (string) => {
    if (typeof string !== 'string'){
        return 'not a string';
    }
    let newString = '';

    for(let i = 0; i < string.length; i++){
        if(isUpper(string[i]) || isLower(string[i])){
            if(isLower(string[i])){
                newString += singleLowerCipher(string[i]);
            } else if(isUpper(string[i])){
                newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase();
            }
        }else {
            newString += string[i];
        }
    }
    return newString;
};

export default caesarCipher;
