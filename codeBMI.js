const result = function(BMI){
    if (BMI<25){
        console.log('this person is normal')
    }
    else if (BMI>25 || BMI <30){
        console.log('this person is overweight');

    }
    else{
        console.log('this person is obesity');
    }
}

const person1={
    fullname:'ahmed zaki',
    age:20,
    height:1.80,
    mass:80,
    calculBMI : function (){
        this.BMI = this.mass / this.height**2;
        return this.BMI;

    },
    resul: result(this.BMI)



};
const person2={
    fullname:'saad ali',
    age:20,
    height:1.60,
    mass:70,
    calculBMI : function (){
        this.BMI = this.mass / (this.height**2);
        return this.BMI;

    },
    resul:result(this.BMI)



};

person1.calculBMI();
person2.calculBMI();
console.log(`${person1.fullname} have ${person1.BMI} est la resulat is ${this.resul}`);