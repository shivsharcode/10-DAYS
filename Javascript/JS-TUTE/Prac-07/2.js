let newBtn = window.document.createElement('button') ;

newBtn.innerText =  'Click ' ;
console.log('button') ;

// node.append(elem) : add at the end of the node (inside)
// node.prepend(elem) : adds at the start of node (inside)
// node.before(elem)  : adds before the node (outside)
// node.after(elem)   : adds after the node (outside)

let div = document.querySelector('#first-div') ;
div.after(newBtn) ;


let newHeading = document.createElement('h1') ;
newHeading.innerText = 'JAVASCRIPT' ;
document.querySelector('body').prepend(newHeading) ;

// node.remove() : removes the node
newHeading.remove() ;

// div.remove() ;

