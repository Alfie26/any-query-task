const specs = {};
[
  ...document
    .getElementById("tab1")
    .getElementsByClassName("tab-pane-product-parameter-item"),
].forEach((item) => {
  const key = item.getElementsByClassName("parameter-name")[0].innerText;
  specs[key] = item.getElementsByClassName("parameter-value")[0].innerText;
});
console.log(specs);

[
  ...document
    .getElementById("tab1")
    .getElementsByClassName("tab-pane-product-parameter-item"),
].reduce((acc, element) => {
  const key = element.children[0].innerText;
  const value = element.children[1].textContent;
  acc[key] = value;
  return acc;
}, {});
