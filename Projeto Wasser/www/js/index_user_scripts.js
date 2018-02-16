/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #button_settings_main */
    
    
        /* button  #button_settings_main */
    
    
        /* button  #button_main */
    
    
        /* button  #button_main */
    
    
        /* button  #button_main */
    
    
        /* button  #button_main */
    $(document).on("click", "#button_main", function(evt)
    {
         /*global activate_page */
         activate_page("#drinkWater"); 
    });
     
    $(document).on("click", "#link_footer_main", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutUs"); 
    });
    
        /* button  #button_sick_main */
    
    
        /* button  #button_game_main */
    $(document).on("click", "#button_game_main", function(evt)
    {
         /*global activate_page */
         activate_page("#game"); 
    });
    
        /* button  #button_aware_main */
    $(document).on("click", "#button_aware_main", function(evt)
    {
         /*global activate_page */
         activate_page("#aware"); 
    });
    
        /* button  #button_conplaint_main */
    $(document).on("click", "#button_conplaint_main", function(evt)
    {
         /*global activate_page */
         activate_page("#complaint"); 
    });
    
        /* button  #button_drinkWater_main */
    $(document).on("click", "#button_drinkWater_main", function(evt)
    {
         /*global activate_page */
         activate_page("#drinkWater"); 
    });
    
        /* button  #button_complaint_main */
    $(document).on("click", "#button_complaint_main", function(evt)
    {
         /*global activate_page */
         activate_page("#complaint"); 
    });
    
        /* button  #button_settings_main */
    
    
        /* button  #button_menu */
    $(document).on("click", "#button_menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_15"));  
    });
    
        /* button  #button_bar_left */
    
    
        /* button  #button_settings */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_backMain */
    $(document).on("click", "#button_backMain", function(evt)
    {
         /*global activate_page */
        $("#resp").css("display", "none");
        $("#result").css("display", "none");
         activate_page("#mainpage"); 
    });
    
        /* button  #button_bar_left_drinkWater */
    
    
        /* button  #button_bar_left_complaint */
    $(document).on("click", "#button_bar_left_complaint", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_complaint"));  
    });
    
        /* button  #button_bar_left_aware */
    
    
        /* button  #button_bar_left_aboutUs */
    
    
        /* button  #button_bar_left_sick */
    
    
        /* button  #bar_left_game */
    
    
        /* button  #bar_left_aware */
    $(document).on("click", "#bar_left_aware", function(evt)
    {
         /*global activate_page */
         activate_page("#aware"); 
         return false;
    });
    
        /* button  #bar_left_complaint */
    $(document).on("click", "#bar_left_complaint", function(evt)
    {
         /*global activate_page */
         activate_page("#complaint"); 
         return false;
    });
    
        /* button  #bar_left_drinkWater */
    
    
        /* button  #bar_left_aboutUs */
    $(document).on("click", "#bar_left_aboutUs", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutUs"); 
         return false;
    });
    
        /* button  #bar_left_sick */
    $(document).on("click", "#bar_left_sick", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_sick"));  
         return false;
    });
    
        /* button  #bar_left_drinkWater */
    $(document).on("click", "#bar_left_drinkWater", function(evt)
    {
         /*global activate_page */
         activate_page("#drinkWater"); 
         return false;
    });
    
        /* button  #bar_left_complaint */
    $(document).on("click", "#bar_left_complaint", function(evt)
    {
         /*global activate_page */
         activate_page("#complaint"); 
         return false;
    });
    
        /* button  #bar_left_aware */
    $(document).on("click", "#bar_left_aware", function(evt)
    {
         /*global activate_page */
         activate_page("#aware"); 
         return false;
    });
    
        /* button  #bar_left_game */
    $(document).on("click", "#bar_left_game", function(evt)
    {
         /*global activate_page */
         activate_page("#aware"); 
         return false;
    });
    
        /* button  #bar_left_game */
    $(document).on("click", "#bar_left_game", function(evt)
    {
         /*global activate_page */
         activate_page("#game"); 
         return false;
    });
    
        /* button  #bar_left_sick */
    $(document).on("click", "#bar_left_sick", function(evt)
    {
         /*global activate_page */
         activate_page("#sick"); 
         return false;
    });
    
        /* button  #button_bar_left_aboutUs */
    
    
        /* button  #bar_left_aboutUs */
    $(document).on("click", "#bar_left_aboutUs", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_aboutUs"));  
         return false;
    });
    
        /* button  #bar_left_drinkWater */
    $(document).on("click", "#bar_left_drinkWater", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_drinkWater"));  
         return false;
    });
    
        /* button  #bar_left_complaint */
    $(document).on("click", "#bar_left_complaint", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_complaint"));  
         return false;
    });
    
        /* button  #bar_left_game */
    $(document).on("click", "#bar_left_game", function(evt)
    {
         /*global activate_page */
         activate_page("#game"); 
         return false;
    });
    
        /* button  #bar_left_sick */
    $(document).on("click", "#bar_left_sick", function(evt)
    {
         /*global activate_page */
         activate_page("#sick"); 
         return false;
    });
    
        /* button  #bar_left_aboutUs */
    $(document).on("click", "#bar_left_aboutUs", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_aboutUs"));  
         return false;
    });
    
        /* button  #bar_left_drinkWater */
    $(document).on("click", "#bar_left_drinkWater", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_drinkWater"));  
         return false;
    });
    
        /* button  #bar_left_aware */
    $(document).on("click", "#bar_left_aware", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_aware"));  
         return false;
    });
    
        /* button  #bar_left_game */
    $(document).on("click", "#bar_left_game", function(evt)
    {
         /*global activate_page */
         activate_page("#game"); 
         return false;
    });
    
        /* button  #bar_left_sick */
    $(document).on("click", "#bar_left_sick", function(evt)
    {
         /*global activate_page */
         activate_page("#sick"); 
         return false;
    });
    
        /* button  #bar_left_aboutUs */
    $(document).on("click", "#bar_left_aboutUs", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutUs"); 
         return false;
    });
    
        /* button  #bar_left_complaint */
    $(document).on("click", "#bar_left_complaint", function(evt)
    {
         /*global activate_page */
         activate_page("#complaint"); 
         return false;
    });
    
        /* button  #bar_left_aware */
    $(document).on("click", "#bar_left_aware", function(evt)
    {
         /*global activate_page */
         activate_page("#aware"); 
         return false;
    });
    
        /* button  #bar_left_game */
    $(document).on("click", "#bar_left_game", function(evt)
    {
         /*global activate_page */
         activate_page("#game"); 
         return false;
    });
    
        /* button  #button_bar_left_sick */
    
    
        /* button  #button_bar_left_sick */
    
    
        /* button  #button_bar_left_sick */
    
    
        /* button  #bar_left_drinkWater */
    $(document).on("click", "#bar_left_drinkWater", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_drinkWater"));  
         return false;
    });
    
        /* button  #button_bar_left_aboutUs */
    $(document).on("click", "#button_bar_left_aboutUs", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_aboutUs"));  
         return false;
    });
    
        /* button  #button_bar_left_aware */
    $(document).on("click", "#button_bar_left_aware", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_aware"));  
         return false;
    });
    
        /* button  #button_bar_left_sick */
    
    
        /* button  #button_bar_left_sick */
    
    
        /* button  #button_bar_left_drinkWater */
    
    
        /* button  #button_bar_left_drinkWater */
    
    
        /* button  #button_bar_left_drinkWater */
    
    
        /* button  #button_bar_left_drinkWater */
    $(document).on("click", "#button_bar_left_drinkWater", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_drinkWater"));  
         return false;
    });
    
        /* button  #button_bar_left_sick */
    $(document).on("click", "#button_bar_left_sick", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left_sick"));  
         return false;
    });
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    
    
        /* button  #button_bar_left */
    $(document).on("click", "#button_bar_left", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left"));  
         return false;
    });
    
        /* button  #button_bar_left1 */
    $(document).on("click", "#button_bar_left1", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#bar_left1"));  
         return false;
    });
    
        /* button  #button_sick_main */
    $(document).on("click", "#button_sick_main", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #button_sick_main */
    $(document).on("click", "#button_sick_main", function(evt)
    {
         /*global activate_page */
         activate_page("#sick"); 
         return false;
    });
    
        /* button  #button_backMain_game */
    $(document).on("click", "#button_backMain_game", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_73", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_72").modal("toggle");  
         return false;
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_105", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #audio_song */
    $(document).on("click", "#audio_song", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutUs"); 
         return false;
    });
    
        /* button  #button_settings_main */
    $(document).on("click", "#button_settings_main", function(evt)
    {
         /*global activate_page */
         activate_page("#configuration"); 
         return false;
    });
    
        /* button  #button_settings */
    $(document).on("click", "#button_settings", function(evt)
    {
         /*global activate_page */
        $("#resp").css("display", "none");
        $("#result").css("display", "none");
         activate_page("#configuration"); 
         return false;
    });
    
        /* button  #close_result */
    $(document).on("click", "#close_result", function(evt)
    {
        /* your code goes here */
        $("#result").css("display", "none");
         return false;
    });
    
        /* button  #send_human */
    $(document).on("click", "#send_human", function(evt)
    {
        $("#result").css("background-color", "gray");
        $("#title_result").empty();
        
        if($("#input_human").val() == ""){
            $("#result").css("background-color", "gray");
            $("#result").css("display", "block");
            $("#title_result").append("Digite o peso");
        }else{
            var peso_human = parseFloat($("#input_human").val());
            var water_human = 35;
            var result_human = peso_human * water_human;
            $("#result").css("display", "block");
            $("#result").css("background-color", "rgba(66, 138, 200, 0.9)");
            $("#title_result").append("Você deve beber cerca de " + result_human + "ml por dia");
            $("input").val("");
        }
        /* your code goes here */ 
         return false;
    });
    
        /* button  #send_dog */
    $(document).on("click", "#send_dog", function(evt)
    {
        
        $("#result").css("background-color", "gray");
        $("#title_result").empty();
        
        if($("#input_dog").val() == ""){
            $("#result").css("background-color", "gray");
            $("#result").css("display", "block");
            $("#title_result").append("Digite o peso");
        }else{
            var peso_dog = parseFloat($("#input_dog").val());
            var water_dog = 60;
            var result_dog = peso_dog * water_dog;
            $("#result").css("display", "block");
            $("#result").css("background-color", "rgba(91, 192, 222, 0.9)");
            $("#title_result").append("Você deve dar para seu cão beber cerca de " + result_dog + "ml por dia");
            $("input").val("");
        }
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
