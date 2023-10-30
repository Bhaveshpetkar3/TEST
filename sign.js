let sign = document.getElementsByClassName("four13");
let a = document.getElementsByClassName("four1");
let b = document.getElementsByClassName("four14");
let c = document.getElementsByClassName("second5");
let d = document.getElementsByClassName("four17");
let e = document.getElementsByClassName("four18");
let f = document.getElementsByClassName("four19");
const loginform = document.querySelector(".loginform");
const signupform = document.querySelector(".signupform");
for (let i = 0; i < 2; i++) {
  sign[i].addEventListener("click", function () {
    if (i == 0) {
      a[0].style.display = "none";
      b[0].style.display = "flex";
      c[0].textContent = "Log In Form";
    } else {
      a[0].style.display = "flex";
      b[0].style.display = "none";
      c[0].textContent = "Sign Up Form";
    }
  });
}
d[0].addEventListener("click", function () {
  e[0].style.display = "block";
  b[0].style.display = "none";
  c[0].textContent = "Forgot Password";
});
f[0].addEventListener("click", function () {
  if (confirm("Are you sure?")) {
    alert("Your password is changed.");
  }
});

signupform.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(signupform);
  const json = {};

  for (const [key, value] of formData.entries()) {
    json[key] = value;
  }

  // console.log(json);
  fetch("http://127.0.0.1:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
    cache: "default",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

loginform.addEventListener("submit",function(e){
    e.preventDefault();
    const formData = new FormData(loginform);
    const json = {};

    for (const [key, value] of formData.entries()) {
      json[key] = value;
    }
    console.log(json);
    fetch("http://127.0.0.1:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
      cache: "default",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
})