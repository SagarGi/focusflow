import { getSeletedSubjects } from '../js/helper/helper.js';

let choosenSubjects = getSeletedSubjects();
const totalNoOfChoosenSubjects = choosenSubjects.length;
let subjectVsQuestionCountForResult = {};
let noOfTimesQuestionAsked = 0;

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

export function selectQuestionsSubject() {
  // here we iterate the selected subjects and get the questions count for each subject
}

// This function is loaded only after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displaySelectedSubjects();
});

window.displaySelectedSubjects = displaySelectedSubjects;
window.selectQuestionsSubject = selectQuestionsSubject;
