import { getSelectedSubjects, setSubjectResult } from '../js/helper/helper.js';

let chosenSubjects = getSelectedSubjects();
const totalNoOfChosenSubjects = chosenSubjects.length;
let subjectVsQuestionCountForResult = {};
let subjectIteratorStart = 0;
let subjectIteratorEnd = subjectIteratorStart + 1;
// set initial values of all the subjects as zero for result
chosenSubjects.forEach((subject) => {
  subjectVsQuestionCountForResult[subject] = 0;
});

export function displaySelectedSubjects() {
  console.log('Display selected subjects:', chosenSubjects);
  let selectedSubjectWrapper = document.querySelector('.selected-subjects-qna');
  if (selectedSubjectWrapper) {
    for (let i = 0; i < chosenSubjects.length; i++) {
      let subjectButton = document.createElement('button');
      subjectButton.innerText = chosenSubjects[i];
      if (i === 0) {
        subjectButton.className = 'selected';
        document.querySelector('#firstOption').innerText = chosenSubjects[i];
      }
      if (i === 1) {
        subjectButton.className = 'selected';
        document.querySelector('#secondOption').innerText = chosenSubjects[i];
      }
      selectedSubjectWrapper.appendChild(subjectButton);
    }
  } else {
    console.error('Selected chosenSubjects wrapper not found in the DOM.');
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

  if (subjectIteratorEnd > totalNoOfChosenSubjects - 1) {
    selectedSubjectWrapper[subjectIteratorStart].classList.remove('selected');
    subjectIteratorStart++;
    subjectIteratorEnd = subjectIteratorStart + 1;
  }

  // Check if all subjects are selected
  if (subjectIteratorStart > totalNoOfChosenSubjects - 2) {
    document.querySelector('#firstOption').disabled = true;
    document.querySelector('#secondOption').disabled = true;
    document.querySelector('#firstOption').style.cursor = 'default';
    document.querySelector('#secondOption').style.cursor = 'default';
    document.querySelector('.result-button').style.display = 'flex';

    // Disable hover effect
    document.querySelector('#firstOption').style.pointerEvents = 'none';
    document.querySelector('#secondOption').style.pointerEvents = 'none';

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
