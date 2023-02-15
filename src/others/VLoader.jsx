import React, { useEffect } from 'react';
import gsap from 'gsap';

function VLoader({ setIsLoading }) {
  useEffect(() => {
    const splitText = (selector) => {
      const elem = document.querySelector(selector);

      const text = elem.innerText;
      const chars = text.split('');
      for (let index = 0; index < chars.length; index++) {
        if (chars[index] === ' ') {
          chars[index] = '&nbsp;';
        }
      }

      const charsContainer = document.createElement('div');
      const charsArray = [];

      charsContainer.style.position = 'relative';
      charsContainer.style.display = 'inline-block';

      chars.forEach((char) => {
        const charContainer = document.createElement('span');

        charContainer.style.position = 'relative';
        charContainer.style.display = 'inline-block';
        charContainer.innerHTML = char;
        charsContainer.appendChild(charContainer);

        charsArray.push(charContainer);
      });
      // remove current text
      elem.innerHTML = '';
      // append new structure
      elem.appendChild(charsContainer);

      return charsArray;
    };

    const onCompleteTimeline = () => {
      setIsLoading(false);
    };

    const chars = splitText('.loader__item--ec');
    const tl = gsap.timeline({
      onComplete: onCompleteTimeline,
      repeat: 0,
      repeatDelay: 0,
    });

    tl.to('.loader__item--ec', { opacity: 1, duration: 0 });

    tl.from(
      // 첫번쨰 portfolio 한글자씩 - 가운데
      chars,
      {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'elastic',
      },
      '-=0.5',
    );
    tl.to('.loader__col--3', {
      className: 'loader__col loader__col--3 done',
    });

    tl.fromTo(
      '.loader__first3',
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
      },
      '-=1',
    );
    tl.fromTo(
      '.loader__first5',
      {
        x: -120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
      },
      '-=1',
    );

    tl.fromTo(
      '.loader__second2',
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
      },
      '-=0.5',
    );
    tl.fromTo(
      '.loader__second6',
      {
        x: -120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
      },
      '-=0.8',
    );

    tl.fromTo(
      '.loader__third1',
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
      },
      '-=0.9',
    );
    tl.fromTo(
      '.loader__third7',
      {
        x: -120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.2,
      },
      '-=0.75',
    );

    tl.fromTo(
      '.top__first',
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
      },
      '-=0.5',
    );
    tl.fromTo(
      '.bot__first',
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
      },
      '-=1',
    );
    tl.fromTo(
      '.top__second',
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
      },
      '-=1',
    );
    tl.fromTo(
      '.bot__second',
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
      },
      '-=1.5',
    );
    tl.fromTo(
      '.top__third',
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
      },
      '-=1',
    );
    tl.fromTo(
      '.bot__third',
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
      },
      '-=1.5',
    );
    tl.to('.gogori', {
      opacity: 0,
      duration: 1.0,
    });
    tl.to('.loader__item--ec', {
      left: '-15vw',
      scale: 80,
      duration: 1.0,
    });
    tl.to(
      '.loader__item--ec',
      {
        opacity: 0,
        duration: 1.0,
      },
      '-=0.3',
    );
  }, []);

  return (
    <div className="loader">
      <div className="loader__cols">
        <div className="loader__col loader__col--1">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-h className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori loader__third1">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
        <div className="loader__col loader__col--2">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori loader__second2">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
        <div className="loader__col loader__col--3">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori loader__first3">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
        <div className="loader__col loader__col--4">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo loader__item--ec">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
        <div className="loader__col loader__col--5">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori loader__first5">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
        <div className="loader__col loader__col--6">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori loader__second6">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
        <div className="loader__col loader__col--7">
          <div data-a-p className="loader__item bbobo gogori top__third">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori top__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori loader__third7">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__first">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__second">
            PORTFOLIO
          </div>
          <div data-a-p className="loader__item bbobo gogori bot__third">
            PORTFOLIO
          </div>
        </div>
      </div>
    </div>
  );
}

export default VLoader;
