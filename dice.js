

function Roll(){

const numOfDice=document.getElementById('numOfDice').value;
const result=document.getElementById('Dice-result');
const Diceimages=document.getElementById('Images');
const values=[];
const images=[];

    for(let i=0;i < numOfDice;i++){
        const value=Math.floor(Math.random() * 6) + 1;
        values.push(value);

    }
    result.textContent=`Dice :${values.join(' , ')}`;
}

function Over(){
    document.body.style.backgroundColor='yellow';
    document.querySelector('.container')


}
function Out(){
    document.body.style.backgroundColor='grey';
}
