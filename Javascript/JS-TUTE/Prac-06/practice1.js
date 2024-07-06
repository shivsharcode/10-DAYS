// Create a H2 heading element with text - "Hello JavaScript". Append  "Nice to Know You" to this text using JS.

let heading = window.document.getElementById('heading') ;

heading.innerText = heading.innerText + " Nice to meet You" ;



let boxes = window.document.getElementsByClassName('box') ;

let count = 1 ;
for(let i of boxes){
    i.innerText = `new value ${count++}` ;
}

