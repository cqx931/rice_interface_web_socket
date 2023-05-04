const socket = io();

// render socket message on div
socket.on("layers", data => {
  console.log('socket, layers', data)
  mode("processing");
  /*
  data = data.map(d => {
    d["data"] = JSON.parse(d["data"])
    return d
  })
  */
  showLayers(data)
})

// socket.on("results", data => {
//   console.log('socket, results', data)
//   showPrediction(data)
// })


// socket.on("clear", data => {
//   console.log('socket, clear!')
//   clear()
// })
