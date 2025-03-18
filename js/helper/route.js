export function navigateTo(pageName) {
  window.location.href = `pages/${pageName}.html`;
}
// for global access (since i have implementd javavscript linter)
window.navigateTo = navigateTo;
