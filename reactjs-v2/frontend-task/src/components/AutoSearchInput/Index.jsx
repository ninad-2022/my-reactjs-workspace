import { useEffect, useState } from "react";
import "./Index.css";

const AutoSearchInput = () => {
  const [search, setSearch] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [cache, setCache] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchFoodItems = async () => {
    if (cache[search]) {
      setFoodItems(cache?.recipes);
      return;
    }

    try {
      const fetchFoodItems = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      const food = await fetchFoodItems.json();
      setFoodItems(food?.recipes);
      setCache((prev) => ({
        ...prev,
        [search]: food?.recipes,
      }));
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    if (!search.trim()) {
      setFoodItems([]);
      return;
    }
    const timer = setTimeout(fetchFoodItems, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <h2>Auto Search</h2>
      <div className="parent-search">
        <input
          value={search}
          name="searchBar"
          id="searchBar"
          onChange={handleSearchChange}
          onFocus={() => setShowContent(true)}
          onBlur={() => setShowContent(false)}
        />
        {showContent && foodItems?.length ? (
          <div className="search-content">
            {foodItems?.map((item) => {
              return <p key={item.id}>{item.name}</p>;
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default AutoSearchInput;
