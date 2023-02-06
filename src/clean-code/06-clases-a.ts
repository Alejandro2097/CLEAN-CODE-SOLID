(() => {

    type Gender = 'M' | 'F';
    class Person {
        public name: string;
        public gender: string;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }
})