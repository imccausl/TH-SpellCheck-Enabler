const targetNode = document.getElementById('flux-app');
const config = {
  attributes: false,
  childList: true,
  subtree: true,
};

function mutationHandler(mutationsList) {
  const editableParentElement = document.querySelectorAll('.public-DraftEditor-content');

  if (editableParentElement.length > 0) {
    editableParentElement.forEach(elm => {
      if (!elm.spellcheck) {
        elm.spellcheck = true;
      }
    });
  }
}

const observer = new MutationObserver(mutationHandler);

observer.observe(targetNode, config);
