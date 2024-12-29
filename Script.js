let turn = "X";
let titel = document.querySelector("span");

function play(id) {
    let test = document.getElementById(id);
    
    if (test.innerHTML === "" && turn == "X") {
        test.innerHTML = turn;  
        turn = "O";
        titel.innerHTML=turn
    }else{
        test.innerHTML= turn;
        turn = "X";
        titel.innerHTML=turn
    }
    checkWinner();
}

function checkWinner() {
    const winningConditions = [
        ["item-1", "item-2", "item-3"],
        ["item-4", "item-5", "item-6"],
        ["item-7", "item-8", "item-9"],
        ["item-1", "item-4", "item-7"],
        ["item-2", "item-5", "item-8"],
        ["item-3", "item-6", "item-9"],
        ["item-1", "item-5", "item-9"],
        ["item-3", "item-5", "item-7"]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (
            document.getElementById(a).innerHTML&&
            document.getElementById(a).innerHTML === document.getElementById(b).innerHTML &&
            document.getElementById(b).innerHTML === document.getElementById(c).innerHTML && 
            document.getElementById(c).innerHTML != " "
        ) {
            document.getElementById(a).style.background="black";
            document.getElementById(b).style.background="black";
            document.getElementById(c).style.background="black";
            
           
           document.querySelector("h3").style.color="red"
           document.querySelector("h3").innerHTML= `${document.getElementById(a).innerHTML} winner`
           setInterval(() => {
            document.querySelector("h3").innerHTML +="."
           }, 1000);
            setTimeout(()=> {location.reload()},4000)
            return;
        }
    }}