let goal = document.querySelector('#goal');
let club1Name = document.getElementById('club1');
let club1img1 = document.querySelector('#img1club1');
let club1img2 = document.querySelector('#img2club1');
let club2Name = document.getElementById('club2');
let club2img1 = document.querySelector('#img1club2');
let club2img2 = document.querySelector('#img2club2');
let submit = document.querySelector('#submit');

let club1SelectedImage = false;
let club2SelectedImage = false;
if (localStorage.getItem('gooals')) {
    window.open('/pages/game.html', '_self');
}

club1img1.addEventListener('click', (e) => {
    addActiveClass(club1img1);
    club1SelectedImage = e.target.src;
});
club1img2.addEventListener('click', (e) => {
    addActiveClass(club1img2);
    club1SelectedImage = e.target.src;
});

club2img1.addEventListener('click', (e) => {
    addActiveClass(club2img1, false);
    club2SelectedImage = e.target.src;
});
club2img2.addEventListener('click', (e) => {
    addActiveClass(club2img2, false);
    club2SelectedImage = e.target.src;
});

submit.addEventListener('click', (e) => {
    if (valAll()) {
        let data = {
            goal: goal.value,
            club1Name: club1Name.value,
            club1Image: club1SelectedImage,
            club2Name: club2Name.value,
            club2Image: club2SelectedImage,
        }
        localStorage.setItem('data',JSON.stringify(data))
        window.open('./pages/game.html', '_self')
    }
});

function addActiveClass(fore, club1 = true) {
    if (club1) {
        club1img1.classList.remove('active');
        club1img2.classList.remove('active');
    } else {
        club2img1.classList.remove('active');
        club2img2.classList.remove('active');
    }

    fore.classList.add('active');
}

function valAll() {
    if (goal.value === '') {
        alert( 'حط عدد اهداف الفوز');
        return false
    }
    if (club1Name.value === '') {
        alert( 'حط اسم للفريق الاول');
        return false
    }
    else if (club2Name.value === '') {
        alert('حط اسم للفريق الثاني');
        return false;
    }else if (!club1SelectedImage) {
        alert(' اختار صور لفريقك الاول');
        return false;
    }else if (!club2SelectedImage) {
        alert(' اختار صور لفريقك الثاني');
        return false;
    }
    else {
        return true;
    }
}