if (!localStorage.getItem('data')) {
    window.open('/gooalsCounter/', '_self');
}

const data = JSON.parse(localStorage.getItem('data'));


let datahtml = document.querySelector('.container');

datahtml.innerHTML = `
    <h1 class="text-center mt-5 fw-bold">winner ${data.goal}</h1>

    <div class="match-gooals mx-auto mt-5 ">
        <div class="d-flex align-items-center">
            <div>
                <img src="${data.club1Image}" alt="club1" width="60">
                <p class="text-center fw-bold fs-5">${data.club1Name}</p>
            </div>
            <p class="fw-bold fs-3 ms-5" id="club1-gools">0</p>
            <p class="fw-bold fs-1 mx-4">-</p>
            <p class="fw-bold fs-3 me-5 " id="club2-gools">0</p>
            <div>
                <img src="${data.club2Image}" alt="club1" width="60">
                <p class="text-center fw-bold fs-5">${data.club2Name}</p>
            </div>

        </div>
        <div class="d-flex justify-content-between">
            <button class="btn" id="club1AddGooal">
                <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 23.5C0 13.835 7.83502 6 17.5 6V6C27.165 6 35 13.835 35 23.5V23.5C35 33.165 27.165 41 17.5 41V41C7.83502 41 0 33.165 0 23.5V23.5Z"
                        fill="#009DFF" />
                    <path d="M14.0994 33.4531V15.7599H18.1136V33.4531H14.0994ZM7.25994 26.6136V22.5994H24.9531V26.6136H7.25994Z"
                        fill="white" />
                </svg>
            </button>
            <button class="btn" id="club2AddGooal">
                <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 23.5C0 13.835 7.83502 6 17.5 6V6C27.165 6 35 13.835 35 23.5V23.5C35 33.165 27.165 41 17.5 41V41C7.83502 41 0 33.165 0 23.5V23.5Z"
                        fill="#009DFF" />
                    <path d="M14.0994 33.4531V15.7599H18.1136V33.4531H14.0994ZM7.25994 26.6136V22.5994H24.9531V26.6136H7.25994Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>
`

const addGooal1 = document.querySelector('#club1AddGooal');
const addGooal2 = document.querySelector('#club2AddGooal');
const club1Gools = document.querySelector('#club1-gools');
const club2Gools = document.querySelector('#club2-gools');
const startNew = document.querySelector('#startNew');
const restart = document.querySelector('#restart');

let gooals;

if (localStorage.getItem('gooals')) {
    gooals = JSON.parse(localStorage.getItem('gooals'));
    if (gooals.counter1 < +data.goal  || gooals.counter2 < +data.goal ) {
        club1Gools.textContent = gooals.counter1;
        club2Gools.textContent = gooals.counter2;
    } else {
        gooals.counter1 != +data.goal ? gooals.counter1++ : null;
        club1Gools.textContent = `win  ${gooals.counter1}`;
        gooals.counter2 != +data.goal ? gooals.counter2++ : null;
        club2Gools.textContent = `win  ${gooals.counter2}`;
    }
}
else {
    gooals = {
        counter1 : 0,
        counter2: 0,
        counterText1: '0',
        counterText2: '0',
    };
}

addGooal1.addEventListener('click', () => {
    let goal = +data.goal;
    
    if (gooals.counter1 < goal -1 ) {
        gooals.counter1++;
        club1Gools.textContent = gooals.counter1;
        gooals.counterText1 = gooals.counter1;
    } else {
        gooals.counter1 != goal ? gooals.counter1++ : null;
        club1Gools.textContent = `win  ${gooals.counter1}`;
        gooals.counterText1 = `win  ${gooals.counter1}`;
    }
    localStorage.setItem('gooals' , JSON.stringify(gooals))
});

addGooal2.addEventListener('click', () => {
    let goal = +data.goal;

    if (gooals.counter2 < goal - 1) {
        gooals.counter2++;
        club2Gools.textContent = gooals.counter2;
        gooals.counterText2 = gooals.counter2;
    } else {
        gooals.counter2 != goal ? gooals.counter2++ : null;
        club2Gools.textContent = `win  ${gooals.counter2}`;
        gooals.counterText2 = `win  ${gooals.counter2}`;
    }
    localStorage.setItem('gooals', JSON.stringify(gooals))
});

startNew.addEventListener('click', () => {
    if (confirm('اكيد')) {
        localStorage.removeItem('gooals');
        localStorage.removeItem('data');
        seveToStorage();
        window.open('/gooalsCounter/', '_self');
    }
    
});

restart.addEventListener('click', () => {
    if (confirm('اكيد')) {
        localStorage.removeItem('gooals');
        club1Gools.textContent = 0;
        club2Gools.textContent = 0;
        gooals.counter1 = 0;
        gooals.counter2 = 0;
        seveToStorage();
    }
    
});

function seveToStorage() {
    let storage;
    if (localStorage.getItem('storage')) { 
        storage = JSON.parse(localStorage.getItem('storage'));
    }
    else {
        storage = [];
    }

    storage.push({
        goal: data.goal,
        club1Name: data.club1Name,
        club1Image: data.club1Image,
        club2Name: data.club2Name,
        club2Image: data.club2Image,
        counter1: gooals.counterText1,
        counter2: gooals.counterText2,
    });

    localStorage.setItem('storage', JSON.stringify(storage))    
}
