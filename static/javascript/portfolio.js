
const typewriterElement = document.getElementById('typewriter');


const typewriterStrings = ['Welcome to My Portfolio', 'I am Pursuing AI&DS', 'I Live in Pune'];


const typingSpeed = 100; 


function typewriterEffect() {
  let currentString = 0;
  let currentLetter = 0;

  function typeNextLetter() {
    if (currentLetter < typewriterStrings[currentString].length) {
      typewriterElement.textContent += typewriterStrings[currentString][currentLetter];
      currentLetter++;
      setTimeout(typeNextLetter, typingSpeed);
    } else {
      setTimeout(deleteNextLetter, 1500); 
    }
  }

  function deleteNextLetter() {
    if (currentLetter > 0) {
      typewriterElement.textContent = typewriterStrings[currentString].slice(0, currentLetter - 1);
      currentLetter--;
      setTimeout(deleteNextLetter, typingSpeed / 2);
    } else {
      currentString = (currentString + 1) % typewriterStrings.length;
      setTimeout(typeNextLetter, typingSpeed / 2);
    }
  }

  typeNextLetter();
}


window.addEventListener('load', typewriterEffect);












function generateRandomShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.style.right = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.width = `${Math.random() * 100}px`;
    shape.style.height = shape.style.width;
    document.querySelector('.background-shapes').appendChild(shape);
  }
  
  function generateShapes() {
    const numShapes = 80; 
  
    for (let i = 0; i < numShapes; i++) {
      generateRandomShape();
    }
  }
  
  generateShapes();


  

  