// Class,(constructor,prototype,static function)

class student{
    constructor(name,age,department){
        this.name = name;
        this.age = age;
        this.department = department;

        console.log(this.name,this.age,this.department);
    }
    
}

class student2 extends student{
   constructor(){
    super()
    console.log("HI This is student 2");
   } 
}

new student2("Hasan",22,"Computer");