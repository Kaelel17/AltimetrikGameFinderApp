//Log In
user = {
  email: "",
  password: "",
};

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

{
}

email.addEventListener("input", readText);
password.addEventListener("input", readText);
//  error
const error = document.querySelector(".error");

// e Form submit
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // validate form
  const { email, password } = user;

  if (email === "" || password === "") {
    error.style.display = "block";
    return;
  }
  // submitting form

  const response = await fetch(
    "http://localhost:3000/users?email=" + email + "&password=" + password
  );

  const jresponse = await response.json();
  console.log(jresponse);
  if (jresponse.length !== 0) {
    error.style.display = "none";
    window.location.href = "home.html";
    return;
  }
});
function readText(e) {
  user[e.target.id] = e.target.value;

  // console.log(user);
}
