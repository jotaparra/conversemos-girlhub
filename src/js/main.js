window.onload = () =>{
    setTimeout(function(){ indexPage();}, 4000);
};

let userName;

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
    message.classList.add("col-11", "sideText", "spacing")
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
    convSection.classList.add("scroll");
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
        <div class="col-6">
            <button class="customBtn">Si</button>
        </div>
        <div class="col-6">
            <button class="customBtn">No</button>
        </div>
    `
    root.appendChild(firstResMsg);
    root.appendChild(scndResMsg);
    root.appendChild(optnBtns);
};


