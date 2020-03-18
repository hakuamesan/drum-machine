 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    console.log("playing sound"+ audio.audioTracks);

    let desc = document.querySelector(`button[data-desc="${key}"]`);
    console.log(key);
    console.log("desc="+desc);

  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  var btns = Array.from(document.getElementsByTagName("button"));
  console.log(btns);
  btns.forEach(btns => btns.addEventListener('click', playSound));

  window.addEventListener('keydown', playSound);

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

