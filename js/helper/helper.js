export function navigateTo(pageName) {
  window.location.href = `pages/${pageName}.html`;
}

export function getNoOfChildren(node) {
  return node.children.length;
}

export function saveSeletedSubjects(subjects) {
  sessionStorage.setItem('subjects', JSON.stringify(subjects));
}

export function getSeletedSubjects() {
  let subjects = sessionStorage.getItem('subjects');
  return subjects ? JSON.parse(subjects) : [];
}

export function setSubjectResult(result) {
  sessionStorage.setItem('result', JSON.stringify(result));
}

export function getSubjectResult() {
  let result = sessionStorage.getItem('result');
  return result ? JSON.parse(result) : {};
}

window.navigateTo = navigateTo;
window.getNoOfChildren = getNoOfChildren;
window.saveSeletedSubjects = saveSeletedSubjects;
window.getSeletedSubjects = getSeletedSubjects;
window.setSubjectResult = setSubjectResult;
window.getSubjectResult = getSubjectResult;
