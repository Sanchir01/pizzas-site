import React from "react";

const Categories = () => {
  const [active, setActive] = React.useState(1);
  const list = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {list.map((value,i) => (
            <li
                key={(value )}
                onClick={() => setActive(i)}
                className={active === i ? "active" : ""}
            >
              {value}
            </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
