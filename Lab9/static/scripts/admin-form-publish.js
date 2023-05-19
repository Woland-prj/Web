function imageToBase64(imgFile) {
    return new Promise(resolve => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        }
        reader.readAsDataURL(imgFile);
    });
}

function validateData(data) {
    let valid = true;
    for (const pair of data.entries()) {
        if(pair[1] == '') {
            console.log(`${pair[0]} is blank, cannot publish`);
            valid = false;
        }
    }
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
    return await fetch('/api/create-post/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    });
}

async function publishPost(evt) {
    evt.preventDefault();
    let form = document.getElementById('post-form');
    let data = new FormData(form);
    if (validateData(data)) {
        const base64avatar = await imageToBase64(data.get('author_avatar'));
        const base64post = await imageToBase64(data.get('post_image'));
        const base64card = await imageToBase64(data.get('card_image'));
        data.set('author_avatar', base64avatar);
        data.set('post_image', base64post);
        data.set('card_image', base64card);
        sendData(data);
    }
}

document.getElementById('submit-btn').addEventListener('click', publishPost);