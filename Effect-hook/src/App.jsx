import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentPage, setPage] = useState(1);
  const itemPerPage = 6;

  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentItems = news.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(news.length / itemPerPage);

  async function fetchdata() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      if (data.length === 0) throw new Error("No data found");

      setNews(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  if (loading) {
    return (
      <h1 className="text-center text-2xl text-blue-500 mt-10">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-2xl text-red-500 mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        User List
      </h1>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl p-5"
            >
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500">{item.email}</p>
              <p className="text-gray-600 mt-2">
                📍 {item.address.city}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2 items-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white"
          }`}
        >
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-white border"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default App;