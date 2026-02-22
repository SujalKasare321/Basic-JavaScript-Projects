// Imagine you have a string, and you need to create a new string that is a mirror image of the original.
// Write a function that appends the reversed version of the original string to itself.



function reverseString(str) {
    return [...str].reverse().join("");
}
function mirrorMirror(str) {
    return str + reverseString(str);
}


console.log(mirrorMirror("magic"));
