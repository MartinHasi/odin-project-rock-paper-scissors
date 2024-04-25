const choice = ['Rock', 'Paper', 'Scissor'];
let humantot
let humanscore = 0;
let computerscore = 0;
let roundcounter = 0;

const playButton = document.querySelectorAll('button');
const headerTag = document.querySelector('h2');
const pTag = document.querySelector('p');
playButton.forEach(button => {

    button.addEventListener('click', () => {

        //alert(clickedButton);
        ;
        //console.log(playGame(humanGuiChoice(button.id))); 

        headerTag.textContent = playGame(humanGuiChoice(button.id));
        roundcounter++;
        pTag.textContent = `You played ${roundcounter} Round's Rock Paper Scissor!`;

    });
    
});


function getComputerChoice()
{

    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(choice.length);

    return choice[Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)];
}

function humanGuiChoice(buttonClick)
{
    if(buttonClick === 'btn_id_1')
    {
        buttonClick = 'Rock';
    }
    else if(buttonClick === 'btn_id_2')
    {
        buttonClick = 'Paper';
    }
    else if(buttonClick === 'btn_id_3')
    {
        buttonClick = 'Scissor';
    }
    return buttonClick;
    //alert(buttonClick);

}

function humanChoice(choose)
{
    //const userchoice = prompt('Rock, Paper, Scissor');
    const userchoice = choose;
    //alert(userchoice);
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
function playGame(value)
{
    // autoplay
    // let human = getComputerChoice();
    // Human vs Computer
    let human = humanGuiChoice(value);
    //console.log(human);
    let computer = getComputerChoice();
    human = human.toLowerCase();
    computer = computer.toLowerCase();
    //console.log(human);
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
    console.log(playGame(humanGuiChoice(button.id)));
roundcounter++;
}
*/
//console.log(`${roundcounter} rounds were played until computer or human won 5 times.`);
