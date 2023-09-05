/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log('Performing bionic reading conversion on:', container);

  processContainer(container);

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

const processTag = (tag) => {
  const words = tag.textContent.split(' ');

  tag.innerHTML = '';
  words.forEach((word) => {
    tag.appendChild(createDIYOnicElement(word));
  })
};

const processContainer = (container) => {
  const paragraphs = container.querySelectorAll('p');

  paragraphs.forEach(processTag);
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
