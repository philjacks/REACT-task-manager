import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {};

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager"
};

export default Header;
