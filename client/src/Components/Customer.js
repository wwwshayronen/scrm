import React from "react";

const Customer = ({ details }) => {
  if (!details) {
    return null;
  }

  return (
    <>
      <li>שם: {details.שם}</li>
      <li>תז: {details.תז}</li>
      <li>עיר: {details.עיר}</li>
      <li>רחוב: {details.רחוב}</li>
      <li>מספר בית: {details.מספר_בית}</li>
      <li>מספר דירה: {details.מספר_דירה}</li>
      <li>חבילה: {details.חבילה}</li>
      <li>מספר אשראי: {details.מספר_אשראי}</li>
      <li>תפוגה: {details.תפוגה}</li>
      <li>שלוש ספרות: {details.שם}</li>
      <li>מספר טלפון ליצירת קשר: {details.מספר_טלפון_ליצירת_קשר}</li>
    </>
  );
};

export default Customer;
