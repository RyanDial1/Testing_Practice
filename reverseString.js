const reverseString = (string) => {
    if (typeof string === 'string'){
        const reversed = string.split('').reverse().join('');
        return reversed;
    }
    return 'not a string';
};

export default reverseString;