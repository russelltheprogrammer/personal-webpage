const copyToClipboard = (text, message) => {

navigator.clipboard.writeText(text);

alert(message);
};

export default copyToClipboard;
