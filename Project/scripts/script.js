//Log In
User = {
  email: "",
  password: "",
};

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const dataUsers = fetch(
  "http://localhost:3000/users?email=" + email + "&password=" + pass
);
{
}

email.addEventListener("input", readText);
password.addEventListener("input", readText);

// e Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // validate form
  const { email, password } = User;

  if (email === "" || password === "" || dataUsers === "") {
    error.style.display = "block";
    return;
  }
  // submitting form
  error.style.display = "none";
  console.log("submitting form");
});
function readText(e) {
  User[e.target.id] = e.target.value;

  // console.log(User);
}
//  error
const error = document.querySelector(".error");
