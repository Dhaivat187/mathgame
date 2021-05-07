var player_1_name= localStorage.getItem("player_1_name");
var player_2_name= localStorage.getItem("player_2_name");

var player_1_score= 0;
var player_2_score= 0;

document.getElementById("player1name").innerHTML= player_1_name + " : <span id='player1score'></span>";
document.getElementById("player2name").innerHTML= player_2_name + " : <span id='player2score'></span>";

document.getElementById("player1score").innerHTML= player_1_score;
document.getElementById("player2score").innerHTML= player_2_score;

document.getElementById("question_turn").innerHTML= player_1_name;
document.getElementById("answer_turn").innerHTML= player_2_name;

function send() {
    number1= document.getElementById("number_1").value;
    number2= document.getElementById("number_2").value;
    product_value= parseInt(number1) * parseInt(number2);
    question= "<h4>Q. " + number1 + " x " + number2 + "</h4><br>";
    input= "<input id='answer' placeholder='answer' type='text' class='from-control'><br>";
    button= "<button class='btn btn-success' onclick='check()'>Check</button>";
    row= question + input + button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number_1").value= " ";
    document.getElementById("number_2").value= " ";
};