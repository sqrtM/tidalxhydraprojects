
a.show()

s0.initVideo("https://upload.wikimedia.org/wikipedia/commons/c/c6/Kintetsu-Kashihara-Line_Amagatsuji-Nishinokyo.ogv")

src(s0).invert([a.fft[2],1]).out()
