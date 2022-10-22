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
s2.initVideo("https://upload.wikimedia.org/wikipedia/commons/d/dc/Dali-cormoran-pesca-v02.mpg.ogv")
s3.initVideo("https://upload.wikimedia.org/wikipedia/commons/3/34/Train_at_a_train_station_in_Tokyo%2C_Japan.webm")

src(s3).color(()=>pan,()=>cps,delta)).out(o0)
