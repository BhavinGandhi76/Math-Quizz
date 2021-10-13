Player1 = localStorage.getItem("Player1");
Player2 = localStorage.getItem("Player2");

P1score= 0;
P2score= 0 ;
document.getElementById("player1").innerHTML = Player1 + ":";
document.getElementById("player2").innerHTML = Player2 + ":";
document.getElementById("player1_score").innerHTML = P1score;
document.getElementById("player2_score").innerHTML = P2score;
document.getElementById("player_ques").innerHTML = Player1;
document.getElementById("player_ans").innerHTML = Player2;

function send(){
    N1 = document.getElementById("N1").value;
    N2 = document.getElementById("N2").value;
    ans = parseInt(N1)*parseInt(N2);
    console.log(ans);
   question = "<h4>"+ N1 + ' X ' + N2 +"</h4>";
   input = "<br> Answer: <input id='answer'>";
   check = "<br> <br> <button class='btn btn-info' onclick='Check()'>Check</button>";

   row= question+ input + check;
   document.getElementById("output").innerHTML= row;

   document.getElementById("N1").value= "";
   document.getElementById("N2").value= "";
}
Question_Turn = "Player1";
Answer_Turn = "Player2";

function Check(){
    getAnswer = document.getElementById("answer").value;
    if(getAnswer==ans){
        if(Answer_Turn=="Player1"){
        P1score=P1score + 1;
        document.getElementById("player1_score").innerHTML= P1score;
        }
        else {
            P2score=P2score + 1;
            document.getElementById("player2_score").innerHTML= P2score;
        }
    }
    if(Question_Turn=="Player1"){
        Question_Turn= "Player2";
        document.getElementById("player_ques").innerHTML= Player2;
    }
    else{
        Question_Turn= "Player1";
        document.getElementById("player_ques").innerHTML= Player1;   
    }

    if(Answer_Turn=="Player1"){
        Answer_Turn= "Player2";
        document.getElementById("player_ans").innerHTML= Player2;
    }
    else{
        Answer_Turn= "Player1";
        document.getElementById("player_ans").innerHTML= Player1;   
    }
    document.getElementById("output").innerHTML= "";
}
