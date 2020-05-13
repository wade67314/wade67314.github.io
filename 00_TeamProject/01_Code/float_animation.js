

for (var index = 1; index <= 4; index++) {
  console.clear();
  const bubble = document.querySelector(".small_path" + index);
  // const randomX = random(10, 20);
  const randomX = random(10, 50);
  // const randomY = random(20, 30);
  const randomY = random(20, 50);
  const randomDelay = random(0, 1);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(8, 12);

  TweenLite.set(bubble, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });

  moveX(bubble, 1);
  moveY(bubble, -1);
  rotate(bubble, 1);

  function rotate(target, direction) {

    TweenLite.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveX(target, direction) {

    TweenLite.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY(target, direction) {

    TweenLite.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
}




