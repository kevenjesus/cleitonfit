
(function(window) {
  const statusLogin = JSON.parse(window.localStorage.getItem("auth"));
  const name = document.querySelector(".name");
  const sex = document.querySelector(".sex");
  if(!statusLogin) {
    window.location.href="/login.html";
  }else {
    console.log(statusLogin)
    name.textContent = statusLogin.name;
    sex.textContent = statusLogin.sex === 'M' ? 'vindo' : 'vinda';

    document.body.classList.remove("hide")
  }

})(window);