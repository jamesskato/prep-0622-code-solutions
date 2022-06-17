var person = { firstName: 'James ', lastName: 'Kato', hobby: 'Coding' };
console.log(person);
var fullName = person.firstName + person.lastName;
console.log('The person\'s name is: ', fullName);
person.job = 'Coder';
console.log('The person\'s job is: ', person.job);
person.previousJob = 'Chemical Engineer';
console.log('This person\'s previous job was: ', person.previousJob);
console.log('The complete person object.', person);
