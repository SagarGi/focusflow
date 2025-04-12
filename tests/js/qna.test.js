import { displaySelectedSubjects } from '../../js/qna.js';
jest.mock('../../js/helper/helper.js', () => ({
  getSelectedSubjects: jest.fn(() => ['Math', 'Science', 'History']),
}));

describe('displaySelectedSubjects', () => {
  it('should display the selected subjects correctly', () => {
    // Set up a mock DOM element
    document.body.innerHTML = `
        <div class="selected-subjects-qna"></div>
        <div id="firstOption"></div>
        <div id="secondOption"></div>
      `;
    displaySelectedSubjects();
    const buttons = document.querySelectorAll('.selected-subjects-qna button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].innerText).toBe('Math');
    expect(buttons[1].innerText).toBe('Science');
    expect(buttons[2].innerText).toBe('History');
  });
});
