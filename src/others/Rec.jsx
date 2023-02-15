import React, { forwardRef, useEffect } from "react";

function Rec(prop, ref) {
  class Rec {
    constructor(radius, color) {
      if (radius === undefined) {
        radius = 40;
      }
      if (color === undefined) {
        color = "#ff0000";
      }
      this.x = 0;
      this.y = 0;
      this.radius = radius;
      this.vx = 0;
      this.vy = 0;
      this.mass = 1;
      this.rotation = 2.3;
      this.scaleX = 1;
      this.scaleY = 1;
      this.color = color;
      this.lineWidth = 2;
      this.angle = 3;
    }

    draw(context) {
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      context.scale(this.scaleX, this.scaleY);

      // this.incrementAngle();
      context.save();
      // context.translate(200, 200);
      // context.rotate(this.convertToRadians(this.angle));
      // set the fill style
      // context.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
      // context.fillRect(-25, -25, 50, 50);
      context.strokeStyle = "#FF936B";
      context.lineWidth = this.lineWidth;
      context.strokeRect(0, 0, this.radius, this.radius);
      context.restore();

      context.stroke();
      context.beginPath();
      //x, y, radius, start_angle, end_angle, anti-clockwise
      // context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
      // context.fillRect(0, 0, this.radius, this.radius);
      context.closePath();
      context.fill();
      if (this.lineWidth > 0) {
        context.stroke();
      }
      context.restore();
    }

    convertToRadians(degree) {
      return degree * (Math.PI / 180);
    }

    incrementAngle() {
      this.angle++;
      if (this.angle > 360) {
        this.angle = 0;
      }
    }

    getBounds() {
      return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2,
      };
    }
  }

  useEffect(() => {
    var canvas = document.getElementById("Rcanvas"),
      context = canvas.getContext("2d"),
      recs = [],
      numrecs = window.innerWidth > 900 ? 35 : 15,
      bounce = -0.9,
      gravity = 0.05;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    for (var radius, rec, i = 0; i < numrecs; i++) {
      radius = Math.random() * 20 + 25;
      rec = new Rec(radius, "transparent");
      rec.mass = radius;
      rec.x = Math.random() * canvas.width;
      rec.y = Math.random() * canvas.height;
      rec.vx = Math.random() * 20 - 5;
      rec.vy = Math.random() * 20 - 5;
      recs.push(rec);
    }

    function rotate(x, y, sin, cos, reverse) {
      return {
        x: reverse ? x * cos + y * sin : x * cos - y * sin,
        y: reverse ? y * cos - x * sin : y * cos + x * sin,
      };
    }

    function checkCollision(rec0, rec1) {
      var dx = rec1.x - rec0.x,
        dy = rec1.y - rec0.y,
        dist = Math.sqrt(dx * dx + dy * dy);
      //collision handling code here
      if (dist < rec0.radius + rec1.radius) {
        //calculate angle, sine, and cosine
        var angle = Math.atan2(dy, dx),
          sin = Math.sin(angle),
          cos = Math.cos(angle),
          //rotate rec0's position
          pos0 = { x: 0, y: 0 }, //point
          //rotate rec1's position
          pos1 = rotate(dx, dy, sin, cos, true),
          //rotate rec0's velocity
          vel0 = rotate(rec0.vx, rec0.vy, sin, cos, true),
          //rotate rec1's velocity
          vel1 = rotate(rec1.vx, rec1.vy, sin, cos, true),
          //collision reaction
          vxTotal = vel0.x - vel1.x;
        vel0.x = ((rec0.mass - rec1.mass) * vel0.x + 2 * rec1.mass * vel1.x) / (rec0.mass + rec1.mass);
        vel1.x = vxTotal + vel0.x;
        //update position - to avoid objects becoming stuck together
        var absV = Math.abs(vel0.x) + Math.abs(vel1.x),
          overlap = rec0.radius + rec1.radius - Math.abs(pos0.x - pos1.x);
        pos0.x += (vel0.x / absV) * overlap;
        pos1.x += (vel1.x / absV) * overlap;
        //rotate positions back
        var pos0F = rotate(pos0.x, pos0.y, sin, cos, false),
          pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
        //adjust positions to actual screen positions
        rec1.x = rec0.x + pos1F.x;
        rec1.y = rec0.y + pos1F.y;
        rec0.x = rec0.x + pos0F.x;
        rec0.y = rec0.y + pos0F.y;
        //rotate velocities back
        var vel0F = rotate(vel0.x, vel0.y, sin, cos, false),
          vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
        rec0.vx = vel0F.x;
        rec0.vy = vel0F.y - 0.9;
        rec1.vx = vel1F.x;
        rec1.vy = vel1F.y - 0.9;
      }
    }

    function checkWalls(rec) {
      if (rec.x + rec.radius > canvas.width) {
        rec.x = canvas.width - rec.radius;
        rec.vx *= bounce;
      } else if (rec.x - rec.radius < 0) {
        rec.x = rec.radius;
        rec.vx *= bounce;
      }
      if (rec.y + rec.radius > canvas.height) {
        rec.y = canvas.height - rec.radius;
        rec.vy *= bounce;
      } else if (rec.y - rec.radius < 0) {
        rec.y = rec.radius;
        rec.vy *= bounce;
      }
    }

    function move(rec) {
      rec.vy += gravity;
      rec.x += rec.vx;
      rec.y += rec.vy;
      checkWalls(rec);
    }

    function draw(rec, a) {
      rec.draw(context, a);
    }

    (function drawFrame() {
      window.requestAnimationFrame(drawFrame, canvas);
      context.clearRect(0, 0, canvas.width, canvas.height);

      recs.forEach(move);
      for (var recA, i = 0, len = numrecs - 1; i < len; i++) {
        recA = recs[i];
        for (var recB, j = i + 1; j < numrecs; j++) {
          recB = recs[j];
          checkCollision(recA, recB);
        }
      }
      recs.forEach(draw);
    })();
  }, []);

  return (
    <>
      <canvas width="1920px" height="1200px" id="Rcanvas" ref={ref}></canvas>
    </>
  );
}

export default forwardRef(Rec);
