window.addEventListener('load', () => {
    
  const glide = new Glide('.glide', {
     type: "carousel",
      touchAngle: 45,
      focusAt: 2,
       startAt: 2,
       perView: 5,
       keyboard: true,
       gap: 50,
       autoplay: false,
       peek: {
       before: 100,
       after: 50
    },
    
  })
  
  glide.mount()

})