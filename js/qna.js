import { getSeletedSubjects } from '../js/helper/helper.js';

let choosenSubjects = getSeletedSubjects();
const totalNoOfChoosenSubjects = choosenSubjects.length;
let subjectVsQuestionCountForResult = {};
let subjectIteratorStart = 0;
let subjectIteratorEnd = subjectIteratorStart + 1;

export function displaySelectedSubjects() {
  let subjects = getSeletedSubjects();
  console.log('These subjects are seleted:' + subjects);
  let selectedSubjectWrapper = document.querySelector('.selected-subjects-qna');
  if (selectedSubjectWrapper) {
    for (let i = 0; i < subjects.length; i++) {
      let subjectButton = document.createElement('button');
      subjectButton.innerText = subjects[i];
      if (i == 0) {
        subjectButton.className = 'selected';
        document.querySelector('#firstOption').innerText = subjects[i];
      }
      if (i == 1) {
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
  if (subjectIteratorStart > totalNoOfChoosenSubjects - 2) {
    // at this point all subjects are selected
    console.log(subjectVsQuestionCountForResult);
    return;
  }
  const hardSubjectChoosen = node.innerText;
  if (subjectVsQuestionCountForResult[hardSubjectChoosen]) {
    subjectVsQuestionCountForResult[hardSubjectChoosen]++;
  } else {
    subjectVsQuestionCountForResult[hardSubjectChoosen] = 1;
  }

  // change the subject selection and also the subject names in the question bar
  let selectedSubjectWrapper = document.querySelectorAll('.selected-subjects-qna button');
  // remove the highlight from the previous subject
  selectedSubjectWrapper[subjectIteratorEnd].classList.remove('selected');
  subjectIteratorEnd++;
  if (subjectIteratorEnd > totalNoOfChoosenSubjects - 1) {
    // remove the highlight from the previous subject
    selectedSubjectWrapper[subjectIteratorStart].classList.remove('selected');
    subjectIteratorStart++;
    if (subjectIteratorStart > totalNoOfChoosenSubjects - 2) {
      // at this point all subjects are selected
      console.log(subjectVsQuestionCountForResult);
      document.querySelector('#firstOption').disabled = true;
      document.querySelector('#secondOption').disabled = true;
      document.querySelector('.result-button').style.display = 'flex';
      return;
    }
    selectedSubjectWrapper[subjectIteratorStart].className = 'selected';
    subjectIteratorEnd = subjectIteratorStart + 1;
  }
  // add highlight to the new subject
  selectedSubjectWrapper[subjectIteratorEnd].className = 'selected';
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
