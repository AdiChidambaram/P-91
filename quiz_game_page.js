

document.getElementById("player_1_name").innerHTML = player_1_name + ":";
document.getElementById("player_2_name").innerHTML = player_2_name + ":";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

function Send() {
    number1 = document.getElementById("one").value;
    number2 = document.getElementById("two").value;
    actual_answer = parseInt(one) * parseInt(two);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info'onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
}