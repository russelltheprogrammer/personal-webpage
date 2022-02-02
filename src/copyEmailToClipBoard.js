const copyEmailToClipBoard = (text) => {

navigator.clipboard.writeText(text);

alert("Russell's E-mail Has Been Copied To The Clipboard.")
};

export default copyEmailToClipBoard;
