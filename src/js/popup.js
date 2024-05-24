function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.getElementById('popup-close').addEventListener('click', closePopup);