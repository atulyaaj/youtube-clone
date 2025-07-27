const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div
        className="w-7 h-7 rounded-full text-gray-100 text-center text-sm font-bold flex items-center justify-center shrink-0 mr-2"
        style={{ backgroundColor: generateColor() }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <div>
        <span className="font-semibold pr-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

function generateColor() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  return `#${code}`;
}

export default ChatMessage;
