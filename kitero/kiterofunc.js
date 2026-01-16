function Student(name){
  this.name = name  
  this.askedQestionNumber = 0;
};

Student.prototype.askedQuestion = function(){
    console.log("???");
    this.askedQestionNumber++;
};



const stu1 = new Student("Gergő");
console.log(stu1)
stu1.askedQuestion();
console.log(stu1)

const stu2 = new Student("Bertalan");
console.log(stu2);


function StudentWithWork(name){
    Student.call(this,name)
    this.workDone = 0;
}


Object.setPrototypeOf(StudentWithWork.prototype,Student.prototype)

const stu3 = new StudentWithWork("Juglipuff");
stu3.askedQuestion();
console.log(stu3);

StudentWithWork.prototype.doWork = function(){
    this.workDone++;
}

stu3.doWork();
console.log(stu3);