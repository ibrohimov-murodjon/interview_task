import { useState, useEffect } from "react";
import { HeroAvatar1 } from "../assets";

export default function Table({ onCountUpdate }) {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // bir vaqtni o'zida 3 ta API ga sorov yuborilyabdi bu qismda
    try {
      const [usersRes, categoriesRes, countsRes] = await Promise.all([
        fetch("https://python-api-task.onrender.com/users"),
        fetch("https://python-api-task.onrender.com/categories"),
        fetch("https://python-api-task.onrender.com/counts"),
      ]);

      const [users, categoriesData, counts] = await Promise.all([
        usersRes.json(),
        categoriesRes.json(),
        countsRes.json(),
      ]);

      setCategories(categoriesData);

      const processedData = users.map((user) => {
        const userCounts = categoriesData.map((category) => {
          const countRecord = counts.find(
            (c) => c.user_id === user.id && c.category_id === category.id
          );
          return countRecord ? countRecord.count : 0;
        });
        console.log(users, "users");
        return {
          id: user.id,
          username: user.first_name,
          avatar: user.avatar,
          counts: userCounts,
          total: userCounts.reduce((a, b) => a + b, 0),
        };
      });

      console.log("Processed Data:", processedData);
      setData(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSort = (columnIndex) => {
    setSortConfig((prevConfig) => {
      const newDirection =
        prevConfig.key === columnIndex && prevConfig.direction === "asc"
          ? "desc"
          : "asc";

      const sortedData = [...data].sort((a, b) => {
        const aValue =
          columnIndex === "total" ? a.total : a.counts[columnIndex];
        const bValue =
          columnIndex === "total" ? b.total : b.counts[columnIndex];
        return newDirection === "asc" ? aValue - bValue : bValue - aValue;
      });

      setData(sortedData);
      return { key: columnIndex, direction: newDirection };
    });
  };

  const calculateColumnTotal = (columnIndex) => {
    return data.reduce((total, row) => {
      return (
        total + (columnIndex === "total" ? row.total : row.counts[columnIndex])
      );
    }, 0);
  };

  const getCellBackground = (value) => {
    if (value < 0) return "bg-red-50";
    if (value === 0) return "bg-green-50";
    return "";
  };

  const getCellColor = (value) => {
    if (value < 0) return "text-red-600";
    if (value > 0) return "text-green-600";
    return "text-gray-600";
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow overflow-hidden container">
      <h2 className="text-2xl font-semibold p-6">Рейтинг участников</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              {categories.map((category, index) => (
                <th
                  key={category.id}
                  onClick={() => handleSort(index)}
                  className="px-6 py-3 text-right text-sm font-medium text-gray-500 cursor-pointer"
                >
                  {`Category ${index + 1}`}
                  <span className="ml-1">↕</span>
                </th>
              ))}
              <th
                onClick={() => handleSort("total")}
                className="px-6 py-3 text-right text-sm font-medium text-gray-500 cursor-pointer"
              >
                Total
                <span className="ml-1">↕</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log(data)}
            {data.map((row, index) => (
              <tr key={row.id} className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={row.avatar || HeroAvatar1}
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="ml-4 text-sm text-gray-900">
                      {row.username}
                    </span>
                  </div>
                </td>
                {row.counts.map((count, i) => (
                  <td
                    key={i}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-right ${getCellBackground(
                      count
                    )} ${getCellColor(count)}`}
                  >
                    {count > 0 ? `+${count}` : count}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                  {row.total}
                </td>
              </tr>
            ))}
            <tr className="border-t border-gray-200 font-medium bg-gray-50">
              <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm">
                Общее
              </td>
              {categories.map((_, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap text-sm text-right"
                >
                  {calculateColumnTotal(index)}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                {calculateColumnTotal("total")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
