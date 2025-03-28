import { getSeletedSubjects } from '../js/helper/helper.js';

export function displaySelectedSubjects() {
  let subjects = getSeletedSubjects();
  console.log(subjects);
  let container = document.getElementById('selected-subjects-qna');
  subjects.forEach((subject) => {
    let btn = document.createElement('button');
    btn.innerText = subject;
    btn.className = 'subject-button';
    btn.onclick = function () {
      alert('You clicked: ' + ussubjecter);
    };
    container.appendChild(btn);
  });
}

window.selectOrDisselectSubjects = selectOrDisselectSubjects;
