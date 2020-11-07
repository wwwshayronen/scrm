import React from "react";

const Total = ({ report }) => {
  if (!report) {
    return <h1>add data to see monthly profit</h1>;
  }
  const groupByDate = report.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const formattedDateKey = `${date.getMonth() + 1}-${date.getFullYear()}`;

    // Group initialization
    if (!acc[formattedDateKey]) {
      acc[formattedDateKey] = [];
    }

    // Grouping
    acc[formattedDateKey].push(curr.revenue);

    return acc;
  }, {});

  const keys = Object.keys(groupByDate);


  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const revenue = keys.map((key) =>
    console.log(groupByDate[key].map((x) => x).reduce(reducer))
  );


  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {keys.map((key) => (
          <li style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            {key}:{" "}
            <span style={{ color: "#52c41a", fontWeight: "600" }}>
              {groupByDate[key].reduce(reducer)}{" "}
              <img style={{width:"15px", height:"15px"}} src="https://www.flaticon.com/svg/static/icons/svg/38/38261.svg" />
            </span>
          </li>
        ))}
      </ul>
      <></>
    </>
  );
};

export default Total;

