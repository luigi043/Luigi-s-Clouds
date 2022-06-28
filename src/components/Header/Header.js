import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      ☁️ Luigi's Clouds☁️
    </span>
  );
};

export default Header;
