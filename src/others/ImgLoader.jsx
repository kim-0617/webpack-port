import React, { useEffect } from 'react';
import gsap from 'gsap';

function ImgLoader({ setIsLoading }) {
  useEffect(() => {
    function loading() {
      let imgLoad = imagesLoaded('body'),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 1000 / 60);

      imgLoad.on('progress', function () {
        imgLoaded++;
      });

      function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;
        imgCurrent += (target - imgCurrent) * 0.1;
        $('.loading__text').text(Math.floor(imgCurrent) + '%');

        gsap.set('#coding', { opacity: 0 });

        //종료
        if (imgCurrent >= 100) {
          //진행표시의 업데이트를 중지
          clearInterval(progressTimer);
          setTimeout(() => {
            const tl = gsap.timeline();
            tl.to(['.loading__ani', '.loading__text'], { duration: 0.2, opacity: 0 });
            tl.to('.loading', { duration: 0.5, opacity: 0 });
            tl.to('#coding', { duration: 0.4, opacity: 1 });
          }, 1000);
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }
        // imgCurrent가 99보다 크면 100으로 간주
        if (imgCurrent > 99) {
          imgCurrent = 100;
        }
      }
    }
    loading();
  }, []);

  return (
    <div className="loading">
      <div className="loading__ani">loading</div>
      <span className="loading__text">0%</span>
    </div>
  );
}

export default ImgLoader;
