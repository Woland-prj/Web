function handleFileSelect(evt) {
    var file = evt.target.files;
    var f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            var img = document.getElementById('author-image');
            img.innerHTML = ['<img title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    reader.readAsDataURL(f);
}
document.getElementById('file').addEventListener('change', handleFileSelect, false);