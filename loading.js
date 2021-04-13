

document.getElementById('title').style.display = "none";
document.getElementById('download_text').style.display = "none";
document.getElementById('download_frame').style.display = "none";

var loadingOverlay = document.querySelector('.loading');
function toggleLoading(event) {
    if (event.keyCode !== 13) return;

    document.activeElement.blur();

    if (loadingOverlay.classList.contains('hidden')) {
        loadingOverlay.classList.remove('hidden');
    } else {
        loadingOverlay.classList.add('hidden');
    }
}

document.addEventListener('keydown', toggleLoading);

function showAlert() {
    alert('de knop werkt!');
}

window.onload = function () {
    console.log("dom redy.");
    document.getElementById('title').style.display = "block";
    document.getElementById('download_text').style.display = "block";
    document.getElementById('download_frame').style.display = "block";
    loadingOverlay.style.display = "none";
}
