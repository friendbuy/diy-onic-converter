/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log("Performing bionic reading conversion on:", container);

  /* Etc. etc. etc. your code etc. */
};

const PREFIX_LENGTH = 3;

const createDIYOnicElement = (text) => {
  const normalText = text.substring(PREFIX_LENGTH);
  const emphasisText = text.substring(0, PREFIX_LENGTH);

  const emphasisElement = document.createElement('b');
  emphasisElement.textContent = emphasisText;

  const element = document.createElement('span');
  element.className = 'diyonic';
  element.appendChild(emphasisElement);
  element.append(normalText);

  return element;
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
