let back_to_top_btn = document.getElementById('back-to-top-btn-id') ;

back_to_top_btn.onclick = function(){
    window.scrollTo( {
        top: 0 , 
        behavior: "smooth" 
    } ) ;
}