// //Task 1
// function propsCount(currentObject) {
//   return Object.keys(currentObject).length;
// }
// let mentor = { 
//   course: "JS 2025", 
//   duration: 12,
//   direction: "Full stack development" 
// };

// console.log(propsCount(mentor));

// // Task 2
// let book = {
//    title: "1984",
//    author: "George Orwell",
//    yearPublished: 1949,
//    genre: "Dystopian",
//    isAvailable: true
// };

// // Функція приймає об'єкт і повертає масив
// function showProps(obj) {
//   // Масив ключів
//   let properties = Object.keys(obj);
//   // Виведення масиву
//   console.log("Властивості об'єкта:", properties);
//   // Отримання масиву 
//   let values = Object.values(obj);
//   // Виведення масиву
//   console.log("Значення властивостей:", values);
// }
// // Виклик функції
// showProps(book);

// // Task 3
// //клас Person
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   // Виведення повного імені
//   showFullName() {
//     return `${this.surname} ${this.name}`;
//   }
// }

// // Наслідуввання від Person
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   //Додатковий параметр — по-батькові
//   showFullName(midleName) {
//     return `${this.surname} ${this.name} ${midleName}`;
//   }

//   // Поточний курс
//   showCourse() {
//     const currentYear = new Date().getFullYear(); // Поточний рік
//     const course = currentYear - this.year;

//     // Перевірка
//     if (course >= 1 && course <= 6) {
//       return course;
//     } else if (course < 1) {
//       return "Ще не навчається";
//     } else {
//       return "Закінчив навчання";
//     }
//   }
// }

// // Приклад використання:
// const stud1 = new Student("Nazarii", "Horbachuk", 2023);
// console.log(stud1.showFullName("Victorovych"));
// console.log("Current course: " + stud1.showCourse());

// // Task 4
// class Worker {
//   //поле experience
//   #experience = 1.2;

//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }

//   // без урахування досвіду
//   showSalary() {
//     const salary = this.dayRate * this.workingDays;
//     console.log(`${this.fullName} salary: ${salary}`);
//     return salary;
//   }

//   //з урахуванням досвіду
//   showSalaryWithExperience() {
//     const salary = this.dayRate * this.workingDays * this.#experience;
//     console.log(`${this.fullName} salary: ${salary}`);
//     return salary;
//   }

//   // Геттер
//   get showExp() {
//     return this.#experience;
//   }

//   // Сеттер
//   set setExp(value) {
//     this.#experience = value;
//   }
// }

// // працівники
// let worker1 = new Worker("Nazarii Horbachuk", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// console.log("\n");

// let worker2 = new Worker("Tom Jason", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// console.log("\n");

// let worker3 = new Worker("Anry Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();

// console.log("\n");

// // Масив працівників
// let workers = [worker1, worker2, worker3];

// // Сортування
// workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

// // Виведення результатів
// console.log("Sorted salary:");
// for (let worker of workers) {
//   console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// }
