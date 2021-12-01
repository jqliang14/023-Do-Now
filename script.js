$("button").click(function() {
    let randomNumber = Math.random();
    
    $(".result").append( `<p> ${randomNumber} </p>`);
    
   
   	// DON'T CHANGE BELOW THIS LINE 
    if (randomNumber > 0.5) {
        $("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png");
    } else {
        $("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/4/4e/COBREcentavosecuador2000-2.png");
    }
});