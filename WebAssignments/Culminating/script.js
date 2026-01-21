// -----------------------------    List of Topics & Questions      ----------------------------------


let masterlist = [
    ["Math",
        ["Name this function: f(x)=8(x-2)+5", "What is 6 x 32?", "What is the name of the 2D shape that has 7 sides?"],
        ["What are 2D shapes with four sides called?", "A drawer contains 27 t-shirts of four colours. 12 are green, 3 are blue, 6 are red, and the rest are gray. What is the ratio of green t-shirts to gray t-shirts in SIMPLEST form? (HINT: answer should look like #:#)"],
        ["What is the name of the theorem used to calculate an unknown side length of a right angle triangle when given the other two side lengths?", "Solve: 13 - (5 + 12 / -3) * -9"],
        ["What do you call a function with a degree of five?", "Enter the equation that proves a function has ODD symmetry in terms of f(x)."],
        ["Enter the first 5 digits of π.", "#"],
    ],
    ["90s Songs",
        ["Which Celine Dion song won Best Original Song at the 1998 Oscars?", "Name the song with the lyrics: \"Today is gonna be the day that / They're gonna throw it back to you / By now you should've somehow / Realized what you gotta do\"", "Which Irish band had hits with \"Linger\", \"Salvation\", and \"Zombie\"?", "Name the 1991 song with the lyrics: \"With the lights out, it's less dangerous / Here we are now, entertain us / I feel stupid and contagious / Here we are now, entertain us\""],
        ["What trio of brothers went to No. 1 on the Billboard Hot 100 with the 1997 song \"MMMBop\"? ", "What John Michael Montgomery song did the group All-4-One score a hit with in 1994?", "What is the name of the SpiceGirls\' number one hit in the 90s?", "Which Backstreet Boys song featured a haunted house-themed music video?", "What was the first hip-hop single to reach #1 on the Billboard Hot 100 in the 1990s?"],
        ["What song was released as a single in 1994, often associated with the movie Batman Forever?", "What was the best selling single of the 1990s? (HINT: The artist is Elton John)"],
        ["What song did Jonny Greenwood from Radiohead attempt to sabotage with distorted electric guitar blasts right before the chorus?", "Name the song with the lyrics: \"Anytime I need to see your face, I just close my eyes / And I am taken to a place where your crystal mind / And magenta feelings take up shelter in the base of my spine / Sweet like a chic-a-cherry cola\"", "What heavy metal song, inspired by crib death, became one of metal\'s greatest anthems?"],
        ["#"],
    ],
    ["Movies",
        ["John Travolta plays Danny Zuko from what movie?", "What are the tiny yellow helpers of Gru with goggles in Despicable Me called?", "Name one of Riley's main five emotions from Inside Out."],
        ["What was the movie released in 1988 that is heavily debated on whether or not it is a Christmas movie?", "What colour pill does Neo from The Matrix take?", "What movie presents a red pill and a blue pill to the protagonist?"],
        ["Who is the half-blood prince from Harry Potter?", "What is the name of the store that Buddy the Elf works in?", "What was Disney's 50th anniversary animated movie"],
        ["The song A Thousand Miles became heavily connected to what movie when Terry Crews sang this in his car?", "In The Purge, how long does the annual purge last for?"],
        ["Which hand does Thanos use to wear the Infinity Gauntlet?"],
    ],
    ["Animals",
        ["What bird is a symbol for peace?", "What's the world's most intelligent dog breed?", "Name the body part of a dog's body that is as unique as a human's fingerprint."],
        ["What do you call a group of crows?", "What is the term for a baby kangaroo?"],
        ["Which breed of dog is historically known for being the mascot of firefighters?", "What do you call a group of porcupines?", "What are a group of pigs called?"],
        ["What is a female donkey called?", "What type of bird has eyes is bigger than its brain?"],
        ["How many hearts does an octopus have?", "What animal can only eat when its head is upside down?", "pink panda question search *****"],
       
    ],
    ["The World",
        ["What is the largest country in the world by land mass?", "How many continents are in the world?"],
        ["What state are the Rocky Mountains, also known as the Rockies, located?", "What country is shaped like a boot on the map?"],
        ["What European country is well-known for their tulips?", "Name any one of the five nordic(?) countries"],
        ["#"],
        ["#"],
    ]



]




let answerList = [
    ["Math",
        [["linear", "linear function", "the linear function"], ["192"], ["heptagon"]],
        [["quadrilateral"], ["2:1"]],
        [["pythagorean theory", "pythagorean theorum", "pythagorean"], ["22"]],
        [["quintic", "quintic function"], ["f(-x)=-f(x)", "f(-x) = -f(x)", "f(-x) =-f(x)", "f(-x)= -f(x)", "-f(x)=f(-x)", "-f(x) = f(-x)", "-f(x) =f(-x)", "-f(x)= f(-x)"]],
        [["3.1415"], ["#"]],
    ],
    ["90s Songs",
        [["my heart will go on"], ["wonderwall"], ["the cranberries"], ["smells like teen spirit"]],
        [["the hanson brothers", "hanson brothers", "hanson"], ["i swear"], ["wannabe"], ["backstreet's back", "backstreets back"], ["ice ice baby"]],
        [["kiss from a rose"], ["candle in the wind", "candle in the wind 1997"]],
        [["creep"], ["i want you"], ["enter sandman"]],
        [["#"]],
    ],
    ["Movies",
        [["greece"], ["minions", "minion"], ["joy", "sadness", "fear", "anger", "disgust"]],
        [["die hard"], ["red"], ["the matrix"]],
        [["severus snape", "snape", "severus", "professor snape", "prof snape", "prof. snape"], ["gimbels"], ["tangled"]],
        [["white chicks"], ["12", "twelve", "12 hours", "twelve hours", "12h", "12hrs"]],
        [["left"]],
    ],
    ["Animals",
        [["dove", "the dove", "a dove"], ["border collie"], ["nose"]],
        [["murder", "a murder", "murder of crows", "a murder of crows"], ["joey", "a joey"]],
        [["dalmatian", "dalmations"], ["prickle", "a prickle"], ["drift", "a drift"]],
        [["jenny", "a jenny"], ["ostrich", "ostriches"]],
        [["3", "three"], ["flamingo"], ["saliva"]],
    ],
    ["The World",
        [["russia"], ["7"]],
        [["colorado"], ["italy"]],
        [["the netherlands", "netherlands"], ["denmark", "finland", "iceland", "norway", "sweden"]],
        [["#"]],
        [["#"]],
    ]


]




// ------------------------------------ Determining the players -----------------------------------------


let players = localStorage.getItem("playerList");
const playerList = players.split(",");
const possibleKeysList = ["q", "p", "z", "m"];
let keysList = [];


for (player in playerList) {
    console.log(`Data extracted, player ${playerList[player]}`);
    keysList.push(possibleKeysList[player]);
}


// -------------------------- Array where all the questions  and answers will go to ---------------------------
let questions = [];
let answers = [];


// ------------------------------ Starts the Process of Getting the Topics Once the Game Loads ------------------------------------
// makes a mock(?) array of original topics list
let mockList = masterlist.map(function(item)
{
    return item[0];
} );
console.log(`Mock list is ${mockList}. Length is ${mockList.length}`);
getRandomTopics(mockList)




// // -----------------------------    Function for getting the 4 random topics      ----------------------------------


function getRandomTopics(mockList) {
    let checkTopic = -1;
    let chosenTopics = [];


    //repeats four times (for each colum)
    for (let i = 0; i < 4; i++) {
        checkTopic = Math.floor(Math.random() * mockList.length);
        console.log(`Chosen is ${checkTopic}`);
       
        //runs the loop that checks if the current rand is new or a dup
        if (chosenTopics.length !== 0) {
               
                //repeats until a new topic is chosen
                while (chosenTopics.includes(checkTopic)) {




                    //chooses a new rand topic
                    console.log("Already picked, now rechoosing.");
                    checkTopic = Math.floor(Math.random() * mockList.length);
                    console.log(`Chosen is now ${checkTopic}`);
                }
                //adds the topic to the list
                chosenTopics.push(checkTopic);
                console.log(`Added ${checkTopic}.`);
               
        } else {
            //immediately adds to the list if there's nothing in the list
            chosenTopics.push(checkTopic) ;
            console.log(`Added ${checkTopic}.`);
        }
    }
    console.log("Finished getting topics.")
    console.log(`${chosenTopics}`)




    getQuestions(chosenTopics)
    }




// ------------------------------------------------------------------------------------------------------------




function getQuestions(topics) {
   
    for (let topic in topics) {
        let randomNum = 0;


        console.log(masterlist[topics[topic]]);
        console.log(masterlist[topics[topic]][0]);
        let title = masterlist[topics[topic]][0];


        console.log(masterlist[topics[topic]][1]);
        randomNum = getRandomNum(masterlist[topics[topic]][1]);
        console.log(masterlist[topics[topic]][1][randomNum]);
        let twoHun = masterlist[topics[topic]][1][randomNum];
        let twoHunAns = answerList[topics[topic]][1][randomNum];
        console.log(`Answer is ${twoHunAns}`);


        console.log(masterlist[topics[topic]][2]);
        randomNum = getRandomNum(masterlist[topics[topic]][2]);
        console.log(masterlist[topics[topic]][2][randomNum]);
        let fourHun = masterlist[topics[topic]][2][randomNum];
        let fourHunAns = answerList[topics[topic]][2][randomNum];
        console.log(`Answer is ${fourHunAns}`);

        console.log(masterlist[topics[topic]][3]);
        randomNum = getRandomNum(masterlist[topics[topic]][3]);
        console.log(masterlist[topics[topic]][3][randomNum]);
        let sixHun = masterlist[topics[topic]][3][randomNum];
        let sixHunAns = answerList[topics[topic]][3][randomNum];
        console.log(`Answer is ${sixHunAns}`);
       
        console.log(masterlist[topics[topic]][4]);
        randomNum = getRandomNum(masterlist[topics[topic]][4]);
        console.log(masterlist[topics[topic]][4][randomNum]);
        let eightHun = masterlist[topics[topic]][4][randomNum];
        let eightHunAns = answerList[topics[topic]][4][randomNum];
        console.log(`Answer is ${eightHunAns}`);


        console.log(masterlist[topics[topic]][5]);
        randomNum = getRandomNum(masterlist[topics[topic]][5]);
        console.log(masterlist[topics[topic]][5][randomNum]);
        let thousand = masterlist[topics[topic]][5][randomNum];
        let thousandAns = answerList[topics[topic]][5][randomNum];
        console.log(`Answer is ${thousandAns}`);


        console.log("---------------------------");
        console.log(title, twoHun, fourHun, sixHun, eightHun, thousand)
        console.log("---------------------------");
        console.log(title, twoHunAns, fourHunAns, sixHunAns, eightHunAns, thousandAns)
        console.log("---------------------------");




        questions.push([title, twoHun, fourHun, sixHun, eightHun, thousand]);
        answers.push([title, twoHunAns, fourHunAns, sixHunAns, eightHunAns, thousandAns]);




    }
    console.log(`Question list is: ${questions}. Length is ${questions.length}`);
    console.log(`Answer list is: ${answers}. Length is ${answers.length}`);



    //     console.log(masterlist[topics[topic]]);
    //     console.log(masterlist[topics[topic]][0]);
    //     let title = masterlist[topics[topic]][0];


    //     console.log(masterlist[topics[topic]][1]);
    //     randomNum = getRandomNum(masterlist[topics[topic]][1]);
    //     console.log(masterlist[topics[topic]][1][randomNum]);
    //     let twoHun = masterlist[topics[topic]][1][randomNum];
    //     let twoHunAns = answerList[topics[topic]][1][randomNum];

    //     console.log(masterlist[topics[topic]][2]);
    //     randomNum = getRandomNum(masterlist[topics[topic]][2]);
    //     console.log(masterlist[topics[topic]][2][randomNum]);
    //     let fourHun = masterlist[topics[topic]][2][randomNum];
    //     let fourHunAns = answerList[topics[topic]][2][randomNum];

    //     console.log(masterlist[topics[topic]][3]);
    //     randomNum = getRandomNum(masterlist[topics[topic]][3]);
    //     console.log(masterlist[topics[topic]][3][randomNum]);
    //     let sixHun = masterlist[topics[topic]][3][randomNum];
    //     let sixHunAns = answerList[topics[topic]][3][randomNum];
       
    //     console.log(masterlist[topics[topic]][4]);
    //     randomNum = getRandomNum(masterlist[topics[topic]][4]);
    //     console.log(masterlist[topics[topic]][4][randomNum]);
    //     let eightHun = masterlist[topics[topic]][4][randomNum];
    //     let eightHunAns = answerList[topics[topic]][4][randomNum];

    //     console.log(masterlist[topics[topic]][5]);
    //     randomNum = getRandomNum(masterlist[topics[topic]][5]);
    //     console.log(masterlist[topics[topic]][5][randomNum]);
    //     let thousand = masterlist[topics[topic]][5][randomNum];
    //     let thousandAns = answerList[topics[topic]][5][randomNum];


    //     console.log("---------------------------");
    //     console.log(title, twoHun, fourHun, sixHun, eightHun, thousand);
    //     console.log("---------------------------");
    //     console.log(title, twoHunAns, fourHunAns, sixHunAns, eightHunAns, thousandAns);
    //     console.log("---------------------------");

    //     questions.push([title, twoHun, fourHun, sixHun, eightHun, thousand]);
    //     answers.push([title, twoHunAns, fourHunAns, sixHunAns, eightHunAns, thousandAns]);


    // }
    // console.log(`Question list is: ${questions}. Length is ${questions.length}`);
    // console.log(`Answer list is: ${answers}. Length is ${answers.length}`);




    assembleBoard()
}




function assembleBoard() {
    console.log("(----------)")
    console.log(questions[1])
    console.log(questions[1][0])
   
    for (let question in questions) {
        console.log(questions[question][0]);


        let thisId = `topic${parseFloat(question)+1}`;
        document.getElementById(thisId).innerHTML = `${questions[question][0]}`;
       
    }
}




//function for getting a random number from a list
function getRandomNum(givenList) {
    let num = Math.floor(Math.random() * givenList.length);
    console.log(`Random num is ${num}`)


    return num;
}




// // --------------------------- Functions for clicking each box -----------------------------


//topic one boxes
const t1row1 = document.getElementById("t1one");
const t1row2 = document.getElementById("t1two");
const t1row3 = document.getElementById("t1three");
const t1row4= document.getElementById("t1four");
const t1row5= document.getElementById("t1five");


//topic two boxes
const t2row1 = document.getElementById("t2one");
const t2row2 = document.getElementById("t2two");
const t2row3 = document.getElementById("t2three");
const t2row4= document.getElementById("t2four");
const t2row5= document.getElementById("t2five");


//topic three boxes
const t3row1 = document.getElementById("t3one");
const t3row2 = document.getElementById("t3two");
const t3row3 = document.getElementById("t3three");
const t3row4= document.getElementById("t3four");
const t3row5= document.getElementById("t3five");


//topic four boxes
const t4row1 = document.getElementById("t4one");
const t4row2 = document.getElementById("t4two");
const t4row3 = document.getElementById("t4three");
const t4row4= document.getElementById("t4four");
const t4row5= document.getElementById("t4five");




const questionBoard = document.getElementById("questionBoard");
const textArea = document.getElementById("question");


const keysInfo = document.getElementById("keysInfo");
const earlyNotifyer = document.getElementById("earlyNotifyer");


const inputArea = document.getElementById("inputDiv");
const inputBox = document.getElementById("inputBox");


t1row1.addEventListener("click", t1twoHun);
t1row2.addEventListener("click", t1fourHun);
t1row3.addEventListener("click", t1sixHun);
t1row4.addEventListener("click", t1eightHun);
t1row5.addEventListener("click", t1thousand);

t2row1.addEventListener("click", t2twoHun);
t2row2.addEventListener("click", t2fourHun);
t2row3.addEventListener("click", t2sixHun);
t2row4.addEventListener("click", t2eightHun);
t2row5.addEventListener("click", t2thousand);

t3row1.addEventListener("click", t3twoHun);
t3row2.addEventListener("click", t3fourHun);
t3row3.addEventListener("click", t3sixHun);
t3row4.addEventListener("click", t3eightHun);
t3row5.addEventListener("click", t3thousand);

t4row1.addEventListener("click", t4twoHun);
t4row2.addEventListener("click", t4fourHun);
t4row3.addEventListener("click", t4sixHun);
t4row4.addEventListener("click", t4eightHun);
t4row5.addEventListener("click", t4thousand);




let questionShowing = false;
let earlyPlayerList = [];
let guesser;




let question;
let answer;
let addAmount = 0;
//i is index for showing question
let i = 0;




// ------------- topic 1 $200 --------------
function t1twoHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t1row1.classList.add("remove");
    //
    question = questions[0][1];
    answer = answers[0][1];
    addAmount = 200;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
}


// ------------- topic 1 $400 --------------
function t1fourHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t1row2.classList.add("remove");
    //
    question = questions[0][2];
    answer = answers[0][2];
    addAmount = 400;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 1 $600 --------------
function t1sixHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t1row3.classList.add("remove");
    //
    question = questions[0][3];
    answer = answers[0][3];
    addAmount = 600;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 1 $800 --------------
function t1eightHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t1row4.classList.add("remove");
    //
    question = questions[0][4];
    answer = answers[0][4];
    addAmount = 800;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 1 $1000 --------------
function t1thousand() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t1row5.classList.add("remove");
    //
    question = questions[0][5];
    answer = answers[0][5];
    addAmount = 1000;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 2 $200 --------------
function t2twoHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t2row1.classList.add("remove");
    //
    question = questions[1][1];
    answer = answers[1][1];
    addAmount = 200;


    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };
   
    //resets list so there's no early players
    earlyPlayerList = [];




    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 2 $400 --------------
function t2fourHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t2row2.classList.add("remove");
    //
    question = questions[1][2];
    answer = answers[1][2];
    addAmount = 400;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 2 $600 --------------
function t2sixHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t2row3.classList.add("remove");
    //
    question = questions[1][3];
    answer = answers[1][3];
    addAmount = 600;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 2 $800 --------------
function t2eightHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t2row4.classList.add("remove");
    //
    question = questions[1][4];
    answer = answers[1][4];
    addAmount = 800;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 2 $1000 --------------
function t2thousand() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t2row5.classList.add("remove");
    //
    question = questions[1][5];
    answer = answers[1][5];
    addAmount = 1000;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}

// ------------- topic 3 $200 --------------
function t3twoHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t3row1.classList.add("remove");
    //
    question = questions[2][1];
    answer = answers[2][1];
    addAmount = 200;


    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };
   
    //resets list so there's no early players
    earlyPlayerList = [];




    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 3 $400 --------------
function t3fourHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t3row2.classList.add("remove");
    //
    question = questions[2][2];
    answer = answers[2][2];
    addAmount = 400;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 3 $600 --------------
function t3sixHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t3row3.classList.add("remove");
    //
    question = questions[2][3];
    answer = answers[2][3];
    addAmount = 600;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 3 $800 --------------
function t3eightHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t3row4.classList.add("remove");
    //
    question = questions[2][4];
    answer = answers[2][4];
    addAmount = 800;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 3 $1000 --------------
function t3thousand() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t3row5.classList.add("remove");
    //
    question = questions[2][5];
    answer = answers[2][5];
    addAmount = 1000;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:    ";
    for (key in keysList) {
    keysInfo.innerHTML += ` ${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}

// ------------- topic 4 $200 --------------
function t4twoHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t4row1.classList.add("remove");
    //
    question = questions[3][1];
    answer = answers[3][1];
    addAmount = 200;


    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:    ";
    for (key in keysList) {
    keysInfo.innerHTML += ` ${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };
   
    //resets list so there's no early players
    earlyPlayerList = [];




    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 4 $400 --------------
function t4fourHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t4row2.classList.add("remove");
    //
    question = questions[3][2];
    answer = answers[3][2];
    addAmount = 400;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 4 $600 --------------
function t4sixHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t4row3.classList.add("remove");
    //
    question = questions[3][3];
    answer = answers[3][3];
    addAmount = 600;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 4 $800 --------------
function t4eightHun() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t4row4.classList.add("remove");
    //
    question = questions[3][4];
    answer = answers[3][4];
    addAmount = 800;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}


// ------------- topic 4 $1000 --------------
function t4thousand() {
    textArea.innerHTML = "";
    earlyNotifyer.innerHTML="";
    t4row5.classList.add("remove");
    //
    question = questions[3][5];
    answer = answers[3][5];
    addAmount = 1000;
   
    console.log(`Question is ${question} \nAnswer is ${answer}.`);
    //
    questionBoard.classList.toggle("is-hidden");
    questionShowing = true;
   
    keysInfo.innerHTML = "Key Buzzers:     ";
    for (key in keysList) {
    keysInfo.innerHTML += `${playerList[key]}: <span class="key">${keysList[key]}</span>`
    };


    //displays question
    i = 0;
    displayQuestion(textArea, question, i);
   
}




let tester = 0;
let early = false;
let inputShowing = false;
let stopCounter = false;
let timerRanOut = false;


function displayQuestion(element, question, iIn) {
    tester = 1;
    console.log(`iIn right now is ${iIn}`);
    console.log(`Question length is ${question.length}`);

   
    //runs at the final letter
    if (iIn === question.length) {
        tester = 0;




        i = iIn;
        console.log("Tester is off")
        countdown1("...");
       
        return;
    } else if (early === true) {
        countdown1("...");
        i = iIn;
        return;
   
    }
   
    element.textContent += question[iIn];
    setTimeout (() =>displayQuestion(element, question, iIn+1), 50);


    // textArea.innerHTML = question;
}




// happens when c is clicked on question page
document.addEventListener("keydown", (ev) => {
   
    let key = ev.key;




    //only runs when on the question page
    if (questionShowing === true) {




        //sets of flag if key is pressed while the question is still playing out
        if (tester === 1) {


            if (keysList.includes(key) && !earlyPlayerList.includes(key)) {




                console.log(`${key} pressed early`);
                early =  true;
                //no one else can type for now
                questionShowing = false;
                inputShowing = true;

                getPlayer(key);
                displayInput();

            }
        } else {
            if (keysList.includes(key) && !earlyPlayerList.includes(key)) {




                if (early === false) {
                    console.log("Not pressed early");
                    questionShowing = false;
                    inputShowing = true;

                    getPlayer(key);
                    displayInput();


                    countdown1("...");
                } else {


                }


            }
        }




    // checks user guess
    } else if (key === "Enter" && inputShowing === true) {
        console.log("Guess entered")
       
        checkGuess();
       
    }
})




// displays the one who clicked early
function getPlayer(key) {
    let index = keysList.indexOf(key);
    guesser = playerList[index];

    earlyPlayerList.push(key);
    if (early === true) {
        earlyNotifyer.innerHTML = `${guesser} buzzed in early. You have 15 seconds to provide an answer.`;
    } else {
        earlyNotifyer.innerHTML = `${guesser} buzzed in. You have 15 seconds to provide an answer.`;
    }
    

}



// ------------ Function for displaying the input box -------------


function displayInput() {
    inputArea.classList.toggle("is-hidden");
}




// ------------ Function to check user input -------------


function checkGuess() {
    inputArea.classList.toggle("is-hidden");
    inputShowing = false;
    stopCounter = true;
    earlyNotifyer.innerHTML = "";
    let guess = inputBox.value.toLowerCase();
    console.log(`User guess is ${guess}.`);




    if (answer.includes(guess)) {
       
        guessedCorrectly();
    } else {
        questionShowing = true;
        earlyNotifyer.innerHTML = `${guesser} answered incorrectly.`
        early = false;


        // i += 1;
        // console.log(`i right now is ${i}`);
        displayQuestion(textArea, question, i);
    }
   
   
}






function guessedCorrectly() {
   
    console.log("Guess is correct.");
    earlyNotifyer.innerHTML = `${guesser} is correct! +$${addAmount}.`
    setTimeout(backToSelection, 5000);




}




//hides question div after 5 seconds
function backToSelection() {
    questionBoard.classList.toggle("is-hidden");




    //resets list so there's no early players
    earlyPlayerList = [];
}



// ------------- Countdown function --------------


const timer = document.getElementById("timer");




function countdown1(auto) {
    timer.innerHTML = auto;
    countdown2();
}

function countdown2() {

    console.log(timer.innerHTML)


    // if (timer.innerHTML < 0) {
    //     return;
    // }

    setTimeout(()=> {
        if (timer.innerHTML === "...") {
            timer.innerHTML = 15;
            console.log("yes");


        } else {


            if (stopCounter === true) {
                return;
            } else if (timer.innerHTML > 0) {
                timer.innerHTML -= 1;
            } else {
                return;
            }
           
        }
        countdown2()
    }, 1000)


}
