msg.setPort(57101)

var cycle = 0
var pan = 0
var crush = 0
var cps = 0
var delta = 0

var lfo = [o0,o1,o2,o3].fast(2)


msg.on("/tidal", (args) => {
  cycle = args[0]
  pan = args[1]
  crush = args[2]
  cps = args[3]
  delta = args[4]
  console.log(args)
})

s2.initImage("https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/bluefish.png?itok=rZsZNigT")


osc(6, 0.1, 1.5).modulate(src(s2), 1).out(o0)

bpm = 4

a.show()

src(o0)
  .layer(src(s2).scale(()=>a.fft[0]+0.4)
  .contrast(-15,55,0, 1, 2, 3)
  .color([55, 35, 15, -5, -15, 20],[-10, 0, 10, 20, 30, 20, 10, 0],[-50, -25, 0, 25, 50, 25, 0, -25])
  .scrollX([0, 0.0005, 0, -0.0005], [0.0005, -0.0005, 0, -0.0005, 0])
  .scrollY([-0.001, 0.001, 0],[-0.001, 0]))
  .layer(src(s2)
  .contrast([25,-25, 3, 15, -15, 5, -5])
  .scale(()=>a.fft[0]+0.5)
  .kaleid([1,2,0,3,4,5,0,4,3,8,2,1]))
  .scrollX([0, 0.001, -0.001, 0], [0.005, 0, 0.005, -0.005, 0, -0.005, 0])
  .scrollY([-0.001, 0, 0.001],[.002, 0.01, -0.01, 0])
  .out(o0)
