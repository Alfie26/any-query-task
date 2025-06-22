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
