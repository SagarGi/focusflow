import {
  selectOrDisselectSubjects,
  showAddSubjectDialog,
  closeAddSubjectDialog,
  addCustomSubject,
  letsBeginFocusFlow,
  showNeedHelpDialog,
  closeNeedHelpDialog,
} from '../../js/main.js';

describe('DOM Manipulation and Logic Tests', () => {
  let instructionBoxSubjects;
  let subjectsContainer;
  let subjectDescriptionPlaceholder;

  beforeEach(() => {
    // Set up the DOM elements
    document.body.innerHTML = `
        <div class="instruction-box-subjects"></div>
        <div class="subject-container"></div>
        <div class="subject-description-placeholder"></div>
        <div id="dialogOverlay" style="display: none;"></div>
        <input id="subjectInput" />
        <div id="subject-error" style="display: none;"></div>
        <div id="need-help-modal" style="display: none;"></div>
        <div id="subject-selection-error" style="display: none;"></div>
      `;

    // Mock sessionStorage
    global.sessionStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };

    instructionBoxSubjects = document.querySelector('.instruction-box-subjects');
    subjectsContainer = document.querySelector('.subject-container');
    subjectDescriptionPlaceholder = document.querySelector('.subject-description-placeholder');
  });

  describe('selectOrDisselectSubjects', () => {
    it('should add subject to instructionBoxSubjects when subject is selected', () => {
      const subject = document.createElement('button');
      subject.classList.add('subject');
      selectOrDisselectSubjects(subject);

      expect(instructionBoxSubjects.contains(subject)).toBe(true);
      expect(subject.classList.contains('subject-selected')).toBe(true);
    });

    it('should move subject back to subjectsContainer when unselected', () => {
      const subject = document.createElement('button');
      subject.classList.add('subject-selected');
      instructionBoxSubjects.appendChild(subject);

      selectOrDisselectSubjects(subject);

      expect(subjectsContainer.contains(subject)).toBe(true);
      expect(subject.classList.contains('subject')).toBe(true);
    });

    it('should show or hide subject description based on the number of children', () => {
      const subject = document.createElement('button');
      subject.classList.add('subject');
      selectOrDisselectSubjects(subject);

      expect(subjectDescriptionPlaceholder.style.display).toBe('none');

      // Add another subject to make it exceed 5 subjects
      for (let i = 0; i < 4; i++) {
        const newSubject = document.createElement('button');
        newSubject.classList.add('subject');
        selectOrDisselectSubjects(newSubject);
      }

      expect(subjectDescriptionPlaceholder.style.display).toBe('none');
    });
  });

  describe('showAddSubjectDialog', () => {
    it('should show the subject input dialog', () => {
      showAddSubjectDialog();
      const dialogOverlay = document.getElementById('dialogOverlay');
      expect(dialogOverlay.style.display).toBe('flex');
    });
  });

  describe('closeAddSubjectDialog', () => {
    it('should close the subject input dialog and clear the input', () => {
      closeAddSubjectDialog();
      const dialogOverlay = document.getElementById('dialogOverlay');
      const subjectInput = document.getElementById('subjectInput');
      const subjectError = document.getElementById('subject-error');

      expect(dialogOverlay.style.display).toBe('none');
      expect(subjectInput.value).toBe('');
      expect(subjectError.style.display).toBe('none');
    });
  });

  describe('addCustomSubject', () => {
    it('should show error if subject is empty', () => {
      const input = document.getElementById('subjectInput');
      input.value = '';
      addCustomSubject();

      const subjectError = document.getElementById('subject-error');
      expect(subjectError.style.display).toBe('block');
      expect(subjectError.textContent).toBe('Subject name cannot be empty.');
    });

    it('should show error if subject name is too long', () => {
      const input = document.getElementById('subjectInput');
      input.value = 'This is a very long subject name';
      addCustomSubject();

      const subjectError = document.getElementById('subject-error');
      expect(subjectError.style.display).toBe('block');
      expect(subjectError.textContent).toBe('Subject name is too long.');
    });
  });

  describe('letsBeginFocusFlow', () => {
    it('should show error if less than 2 subjects are selected', () => {
      const errorMessage = document.getElementById('subject-selection-error');
      letsBeginFocusFlow();

      expect(errorMessage.style.display).toBe('block');
    });
  });

  describe('showNeedHelpDialog', () => {
    it('should show the need help dialog', () => {
      showNeedHelpDialog();
      const modal = document.getElementById('need-help-modal');
      expect(modal.style.display).toBe('flex');
    });
  });

  describe('closeNeedHelpDialog', () => {
    it('should close the need help dialog', () => {
      closeNeedHelpDialog();
      const modal = document.getElementById('need-help-modal');
      expect(modal.style.display).toBe('none');
    });
  });

  describe('Window click outside modal', () => {
    it('should close the modal if clicked outside', () => {
      const modal = document.getElementById('need-help-modal');
      window.onclick({ target: modal });

      expect(modal.style.display).toBe('none');
    });
  });
});
