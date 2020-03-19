 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    document.getElementById("display").innerHTML = key.getAttribute("data-desc");

  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function changeDisplay(e){

    /// change display to some text based on the button
    document.getElementById("display").innerHTML = e.target.dataset.desc ; 
}


  function doSomething(e){
  
    let keycode = e.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    const key = document.querySelector(`button[data-key="${keycode}"]`);
    if (!audio) return;
   key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    changeDisplay(e);

  }


  var btns = Array.from(document.getElementsByTagName("button"));
  console.log(btns);
  btns.forEach(btns => btns.addEventListener('click', doSomething));

  window.addEventListener('keydown', playSound);

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

