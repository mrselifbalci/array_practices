/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts

  - Returns an array containing only the names of the who have attended AT LEAST 8 classes. (bigger than 8)
*/
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];

const eligibleForExam = (arr) => {
  let exam = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= 8) {
      exam.push(arr[i][0]);
    }
  }
  return exam;
};
console.log(eligibleForExam(attendances));
