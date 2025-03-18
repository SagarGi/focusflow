import { getNoOfChildren } from '../js/helper/helper.js';

export function selectOrDisselectSubjects(node) {
  const instructionBoxSubjects = document.querySelector('.instruction-box-subjects');
  if (node.classList.contains('subject') && getNoOfChildren(instructionBoxSubjects) >= 5) {
    alert('You can only select a maximum of 5 subjects.');
    return;
  }
  const subjectsContainer = document.querySelector('.subject-container');
  const subjectDescriptionPlaceholder = document.querySelector('.subject-description-placeholder');

  if (!instructionBoxSubjects || !subjectsContainer || !subjectDescriptionPlaceholder) {
    console.error('Required elements not found in the DOM.');
    return;
  }

  if (node.classList.contains('subject')) {
    node.classList.replace('subject', 'subject-selected');
    instructionBoxSubjects.appendChild(node);
  } else if (node.classList.contains('subject-selected')) {
    node.classList.replace('subject-selected', 'subject');
    subjectsContainer.appendChild(node);
  }

  // Toggle subject description display
  subjectDescriptionPlaceholder.style.display =
    getNoOfChildren(instructionBoxSubjects) === 0 ? 'block' : 'none';
}

window.selectOrDisselectSubjects = selectOrDisselectSubjects;
