const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  const value = textInput.value;

  if (value === "") {
    alert("Please input a value");
    return;
  }

  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    result.textContent = `${value} is a palindrome`;
  } else {
    result.textContent = `${value} is not a palindrome`;
  }
});
