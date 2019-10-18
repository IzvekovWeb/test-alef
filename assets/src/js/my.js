 
 
$(window).on('load resize',windowSize);
$('body').on('load resize',windowSize);

  function windowSize(){
    if ( $('body').width() > '1024' || $(window).width() > '1024' ){ 
      $('.collapse').collapse('show'); 
    } else if( $('body').width() <= '1024' || $(window).width() <= '1024'){ 
      $('.collapse').collapse('hide'); 
    }
}
 

function showLinks(){   
  var objJSON = JSON.parse(data);
  console.log(data);
}   
showLinks();