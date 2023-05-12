function loadAvatar(evt) {
    var file = evt.target.files;
    var f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    var main = new FileReader();
    main.onload = (function(theFile) {
        return function(e) {
            var preview_main = document.getElementById('author-image-main');
            preview_main.innerHTML = ['<img class="fields__upload-image_author_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    main.readAsDataURL(f);
    var post = new FileReader();
    post.onload = (function(theFile) {
        return function(e) {
            var preview_post = document.getElementById('author-image-post');
            preview_post.innerHTML = ['<img class="bottom__author-name_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    post.readAsDataURL(f);
}

function loadAvatar(evt) {
    var file = evt.target.files;
    var f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    var main = new FileReader();
    main.onload = (function(theFile) {
        return function(e) {
            var preview_main = document.getElementById('image-big');
            preview_main.classList.remove('fields__upload-image');
            preview_main.innerHTML = ['<img class="fields__upload-image_post_load" "title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    main.readAsDataURL(f);
}

document.getElementById('author-pic-load').addEventListener('change', loadAvatar);
document.getElementById('post-pic-load').addEventListener('change', loadAvatar);