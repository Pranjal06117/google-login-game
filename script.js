let score = 0;

function onSignIn(response) {
  const jwt = response.credential;
  const userInfo = parseJwt(jwt);
  document.getElementById("user-name").textContent = userInfo.name;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("game-section").style.display = "block";
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  ).join(''));
  return JSON.parse(jsonPayload);
}

document.getElementById("click-button").addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = score;
});
