export function navigateTo(pageName) {
  const origin = window.location.origin; // Includes protocol (http/https) + host
  window.location.href = `${origin}/pages/${pageName}.html`;
}

export function getNoOfChildren(node) {
  return node.children.length;
}

export function saveSelectedSubjects(subjects) {
  sessionStorage.setItem('subjects', JSON.stringify(subjects));
}

export function getSelectedSubjects() {
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
window.saveSelectedSubjects = saveSelectedSubjects;
window.getSelectedSubjects = getSelectedSubjects;
window.setSubjectResult = setSubjectResult;
window.getSubjectResult = getSubjectResult;
