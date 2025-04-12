import { getSubjectResult } from '../js/helper/helper.js';

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
  const widthPercent = (subject.value / 5) * 280;
  outerBar.style.width = `${widthPercent}px`;
  outerBar.style.backgroundColor = 'red';
  const subjectName = document.createElement('p');
  subjectName.textContent = subject.name + ` (Priority ${index + 1})`;
  subjectContainer.appendChild(subjectName);
});
