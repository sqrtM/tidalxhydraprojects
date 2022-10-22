s0.initVideo("https://media.giphy.com/media/fQ723pY9qaR86yAG2N/giphy.mp4")
s1.initVideo("https://media.giphy.com/media/sI8zXGDRzzFc1Bjrjp/giphy.mp4")
s2.initVideo("https://media.giphy.com/media/wsNhWSwu7LSUw0x8o8/giphy.mp4")
s3.initVideo("https://media.giphy.com/media/rBpW4QELo79hgmhr5W/giphy.mp4")
bpm = 130/4

// rainbow osc
osc(3, 0.1, 999999).modulate(src(s2), [9999999999,9999,99999].fast(0.8)).out(o0)

//dance over osc
osc([1,2,3,4,5,6,7,8,9], 0.1, [0.4,20,99,9999,999999].fast(0.25))
  .modulate(src(s3), 0.8)
  .add(src(s2).scale(()=>a.fft[0]/4 + 1, ()=>a.fft[0]/4 + 1)
  .contrast(1))
.out(o0)

// dance feedback
src(o0)
  .layer(src(s2).scale(()=>a.fft[0] + 0.7, ()=>a.fft[0] + 0.7)
  .contrast([2,4].fast(0.1).smooth()))
  .add(src(o0).modulateScrollX(o0, 0.5, 0.1).modulateRotate((o0), ()=>Math.sin(time)/2, ()=>(time)/3).add(gradient(0.5)))
  .out(o0)

  //pixel dance
src(o0)
  .layer(src(s1).scale(()=>a.fft[0] + 1, ()=>a.fft[0] + 1)
  .contrast([2,5].fast(0.2)).add(gradient(0.5))
  .modulatePixelate(o0,()=>a.fft[0]*(999999 /(time*2))))
  .add(src(s0).modulateScrollX(s2, 0.01, 0.1).modulateRotate((s2), ()=>Math.sin(time)/40, ()=>(time)/40))
.out(o0)

//thrown into wall
src(s0)
  .scale(()=>a.fft[0] + 1, ()=>a.fft[0] + 1)
  .modulate(src(o0), [0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.7,0].smooth()).invert([-1,0,1,9999999999999,-33].fast(0.4).smooth())
  .modulateHue(src(o0).scale([0.8,2].fast(0.2).smooth()),[0.2,999999].smooth())
  .invert(999999).invert(99999).invert(99999)
.out(o0)
