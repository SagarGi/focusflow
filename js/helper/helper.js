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

window.navigateTo = navigateTo;
window.getNoOfChildren = getNoOfChildren;
window.saveSeletedSubjects = saveSeletedSubjects;
window.getSeletedSubjects = getSeletedSubjects;
