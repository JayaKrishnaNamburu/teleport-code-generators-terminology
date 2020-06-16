export const log = result => {
  const domNode = document.getElementById("app");
  console.log(result);
  domNode.innerHTML = result;
};
