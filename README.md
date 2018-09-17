THM Spellcheck
--------------
A quick little Chrome extension that enables the browser's built-in spellcheck capabilities on the Top Hat Pages editor.

It uses the MutationObserver API to listen for when the pages editor is open, and then changes the spellcheck attribute on the parent node of the pages editor to 'true' from 'false', enabling basic spellchecking capabilities for the entire editor.

I was curious about whether I could perform some basic DOM manipulation of this kind based on DOM mutation, rather than page load events. Turns out I could... and it turns out there's a such thing as a MutationObserver API. Who knew?

DISCLAIMER: This comes with absolutely no warranty express or otherwise. It is highly experimental and could, very well, delete your precious data. If you do decide to install this (and you'd have to know how to install chrome extensions in developer mode first) for the purpose of actually enabling spellcheck in this context, you do so entirely at your own risk.