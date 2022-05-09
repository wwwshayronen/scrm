import React, { useEffect, useState, useReducer } from "react";
import "@lourenci/react-kanban/dist/styles.css";
import "./board-style-customization.css";
import { Button, Modal, Input } from "antd";
import Board from "react-trello";
import {
  add,
  getData,
  editLead,
  deleteLead,
} from "../../../services/rootServices";
import Leads from "./Leads";

const DATA = {
  lanes: [
    {
      id: "leads",
      title: "Leads",
      style: { width: 280 },
      cards: [
        {
          id: "1",
          title: "name",
          description: "notes goes here",
        },
      ],
    },
    {
      id: "ongoing",
      title: "Ongoing",
      style: { width: 280 },
      cards: [],
    },
    {
      id: "closedDeal",
      title: "Closed Deal",
      style: { width: 280 },
      cards: [],
    },
  ],
};

export default function LedasBoard({ user }) {
  const [leads, setLeads] = useState([
    {
      _id: "",
      id: "Card1",
      title: "Write Blog",
      description: "Can AI make memes",
      label: "30 mins",
      draggable: false,
      lane: "leads",
    },
  ]);
  const [ongoing, setOngoing] = useState([
    {
      _id: "",
      id: "Card1",
      title: "Write Blog",
      description: "Can AI make memes",
      label: "30 mins",
      draggable: false,
      lane: "ongoing",
    },
  ]);
  const [closedDeal, setClosedDeal] = useState([
    {
      _id: "",
      id: "Card1",
      title: "Write Blog",
      description: "Can AI make memes",
      label: "30 mins",
      draggable: false,
      lane: "Closed deal",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [cardLane, setCardLane] = useState("");
  const [isLaneChange, setIsLaneChange] = useState(false);
  const [isUserAddedLead, setIsUserAddedLead] = useState(false);
  const [laneId, setLaneId] = useState("");
  const [data, setData] = useState(DATA);
  const [isLoading, setIsLoading] = useState(true);



  const openModal = (cardId, laneId) => {
    setVisible(true);
    setCardLane(laneId);
  };

  const closeModal = () => {
    setVisible(false);
    setCardLane("");
  };

  const handleAddLeadOnClick = () => {
    const isRequiredFieldsFilled = name && (email || phoneNumber);
    setLaneId("leads");
    if (!isRequiredFieldsFilled) {
      return alert("Please fill lead name, phone number or email");
    } else {
      const cardIndex = data.lanes[0].cards.length;
      const newState = data;
      newState.lanes[0].cards[cardIndex] = {
        id: `Card ${cardIndex}`,
        title: name,
        description: (
          <>
            <p>Phone number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>{notes}</p>
          </>
        ),
        label: "30 mins",
        lane: "leads",
        draggable: true,
      };
      console.log(
        `state before add new lead to data obj: ${JSON.stringify(newState)}`
      );
      setData(newState);
      setIsUserAddedLead(true);
      setVisible(false);
      setIsLoading(false);
    }
  };




  return (
    <div>
      <Button onClick={openModal}>Add lead</Button>
        <Leads />
      {/* modal to add leads (board's cards)*/}

      <Modal
        visible={visible}
        onOk={handleAddLeadOnClick}
        onCancel={closeModal}
      >
        <label>Lead name: </label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Lead email: </label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Lead phone number: </label>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Notes: </label>
        <Input value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Modal>
    </div>
  );
}
