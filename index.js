document.getElementById("openModalBtn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

document.getElementById("submitBtn").addEventListener("click", function() {
  var name = document.getElementById("nameInput").value;
  document.getElementById("myModal").style.display = "none";
  document.getElementById("output").innerText = "Tu nombre es: " + name;
});
