function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}

/*@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false*/

import { autobind } from 'core-decorators';

class Person {
    @autobind
    getPerson() {
        return this;
    }
}

let person = new Person();
let getPerson = person.getPerson;

getPerson() === person;