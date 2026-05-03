import Todo from "./components/Todo.jsx";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        TODO APP with Redux
      </h1>
      <Todo />
    </div>
  );
}
