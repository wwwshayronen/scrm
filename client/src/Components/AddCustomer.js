import React, { useState } from "react";

import ModalForCopy from "./ModalForCopy";
import SendDataToTheServer from "./SendDataToTheServer";
import { Input, Button } from "antd";

const dateObj = Date.now();

const AddCustomer = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [תז, setתז] = useState();
  const [עיר, setעיר] = useState("");
  const [רחוב, setרחוב] = useState("");
  const [מספר_בית, setמספר_בית] = useState();
  const [מספר_דירה, setמספר_דירה] = useState();
  const [חבילה, setחבילה] = useState("25 ש''ח - 100GB");
  const [מספר_אשראי, setמספר_אשראי] = useState();
  const [תפוגה, setתפוגה] = useState();
  const [שלוש_ספרות, setשלוש_ספרות] = useState();
  const [מספר_טלפון_ליצירת_קשר, setמספר_טלפון_ליצירת_קשר] = useState();
  const [show, setShow] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState();
  const [revenue, setRevenue] = useState();
  const [date, setDate] = useState(dateObj);

  function resetForm() {
    setName("");
    setחבילה("");
    setמספר_אשראי("");
    setמספר_טלפון_ליצירת_קשר("");
    setעיר("");
    setרחוב("");
    setתז("");
    setתפוגה("");
    setשלוש_ספרות("");
    setמספר_בית("");
    setמספר_דירה("");
    setNumberOfLines("");
    setList([]);
    setShow(false);
  }

  function handleSubmitEvent(e) {
    e.preventDefault();
    setList([
      {
        ...list,
        id: list.length + 1,
        שם: name,
        תז: תז,
        עיר: עיר,
        רחוב: רחוב,
        מספר_בית: מספר_בית,
        מספר_דירה: מספר_דירה,
        חבילה: חבילה,
        מספר_אשראי: מספר_אשראי,
        תפוגה: תפוגה,
        שלוש_ספרות: שלוש_ספרות,
        מספר_טלפון_ליצירת_קשר: מספר_טלפון_ליצירת_קשר,
        revenue: revenue,
        numberOfLines: numberOfLines,
        date: date,
      },
    ]);
    setShow(true);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #f0f0f0",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          onSubmit={handleSubmitEvent}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "4rem",
          }}
        >
          <label htmlFor="name">שם:</label>
          <Input
            style={{ width: "230px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name">תז:</label>
          <Input
            style={{ width: "230px" }}
            value={תז}
            onChange={(e) => setתז(e.target.value)}
            required
          />
          <label htmlFor="name">עיר:</label>
          <Input
            style={{ width: "230px" }}
            value={עיר}
            onChange={(e) => setעיר(e.target.value)}
            required
          />
          <label htmlFor="name">רחוב:</label>
          <Input
            style={{ width: "230px" }}
            value={רחוב}
            onChange={(e) => setרחוב(e.target.value)}
            required
          />
          <label htmlFor="name">מספר בית:</label>
          <Input
            style={{ width: "230px" }}
            value={מספר_בית}
            onChange={(e) => setמספר_בית(e.target.value)}
            required
          />
          <label htmlFor="name">מספרדירה:</label>
          <Input
            style={{ width: "230px" }}
            value={מספר_דירה}
            onChange={(e) => setמספר_דירה(e.target.value)}
            required
          />
          <label htmlFor="name">מספר קווים:</label>
          <Input
            style={{ width: "230px" }}
            value={numberOfLines}
            type="number"
            onChange={(e) => setNumberOfLines(e.target.value)}
            required
          />
          <label htmlFor="name">רווח:</label>
          <Input
            style={{ width: "230px" }}
            value={revenue}
            type="number"
            onChange={(e) => setRevenue(e.target.value)}
            required
          />
          <label htmlFor="name">חבילה:</label>
          <select
            style={{ width: "230px" }}
            value={חבילה}
            onChange={(e) => setחבילה(e.currentTarget.value)}
            required
          >
            <option
              style={{ textAlign: "right", fontLanguageOverride: "revert" }}
              key={1}
              value={"25 ש''ח - 100GB"}
            >
              25 ש''ח - 100GB
            </option>
            <option key={2} value={"28 ש''ח - 150GB"}>
              28 ש''ח - 150GB
            </option>
            <option key={3} value={"עמותה - 12.5 ש''ח - 100GB"}>
              עמותה - 12.5 ש''ח - 100GB
            </option>
            <option key={4} value={"28 ש''ח - 200GB"}>
              28 ש''ח - 200GB
            </option>
            <option key={5} value={"רגיל - 12.5 ש''ח - 100GB"}>
              רגיל - 12.5 ש''ח - 100GB
            </option>
          </select>
          <label htmlFor="name">מספר אשראי:</label>
          <Input
            style={{ width: "230px" }}
            value={מספר_אשראי}
            onChange={(e) => setמספר_אשראי(e.target.value)}
            required
          />
          <label htmlFor="name">תפוגה:</label>
          <Input
            style={{ width: "230px" }}
            value={תפוגה}
            onChange={(e) => setתפוגה(e.target.value)}
            required
          />
          <label htmlFor="name">שלוש ספרות:</label>
          <Input
            style={{ width: "230px" }}
            value={שלוש_ספרות}
            onChange={(e) => setשלוש_ספרות(e.target.value)}
            required
          />
          <label htmlFor="name">מספר טלפון ליצירת קשר:</label>
          <Input
            style={{ width: "230px" }}
            value={מספר_טלפון_ליצירת_קשר}
            onChange={(e) => setמספר_טלפון_ליצירת_קשר(e.target.value)}
            required
          />

          <label htmlFor="name">תאריך:</label>
          <Input
            style={{ width: "230px" }}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            style={{
              width: "230px",
              border: "#6c63ff 1px solid",
              fontWeight: "bold",
              color: "#6c63ff",
              marginTop: "1rem",
            }}
            type="submit"
            value="שלח טופס"
          />
        </form>
      </div>
      <>
        {show && <ModalForCopy list={list} />}
        {show && <SendDataToTheServer customer={list} />}
        <Button onClick={resetForm}>אפס טופס</Button>
      </>
    </>
  );
};

export default AddCustomer;

