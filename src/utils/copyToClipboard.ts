import isBrowser from '@App/utils/isBrowser';
const copyToClipboard = (text: string) => {
  if (!isBrowser()) {
    return;
  }
  if (typeof document === 'undefined') {
    return;
  }
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = text; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    (document as any).getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? (document as any).getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  (document as any).execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  (document as any).body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    (document as any).getSelection().removeAllRanges(); // Unselect everything on the HTML (document as any)
    (document as any).getSelection().addRange(selected); // Restore the original selection
  }
};

export default copyToClipboard;
