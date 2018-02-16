/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btMain1 */
    $(document).on("click", "#btMain1", function(evt)
    {
        $("#divMain").css("background-color", "#F44336"); 
        $("#mainpage").css("background-color", "#F44336");
        $("#btMain").css("background-image", "url('images/back.jpg')");
        $("#btMain").css("background-size", "150%");
        $("#btMain").css("color", "#F44336");
        $("#logo").attr("src", "images/logo1.png");
         return false;
    });
    
        /* button  #btMain2 */
    $(document).on("click", "#btMain2", function(evt)
    {
        $("#divMain").css("background-color", "#FFEB3B"); 
        $("#mainpage").css("background-color", "#FFEB3B");
        $("#btMain").css("background-image", "url('images/back.jpg')");
        $("#btMain").css("background-size", "150%");
        $("#btMain").css("color", "#FFEB3B");
        $("#logo").attr("src", "images/logo1.png");
         return false;
    });
    
        /* button  #btMain3 */
    $(document).on("click", "#btMain3", function(evt)
    {
        $("#divMain").css("background-color", "#8BC34A"); 
        $("#mainpage").css("background-color", "#8BC34A");
        $("#btMain").css("background-image", "url('images/back.jpg')");
        $("#btMain").css("background-size", "150%");
        $("#btMain").css("color", "#8BC34A");
        $("#logo").attr("src", "images/logo1.png");
         return false;
    });
    
        /* button  #btMain4 */
    $(document).on("click", "#btMain4", function(evt)
    {
        $("#divMain").css("background-color", "#00bcd4"); 
        $("#mainpage").css("background-color", "#00bcd4");
        $("#btMain").css("background-image", "url('images/back.jpg')");
        $("#btMain").css("background-size", "150%");
        $("#btMain").css("color", "#00bcd4");
        $("#logo").attr("src", "images/logo1.png");
         return false;
    });
    
        /* button  #btMain5 */
    $(document).on("click", "#btMain5", function(evt)
    {
        $("#divMain").css("background-color", "#2196F3"); 
        $("#mainpage").css("background-color", "#2196F3");
        $("#btMain").css("background-image", "url('images/back.jpg')");
        $("#btMain").css("background-size", "150%");
        $("#btMain").css("color", "#2196F3");
        $("#logo").attr("src", "images/logo1.png");
         return false;
    });
    
        /* button  #btMain */
    $(document).on("click", "#btMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #btAmor */
    $(document).on("click", "#btAmor", function(evt)
    {
         /*global activate_page */
         activate_page("#Amor"); 
         return false;
    });
    
        /* button  #btPedreiro */
    $(document).on("click", "#btPedreiro", function(evt)
    {
         /*global activate_page */
         activate_page("#Pedreiro"); 
         return false;
    });
    
        /* button  #btGospel */
    $(document).on("click", "#btGospel", function(evt)
    {
         /*global activate_page */
         activate_page("#Gospel"); 
         return false;
    });
    
        /* button  #btNerd */
    $(document).on("click", "#btNerd", function(evt)
    {
         /*global activate_page */
         activate_page("#Nerd"); 
         return false;
    });
    
        /* button  #btPokemon */
    $(document).on("click", "#btPokemon", function(evt)
    {
         /*global activate_page */
         activate_page("#Pokemon"); 
         return false;
    });
    
        /* button  #btKpop */
    $(document).on("click", "#btKpop", function(evt)
    {
         /*global activate_page */
         activate_page("#Kpop");
         return false;
    });
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
         activate_page("#cantadas"); 
         return false;
    });
    
        /* button  #button_backPageMain */
    $(document).on("click", "#button_backPageMain", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #kpop1 */
    $(document).on("click", "#kpop1", function(evt)
    {
            var kpop = new Audio("audio/kpop1.wav");
            kpop.play();
         return false;
    });
    
        /* button  #kpop2 */
    $(document).on("click", "#kpop2", function(evt)
    {
        var kpop1 = new Audio("audio/kpop2.wav");
        kpop1.play();
         return false;
    });
    
        /* button  #kpop3 */
    $(document).on("click", "#kpop3", function(evt)
    {
        var kpop = new Audio("audio/kpop3.wav");
        kpop.play();
         return false;
    });
    
        /* button  #kpop4 */
    $(document).on("click", "#kpop4", function(evt)
    {
        var kpop = new Audio("audio/kpop4.wav");
        kpop.play();
         return false;
    });
    
        /* button  #kpop5 */
    $(document).on("click", "#kpop5", function(evt)
    {
        var kpop = new Audio("audio/kpop5.wav");
        kpop.play(); 
         return false;
    });
    
        /* button  #kpop6 */
    $(document).on("click", "#kpop6", function(evt)
    {
        var kpop = new Audio("audio/kpop6.wav");
        kpop.play();
         return false;
    });
    
        /* button  #kpop7 */
    $(document).on("click", "#kpop7", function(evt)
    {
        var kpop = new Audio("audio/kpop7.wav");
        kpop.play();
         return false;
    });
    
        /* button  #pok1 */
    $(document).on("click", "#pok1", function(evt)
    {
        var pok = new Audio("audio/pok1.wav");
        pok.play();
         return false;
    });
    
        /* button  #pok2 */
    $(document).on("click", "#pok2", function(evt)
    {
        var pok = new Audio("audio/pok2.wav");
        pok.play();
         return false;
    });
    
        /* button  #pok3 */
    $(document).on("click", "#pok3", function(evt)
    {
        var pok = new Audio("audio/pok3.wav");
        pok.play();
         return false;
    });
    
        /* button  #pok4 */
    $(document).on("click", "#pok4", function(evt)
    {
        var pok = new Audio("audio/pok4.wav");
        pok.play(); 
         return false;
    });
    
        /* button  #pok5 */
    $(document).on("click", "#pok5", function(evt)
    {
        var pok = new Audio("audio/pok5.wav");
        pok.play();
         return false;
    });
    
        /* button  #pok6 */
    $(document).on("click", "#pok6", function(evt)
    {
        var pok = new Audio("audio/pok6.wav");
        pok.play(); 
         return false;
    });
    
        /* button  #nerd1 */
    $(document).on("click", "#nerd1", function(evt)
    {
        var nerd = new Audio("audio/nerd1.wav");
        nerd.play();
         return false;
    });
    
        /* button  #nerd2 */
    $(document).on("click", "#nerd2", function(evt)
    {
        var nerd = new Audio("audio/nerd2.wav");
        nerd.play();
         return false;
    });
    
        /* button  #nerd3 */
    $(document).on("click", "#nerd3", function(evt)
    {
        var nerd = new Audio("audio/nerd3.wav");
        nerd.play();
         return false;
    });
    
        /* button  #nerd4 */
    $(document).on("click", "#nerd4", function(evt)
    {
        var nerd = new Audio("audio/nerd4.wav");
        nerd.play();
         return false;
    });
    
        /* button  #nerd5 */
    $(document).on("click", "#nerd5", function(evt)
    {
        var nerd = new Audio("audio/nerd5.wav");
        nerd.play();
         return false;
    });
    
        /* button  #gos1 */
    $(document).on("click", "#gos1", function(evt)
    {
        var gospel = new Audio("audio/gos1.wav");
        gospel.play(); 
         return false;
    });
    
        /* button  #gos2 */
    $(document).on("click", "#gos2", function(evt)
    {
        var gospel = new Audio("audio/gos2.wav");
        gospel.play(); 
         return false;
    });
    
        /* button  #gos3 */
    $(document).on("click", "#gos3", function(evt)
    {
        var gospel = new Audio("audio/gos3.wav");
        gospel.play(); 
         return false;
    });
    
        /* button  #ped1 */
    $(document).on("click", "#ped1", function(evt)
    {
        var pedreiro = new Audio("audio/ped1.wav");
        pedreiro.play(); 
         return false;
    });
    
        /* button  #ped2 */
    $(document).on("click", "#ped2", function(evt)
    {
        var pedreiro = new Audio("audio/ped2.wav");
        pedreiro.play(); 
         return false;
    });
    
        /* button  #ped3 */
    $(document).on("click", "#ped3", function(evt)
    {
        var pedreiro = new Audio("audio/ped3.wav");
        pedreiro.play(); 
         return false;
    });
    
        /* button  #ped4 */
    $(document).on("click", "#ped4", function(evt)
    {
        var pedreiro = new Audio("audio/ped4.wav");
        pedreiro.play(); 
         return false;
    });
    
        /* button  #ped5 */
    $(document).on("click", "#ped5", function(evt)
    {
        var pedreiro = new Audio("audio/ped5.wav");
        pedreiro.play(); 
         return false;
    });
    
        /* button  #am1 */
    $(document).on("click", "#am1", function(evt)
    {
        var amor = new Audio("audio/am1.wav");
        amor.play();
         return false;
    });
    
        /* button  #am2 */
    $(document).on("click", "#am2", function(evt)
    {
        var amor = new Audio("audio/am2.wav");
        amor.play();
         return false;
    });
    
        /* button  #am3 */
    $(document).on("click", "#am3", function(evt)
    {
        var amor = new Audio("audio/am3.wav");
        amor.play();
         return false;
    });
    
        /* button  #am4 */
    $(document).on("click", "#am4", function(evt)
    {
        var amor = new Audio("audio/am4.wav");
        amor.play(); 
         return false;
    });
    
        /* button  #am5 */
    $(document).on("click", "#am5", function(evt)
    {
        var amor = new Audio("audio/am5.wav");
        amor.play();
         return false;
    });
    
        /* button  #am6 */
    $(document).on("click", "#am6", function(evt)
    {
        var amor = new Audio("audio/am6.wav");
        amor.play(); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
