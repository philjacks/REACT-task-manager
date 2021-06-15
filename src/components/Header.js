import Button from "./Button";

const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "red" : "green"}
        text={showForm ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager"
};

export default Header;
