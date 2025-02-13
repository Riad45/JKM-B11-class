
const student= {

fullName : "Khalid Hasan Riad",
ID: 911,
section: "D" ,
currentCourse : {
    course1 : {
        courseName: "HCI",
        courseTeacher: "FBI",
        courseCode:"SE454"
    },

    course2 : {
        courseName: "NA",
        courseTeacher: "xxx",
        courseCode:"SE478"
    }


},
dept: "SWE" ,
university: "DIU"

}

console.log(student);

student.university = "Daffodil";

console.log(student);

const course2Key = Object.keys(student.currentCourse.course2);

console.log(course2Key);

const valueOfCourse2 = Object.values(student.currentCourse.course2);

console.log(valueOfCourse2 );

// let str = "hioooptop"

// console.log(str.indexOf("i",3));