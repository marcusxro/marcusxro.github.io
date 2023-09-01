import React from 'react';
import SplitType from 'split-type'
import gsap from 'gsap'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Headers = () => {

    useEffect(() => {
        const text = new SplitType('.firstanchs', {
            charClass: 'chars',
            types: 'chars',
            reduce: 'all',
            special: true,
        });

        const texts = new SplitType('.secanchs', {
            charClass: 'charz',
            types: 'chars',
            reduce: 'all',
            special: true,
        });


    }, []);

    useEffect(() => {
        const text = new SplitType('.firstAnchOfSec', {
            charClass: 'charzz',
            types: 'chars',
            reduce: 'all',
            special: true,
        });

        const texts = new SplitType('.secAnchOfSec', {
            charClass: 'charzzz',
            types: 'charz',
            reduce: 'all',
            special: true,
        });


    }, []);

    const tl = gsap.timeline()
    let zer = 0
    useEffect(() => {

        const firstAnch = document.querySelector('.firstAnch');

        const tl = gsap.timeline({ paused: true });
        tl.to('.chars', { y: '-25px', stagger: 0.02, duration: 0.3 })
            .to('.charz', { y: '-25px', duration: 0.3, stagger: 0.02 });

        const handleMouseOver = () => {
            zer++

            tl.play();

            if (zer === 2) {
                tl.restart()
                zer = 0
            }
        };

        firstAnch.addEventListener('mouseover', handleMouseOver);

        // Clean up the event listener when the component unmounts
        return () => {
            firstAnch.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);


    const tlz = gsap.timeline()
    let zerz = 0
    useEffect(() => {

        const firstAnch = document.querySelector('.secAnch');
        const tl = gsap.timeline({ paused: true });

        // Add animations to the timeline
        tl.to('.charzz', { y: '-25px', stagger: 0.02, duration: 0.3 })
            .to('.charzzz', { y: '-25px', duration: 0.3, stagger: 0.02 });

        const handleMouseOver = () => {
            zerz++
            tl.play();

            if (zerz === 2) {
                tl.restart()
                zerz = 0
            }
        };
        firstAnch.addEventListener('mouseover', handleMouseOver);
        return () => {
            firstAnch.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
    const handleReload = () => {
        window.location.reload();
      };
    return (
        <header>
            <div className="logo">
                Marcus S.
            </div>
            <div className="right">
                <Link to="/About">
                    <div className='firstAnch'>
                        <div className='firstanchs'>//About</div>
                        <div className='secanchs'>//About</div>
                    </div>
                </Link>

                <Link to="/">
                    <div className='secAnch'>
                        <div className='firstAnchOfSec'>//Works</div>
                        <div className='secAnchOfSec'>//Works</div>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Headers