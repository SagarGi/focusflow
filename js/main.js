export function toogleSubject(button) {
  const instructionBoxSubjects = document.querySelector('.instruction-box-subjects');
  const subjectsContainer = document.querySelector('.subject-container');
  const subjectDescriptionPlaceholder = document.querySelector('.subject-description-placeholder');

  if (!instructionBoxSubjects || !subjectsContainer || !subjectDescriptionPlaceholder) {
    console.error('Required elements not found in the DOM.');
    return;
  }

  if (button.classList.contains('subject')) {
    button.classList.replace('subject', 'subject-selected');
    instructionBoxSubjects.appendChild(button);
  } else if (button.classList.contains('subject-selected')) {
    button.classList.replace('subject-selected', 'subject');
    subjectsContainer.appendChild(button);
  }

  // Toggle subject description display
  subjectDescriptionPlaceholder.style.display =
    instructionBoxSubjects.children.length === 0 ? 'block' : 'none';
}

window.toogleSubject = toogleSubject;
