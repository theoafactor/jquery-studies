function loadContent(event, page){
    event.preventDefault();

    

    if(page != "home"){
        $("a:first-child").removeClass("active");
        if(page == "signin"){
            $("#main").load("contents/signin.html")
            $("a:nth-child(3)").removeClass("active");
            $("a:nth-child(2)").addClass("active");
        }

        if(page == "contact"){
            $("#main").load("contents/contact.html")
            $("a:nth-child(2)").removeClass("active");
            $("a:nth-child(3)").addClass("active");
        }
    }else{
        location.reload();
        $("a:first-child").addClass("active");
        $("a:nth-child(2)").removeClass("active");
        $("a:nth-child(3)").removeClass("active");
    }

   
    
    
}




// $.get({
//     url: "contens/contact.html",
//     // data: {username: "james"}
//     beforeSend(){
//         $("#main").html("<div>Please wait ...</div>")
//     },
//     success: function(feedback){
//         $("#main").html(feedback)
//     },
//     error: function(error){
//         console.log("error occured: " + error)
//         console.log(error)
//     }
// })