
  var time;
  var right;
  var wrong;
  var intervalId;

question1 = {
    question: "When Monica is having “one of those days”, what advice does she give her man?",
    options : ["It's just a woman thing", "I still love you", "Don't take it personal", "I need my space"],
    answer : "Don't take it personal",
    correct : ""
};

question2 = {
    question: "3LW is tired of broken what?",
    options : ["Hearts", "Promithes", "Trust", "Engagements"],
    answer : "Promithes",
    correct : "",
};

question3 = {
    question: "What does Mint Condition want Pretty Brown Eyes to stop doing",
    options : ["Being so phine", "Calling my phone", "Lying to me", "Breaking my heart"],
    answer : "Breaking my heart",
    correct : "",
};

question4 = {
    question: "How do you unbreak Toni Braxton’s Heart?",
    options : ["Say you love her again", "Propose to her", "Stop cheating on her", "Come back to her"],
    answer : "Say you love her again",
    correct : ""
};

question6 = {
    question: "What does Xscape need from you?",
    options : ["A ring", "Understanding", "Your extra time and kiss", "Good lovin'"],
    answer : "Understanding",
    correct : ""
};

question6 = {
    question: "What does Xscape need from you?",
    options : ["A ring", "Understanding", "Your extra time and kiss", "Good lovin'"],
    answer : "Understanding",
    correct : ""
};

question7 = {
    question: "What is Whitney Houston the queen of?",
    options : ["The night", "Dancing", "Soul", "Crack"],
    answer : "The night",
    correct : ""
};


question8 = {
    question: "Mariah Carey and ODB go back like what?",
    options : ["Preschool kids", "Babies and pacifiers", "Mork and Mindy", "Ike and Tina"],
    answer : "Babies and pacifiers",
    correct : ""
};

question9 = {
    question: "How many wishes were Dru Hill from touching the Heavens above?",
    options : ["7", "2", "5", "3"],
    answer : "3",
    correct : "",
};

question10 = {
    question: "According to Bell Biv Devoe, what should you never trust?",
    options : ["A girl with no job", "A side piece", "A big butt and a smile", "A girl named Iesha"],
    answer : "3",
    correct : ""
};



Initialize();

function Initialize(){

    time = 10;
    right = 0;
    wrong = 10;
    $('#instructions').html("You will have 60 seconds to answer 10 questions based on R&B songs from the 90s.<br>"+
        "Let's see what you know! <br> Good Luck!");
    $('#quiz').hide(); //hide questions and timer until user starts the game
    $('#time-remaining').hide();
    $('#reset').hide();
    $('#submit').hide();

}

$('#start-button').click(function(){

    var quest = $('#question');

    quest.html(question1.question);

    var opt =  $("<button>");

    opt.text(question1.options[0]);

    //opt.html(question1.options[0]);

    console.log(opt);

    q.append(opt);

    console.log(quest);
    //$('#q').append(quest);

    console.log(question1.question);

    console.log("start button clicked");
    //$('#quiz').show();
    $('#submit').show();
    console.log("quiz is shown");
    $('#time-remaining').show();
    $('#start-page').hide();
    run();
});

$('#reset').click(function(){ //to play again

     $('#score').hide(); //hide score results
    $('#start-page').show(); //show start page/instructions
    $(':checkbox').attr('checked',false); //clear the checkboxes
    Initialize();
});


$(':checkbox').change(function(){ //update so that only 1 checkbox canbe selected at a time

    if (this.checked) {
        $(this).siblings(':checkbox').attr('checked',false);
    }
});

$(':checkbox').click(function(){ //if the correct checkbox is selected update the score

    if(this.checked){

        if(this.value === "right"){
         right++;
         wrong--;
        }
    }
})

function run() { //start the timed quiz
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  time--;

  $("#time-remaining").html("Time remaining 00:" +time);

  if (time === 0){ //when time runs out
    
    gameOver();
    
    $("#time-remaining").html("<strong>Time's Up!</strong>");

    stop();
  }
}

function stop() {

    clearInterval(intervalId);
  }


$('#submit').click(function(){

    gameOver();

})

function gameOver(){

    stop();
    time = 0;
    console.log("Submit button checked.");
    $("#quiz").hide();
    console.log("number right: "+ right +", number wrong: "+ wrong);
    $('#score').html("You got <strong> "+right +"</strong>  correct out of <strong> 10 </strong>. <br> Thanks for playing!")
    $('#score').show();
    $('#reset').show();
    $('#submit').hide();
}
