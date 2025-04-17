window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex"; // Popup megjelenítése az oldal betöltésekor
};

function showLogin() {
    alert("Bejelentkezés");
    closePopup();
}

function showRegister() {
    alert("Regisztráció");
    closePopup();
}

function viewTips() {
    alert("Tippek megtekintése");
    closePopup();
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none"; // Popup eltüntetése
}
