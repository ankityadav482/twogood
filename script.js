
const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

gsap.from('.nav-right h4',{
   y:25,
   duration:0.5,
   stagger:0.25,
   opacity:0
})




function loader(){
var tl = gsap.timeline()
tl.from("#page1 h1",{
   y:80,
   duration:0.8,
   delay:0.5,
   opacity:0,
   stagger:0.25
})
tl.from("#video-container",{
   y:100,
   duration:0.5,
   delay:0.5,
   opacity:0,
})
}
loader()

Shery.mouseFollower()

Shery.makeMagnet('.nav-right h4')

Shery.imageMasker('#video-container video',{
   mouseFollower:true,
   text:"PLAY"
})

Shery.hoverWithMediaCircle('#page5 p',{
   images:['https://cdn.sanity.io/images/w8f1ak3c/production/65157658b429622447073d27a6d42e9965396002-5000x5000.png/73.png?w=1024&h=1024&auto=format']
})


Shery.hoverWithMediaCircle('#page3 h1',{
   images:['https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1024&h=1024&auto=format']
})