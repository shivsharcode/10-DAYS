let btn1 = document.getElementById('btn1') ;
const div1 = document.getElementById('div1') ;
const btn3 = document.getElementById('btn3') ;
const btn4 = document.getElementById('btn4') ;


btn1.onclick = () =>{
    console.log('btn1 was clicked') ;
}



div1.onmouseover = ()=>{
    console.log("You're inside div") ;
}


btn3.onclick = (evt)=>{
    console.log(evt) ;
    console.log(evt.type) ;
    console.log(evt.target) ;
    console.log(evt.clientX, evt.clientY) ;
}


btn4.addEventListener( 'click', ()=>{
    console.log('btn4 was clicked') ;
} )

btn4.addEventListener('click', (evt)=>{
    console.log(evt) ;
})

const handler3 = () =>{
    console.log('button5 was clicked -handler3') ;
}

btn5.addEventListener('click', ()=>{
    console.log('button5 was clicked -handler1') ;
} );

btn5.addEventListener('click', ()=>{
    console.log('button5 was clicked -handler2') ;
} );

btn5.addEventListener('click', handler3);

btn5.addEventListener('click', ()=>{
    console.log('button5 was clicked -handler4') ;
} );

// remove handler3 eventListener

btn5.removeEventListener('click', handler3) ;