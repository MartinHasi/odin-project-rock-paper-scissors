const choice = ['Rock', 'Paper', 'Scissor'];
let humantot
let humanscore = 0;
let computerscore = 0;
let roundcounter = 0;

const playButton = document.querySelectorAll('button');

playButton.forEach(button => {

    button.addEventListener('click', () => {

        //alert(clickedButton);
        humanGuiChoice(button.id);
    })
    
});


function getComputerChoice()
{

    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(choice.length);

    return choice[Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)];
}

function humanGuiChoice(buttonClick)
{
    alert(buttonClick);
}

function humanChoice()
{
    const userchoice = prompt('Rock, Paper, Scissor');

    const result = choice.find((value) => value.toLowerCase() === userchoice.toLowerCase());
    if(result)
    {
        return result;
    }
    else
    {
        return 'wrong Input';
    }

}
function playGame()
{
    // autoplay
     let human = getComputerChoice();
    // Human vs Computer
    //let human = humanChoice();
    let computer = getComputerChoice();
    human = human.toLowerCase();
    computer = computer.toLowerCase();

    if(human === 'rock' && computer ==='rock')
    {
        return `No winner | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'rock' && computer === 'scissor')
    {
        humanscore++;
        return `Human win | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'rock' && computer === 'paper')
    {
        computerscore++;
        return `Computer win | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'paper' && computer ==='paper')
    {
        return `No winner | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'paper' && computer === 'rock')
    {
        humanscore++;
        return `Human win | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'paper' && computer === 'scissor')
    {
        computerscore++;
        return `Computer win | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'scissor' && computer ==='scissor')
    {
        return `No winner | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'scissor' && computer === 'paper')
    {
        humanscore++;
        return `Human win | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
    else if(human === 'scissor' && computer === 'rock')
    {
        computerscore++;
        return `Computer win | Human: ${human}  Score: ${humanscore} | Computer: ${computer} Score: ${computerscore}`;
    }
}

//console.log(getComputerChoice());

/*
while(humanscore < 5)
{
    console.log(playGame());
    roundcounter++;
}
*/
console.log(`${roundcounter} rounds were played until computer or human won 5 times.`);
