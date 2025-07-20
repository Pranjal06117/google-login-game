function handleCredentialResponse(response) {
  const data = parseJwt(response.credential);
  localStorage.setItem("user", JSON.stringify(data));
  showGameOptions(data);
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(base64));
}

function showGameOptions(user) {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("games-section").style.display = "block";
  document.getElementById("welcome-text").innerText = `Hello, ${user.name}`;
}

function signOut() {
  localStorage.removeItem("user");
  location.reload();
}

window.onload = function () {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    showGameOptions(user);
  }
};
