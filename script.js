const setSurname = () => {
    if (document.getElementsByTagName('input')[0].value !== '') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Оrifjon ' + document.getElementsByTagName('input')[0].value;  
    } else {
        document.getElementsByTagName('h1')[0].innerHTML = 'Оrifjon Nigmatov';  
    } 
}

const setWallColor = () => {
    function getRandomInt() {
        return Math.floor(Math.random() * 8);
    };
    let colors = ['#FFC970', 'pink', '#AC66F8', '#59E5D9', '#C4F866', 'white', '#74C4B3', '#FFD006'];
    document.body.style.backgroundColor = colors[getRandomInt()];
}

const createResume = () => {
    const block = document.createElement('div');
    const name = document.createElement('h4');
    name.textContent = 'Имя: ' + document.getElementsByTagName('input')[1].value;
    const surname = document.createElement('h4');
    surname.textContent = 'Фамилия: ' + document.getElementsByTagName('input')[2].value;
    const bio = document.createElement('h4');
    const age = document.createElement('h4');
    age.textContent = 'Возраст: ' + document.getElementsByTagName('input')[3].value;
    bio.textContent = 'Обо мне: ' + document.getElementsByTagName('textarea')[0].value;
    const sex = document.createElement('h4');
    sex.textContent = 'Пол: ' + document.getElementsByTagName('select')[0].value;
    document.getElementsByClassName('resume')[0].append(block);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(name);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(surname);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(age);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(sex);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(bio);
}

const deleteResume = () => {
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].remove();
}