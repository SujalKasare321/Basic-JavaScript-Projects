// Imagine you are creating a magical sorting hat for a wizard school. 
// Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses
// (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12))
//  based on the length of their names.

function sortingHat(students) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        let name = students[i];
        let len = name.length;
        let house = "";

        if (len < 6) {
            house = "Gryffindor";
        } else if (len < 8) {
            house = "Hufflepuff";
        } else if (len < 12) {
            house = "Ravenclaw";
        } else {
            house = "Slytherin";
        }

        result.push({ name, house });
    }

    return result;
}


let studentNames = ["Harry", "Hermione", "Ron", "DracoMalfoy", "LunaLovegood"];
console.log(sortingHat(studentNames));
