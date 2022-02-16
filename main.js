let text = document.querySelector('#typing')

function cursor () {
    if(text.classList[1] == 'cursor') {
        text.classList.remove('cursor')
    } else {
        text.classList.add('cursor')
    }
}

setInterval(cursor, 500);

function random_string () {
    let world_language = ['KOREAN', 'ENGLISH', 'JAPANESE', 'CHINESE', 'FRENCH', 'SPANISH', 'GERMAN', 'VIETNAMESE', 'RUSSIAN', 'ITALIAN', 'THAI', 'INDONESIAN', 'ARABIC', 'MONGOLIAN', 'HINDI', 'GREEK', 'PORTUGUESE']
    let select_string = world_language[Math.floor(Math.random() * world_language.length)]
    let select_string_arr = select_string.split('')

    return select_string_arr
}

function reset_typing () {
    text.textContent = ''
    dynamic(random_string())
}

function dynamic(random_arr) {
    if(random_arr.length > 0) {
        text.textContent += random_arr.shift()
        setTimeout(function () {
            dynamic(random_arr)
        }, 90)
    } else {
        setTimeout(reset_typing, 3000)
    }
}

setTimeout(() => {
    text.textContent = ''
    dynamic(random_string())
}, 3000)