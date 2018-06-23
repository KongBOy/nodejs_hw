var max_num = 99;
var min_num = 1;
var counter = 0;
var guess_num = 0;
var answer = Math.floor(Math.random() * 99 + 1);

console.log("answer = " + answer);

function Guess_button() {
    guess_num = input_num.value;
    //console.log("guess_num = " + guess_num);
    if(guess_num == ""){
        guess_num = 1;
    }
    
    counter++;
    //console.log("counter = " + counter);
    Set_smoke_img(counter);

    if (guess_num == answer) {
        alert("恭喜答對了！" + " 總共猜了" + (counter) + "次\n再試一次！");
        Restart();
    } 
    else {
        if (answer < guess_num) {
            max_num = guess_num;
        } 
        else {
            min_num = guess_num;
        }
        
        if(counter <=5)
        {
            alert(min_num + " ~ " + max_num);
            input_num.value = "";
        }
        else{
            alert("次數已經達到上限\n" + "總共猜了" + (counter) + "次\n再試一次！");
            Restart();
        }
    }
}

function Restart() {
    answer = Math.floor(Math.random() * 99) + 1;
    console.log("answer = " + answer);
    counter = 0; //宣告計數器 紀錄玩家猜測次數
    max_num = 99;
    min_num = 1;
    input_num.value = "";
    var bombs = document.querySelectorAll("#bombs img");
    for(var i=0;i<bombs.length;i++){
        bombs[i].src = "img/bomber.png";
    }
}

function Set_smoke_img(counter) {
    //console.log("counter = " + counter);
    switch (counter) {
        case 1:
            document.img1.src = "img/smoke.png";
            break;
        case 2:
            document.img2.src = "img/smoke.png";
            break;
        case 3:
            document.img3.src = "img/smoke.png";
            break;
        case 4:
            document.img4.src = "img/smoke.png";
            break;
        case 5:
            document.img5.src = "img/smoke.png";
            break;
        case 6:
            document.img6.src = "img/smoke.png";
            break;
    }
}
