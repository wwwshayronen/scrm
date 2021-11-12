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
import e from "cors";

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
      lane: "lane1",
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
  const [draggedCard, setDraggedCard] = useState({});
  const [data, setData] = useState(DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([
    {
      leads: [],
      ongoing: [],
      closedDeal: [],
    },
  ]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    console.log(`data changed!: ${JSON.stringify(data)}`);
  }, [data]);

  const openModal = (cardId, laneId) => {
    setVisible(true);
    setCardLane(laneId);
  };

  const closeModal = () => {
    setVisible(false);
    setCardLane("");
  };

  // GET request to the server to get all user leads
  useEffect(() => {
    async function fetchData() {
      await getData("api/leads")
        .then((res) => res.json())
        .then((data) => {
          console.log(
            `map over response data: ${data.map((lead) => lead.phoneNumber)}`
          );
          console.log(`data from server: ${JSON.stringify(data)}`);
          let arrangeData;

          if (data) {
            console.log(
              "data.map(lead => lead) : ",
              data.map((lead) => lead)
            );
            arrangeData = {
              lanes: [
                {
                  id: 0,
                  title: "Leads",
                  style: { width: 280 },
                  cards: data.map(
                    (lead) =>
                      lead.lane === 0 && {
                        id: lead._id || "",
                        title: lead.name || "",
                        // description: lead.description || "no description",
                        label: "",
                        description: (
                          <>
                            <p>name: {lead.name}</p>
                            <p>Phone number: {lead.phoneNumber}</p>
                            <p>Email: {lead.email}</p>
                            <p>{lead.notes}</p>
                          </>
                        ),
                        draggable: true,
                      }
                  ),
                },
                {
                  id: 0,
                  title: "Ongoing",
                  style: { width: 280 },
                  cards: data.map(
                    (lead) =>
                      lead.lane === 0 && {
                        id: lead._id || "",
                        title: lead.name || "",
                        // description: lead.description || "no description",
                        label: "",
                        description: (
                          <>
                            <p>name: {lead.name}</p>
                            <p>Phone number: {lead.phoneNumber}</p>
                            <p>Email: {lead.email}</p>
                            <p>{lead.notes}</p>
                          </>
                        ),
                        draggable: true,
                      }
                  ),
                },
                {
                  id: 0,
                  title: "Closed Deal",
                  style: { width: 280 },
                  cards: data.map(
                    (lead) =>
                      lead.lane === 0 && {
                        id: lead._id || "",
                        title: lead.name || "",
                        // description: lead.description || "no description",
                        label: "",
                        description: (
                          <>
                            <p>name: {lead.name}</p>
                            <p>Phone number: {lead.phoneNumber}</p>
                            <p>Email: {lead.email}</p>
                            <p>{lead.notes}</p>
                          </>
                        ),
                        draggable: true,
                      }
                  ),
                },
              ],
            };
          }

          console.log(`arrangedData: ${JSON.stringify(arrangeData)}`);
          setData(() => (arrangeData ? arrangeData : DATA));
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);

  // POST request to the server when user add lead
  useEffect(() => {
    if (isUserAddedLead) {
      // arrange data
      const newLead = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        notes: notes,
        lane: laneId,
        userID: user.sub,
      };
      // send new lead to server
      add(newLead);
      console.log("request sent with that data: ", data);
      // reset state
      setName("");
      setEmail("");
      setPhoneNumber("");
      setNotes("");
      setIsUserAddedLead(false);
    }
  }, [
    data,
    email,
    isUserAddedLead,
    laneId,
    name,
    notes,
    phoneNumber,
    user.sub,
  ]);

  // DELETE request to the server when user deleting lead
  // useEffect(() => {
  //   if (isUserDeletedLead) {
  //       // update client data
  //       // const laneNumber = laneOfDeletedLead
  //       // const lead = leadDetailsToDelete
  //       // const leadId = leadId
  //       setData((prevState) => {
  //         const newData = prevState.map((lane) => {
  //           lane.id[laneNumber].cards.filter((card) => card.id !== leadIdToDelete)
  //         })
  //       } )
  //   }
  // }, []);

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

  const handleDeleteCardOnClick = (cardId) => {
    setLeads((prevState) => {
      return prevState.filter((lead) => lead.id !== cardId);
    });
  };

  const saveNewLaneOnDragEnd = (fromLaneId, toLaneId, cardId, index) => {
    console.log("target lane id: ", data, cardId);
    const findLead = data.filter((lead) => lead.id === cardId);
    setLaneId(toLaneId);
    setIsLaneChange(true);
    setDraggedCard(findLead);
  };

  // const handleDataChange = (newData) => {
  //   const arrangeNewData = {
  //     lanesData: newData,
  //     userID: user.sub,
  //     email: user.email,
  //     name: user.name,
  //   };
  //   add(arrangeNewData);
  // };

  const arrangeDataToFitSchema = (changedData) => {
    const iterate = Object.keys(changedData).map((key) => changedData[key]);
    return iterate;
  };

  const handleOnCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
    console.log(fromLaneId, toLaneId, cardId, index);
  };

  // TODO: delete new cards from ccurrent data state (otherwise user cannot add new card)
  const handleCardDelete = (cardId, laneId) => {
    // filter lane cards and remove clicked card
    const filteringCards = data.lanes[laneId].cards.filter((card) => {
      return card.id !== cardId;
    });
    // update state by specific lane cards 
    setData((prevState) => {
      prevState.lanes[laneId].cards = filteringCards;
      return prevState;
    });
    // TODO: handle delete functionality in server
    // send delete request to server to delete card from DB
    deleteLead(cardId);
  };

  return (
    <div>
      <Button onClick={openModal}>Add lead</Button>
      {!isLoading && (
        <Board
          data={data}
          style={{ backgroundColor: "#FDFFFC" }}
          // onCardAdd={openModal}
          // TODO: HANDLE DATA CHANGE BY SENDING TO SERVER
          // onDataChange={handleDataChange}
          onCardMoveAcrossLanes={handleOnCardMoveAcrossLanes}
          onCardDelete={handleCardDelete}
        />
      )}

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
