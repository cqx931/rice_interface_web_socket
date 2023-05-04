const socket = io();

// render socket message on div
socket.on("layers", data => {
  console.log('socket, layers', data)
  mode("processing");
  showLayers(data)

})

socket.on("results", data => {
  console.log('socket, results', data)
  showPrediction(data)
})

socket.on("clear", data => {
  console.log('socket, clear!')
  clear();
})
