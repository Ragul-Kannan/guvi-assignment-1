 //Task-1
 let student=[{
     "fname":"cycle",
     "lname":"susa",
     "Dlist":["mari","salman","bharath"]
 }]
 
 for (let i=0;i<student.length;i++){
     console.log(student[i])
 }
 for (let x in student){
     console.log(x)
 }
 for (let y of student){
     console.log(y);
 }
 student.forEach(key=>(console.log(key)))


// task-2
const resume={
    "name":"ragul",
    "age":22,
    "dept":"CSE",
    "address":"abc street chennai",
    "ph_no":763694124,
    "skills":"FSD",
    "marks":{
        "10":"80%",
        "12":"60%",
        "B.E":"81%"
    },
    "experience":"Fresher"

}
console.log(resume.marks,resume.ph_no)
