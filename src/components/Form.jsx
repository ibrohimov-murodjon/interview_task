import { useState, useEffect } from "react";

export default function Form({ onSetCount }) {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [count, setCount] = useState("");
  const [currentCount, setCurrentCount] = useState(null);

  useEffect(() => {
    // user va categories larni fetch qilish
    const fetchData = async () => {
      try {
        const [usersRes, categoriesRes] = await Promise.all([
          fetch("https://python-api-task.onrender.com/users"),
          fetch("https://python-api-task.onrender.com/categories"),
        ]);
        const usersData = await usersRes.json();
        console.log("Users data:", usersData);
        const categoriesData = await categoriesRes.json();
        setUsers(usersData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Category va user tanlanganda countni fetch qilish
    const fetchCount = async () => {
      if (selectedUser && selectedCategory) {
        try {
          const res = await fetch(
            "https://python-api-task.onrender.com/counts"
          );
          const countsData = await res.json();
          const count = countsData.find(
            (c) =>
              c.user_id === selectedUser && c.category_id === selectedCategory
          );
          setCurrentCount(count ? count.count : 0);
          setCount(count ? count.count : 0);
        } catch (error) {
          console.error("Error fetching count:", error);
        }
      }
    };
    fetchCount();
  }, [selectedUser, selectedCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser && selectedCategory && count) {
      onSetCount(selectedUser, selectedCategory, Number.parseInt(count));
      // form ni tozalash
      setSelectedUser("");
      setSelectedCategory("");
      setCount("");
      setCurrentCount(null);
    }
  };

  return (
    <div className="form__section p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Форма заявки</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-50 rounded-3xl max-w-md mx-auto"
      >
        <div>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-btnClr"
          >
            <option value="">User</option>
            {users &&
              users.length > 0 &&
              users.map((user) => (
                <option key={user.id} value={user.id}>
                  <span>{`${user.first_name} ${user.last_name}`}</span>
                </option>
              ))}
          </select>
        </div>

        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-btnClr"
          >
            <option value="">Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="Count"
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-btnClr"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-btnClr text-white py-3 rounded-lg hover:bg-primary transition-colors"
        >
          SET
        </button>
      </form>
    </div>
  );
}
