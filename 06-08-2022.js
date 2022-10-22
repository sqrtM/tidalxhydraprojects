msg.setPort(57101)

var cycle = 0
var pan = 0
var crush = 0
var cps = 0
var delta = 0


msg.on("/tidal", (args) => {
  cycle = args[0]
  pan = args[1]
  crush = args[2]
  cps = args[3]
  delta = args[4]
  console.log(args)
})

s0.initVideo("https://upload.wikimedia.org/wikipedia/commons/4/4a/Fishermen_Buddies.webm")

src(s0).out()

gradient(()=>pan, 50, 200).blend(o2).out(o1)

src(s0).rotate(()=>cycle / ()=>pan)).modulateRepeat(osc(()=>crush).blend(o0)).out(o2)


render(o1)
