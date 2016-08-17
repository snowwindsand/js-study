import Father from './father.js';

class Child extends Father {
    constructor() {
        super();
        this.name = 'child';
        this.age = 12;
    }

    print() {
        this.address = 'test';
        super.print();
    }

}

export default Child;