setcpm(107/4);

stack(
    note("E1 E1 E2 D2 E2 A1 B1 D2 E2")
  .add(note("12"))
  .sound("gm_electric_guitar_clean:1")
  .decay(.2)
  .gain(".9 .9 1.1 1 1.1 .88 .9 .9 1")
  .struct("x ~ x ~ x ~ x ~ x ~ x x ~ x x ~")
  ,
  sound("gm_guitar_fret_noise:0").early(0.035).decay(.2).gain(.3)
);
