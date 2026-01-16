class Student{
    constructor(name){
        this.name = name
        this.askedQestioNumber = 0;
    }
    askedQestion(){
        console.log("???");
        this.askedQestioNumber++;
    }
}

const stu1 = new Student("Alma");
console.log(stu1);
stu1.askedQestion();
console.log(stu1);


class StudentWithWork extends Student{
    constructor(name){
        super(name)
        this.workDone = 0;
    }
    doWork(){
        this.workDone++;
    }
}

const stu2 = new StudentWithWork("Norbert Stu");
console.log(stu2);
stu2.doWork();
console.log(stu2)