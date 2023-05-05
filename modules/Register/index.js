const fullName = document.getElementById("fullName");
const age = document.getElementById("age");
const country = document.getElementById("country");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const term = document.getElementById("term");
const form = document.getElementsByTagName("form")[0];

const validate = () => {
  return (
    fullName.value != "" &&
    age.value != "" &&
    country.value != "" &&
    email.value != "" &&
    password.value != "" &&
    password.value == confirmPassword.value &&
    term.checked
  );
};

const handleRegister = async (e) => {
  e.preventDefault();
  if (validate()) {
    document.getElementById("warning").classList.add("hidden");
    try {
      const user = {
        fullName: fullName.value,
        age: age.value,
        country: country.value,
        email: email.value,
        password: password.value,
      };
      if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify([user]));
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([...JSON.parse(localStorage.getItem("users")), user])
        );
      }
      form.reset();
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("warning").classList.remove("hidden");
  }
};

form.addEventListener("submit", handleRegister);
