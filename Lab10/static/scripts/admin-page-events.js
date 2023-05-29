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
            console.log(theFile)
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
    let field = document.getElementById('title')
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
    let field = document.getElementById('description')
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
    let field = document.getElementById('author_name')
    card_name.textContent = evt.target.value;
    field.classList.add('fields__input_not-gap')
    if(evt.target.value == '') {
        card_name.textContent = 'Enter author name';
        field.classList.remove('fields__input_not-gap');
    }
}

function convertDate(date) {
    let strArr = date.split('-');
    let day = strArr[1];
    let month = strArr[2];
    let year = strArr[0];
    let conv_date = day + '/' + month + '/' + year;
    return conv_date;
}

function loadDate(evt) {
    let card_date = document.getElementById('card-date');
    let field = document.getElementById('publish_date')
    card_date.textContent = convertDate(evt.target.value);
    field.classList.add('fields__input_not-gap')
    if(evt.target.value == '') {
        card_date.textContent = 'dd/mm/gggg';
        field.classList.remove('fields__input_not-gap');
    }
}

function clearAvatar(evt) {
    let main = document.getElementById('author-image-main');
    let card = document.getElementById('author-image-card');
    let input = document.getElementById('author_avatar');
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
    let input = document.getElementById('card_image');
    main.classList.add('fields__upload-image');
    main.innerHTML = '<div class="content__button fields__button"> <img class="fields__upload-pic" src="../static/images/camera.svg"> <label for="post_image" class="fields__upload-text">Upload</label> </div>';
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
    let input = document.getElementById('post_image');
    main.classList.add('fields__upload-image');
    main.innerHTML = '<div class="content__button fields__button"> <img class="fields__upload-pic" src="../static/images/camera.svg"> <label for="post_image" class="fields__upload-text">Upload</label> </div>';
    post.innerHTML = '';
    input.value = '';
    let button_old = document.getElementById('upload-new-big');
    let text_new = document.getElementById('upload-description-big');
    button_old.classList.add('content__hide');
    text_new.classList.remove('content__hide');
}

document.getElementById('author_avatar').addEventListener('change', loadAvatar);
document.getElementById('post_image').addEventListener('change', loadPostImage);
document.getElementById('card_image').addEventListener('change', loadCardImage);
document.getElementById('title').addEventListener('change', loadTitle);
document.getElementById('description').addEventListener('change', loadDescription);
document.getElementById('author_name').addEventListener('change', loadName);
document.getElementById('publish_date').addEventListener('change', loadDate);
document.getElementById('remove-avatar-btn').addEventListener('click', clearAvatar);
document.getElementById('remove-small-btn').addEventListener('click', clearSmallImg);
document.getElementById('remove-big-btn').addEventListener('click', clearBigImg);