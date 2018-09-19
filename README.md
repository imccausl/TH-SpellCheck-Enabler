THM Spellcheck
--------------
A quick little Chrome extension that enables the browser's built-in spellcheck capabilities on the Top Hat Pages editor.

It uses the MutationObserver API to listen for when the pages editor is open, and then changes the spellcheck attribute on the parent node of the pages editor to 'true' from 'false', enabling basic spellchecking capabilities for the entire editor.

I was curious about whether I could perform some basic DOM manipulation of this kind based on DOM mutation, rather than page load events. Turns out I could... and it turns out there's a such thing as a MutationObserver API. Who knew?

DISCLAIMER: This comes with absolutely no warranty express or otherwise. It is highly experimental and could, very well, delete your precious data. I mean it probably won't because all it does is change one little thing to "true" from "false", but nevertheless you use it entirely at your own risk.