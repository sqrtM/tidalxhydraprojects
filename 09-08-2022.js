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
s1.initVideo("https://upload.wikimedia.org/wikipedia/commons/8/8b/Chairman_Mao-4.webm")
s2.initVideo("https://upload.wikimedia.org/wikipedia/commons/1/15/Pelosi_Sends_%27Thoughts_And_Prayers%27_For_Scalise.webm")
s3.initVideo("https://upload.wikimedia.org/wikipedia/commons/0/0e/Ice_cubes_melting_in_a_glass.ogv")

osc(6, 0.1, 1.5).modulate(src(s0), 99999999999999999).out(o0)

osc(6, 0.1, 1.5).modulate(src(s0), 9).out(o0)




bpm = 4

a.show()

src(o0)
  .layer(src(s1).scale(()=>a.fft[0]+0.4)
  .contrast([-1,-3,-0.33])
  .color([-1,-0.3],[0.5,1,-1].fast(1.5),[1,-2,-5,-4].fast(0.33))
  .scrollX(0.5, 0.003)
  .scrollY(0.5,0.01))
  .layer(src(s1).scale(()=>a.fft[0]+0.4)
  .modulateRotate(osc(0.5,0.5,0), ()=>a.fft[0]+0.4)
  .add(src(s0)))
  .out(o0)
