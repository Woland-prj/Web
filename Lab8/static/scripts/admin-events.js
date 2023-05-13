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
            let preview_main = document.getElementById('image-small-post');
            preview_main.innerHTML = ['<img class="card-box__image_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    post.readAsDataURL(f);
}

function loadTitle(evt) {
    let post_title = document.getElementById('post-title');
    let card_title = document.getElementById('card-title');
    post_title.textContent = evt.target.value;
    card_title.textContent = evt.target.value;
    if(evt.target.value == '') {
        post_title.textContent = 'New Post';
        card_title.textContent = 'New Post';
    }
}

function loadDescription(evt) {
    let post_description = document.getElementById('post-description');
    let card_description = document.getElementById('card-description');
    post_description.textContent = evt.target.value;
    card_description.textContent = evt.target.value;
    if(evt.target.value == '') {
        post_description.textContent = 'Please, enter any description';
        card_description.textContent = 'Please, enter any description';
    }
}

function loadName(evt) {
    let card_name = document.getElementById('card-name');
    card_name.textContent = evt.target.value;
    if(evt.target.value == '') {
        card_name.textContent = 'Enter author name';
    }
}

document.getElementById('author-pic-load').addEventListener('change', loadAvatar);
document.getElementById('post-pic-load').addEventListener('change', loadPostImage);
document.getElementById('card-pic-load').addEventListener('change', loadCardImage);
document.getElementById('title-input').addEventListener('change', loadTitle);
document.getElementById('description-input').addEventListener('change', loadDescription);
document.getElementById('name-input').addEventListener('change', loadName);

// const formElem = document.querySelector("form");
// description-input