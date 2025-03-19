export function navigateTo(pageName) {
  window.location.href = `pages/${pageName}.html`;
}

export function getNoOfChildren(node) {
  return node.children.length;
}

window.navigateTo = navigateTo;
window.getNoOfChildren = getNoOfChildren;
