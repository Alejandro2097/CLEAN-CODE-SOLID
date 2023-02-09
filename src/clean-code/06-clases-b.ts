(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface personProps {
        name     : string; 
        gender   : Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;
        constructor({name, gender, birthdate}: personProps){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate
        }
    }


    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date
        ) {
            super(email, role, name, gender, birthdate );
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings });


})();