import { getSeletedSubjects, setSubjectResult } from '../js/helper/helper.js';

let choosenSubjects = getSeletedSubjects();
const totalNoOfChoosenSubjects = choosenSubjects.length;
let subjectVsQuestionCountForResult = {};
let subjectIteratorStart = 0;
let subjectIteratorEnd = subjectIteratorStart + 1;

export function displaySelectedSubjects() {
  let subjects = getSeletedSubjects();
  let selectedSubjectWrapper = document.querySelector('.selected-subjects-qna');
  if (selectedSubjectWrapper) {
    for (let i = 0; i < subjects.length; i++) {
      let subjectButton = document.createElement('button');
      subjectButton.innerText = subjects[i];
      if (i === 0) {
        subjectButton.className = 'selected';
        document.querySelector('#firstOption').innerText = subjects[i];
      }
      if (i === 1) {
        subjectButton.className = 'selected';
        document.querySelector('#secondOption').innerText = subjects[i];
      }
      selectedSubjectWrapper.appendChild(subjectButton);
    }
  } else {
    console.error('Selected subjects wrapper not found in the DOM.');
  }
}

export function selectQuestionsSubject(node) {
  // Update subject question count
  const selectedSubject = node.innerText;
  subjectVsQuestionCountForResult[selectedSubject] =
    (subjectVsQuestionCountForResult[selectedSubject] || 0) + 1;

  // Get all subject buttons
  const selectedSubjectWrapper = document.querySelectorAll('.selected-subjects-qna button');

  // Remove highlight from previous subjects
  if (subjectIteratorEnd < selectedSubjectWrapper.length) {
    selectedSubjectWrapper[subjectIteratorEnd].classList.remove('selected');
  }

  subjectIteratorEnd++;

  if (subjectIteratorEnd > totalNoOfChoosenSubjects - 1) {
    selectedSubjectWrapper[subjectIteratorStart].classList.remove('selected');
    subjectIteratorStart++;
    subjectIteratorEnd = subjectIteratorStart + 1;
  }

  // Check if all subjects are selected
  if (subjectIteratorStart > totalNoOfChoosenSubjects - 2) {
    document.querySelector('#firstOption').disabled = true;
    document.querySelector('#secondOption').disabled = true;
    document.querySelector('#firstOption').style.cursor = 'default';
    document.querySelector('#secondOption').style.cursor = 'default';
    document.querySelector('.result-button').style.display = 'flex';

    // save the result data in the session storage
    setSubjectResult(subjectVsQuestionCountForResult);
    return;
  }

  // Highlight the new subjects
  selectedSubjectWrapper[subjectIteratorStart].classList.add('selected');
  selectedSubjectWrapper[subjectIteratorEnd].classList.add('selected');

  // Update the question bar text
  document.querySelector('#firstOption').innerText =
    selectedSubjectWrapper[subjectIteratorStart].innerText;
  document.querySelector('#secondOption').innerText =
    selectedSubjectWrapper[subjectIteratorEnd].innerText;
}

// This function is loaded only after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displaySelectedSubjects();
});

window.displaySelectedSubjects = displaySelectedSubjects;
window.selectQuestionsSubject = selectQuestionsSubject;
