import React, { useEffect } from 'react';

function Bubble() {
  useEffect(() => {
    (function () {
      class Bubble {
        constructor() {
          this.pos = {};
          this.init();
        }

        init() {
          this.pos.x = Math.random() * width;
          this.pos.y = height + Math.random() * 100;
          this.alpha = 0.1 + Math.random() * 0.3;
          this.scale = 0.3 + Math.random() * 0.3;
          this.velocity = Math.random() * 2;
        }

        draw() {
          if (this.alpha <= 0) {
            this.init();
          }
          this.pos.y -= this.velocity;
          this.alpha -= 0.001;
          ctx.beginPath();
          // ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
          ctx.arc(this.pos.x, this.pos.y, this.scale * 15, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
          ctx.fill();
        }
      }

      var width,
        height,
        largeHeader,
        canvas,
        ctx,
        circles,
        target,
        animateHeader = true;
      // Main
      initHeader();
      addListeners();

      function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: 0, y: height };

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height + 'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for (var x = 0; x < width * 0.2; x++) {
          var c = new Bubble();
          circles.push(c);
        }
        animate();
      }

      // Event handling
      function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
      }

      function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
      }

      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
      }

      function animate() {
        if (animateHeader) {
          ctx.clearRect(0, 0, width, height);
          for (var i in circles) {
            circles[i].draw();
          }
        }
        requestAnimationFrame(animate);
      }
    })();
  }, []);

  return (
    <div id="large-header" className="hero is-slanted is-relative is-gradient is-fullheight is-halfed-mobile">
      <canvas id="demo-canvas"></canvas>
    </div>
  );
}

export default Bubble;
