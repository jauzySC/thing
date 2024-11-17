const letter = document.querySelector('.letter');
const wrapper = document.querySelector('.wrapper');
const lidOne = document.querySelector('.lid.one');
const lidTwo = document.querySelector('.lid.two');

let isHovered = false;
let isFullView = false; // Track full view state

wrapper.addEventListener('mouseover', () => {
  isHovered = true;
  lidOne.classList.remove('one');
  lidOne.classList.add('two');
  letter.style.transform = 'translateY(-50px)';
});

wrapper.addEventListener('mouseout', () => {
  if (isHovered && !isFullView) {
    isHovered = false;
    lidOne.classList.remove('two');
    lidOne.classList.add('one');
    letter.style.transform = 'translateY(0)';
  }
});

letter.addEventListener('click', () => {
  if (isHovered) {
    isFullView = !isFullView;
    letter.classList.toggle('full-view');

    if (isFullView) {
      // Full view actions (e.g., additional animations, content changes)
      // ...
    } else {
      // Close full view actions (e.g., revert animations, content changes)
      // ...
    }
  }
});