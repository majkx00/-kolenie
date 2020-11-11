var Animal = require('./animal');

class Dog extends Animal {

    constructor(name, sound) {
        super(name)
        this.sound = sound;
    }

    doSound(){
        return this.sound;
    }
}

module.exports = Dog;