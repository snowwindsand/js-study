class Father {
    constructor() {
        this.name = 'father';
        this.age = 18;
        this._address = '';
    }

    print() {
        console.log('name->' + this.name + ';age->' + this.age + ';address->' + this._address);
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}

export default Father;