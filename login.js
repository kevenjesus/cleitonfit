window.localStorage.setItem("users", null);

(function(window) {

  const base = [
    {
      "name": "Cleiton Souza",
      "email": "cleiton93986@gmail.com",
      "password": "220889cmt@",
      "sex": "M"
    },
    {
      "name": "keven Jesus",
      "email": "falecom@keven.com.br",
      "password": "123",
      "sex": "M"
    },
    {
      "name": "Mayra Pedroso",
      "email": "mayra.pedroso10@outlook.com",
      "password": "Ma2020",
      "sex": "F"
    },
    {
      "name": "Luciane Lima",
      "email": "lucianelimaasilva@gmail.com",
      "password": "93784520",
      "sex": "F"
    },
    {
      "name": "Sonia Regina",
      "email": "sbiazim@gmail.com",
      "password": "quelegal2020",
      "sex": "F"
    }
  ]

  window.localStorage.setItem("users", JSON.stringify(base))
  
  const loginForm = document.querySelector("#login");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  const statusLogin = Boolean(window.localStorage.getItem("auth"));

  if(statusLogin) {
    window.location.href="/";
  }



  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    let status = null;

    users.forEach(user => {
      if(user.email === email.value && user.password === password.value) {
        status = user;
      }
    });

    if(status) {
      window.localStorage.setItem("auth", JSON.stringify(status));
      window.location.href="/";
    }else {
      alert("E-mail e/ou senha incorretos")
    }

  })

})(window);