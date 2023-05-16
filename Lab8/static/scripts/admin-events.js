function loadAvatar(evt) {
    let file = evt.target.files;
    let f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    let main = new FileReader();
    main.onload = (function(theFile) {
        return function(e) {
            let preview_main = document.getElementById('author-image-main');
            preview_main.innerHTML = ['<img class="fields__upload-image_author_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    main.readAsDataURL(f);
    let card = new FileReader();
    card.onload = (function(theFile) {
        return function(e) {
            let preview_post = document.getElementById('author-image-card');
            preview_post.innerHTML = ['<img class="bottom__author-name_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    card.readAsDataURL(f);
    let button_old = document.getElementById('author-load-lable');
    let button_new = document.getElementById('upload-new-author');
    button_old.classList.add('content__hide');
    button_new.classList.remove('content__hide');
}

function loadPostImage(evt) {
    let file = evt.target.files;
    let f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    let main = new FileReader();
    main.onload = (function(theFile) {
        return function(e) {
            let preview_main = document.getElementById('image-big');
            preview_main.classList.remove('fields__upload-image');
            preview_main.innerHTML = ['<img class="fields__upload-image_post_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    main.readAsDataURL(f);
    let post = new FileReader();
    post.onload = (function(theFile) {
        return function(e) {
            let preview_main = document.getElementById('image-big-post');
            preview_main.innerHTML = ['<img class="article-box__image_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    post.readAsDataURL(f);
    let text_old = document.getElementById('upload-description-big');
    let button_new = document.getElementById('upload-new-big');
    text_old.classList.add('content__hide');
    button_new.classList.remove('content__hide');
}

function loadCardImage(evt) {
    let file = evt.target.files;
    let f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    let main = new FileReader();
    main.onload = (function(theFile) {
        return function(e) {
            let preview_main = document.getElementById('image-small');
            preview_main.classList.remove('fields__upload-image');
            preview_main.innerHTML = ['<img class="fields__upload-image_card_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    main.readAsDataURL(f);
    let post = new FileReader();
    post.onload = (function(theFile) {
        return function(e) {
            let preview_post = document.getElementById('image-small-post');
            preview_post.innerHTML = ['<img class="card-box__image_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    post.readAsDataURL(f);
    let text_old = document.getElementById('upload-description-small');
    let button_new = document.getElementById('upload-new-small');
    text_old.classList.add('content__hide');
    button_new.classList.remove('content__hide');
}

function loadTitle(evt) {
    let post_title = document.getElementById('post-title');
    let card_title = document.getElementById('card-title');
    let field = document.getElementById('title-input')
    post_title.textContent = evt.target.value;
    card_title.textContent = evt.target.value;
    field.classList.add('fields__input_not-gap');
    if(evt.target.value == '') {
        post_title.textContent = 'New Post';
        card_title.textContent = 'New Post';
        field.classList.remove('fields__input_not-gap');
    }
}

function loadDescription(evt) {
    let post_description = document.getElementById('post-description');
    let card_description = document.getElementById('card-description');
    let field = document.getElementById('description-input')
    post_description.textContent = evt.target.value;
    card_description.textContent = evt.target.value;
    field.classList.add('fields__input_not-gap')
    if(evt.target.value == '') {
        post_description.textContent = 'Please, enter any description';
        card_description.textContent = 'Please, enter any description';
        field.classList.remove('fields__input_not-gap');
    }
}

function loadName(evt) {
    let card_name = document.getElementById('card-name');
    let field = document.getElementById('name-input')
    card_name.textContent = evt.target.value;
    field.classList.add('fields__input_not-gap')
    if(evt.target.value == '') {
        card_name.textContent = 'Enter author name';
        field.classList.remove('fields__input_not-gap');
    }
}

function loadDate(evt) {
    let card_date = document.getElementById('card-date');
    let field = document.getElementById('date-input')
    let strArr = evt.target.value.split('-');
    let day = strArr[2];
    let month = strArr[1];
    let year = strArr[0];
    card_date.textContent = day + '/' + month + '/' + year;
    field.classList.add('fields__input_not-gap')
    if(evt.target.value == '') {
        card_date.textContent = 'dd/mm/gggg';
        field.classList.remove('fields__input_not-gap');
    }
}

function clearAvatar(evt) {
    let main = document.getElementById('author-image-main');
    let card = document.getElementById('author-image-card');
    let input = document.getElementById('author-pic-load');
    main.innerHTML = '<img src="../static/images/camera.svg">';
    card.innerHTML = '';
    input.value = '';
    let button_old = document.getElementById('upload-new-author');
    let button_new = document.getElementById('author-load-lable');
    button_old.classList.add('content__hide');
    button_new.classList.remove('content__hide');
}

function clearSmallImg(evt) {
    let main = document.getElementById('image-small');
    let card = document.getElementById('image-small-post');
    let input = document.getElementById('card-pic-load');
    main.classList.add('fields__upload-image');
    main.innerHTML = '<img class="fields__upload-pic" src="../static/images/camera.svg"> <label for="card-pic-load" class="fields__upload-text">Upload</label>';
    card.innerHTML = '';
    input.value = '';
    let button_old = document.getElementById('upload-new-small');
    let text_new = document.getElementById('upload-description-small');
    button_old.classList.add('content__hide');
    text_new.classList.remove('content__hide');
}

function clearBigImg(evt) {
    let main = document.getElementById('image-big');
    let post = document.getElementById('image-big-post');
    let input = document.getElementById('post-pic-load');
    main.classList.add('fields__upload-image');
    main.innerHTML = '<img class="fields__upload-pic" src="../static/images/camera.svg"> <label for="post-pic-load" class="fields__upload-text">Upload</label>';
    post.innerHTML = '';
    input.value = '';
    let button_old = document.getElementById('upload-new-big');
    let text_new = document.getElementById('upload-description-big');
    button_old.classList.add('content__hide');
    text_new.classList.remove('content__hide');
}

function printData() {
    let form = document.getElementById('post-form');
    let data = new FormData(form);
    let reader = new FileReader();
    let object = {};
    data.forEach(function(value, key){
        object[key] = value;
    });
    reader.onload = () => {
        object['author_avatar'] = btoa(reader.result);
    }
    reader.readAsBinaryString(object['author_avatar']);
    console.log(object['author_avatar']);
    let json = JSON.stringify(object);
    console.log(json);
}

document.getElementById('author-pic-load').addEventListener('change', loadAvatar);
document.getElementById('post-pic-load').addEventListener('change', loadPostImage);
document.getElementById('card-pic-load').addEventListener('change', loadCardImage);
document.getElementById('title-input').addEventListener('change', loadTitle);
document.getElementById('description-input').addEventListener('change', loadDescription);
document.getElementById('name-input').addEventListener('change', loadName);
document.getElementById('date-input').addEventListener('change', loadDate);
document.getElementById('remove-avatar-btn').addEventListener('click', clearAvatar);
document.getElementById('remove-small-btn').addEventListener('click', clearSmallImg);
document.getElementById('remove-big-btn').addEventListener('click', clearBigImg);
document.getElementById('submit-btn').addEventListener('click', printData);