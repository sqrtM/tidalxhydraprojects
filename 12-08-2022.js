s0.initVideo("https://media.giphy.com/media/gy2oUWmIH2Ioao2DEI/giphy.mp4")
s1.initVideo("https://media.giphy.com/media/wsNhWSwu7LSUw0x8o8/giphy.mp4")
s2.initVideo("https://media.giphy.com/media/KyvxCAqjPPt8OE3QJb/giphy.mp4")
s3.initVideo("https://media.giphy.com/media/3l5PECvfr3KAwXu8cN/giphy.mp4")


src(s3)
  .hue(() => (time/6))
  .saturate(()=>a.fft[0]*5 + 1)
  .sub(s1, ()=>a.fft[0]*5 - 2)
  .modulateHue(src(o0), [0,-599].fast(0.25).smooth()).sub(s1, -1)
  .sub(s1).sub(s3).sub(s1).sub(s3).sub(s1)
  //
  //.mult(s1)
.out(o0)

src(s2)
  .diff(src(s1),-1)
  .contrast([10,20].fast(0.3258948).smooth())
  .hue(() => (time/20))
  //
  .modulate((src(o0)),()=>Math.sin(time*0.2)*0.2)
  .sub(src(o0).scrollX(0, () => Math.sin(time*0.05)*-0.0002 ).modulateScale(src(s2),0.25,1.6),2)
  .sub(src(s0).brightness(-0.9).scrollX(0, () => Math.cos(time*0.2)*-0.0002 ),0.1)
  .sub(src(s1).modulate(s0), -4,0.5).modulate(o1)
  .add(src(s0),[-3,3].fast(0.48654685).smooth())
  .scrollX(0.05,0.06)
  .contrast([0.1,0.4].smooth())
.out(o0)
