export default function Header({ name }) {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-title mb-0">{name}</h1>
      </div>
    </div>
  );
}
