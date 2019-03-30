window.onload = () =>{
    setTimeout(function(){ indexPage();}, 4000);
};

let userName;
let pointsCount = [0];

function indexPage(){

    index.style.display='none';
    talking.style.display='block';

    root.innerHTML = "";
    root.innerHTML = `
    <div class="col-11 sideText">
        <img class="contain" src="./img/girlAI.png" alt="AILogo">
        <p class="box3 sb14">Bienvenida a <b>Conversemos</b> ¿Cómo te gusta que te llamen?</p>
    </div>
    `
};

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userName = userMsg.value;
    const message = document.createElement("div")
    message.classList.add("col-11", "sideText", "spacing", "pushLeft")
    message.innerHTML = `
    <div class="sideText pushLeft spacing maxContent">
        <p class="box3 sb13">${userName}</p>
        <img class="contain" src="./img/girlUser.png" alt="UserLogo">
    </div>
    `;
    userMsg.value = "";
    root.appendChild(message)
    setTimeout(function(){ firstResponse();}, 1000);
});

function firstResponse(){
    const firstResMsg = document.createElement("div")
    firstResMsg.classList.add("col-11", "sideText")
    firstResMsg.innerHTML = `
    <div class="sideText spacing maxContent">
        <img class="contain" src="./img/girlAI.png" alt="AILogo">
        <p class="box3 sb14">Súper :)</p>
    </div>
    `;
    const scndResMsg = document.createElement("div");
    scndResMsg.classList.add("col-11", "sideText");
    scndResMsg.innerHTML = `
    <div class="sideText spacing maxContent">
        <img class="contain" src="./img/girlAI.png" alt="AILogo">
        <p class="box3 sb14">Sabemos que quieres conversar sobre un 
        tema complejo y entendemos que tu privacidad es importante. 
        ¿Quieres crear un pin de acceso?</p>
    </div>
    `
    const optnBtns = document.createElement("div");
    optnBtns.classList.add("col-11", "sideText");
    optnBtns.innerHTML = `
        <div class="col-6 col-md-3">
            <button id="optnBtnYes" class="customBtn">Si</button>
        </div>
        <div class="col-6 col-md-3">
            <button id="optnBtnNo" class="customBtn">No</button>
        </div>
    `
    root.appendChild(firstResMsg);
    root.appendChild(scndResMsg);
    root.appendChild(optnBtns);

    setTimeout(function(){ options();}, 1000);
};

function options(){

    optnBtnYes.addEventListener("click", () => {
        talking.style.display = "none";
        pin.style.display = "block";

        confPin.addEventListener("click", () => {
            talking.style.display = "block";
            pin.style.display = "none";
            const confirmation = document.createElement("div");
            confirmation.classList.add("col-11", "sideText", "spacing")
            confirmation.innerHTML = `
            <div class="sideText spacing maxContent">
                <img class="contain" src="./img/girlAI.png" alt="AILogo">
                <p class="box3 sb14">Contraseña creada</p>
            </div>
            `;
            userMsg.value = "";
            root.appendChild(confirmation)
            convSection.scrollIntoView(false);
            setTimeout(function(){ afterPin();}, 1000);
        })
    });

    optnBtnNo.addEventListener("click", () => {
        setTimeout(function(){ afterPin();}, 1000);
    })
}

function afterPin(){
    optnBtnYes.style.display = "none";
    optnBtnNo.style.display = "none";


    const thirdResMsg = document.createElement("div")
    thirdResMsg.classList.add("col-11", "sideText")
    thirdResMsg.innerHTML = `
    <div class="sideText spacing maxContent">
        <img class="contain" src="./img/girlAI.png" alt="AILogo">
        <p class="box3 sb14">Valoramos tu fuerza y estamos aquí para 
        acompañarte durante este proceso</p>
    </div>
    `;
    const frthResMsg = document.createElement("div");
    frthResMsg.classList.add("col-11", "sideText");
    frthResMsg.innerHTML = `
    <div class="sideText spacing maxContent">
        <img class="contain" src="./img/girlAI.png" alt="AILogo">
        <p class="box3 sb14">Cuéntame ¿Sobre qué quieres  conversar hoy?</p>
    </div>
    `
    root.appendChild(thirdResMsg);
    root.appendChild(frthResMsg);
    convSection.scrollIntoView(false);
    setTimeout(function(){ resOptns();}, 2000);
};

function resOptns(){

    const userResOptns = document.createElement("div")
    userResOptns.id ="waiting"
    userResOptns.classList.add("col-11", "sideText", "spacing", "pushLeft")
    userResOptns.innerHTML = `
    <div class="sideText pushLeft spacing maxContent">
        <p class="box3 sb13">... </p>
        <img class="contain" src="./img/girlUser.png" alt="UserLogo">
    </div>
    `;

    const optnResBtns = document.createElement("div");
    optnResBtns.id = "optnResBtns"
    optnResBtns.classList.add("middle", "col-11");
    optnResBtns.innerHTML = `
    <div class="container spacing">
        <div class="row">
            <div class="col-12">
                <button id="optnBtnOne" class="customBtn">Quiero analizar mi relación</button>
            </div>
        </div>
    </div>
    <div class="container spacing">
        <div class="row">
            <div class="col-12">
                <button id="optnBtnTwo" class="customBtn">Creo que mi pareja me maltrata</button>
            </div>
        </div>
    </div>
    <div class="container spacing">
        <div class="row">
            <div class="col-12">
                <button id="optnBtnThree" class="customBtn">Necesito información</button>
            </div>
        </div>
    </div>
    `
    root.appendChild(userResOptns);
    root.appendChild(optnResBtns);
    convSection.scrollIntoView(false);
    userOptionsRes();
}

function userOptionsRes(){

    optnBtnOne.addEventListener("click", () => {
        waiting.style.display = "none";
        optnResBtns.style.display = "none";
        setTimeout(function(){ response(optnBtnOne.textContent);}, 1000);
    })

    optnBtnTwo.addEventListener("click", () => {
        waiting.style.display = "none";
        optnResBtns.style.display = "none";
        setTimeout(function(){ response(optnBtnTwo.textContent);}, 1000);
    })

    optnBtnThree.addEventListener("click", () => {
        waiting.style.display = "none";
        optnResBtns.style.display = "none";
        setTimeout(function(){ response(optnBtnThree.textContent);}, 1000);
    })
}

function response(text){
    const chosenOptn = document.createElement("div")
    chosenOptn.classList.add("col-11", "sideText", "spacing", "pushLeft")
    chosenOptn.innerHTML = `
    <div class="sideText pushLeft spacing maxContent">
        <p class="box3 sb13">${text}</p>
        <img class="contain" src="./img/girlUser.png" alt="UserLogo">
    </div>
    `;
    root.appendChild(chosenOptn);
    convSection.scrollIntoView(false);
    setTimeout(function(){ pathToFollow(text);}, 1000);
}

function pathToFollow(text){

    if (text === "Quiero analizar mi relación"){

        const fifthResMsg = document.createElement("div")
        fifthResMsg.classList.add("col-11", "sideText")
        fifthResMsg.innerHTML = `
        <div class="sideText spacing maxContent">
            <img class="contain" src="./img/girlAI.png" alt="AILogo">
            <p class="box3 sb14">De acuerdo.</p>
        </div>
        `;
        const sxthResMsg = document.createElement("div");
        sxthResMsg.classList.add("col-11", "sideText");
        sxthResMsg.innerHTML = `
        <div class="sideText spacing maxContent">
            <img class="contain" src="./img/girlAI.png" alt="AILogo">
            <p class="box3 sb14">¿Qué tipo de relación es?</p>
        </div>
        `;

        const relOptions = document.createElement("div");
        relOptions.id = "relOptions"
        relOptions.classList.add("middle", "col-11");
        relOptions.innerHTML = `
        <div class="container spacing">
            <div class="row">
                <div class="col-12">
                    <button id="optnRelOne" class="customBtn">Pololeo</button>
                </div>
            </div>
        </div>
        <div class="container spacing">
            <div class="row">
                <div class="col-12">
                    <button id="optnRelTwo" class="customBtn">Convivencia</button>
                </div>
            </div>
        </div>
        <div class="container spacing">
            <div class="row">
                <div class="col-12">
                    <button id="optnRelThree" class="customBtn">Matrimonio</button>
                </div>
            </div>
        </div>
        `

        root.appendChild(fifthResMsg);
        root.appendChild(sxthResMsg);
        root.appendChild(relOptions);
        convSection.scrollIntoView(false);
        chosenRelOptn();
    }
}

function chosenRelOptn(){

    optnRelOne.addEventListener("click", () => {

        relOptions.style.display = "none";

        const chosenOptn = document.createElement("div")
        chosenOptn.classList.add("col-11", "sideText", "spacing", "pushLeft")
        chosenOptn.innerHTML = `
        <div class="sideText pushLeft spacing maxContent">
            <p class="box3 sb13">${optnRelOne.textContent}</p>
            <img class="contain" src="./img/girlUser.png" alt="UserLogo">
        </div>
        `;
        root.appendChild(chosenOptn);
        convSection.scrollIntoView(false);
        setTimeout(function(){ firstOption();}, 1000);
    })
}

function firstOption(){

    const svnthResMsg = document.createElement("div")
    svnthResMsg.classList.add("col-11", "sideText")
    svnthResMsg.innerHTML = `
    <div class="sideText spacing maxContent">
        <img class="contain" src="./img/girlAI.png" alt="AILogo">
        <p class="box3 sb14">Entiendo. Ahora voy a hacerte un par de preguntas 
        para ayudarte a analizar tu relación.</p>
    </div>
    `;

    const start = document.createElement("div");
    start.id = "start";
    start.classList.add("middle", "col-11", "spacing");
    start.innerHTML = `
    <div class="container spacing">
        <div class="row">
            <div class="col-12">
                <button id="optnBtnOne" class="customBtn">Comencemos</button>
            </div>
        </div>
    </div>`

    root.appendChild(svnthResMsg);
    root.appendChild(start);
    convSection.scrollIntoView(false);
    setTimeout(function(){ startTest(0);}, 1000);
};

function startTest(indexNum){
    start.addEventListener("click", () => {
        convSection.style.display = "none";
        option1.style.display = "block";
        rootQuestions.innerHTML = relQuestions[indexNum];
        btnOptns.innerHTML = "";
        btnOptns.innerHTML = `
        <div class="col-12 ml-3">
            <button type="button" class="btn btn-question ml-5" id="never${indexNum}">Nunca</button>
            <button type="button" class="btn btn-question ml-5" id="once${indexNum}">Una vez</button>
            <button type="button" class="btn btn-question ml-5" id="sometimes${indexNum}">A veces</button>
            <button type="button" class="btn btn-question ml-5" id="always${indexNum}">Siempre</button>
        </div>
        `
        counter(indexNum);
    })
}

function counter(indexNum) {
    
    const never = document.getElementById("never" + indexNum);
    const once = document.getElementById("once" + indexNum);
    const sometimes = document.getElementById("sometimes" + indexNum);
    const always = document.getElementById("always" + indexNum);

    never.addEventListener("click", () => {
        pointsCount.reduce((acc) => {
            return acc + 0;
        })
        indexNum =+ 1
        startTest(indexNum);
        start.click();
    })

    once.addEventListener("click", () => {
        pointsCount.reduce((acc) => {
            return acc + 1;
        })
        indexNum =+ 1
        startTest(indexNum);
        start.click();
    })

    sometimes.addEventListener("click", () => {
        pointsCount.reduce((acc) => {
            return acc + 2;
        })
        indexNum =+ 1
        startTest(indexNum);
        start.click();
    })

    always.addEventListener("click", () => {
        pointsCount.reduce((acc) => {
            return acc + 3;
        })
        indexNum =+ 1
        startTest(indexNum);
        start.click();
    })
}