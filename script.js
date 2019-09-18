

/* function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    if(sectionTop < 0) {
      TweenMax.to(section, 1, {
        opacity: 1,
        x: 0,
        ease: Power2.easeInOut
      })
    }
  })
} */

/* function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top; //pega a distancia de cada section do topo
    const isSectionVisible = (sectionTop - windowMetade) < 0; // pega adistancia do topo e diminui metade da tela e já verifica se é menor que 0, e retorna um valor boolean
    if(isSectionVisible) {
      TweenMax.to(section, 1, {
        opacity: 1,
        x: 0,
        ease: Power2.easeInOut
      })
    }
  })
}

window.addEventListener('scroll', animaScroll); */

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.5; //pega tamanho da tela e divide pela metade

  if(sections.length) {
    TweenMax.set(sections, {
      width: 0
    })
  
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; //pega a distancia de cada section do topo
        const isSectionVisible = (sectionTop - windowMetade) < 0; // pega adistancia do topo e diminui metade da tela e já verifica se é menor que 0, e retorna um valor boolean
        if (isSectionVisible) {
          TweenMax.to(section, 1, {
            opacity: 1,
            width: '100%'
          })
        }
      })
    }
  }

  window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();