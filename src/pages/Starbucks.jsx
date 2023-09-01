import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Headers from '../comp/header'
import Cursor from '../comp/Cursor'
import Lenis from '@studio-freight/lenis'
import firstVids from '../comp/projImg/starVid.mp4'


import LowerFooter from '../comp/lowerFooter'
import gsap from 'gsap'
import Power4 from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
//shorts img
import shortOne from '../comp/projImg/starbucksClone.JPG'
import shortTwo from '../comp/projImg//starTwo.JPG'
import shortThree from '../comp/projImg//starThree.JPG'
//long img
import longImgs from '../comp/projImg/starLong.jpg'
//absoImg

const Starbucks = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)

    return () => { window.scrollTo(0, 0) }
  }, [])


  const lenis = new Lenis()
  lenis.on('scroll', (e) => { })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "STARBUCKS | CONTENT"
    gsap.registerPlugin(ScrollTrigger)
    const text = new SplitType('.firstPageDesc', {
      types: 'words, chars',
      wordClass: 'wordz', charClass: 'charFirst'
    })
    //adding LH to firstPageDesc

    gsap.to('.wordz', {
      lineHeight: "95%",
      stagger: 0.03,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.secPageCon',
        start: 'top 80%',
      }
    })
    //desc for first
    gsap.to('.projStagg', {
      y: 0,
      stagger: 0.1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.secPageCon',
        start: 'top 30%',
      }
    })
    //lineBreak
    gsap.to('.lineBreak', {
      width: "100%",
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.secPageCon',
        start: 'top 35%',
      }
    })
    //imageConOfFirst
    gsap.to('.Chaat', {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.imageConOfFirst',
        start: 'top 80%',
      }
    })
    gsap.to('.chaatVid', {
      scale: 1,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.imageConOfFirst',
        start: 'top 80%',
      }
    })
    //longImg
    gsap.to('.longImgz', {
      scale: 1,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.longImgz',
        start: 'top 100%',
      }
    })
    gsap.to('.longImgz img', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.longImgz',
        start: 'top 100%',
      }
    })
    //ShortCon img 
    gsap.to('.firstShort', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.firstShort',
        start: 'top 70%',
      }
    })
    gsap.to('.firstShort img', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.firstShort',
        start: 'top 70%',
      }
    })
    //sec short
    gsap.to('.secShort', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.secShort',
        start: 'top 70%',
      }
    })
    gsap.to('.secShort img', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.secShort',
        start: 'top 70%',
      }
    })
    //third
    gsap.to('.thirdShort', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.thirdShort',
        start: 'top 70%',
      }
    })
    gsap.to('.thirdShort img', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.thirdShort',
        start: 'top 70%',
      }
    })
    //lastVid
    gsap.to('.lastVid', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.lastVid',
        start: 'top 80%',
      }
    })
    gsap.to('.lastVid video', {
      scale: 1.001,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.lastVid',
        start: 'top 80%',
      }
    })
    //cred
    gsap.to('.credText', {
      opacity: 1,
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.cred',
        start: 'top 90%',
      }
    })
    gsap.to('.name', {
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.cred',
        start: 'top 90%',
      }
    })
    //live
    gsap.to('.live', {
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.cred',
        start: 'top 90%',
      }
    })
    gsap.to('.liveText', {
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.cred',
        start: 'top 90%',
      }
    })
    //navigation bot
    gsap.to('.navText', {
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.cred',
        start: 'top 80%',
        onComplete: () => {
          gsap.to('.prev', {
            overflow: "visible"
          })
          gsap.to('.next', {
            overflow: "visible"
          })
        }
      }
    })
    gsap.to('.projTop', {
      width: "100%",
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.cred',
        start: 'top 50%',
      }
    })
    gsap.to('.lineOfFirstPage', {
      width: "100%",
      duration: 1,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.projNav',
        start: 'top 100%',
      }
    })



    const tl = gsap.timeline()
    tl.to('.loadTwos', {
      y: "-100%",
      duration: 1.1,
      ease: Power4.easeOut
    }, 0.5)
    tl.to('.loadOnes', {
      y: "-100%",
      duration: 1.3,
      ease: Power4.easeOut
    }, 0.7)
      .to('header', {
        opacity: 1,
        duration: 1
      })
      .to('.staggerOfFirst', {
        y: 0,
        stagger: 0.3,
        duration: 1
      })
      .to('.absoImgOfFifth', {
        opacity: 1,
        duration: 2
      })

  }, [])

  const prevHov = useRef(null)
  const nextHov = useRef(null)



  useEffect(() => {
    function scaleUp() {
      gsap.to('.hoverAbsos', {
        scale: 1,
        duration: 0.8
      });
    }
    function scaleDown() {
      gsap.to('.hoverAbsos', {
        scale: 0
      });
    }
    function scaleUps() {
      gsap.to('.hoverAbso', {
        scale: 1,
        duration: 0.8
      });
    }
    function scaleDowns() {
      gsap.to('.hoverAbso', {
        scale: 0
      });
    }
    if (prevHov.current) {
      prevHov.current.addEventListener("mouseover", scaleUp);
      prevHov.current.addEventListener("mouseleave", scaleDown);
    }
    if (nextHov.current) {
      nextHov.current.addEventListener("mouseover", scaleUps);
      nextHov.current.addEventListener("mouseleave", scaleDowns);
    }


    // Cleanup function
    return () => {
      if (prevHov.current) {
        prevHov.current.addEventListener("mouseover", scaleUp);
        prevHov.current.addEventListener("mouseleave", scaleDown);
      }
      if (nextHov.current) {
        nextHov.current.addEventListener("mouseover", scaleUps);
        nextHov.current.addEventListener("mouseleave", scaleDowns);
      }

    };

  }, []); // Empty


  return (
    <div className='frst'>
      <div className='loadOnes'></div>
      <div className='loadTwos'></div>
      <div className='bg'></div>
      <Cursor />
      <Headers />
      <div className='firstPageCon'>
        <div className='FirstProjImg'>
          <div className='absoImgOfFifth'>
          </div>
          <div className='FTitleCon'>
            <div className='txtFirst'>
              <div className='staggerOfFirst'>
                STARBUCKS
              </div>
            </div>
            <div className='txtSe'>
              <div className='staggerOfFirst'>
                HOMEPAGE CLONE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='secPageCon'>
        <div className='firstPageDesc'>
          Just as Starbucks pays meticulous attention to the presentation of their beverages, my homepage is a visual delight. With a design that's as clean and crisp as the first sip of a perfectly brewed coffee, it's easy on the eyes and invites exploration.
        </div>
        <div className='prjFor'>
          <div className='PrjName proZ'>
            <div className='projStagg'>
              <div className='types'>Project</div>
              STARBUCKS CLONE
            </div>
          </div>

          <div className='PrjClient proZ'>
            <div className='projStagg'>
              <div className='types'>Client</div>
              PERSONAL
            </div>
          </div>

          <div className='PrjYear proZ'>
            <div className='projStagg'>
              <div className='types'>Year</div>
              2023
            </div>
          </div>

          <div className='PrjRole proZ'>
            <div className='projStagg'>
              <div className='types'>Role</div>
              DEVELOPER & DESIGNER
            </div>
          </div>

        </div>
        <div className='lineBreak'></div>
      </div>
      <div className='imageConOfFirst'>

        <div className='Chaat'>
          <video autoPlay loop muted className='chaatVid'>
            <source src={firstVids} type="video/mp4" />
          </video>
        </div>

        <div className='longCon'>
          <div className='longImgz'>
            <img src={longImgs}></img>
          </div>
          <div className='ShortCon'>
            <div className='shorts firstShort'>
              <img src={shortOne}></img>
            </div>
            <div className='shorts secShort'>
              <img src={shortTwo}></img>
            </div>
            <div className='shorts thirdShort'>
              <img src={shortThree}></img>
            </div>
          </div>

        </div>
        <div className='lastVid'>
          <video autoPlay loop muted className='vidOflastVid'>
            <source src={firstVids} type="video/mp4" />
          </video>
        </div>

      </div>
      <div className='cred'>
        <div className='credCon'>
          <div className='credText'>
            Credits
          </div>

          <div className='namesCon'>
            <div className='name'>Glaizza Aram</div>
          </div>

          <div className='namesCon'>
            <div className='name'>Danica Saret</div>
          </div>

          <div className='namesCon'>
            <div className='name'>Arkin Dionisio</div>
          </div>

          <div className='namesCon'>
            <div className='name'>Mary ann Race</div>
          </div>


          <div className='namesCon'>
            <div className='name'>Marcus Dungo</div>
          </div>
          <div className='namesCon'>
            <div className='name'>JM Conde</div>
          </div>
        </div>
        <div className='live' onClick={() => {
          window.open('https://marcusxro.github.io/starbucks/', '')
        }}>
          <div className='liveText'> LIVE VIEW</div>
        </div>
      </div>

      <div className='projNav'>
        <div className='projTop'></div>

        <div className='navCon'>
          <div className='prev'>
            <div className='navText' ref={prevHov} onClick={() => {

              gsap.to('.loadTwos', {
                y: 0,
                duration: 1
              })

              setTimeout(() => {
                window.scrollTo(0, 0)
                window.history.pushState({}, '', '/PixieShop');
                window.dispatchEvent(new PopStateEvent('popstate'));

              }, 1000)
            }}>
              PREV
            </div>
            <div className='hoverAbsos'></div>
          </div>
          <div className='between'></div>
          <div className='next' ref={nextHov}>
            <div className='navText' onClick={() => {
              gsap.to('.loadTwos', {
                y: 0,
                duration: 1
              })


              window.scrollTo(0, 0)
              window.history.pushState({}, '', '/ulamfinder');
              window.dispatchEvent(new PopStateEvent('popstate'));

            }}>NEXT</div>
            <div className='hoverAbso'></div>
          </div>
        </div>
      </div>
      <div className='ft'>
        <div className='lineOfFirstPage'></div>
        <LowerFooter />
      </div>
    </div>
  )
}

export default Starbucks
