
// SYNCHRONOUS PROG - sequence me code execute hoga

console.log("one") ;
console.log("two");
console.log("three") ;


// ASYNCHRONOUS

function hello(){
    console.log("hello") ;
}

setTimeout(hello, 2000);

setTimeout(() => {
    console.log("hi") ;
}, 3000);


console.log("bud") ;