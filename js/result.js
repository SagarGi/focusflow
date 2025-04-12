import { getSubjectResult } from '../js/helper/helper.js';
const barWidth = 280; // Width of the bar in pixels

function displayTheResult() {
  // we are showing the highest priority subject first so we are sorting the subjects in descending order
  const subjects = Object.entries(getSubjectResult())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
  const container = document.getElementById('subject-list');
  subjects.forEach((subject, index) => {
    const subjectContainer = document.createElement('div');
    container.appendChild(subjectContainer);
    subjectContainer.classList.add('subject-container');
    const outerBar = document.createElement('div');
    subjectContainer.appendChild(outerBar);
    outerBar.classList.add('bar');
    const widthPercent = (subject.value / 5) * barWidth;
    outerBar.style.width = `${widthPercent}px`;
    outerBar.style.backgroundColor = 'red';
    const subjectName = document.createElement('p');
    subjectName.textContent = subject.name + ` (Priority ${index + 1})`;
    subjectContainer.appendChild(subjectName);
  });
}

// This function is loaded only after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displayTheResult();
});
