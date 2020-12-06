/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
];
//SOLUTION WITH FOR LOOPS.
// const londonTravel = (arr, vehicle) => {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(vehicle) !== -1) {
//       array.push(arr[i][0]);
//     }
//   }
//   return array;
// };
// console.log(londonTravel(londonLocations, "air line"));

//SOLUTION WITH ARRAY METHODS

const londonTravel = (arr, vehicle) => {
  let array = arr.filter((a) => a.includes(vehicle)).map((b) => b[0]);
  return array;
};

console.log(londonTravel(londonLocations, "bus"));
