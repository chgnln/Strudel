setcpm(192/4)

stack(
  stack(
    stack(
      sound("[[SequentialCircuitsDrumtracks_bd]]").euclidRot(3,8,5).gain(0.8),
      sound("[~ hh]*4").pan(0.7).lpf(5000),
      sound("[~ clap]*2").gain(0.7),
      sound("cajon*16").pan(square.range(0.25,0.75).fast(4)).gain(0.3)
                          //.speed(tri.range(1,2).slow(8))
      ).shape(0.3),
    // bass
    stack(
      note("[[36] [~ 43] [~ 36] [<31 39> 34]]").sound("sawtooth,triangle")
      .lpf(6000)
      .lpq(0.3)
      .lpattack(0.5)
      .lpenv(0.5)
      .room(0.1)
    ),
    // sample
    stack(
      sound("[~ cb]!4").gain(0.5).pan("<0.8 0.2>!2")
    ),
    // Chord
    stack(
      note("48,60").struct("[~ x]*4").sound("sine").gain(0.6).hush()
    )
  )
)
