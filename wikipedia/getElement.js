const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (!element) throw new Error("no element selected");
  return element;
};

export default getElement;
