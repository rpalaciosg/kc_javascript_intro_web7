function FooBarQuix (number) {

    let result = number + ' -> ';

    if ( (number % 3) === 0 ) { result += 'Foo'; }  
    if ( (number % 5) === 0 ) { result += 'Bar'; } 
    if ( (number % 7) === 0 ) { result += 'Quix'; } 

    let arrNumber = Array.from(number.toString());
    arrNumber.forEach(element => {
        // result += '3' ? element.replace(/3/, 'Foo') : '5' ? element.replace(/5/, 'Bar') : '7' ? element.replace(/7/, 'Quix') : '';
        result +=element ? element.replace(/3/, 'Foo').replace(/5/,'Bar').replace(/7/,'Quix') : ' ';     
    });      
    return result;
} 

console.log(FooBarQuix(1));
console.log(FooBarQuix(2));
console.log(FooBarQuix(3));
console.log(FooBarQuix(4));
console.log(FooBarQuix(5));
console.log(FooBarQuix(6));
console.log(FooBarQuix(7));
console.log(FooBarQuix(8));
console.log(FooBarQuix(9));
console.log(FooBarQuix(10));
console.log(FooBarQuix(13));
console.log(FooBarQuix(15));
console.log(FooBarQuix(21));
console.log(FooBarQuix(33));
console.log(FooBarQuix(35));
console.log(FooBarQuix(51));
console.log(FooBarQuix(53));
console.log(FooBarQuix(75));
console.log(FooBarQuix(98));
console.log(FooBarQuix(100));
