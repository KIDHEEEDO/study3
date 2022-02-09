let text = document.querySelector('#typing')
let selectTyping = '';

function cursor () {
    if(text.classList[1] == 'cursor') {
        text.classList.remove('cursor')
    } else {
        text.classList.add('cursor')
    }
}

setInterval(cursor, 500);

function randomList () {
    let myList = ['KOREAN', 'ENGLISH', 'JAPANESE', 'CHINESE', 'FRENCH', 'SPANISH', 'GERMAN', 'VIETNAMESE', 'RUSSIAN', 'ITALIAN', 'THAI', 'INDONESIAN', 'ARABIC', 'MONGOLIAN', 'HINDI', 'GREEK', 'PORTUGUESE']
    let myListSelect = myList[Math.floor(Math.random() * myList.length)]
    let splitedList = myListSelect.split('');

    return splitedList;
}

function listTyping (texts) {
    for(let i = 0; i < texts.length; i++) {
        setTimeout(() => {
            selectTyping += texts[0]
            texts.shift()
            text.innerText = selectTyping;
        }, 80 * i)
    }
    selectTyping = '';
}

setInterval(() => {
    text.innerText = '';
    listTyping(randomList())
}, 3000)