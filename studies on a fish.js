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

s0.initVideo("https://upload.wikimedia.org/wikipedia/commons/b/bd/%28KARI%29_KSR-%E2%85%A0_%EB%B0%9C%EC%82%AC%EC%9E%A5%EB%A9%B4.ogv")
s1.initVideo("https://upload.wikimedia.org/wikipedia/commons/0/0e/Ice_cubes_melting_in_a_glass.ogv")

s2.initImage("https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/bluefish.png?itok=rZsZNigT")

osc(6).modulate(src(s2),1).out(o0)

src(o0)
  .layer(src(s2).scale(0.9))
  .contrast(-1.5)
  .color([55, 35, 15, -5, -15, 20],[-10, 0, 10, 20, 30, 20, 10, 0],[-50, -25, 0, 25, 50, 25, 0, -25])
  .contrast(-25)
  .scale([0.5, 1, 1.5, 2.0, 2.5, 2.0, 1.5, 1.0])
  .kaleid([1,2,3,4,5,4,3,2,1])
  .scrollX([.2, 0.1, 0, -0.1, 0],0.05)
  .scrollY(.1,[.2, 0.1, 0, -0.1, 0])
  .out(o0)
