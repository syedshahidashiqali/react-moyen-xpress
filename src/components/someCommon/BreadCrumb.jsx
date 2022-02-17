import { useNavigate } from "react-router-dom";

export default function Breadcrumb({ name }) {
  const navigate = useNavigate();
  return (
    <nav className="breadcrumb-nav mt-10 mb-10 pb-8">
      <div className="container">
        <ul className="breadcrumb">
          <li onClick={() => navigate("/")}>
            <a href="">Home</a>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </nav>
  );
}
