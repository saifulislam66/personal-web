
function valueSetter() {
  gsap.set('#nav a', { y: '-100%', opacity: 0 });
  gsap.set('#home .parent .child', { y: '100%' });
  gsap.set('#home .div2 .web', { opacity: 0 });
  // gsap.set('h1 .work-r', { y: '100%', opacity: 0 });
}
function revelToSpan() {
  document.querySelectorAll('.revel').forEach(function (elem) {
    let parent = document.createElement('span');
    let child = document.createElement('span');

    //add both items classes
    parent.classList.add('parent');
    child.classList.add('child');

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = '';
    elem.appendChild(parent);
  })
}
function loaderAnimation() {

  var tl = gsap.timeline();

  tl
    .from('#loader .child span', {
      x: 100,
      stagger: .2,
      duration: 1.4,
      delay: 1,
      ease: Power3.easeInOut
    })
    .to('#loader .parent .child', {
      y: '-100%',
      duration: 1,
      ease: Circ.easeInOut
    })
    .to('#loader', {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut
    })
    .to('#green', {
      height: '100%',
      top: 0,
      duration: 1,
      delay: -.8,
      ease: Circ.easeInOut
    })
    .to('#green', {
      height: '0%',
      duration: 1,
      delay: -.5,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomePage();
      }
    })

}
function animateHomePage() {

  var tl = gsap.timeline();
  tl
    .to('#nav a', {
      y: 0,
      opacity: 1,
      stagger: .05,
      ease: Expo.easeInOut
    })
    .to('#home .parent .child', {
      y: 0,
      stagger: .1,
      duration: 1,
      ease: Expo.easeInOut
    })
    .to('.div2 .spn', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Expo.easeInOut,
      onComplete: function () {

      }
    })

  // .to('#home #imagery', {
  //   y: 0,
  //   opacity: 1,
  //   duration: 1,
  //   ease: Expo.easeInOut
  // })
  // .to('#imgleft h1', {
  //   opacity: 0,
  //   duration: 2,
  //   ease: easeInOut,
  // })
  // .from('.div2 .spn', {
  //   x: '-300',
  //   duration: 1,
  //   stagger: .5,
  //   ease: Expo.easeInOut,
  // })

}



revelToSpan();
valueSetter();
loaderAnimation();








function createObserverforimage() {
  const imgcontnrs = document.querySelectorAll('.imgcontnr');
  const animateimg = new IntersectionObserver((animate) => {
    animate.forEach(anim => {
      if (anim.isIntersecting) {
        anim.target.classList.add('imginimate');
      } else {
        anim.target.classList.remove('imginimate');
      }
    });
  }, {
    threshold: 0.5
  });
  imgcontnrs.forEach((imagcontnr) => animateimg.observe(imagcontnr));


}

createObserverforimage()


