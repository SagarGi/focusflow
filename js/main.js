import { getNoOfChildren } from '../js/helper/helper.js';
import {
  subjectErrorEmpty,
  subjectErrorLong,
  validationSubjectExceed,
} from '../js/helper/constant.js';

export function selectOrDisselectSubjects(node, type = null) {
  const instructionBoxSubjects = document.querySelector('.instruction-box-subjects');
  if (node.classList.contains('subject') && getNoOfChildren(instructionBoxSubjects) >= 5) {
    alert(validationSubjectExceed);
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
    if (type === 'custom') {
      node.remove();
    } else {
      node.classList.replace('subject-selected', 'subject');
      subjectsContainer.appendChild(node);
    }
  }

  // Toggle subject description display
  subjectDescriptionPlaceholder.style.display =
    getNoOfChildren(instructionBoxSubjects) === 0 ? 'block' : 'none';
}

export function showAddSubjectDialog() {
  document.getElementById('dialogOverlay').style.display = 'flex';
}

export function closeAddSubjectDialog() {
  document.getElementById('subjectInput').value = '';
  document.getElementById('subject-error').style.display = 'none';
  document.getElementById('dialogOverlay').style.display = 'none';
}

export function addCustomSubject() {
  const subjectName = document.getElementById('subjectInput').value.trim();
  const subjectError = document.getElementById('subject-error');
  // check for the validation if there is no subject name or subject name is too long
  if (subjectName === '') {
    subjectError.textContent = subjectErrorEmpty;
    subjectError.style.display = 'block';
    return;
  }
  if (subjectName.length > 20) {
    subjectError.textContent = subjectErrorLong;
    subjectError.style.display = 'block';
    return;
  }

  // if there is no error then we add the new custom subject to the list
  // create a new button node
  const newButton = document.createElement('button');
  newButton.classList.add('subject');
  newButton.textContent = subjectName;
  newButton.setAttribute('onclick', 'selectOrDisselectSubjects(this, "custom")');
  // add it to the list
  selectOrDisselectSubjects(newButton, 'custom');
  closeAddSubjectDialog();
}

window.selectOrDisselectSubjects = selectOrDisselectSubjects;
window.showAddSubjectDialog = showAddSubjectDialog;
window.closeAddSubjectDialog = closeAddSubjectDialog;
window.addCustomSubject = addCustomSubject;
window.showNeedHelpDialog = showNeedHelpDialog;  // Added to window object
window.closeNeedHelpDialog = closeNeedHelpDialog;  // Added to window object

// Function to show the modal
export function showNeedHelpDialog() {
    document.getElementById("need-help-modal").style.display = "block";
}

// Function to close the modal
export function closeNeedHelpDialog() {
    document.getElementById("need-help-modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("need-help-modal");
    if (event.target === modal) {
        closeNeedHelpDialog();
    }
};

