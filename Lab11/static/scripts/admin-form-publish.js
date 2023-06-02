function imageToBase64(imgFile) {
    return new Promise(resolve => {
        let reader = new FileReader();
        reader.onload = () => {
            console.log(btoa(reader.result));
            resolve(btoa(reader.result));
        }
        reader.readAsBinaryString(imgFile);
    });
}

function convertDate(date) {
    let strArr = date.split('-');
    let day = strArr[2];
    let month = strArr[1];
    let year = strArr[0];
    let conv_date = day + '/' + month + '/' + year;
    return conv_date;
}

function printMessage(state) {
    const error_msg = document.getElementById('error_msg');
    const valid_msg = document.getElementById('valid_msg');
    if(state) {
        valid_msg.classList.remove('content__hide');
        error_msg.classList.add('content__hide');
    } else {
        error_msg.classList.remove('content__hide');
        valid_msg.classList.add('content__hide');
    }
}

function validateData(data) {
    let valid = true;
    for (const pair of data.entries()) {
        if(pair[1].name == '' && pair[1].name != undefined)  {
            console.log(`${pair[0]} is blank, cannot publish`);
            const blank_field = document.getElementById(pair[0]).previousElementSibling;
            blank_field.classList.add('fields__input_invalid-image');
            valid = false;
        }
        if(pair[1] == '') {
            console.log(`${pair[0]} is blank, cannot publish`);
            const blank_field = document.getElementById(pair[0]);
            blank_field.classList.add('fields__input_invalid');
            valid = false;
        }
    }
    printMessage(valid);
    return valid;
}

async function printData() {
    let form = document.getElementById('post-form');
    let data = new FormData(form);
    let object = {};
    if (validateData(data)) {
        const base64avatar = await imageToBase64(object['author_avatar']);
        const base64post = await imageToBase64(object['post_image']);
        const base64card = await imageToBase64(object['card_image']);
        object['author_avatar'] = base64avatar;
        object['post_image'] = base64post;
        object['card_image'] = base64card;
        let json = JSON.stringify(object);
        console.log(json);
    }
}

async function sendData(data) {
    return await fetch('/api/post/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    });
}

async function formToJSON(data) {
    let obj = {};
    obj['author_avatar_name'] = data.get('author_avatar').name;
    console.log(obj['author_avatar_name']);
    obj['post_image_name'] = data.get('post_image').name;
    obj['card_image_name'] = data.get('card_image').name;
    const base64avatar = await imageToBase64(data.get('author_avatar'));
    const base64post = await imageToBase64(data.get('post_image'));
    const base64card = await imageToBase64(data.get('card_image'));
    const conv_date = convertDate(data.get('publish_date'));
    data.set('author_avatar', base64avatar);
    data.set('post_image', base64post);
    data.set('card_image', base64card);
    data.set('publish_date', conv_date);
    data.forEach(function(value, key) {
        obj[key] = value;
    });
    return JSON.stringify(obj)
}

async function publishPost(evt) {
    evt.preventDefault();
    let form = document.getElementById('post-form');
    let data = new FormData(form);
    if (validateData(data)) {
        let c_data = await formToJSON(data);
        console.log(data);
        console.log(c_data);
        sendData(c_data);
    }
}

const submit_btn = document.getElementById('submit-btn');

submit_btn.addEventListener('click', publishPost);

