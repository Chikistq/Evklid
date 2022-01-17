document.addEventListener('DOMContentLoaded', () => {



  const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "slide",
    speed: 400,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    }
  })


  document.querySelectorAll('.steps__tab-link').forEach(link => {
    link.addEventListener('click', activeLink => {
      activeLink.preventDefault()

      const path = activeLink.currentTarget.dataset.path

      document.querySelectorAll('.steps__tab-link').forEach(el => {
        el.classList.remove('steps__tab-link_active')
      })

      activeLink.currentTarget.classList.add('steps__tab-link_active');


      document.querySelectorAll('.steps__tab').forEach(tabsBtn => {
        tabsBtn.classList.remove('steps__tab-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('steps__tab-active')
    })
  })


  $('#accordion').accordion({
    collapsible: true,
    active: false
  })


  $('#burger').click(function(){
    $(this).toggleClass('open')

    if (this.classList.length > 1) {
     $('.header-top__nav-mobile').css('transform', 'translateX(0px)')
    } else {
      $('.header-top__nav-mobile').css('transform', 'translateX(-1000px)')
    }
  })

  document.querySelector('.header-top__search-link').addEventListener('click', function (el) {
    el.currentTarget.classList.add('search-link__hide')

    let sForm = document.querySelector('.header-top__search-form')
    let srcBtn = document.querySelector('.search-form__button')
    let resetBtn = document.querySelector('.search-form__button:last-child')

    sForm.classList.remove('search-form_none')

    setTimeout(function () {
      sForm.classList.remove('search-form__dis')
      sForm.classList.toggle('search-form__active')
    }, 100)

    resetBtn.addEventListener('click', () => {

      resetBtn.classList.add('search-form_none')
      srcBtn.classList.add('search-form_none')
      sForm.classList.add('search-form__dis')

      sForm.classList.remove('search-form__active')


      setTimeout(function () {

        // sForm.classList.add('search-form__dis')
        sForm.classList.add('search-form_none')
        resetBtn.classList.remove('search-form_none')
        srcBtn.classList.remove('search-form_none')

      }, 400)

      this.classList.remove('search-link__hide')
    })

  })


})
