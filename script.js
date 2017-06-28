//select div and append image
//write a for loop
$('#1').prepend($('<img>',{class:'theImg',src:'/images/1.jpg'}));
$('#2').prepend($('<img>',{class:'theImg',src:'/images/2.jpg'}));
$('#3').prepend($('<img>',{class:'theImg',src:'/images/3.jpg'}));
$('#4').prepend($('<img>',{class:'theImg',src:'/images/4.jpg'}));
$('#5').prepend($('<img>',{class:'theImg',src:'/images/5.jpg'}));
$('#6').prepend($('<img>',{class:'theImg',src:'/images/6.jpg'}));
$('#7').prepend($('<img>',{class:'theImg',src:'/images/7.jpg'}));
$('#8').prepend($('<img>',{class:'theImg',src:'/images/8.jpg'}));
$('#9').prepend($('<img>',{class:'theImg',src:'/images/9.jpg'}));
$('#10').prepend($('<img>',{class:'theImg',src:'/images/10.jpg'}));
$('#11').prepend($('<img>',{class:'theImg',src:'/images/11.jpg'}));


  
    
    //create handlers for hover
    var handlerIn = function(){
        $(this).animate({opacity:0.6},200);
    }
    var handlerOut = function(){
        $(this).animate({opacity:1},200);
    }

    
    //mouse move on to highlight the images
    for (var i=1;i<12;i++){
    $('#'+i ).hover( handlerIn,handlerOut);
    }


    

//    //create handlers for click
//    var click = function(i){
//        $(".click").css("visibility","visible")
//        
//        if (i=1){
//        $(".click").prepend($('<img>',{class:'afterClick',src:"/images/1.jpg"}));
//        }
//        else if (i=2){
//        (".click").prepend($('<img>',{class:'afterClick',src:"/images/2.jpg"}));    
//        }
//        
//        
//        
//        
//        $(".afterClick").height($(".click").height());
//        };
//
//    //click to enlarge and click the second time to remove the div
//    for (var i=1;i<11;i++)
//        {
//            $('#'+i ).on('click',click);
//            
//            $(".click").click(
//                function(){
//                 $(".click").css("visibility","hidden");
//                 $(".afterClick").remove();})  
//            
//          
//        };
    







    //click to expand the images

    var height=$(".container").height();



        $( "#1").click(function() {
              $(".click").css("visibility","visible")
              .prepend($('<img>',{class:'afterClick',src:'/images/1.jpg'}));
              $(".afterClick").height($(".click").height() );
            });


   
        $(".click").click(function(){
              $(".click").css("visibility","hidden")
              $(".afterClick").remove()  
            });
       


        $( "#2").click(function() {
              $(".click").css("visibility","visible")
              .prepend($('<img>',{class:'afterClick',src:'/images/2.jpg'}));
              $(".afterClick").height($(".click").height());
            });

        $( "#3").click(function() {
                      $(".click").css("visibility","visible")
                      .prepend($('<img>',{class:'afterClick',src:'/images/3.jpg'}));
                      $(".afterClick").height($(".click").height());
                    });

        $( "#4").click(function() {
                      $(".click").css("visibility","visible")
                      .prepend($('<img>',{class:'afterClick',src:'/images/4.jpg'}));
                      $(".afterClick").height($(".click").height());
                    });

        $( "#5").click(function() {
                      $(".click").css("visibility","visible")
                      .prepend($('<img>',{class:'afterClick',src:'/images/5.jpg'}));
                      $(".afterClick").height($(".click").height());
                    });

        $( "#6").click(function() {
                      $(".click").css("visibility","visible")
                      .prepend($('<img>',{class:'afterClick',src:'/images/6.jpg'}));
                      $(".afterClick").height($(".click").height());
                    });

        $( "#7").click(function() {
                      $(".click").css("visibility","visible")
                      .prepend($('<img>',{class:'afterClick',src:'/images/7.jpg'}));
                      $(".afterClick").height($(".click").height());
                    });

        $( "#8").click(function() {
                              $(".click").css("visibility","visible")
                              .prepend($('<img>',{class:'afterClick',src:'/images/8.jpg'}));
                              $(".afterClick").height($(".click").height());
                            });

        $( "#9").click(function() {
                              $(".click").css("visibility","visible")
                              .prepend($('<img>',{class:'afterClick',src:'/images/9.jpg'}));
                              $(".afterClick").height($(".click").height());
                            });
        $( "#10").click(function() {
                              $(".click").css("visibility","visible")
                              .prepend($('<img>',{class:'afterClick',src:'/images/10.jpg'}));
                              $(".afterClick").height($(".click").height());
                            });

        $( "#11").click(function() {
                              $(".click").css("visibility","visible")
                              .prepend($('<img>',{class:'afterClick',src:'/images/11.jpg'}));
                              $(".afterClick").height($(".click").height());
                            });

        $( "#12").click(function() {
                              $(".click").css("visibility","visible")
                              .prepend($('<img>',{class:'afterClick',src:'/images/12.jpg'}));
                              $(".afterClick").height($(".click").height());
                            });


  