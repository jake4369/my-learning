import Link from "next/link";

const PhonicsSetHeader = ({ set, children }) => {
  const colorMap = {
    "set-1": "#CDB4DB",
    "set-2": "#FFC8DD",
    "set-3": "#FFAFCC",
    "set-4": "#BDE0FE",
    "set-5": "#A2D2FF",
  };

  const styles = {
    backgroundColor: colorMap[set],
  };

  return (
    <div className="phonics__set-header" style={styles}>
      {children}
    </div>
  );
};

export default PhonicsSetHeader;
