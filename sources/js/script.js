import SPFormData from 'sp-form-data';

let comparing = document.querySelector('.comparing')
if(!!comparing) {
    let repeaterAdd = comparing.querySelector('.comparing__repeater-add')

    repeaterAdd.addEventListener('click', () => {
        const container = document.createElement('div');

        container.classList.add('comparing__query')
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'query_text';
        input.placeholder = 'Параметр сравнения';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7344 10.9766L24.481 23.6832" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/><path d="M11.3789 24.0353L24.1255 11.3286" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/><path d="M34.3013 17.5C34.3013 26.7497 26.7916 34.25 17.5257 34.25C8.25968 34.25 0.75 26.7497 0.75 17.5C0.75 8.25027 8.25968 0.75 17.5257 0.75C26.7916 0.75 34.3013 8.25027 34.3013 17.5Z" stroke="#FF0000" stroke-width="1.5"/></svg>';
        deleteButton.addEventListener('click', () => {
            container.remove();
        });

        container.appendChild(input);
        container.appendChild(deleteButton);

        const wrapper = document.querySelector('.comparing__repeater-wrap');
        wrapper.appendChild(container);
    });

    comparing.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(comparing)
        let queryTextArr = formData.getAll('query_text')

        formData.delete('query_text');

        formData.append('query_text', queryTextArr);


        let xhr = new XMLHttpRequest();
        xhr.open('POST', './upload.php', true);

        xhr.onload = function (message) {
            if (xhr.status >= 200 && xhr.status < 300) {
                //console.log('Файл успешно загружен:', xhr.responseText);
               alert(xhr.responseText);
            } else {
                console.error('Произошла ошибка при загрузке файла:', xhr.statusText);
            }
        };

        xhr.onerror = function () {
            console.error('Произошла ошибка при загрузке файла.');
        };

        xhr.send(formData);
    })
}


// ------------ Deleting placeholder focus ------------ //
function focusFnInput(target) {
    if (target.getAttribute('placeholder') !== null) {
        target.setAttribute('data-placeholder', target.getAttribute('placeholder'))
        target.setAttribute('placeholder', '')
    }
}

document.addEventListener('focus', function (event) {
    for (let target = event.target; target && target !== this; target = target.parentNode) {
        if (target.matches('input, textarea')) {
            focusFnInput.call(this, target, event)
            break;
        }
    }
}, true);

function blurFnInput(target) {
    if (target.getAttribute('data-placeholder') !== null) {
        target.setAttribute('placeholder', target.getAttribute('data-placeholder'))
    }
}

document.addEventListener('blur', function (event) {
    for (let target = event.target; target && target !== this; target = target.parentNode) {
        if (target.matches('input, textarea')) {
            blurFnInput.call(this, target, event)
            break;
        }
    }
}, true);
// ---------- End Deleting placeholder focus ---------- //
