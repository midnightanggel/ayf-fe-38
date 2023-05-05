const email = document.getElementById("email");
const password = document.getElementById("password");
const warning = document.getElementById("warning");
const form = document.getElementsByTagName("form")[0];

const validate = () => {
  return email.value != "" && password.value != "";
};

const handleLogin = async (e) => {
  warning.textContent = "Data cannot be empty";
  warning.classList.add("hidden");
  e.preventDefault();
  if (validate()) {
    try {
      if (localStorage.getItem("users") != null) {
        const res = JSON.parse(localStorage.getItem("users"));
        const data = res.find((el) => el.email == email.value);
        if (data) {
          if (data.password == password.value) {
            localStorage.setItem("user", JSON.stringify(data.fullName));
            window.location.href = "../index.html";
          } else {
            warning.textContent = "Password incorrect";
            warning.classList.remove("hidden");
          }
        } else {
          warning.textContent = "Account not found";
          warning.classList.remove("hidden");
        }
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    warning.textContent = "Data cannot be empty";
    warning.classList.remove("hidden");
  }
};

form.addEventListener("submit", handleLogin);
