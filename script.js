var tl = gsap.timeline();

tl.from('.i-content',{
  y:'-30%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
})
tl.from('.stagger1',{
  y:'-50',
  opacity: 0,
  stagger: .3,
  duration: 2,
  ease: Power4.easeOut
}, "-=1.5")
tl.from('.i-design',{
  y:'50',
  opacity: 0,
  duration: 1,
  ease: Power4.easeOut
}, "-=2")
tl.from('.square-animation',{
  stagger: .1,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7)
}, "-=2")
tl.from('.trans2',{
  stagger: .3,
  opacity: 0,
  y: 50,
  duration: 1.5
}, "-=1")
tl.from('.trans3',{
  stagger: 1.2,
  opacity: 0,
  y: 50,
  duration: 1.5
})
