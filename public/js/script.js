const socket = io();

// render socket message on div
socket.on("layers", data => {
  console.log('socket, layers', data)
  const div = document.getElementById("message");
  div.innerHTML = data;
})
