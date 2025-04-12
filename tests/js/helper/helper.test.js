import {
  getNoOfChildren,
  saveSelectedSubjects,
  getSelectedSubjects,
  setSubjectResult,
  getSubjectResult,
} from '../../../js/helper/helper';

describe('Helper functions', () => {
  beforeEach(() => {
    // Clear sessionStorage before each test
    sessionStorage.clear();
  });

  describe('getNoOfChildren', () => {
    it('should return the correct number of child elements created', () => {
      const parent = document.createElement('div');
      const child1 = document.createElement('span');
      const child2 = document.createElement('span');
      parent.appendChild(child1);
      parent.appendChild(child2);
      expect(getNoOfChildren(parent)).toBe(2);
    });

    it('should return 0 for an element with no children', () => {
      const parent = document.createElement('div');
      expect(getNoOfChildren(parent)).toBe(0);
    });
  });

  describe('saveSelectedSubjects & getSelectedSubjects', () => {
    it('should save and retrieve selected subjects correctly', () => {
      const subjects = ['Math', 'Science'];
      saveSelectedSubjects(subjects);
      const retrieved = getSelectedSubjects();
      expect(retrieved).toEqual(subjects);
    });

    it('should return empty array if no subjects are saved', () => {
      expect(getSelectedSubjects()).toEqual([]);
    });
  });

  describe('setSubjectResult & getSubjectResult', () => {
    it('should save and retrieve result correctly', () => {
      const result = { Math: 'A+', Science: 'B' };
      setSubjectResult(result);
      const retrieved = getSubjectResult();
      expect(retrieved).toEqual(result);
    });

    it('should return empty object if no result is saved', () => {
      expect(getSubjectResult()).toEqual({});
    });
  });
});
