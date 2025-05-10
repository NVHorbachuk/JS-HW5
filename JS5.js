function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}
let mentor = { 
  course: "JS 2025", 
  duration: 12,
  direction: "Full stsck development" 
};

console.log(propsCount(mentor));