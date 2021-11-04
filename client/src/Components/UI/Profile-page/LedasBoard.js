import React, { useEffect, useState, useReducer } from "react";
import "@lourenci/react-kanban/dist/styles.css";
import "./board-style-customization.css";
import { Button, Modal, Input } from "antd";
import Board from "react-trello";
import { add, getData, editLead } from "../../../services/rootServices";
import { useAuth0 } from "@auth0/auth0-react";

const DATA = {
  lanes: [
    {
      id: "applicants",
      title: "Applicants",
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
      id: "interviewed",
      title: "Interviewed",
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
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

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
          const arrangeData = {
            lanes: [
              {
                id: "Leads",
                title: "Leads",
                cards: data.map((lead) => ({
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
                })),
              },
              {
                id: "lane2",
                title: "Completed",
                label: "0/0",
                cards: [],
              },
            ],
            // lanes: [
            //   {
            //     id: "Leads",
            //     title: "Leads",
            //     cards: data.map((lead) => ({
            //       id: lead._id || "",
            //       title: lead.name || "",
            //       description: "test",
            //       label: "",
            //       // description: `(
            //       //           <>
            //       //             <p>name: {lead.name}</p>
            //       //             <p>Phone number: {lead.phoneNumber}</p>
            //       //             <p>Email: {lead.email}</p>
            //       //             <p>{lead.notes}</p>
            //       //           </>
            //       //         )`
            //     })),
            //   },
            // ],
          };
          console.log(`arrangedData: ${JSON.stringify(arrangeData)}`);
          setData(() => arrangeData);
          setIsLoading(false);
          // setLeads(() => {
          //   console.log("data from server: ", data);
          //   return data.map((item, id) => {
          //     return {
          //       _id: item._id,
          //       id: `Card ${id}`,
          //       title: item.leadName,
          //       description: (
          //         <>
          //           <p>name: {item.leadName}</p>
          //           <p>Phone number: {item.leadPhoneNumber}</p>
          //           <p>Email: {item.leadEmail}</p>
          //           <p>{item.leadNotes}</p>
          //         </>
          //       ),
          //       draggable: true,
          //       lane: item.lane,
          //     };
          //   });
          // });
        });
    }
    fetchData();
  }, []);

  // POST request to the server to add new lead data
  useEffect(() => {
    if (isUserAddedLead) {
      // arrange data
      const newLead = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        notes: notes,
        userID: user.sub,
      };
      // send new lead to server
      add(newLead);
      console.log("request sent!");
      // reset state
      setName("");
      setEmail("");
      setPhoneNumber("");
      setNotes("");
      setIsUserAddedLead(false);
    }
  }, [email, isUserAddedLead, name, notes, phoneNumber, user.sub]);

  const handleAddLeadOnClick = () => {
    const isRequiredFieldsFilled = name && (email || phoneNumber);
    if (!isRequiredFieldsFilled) {
      return alert("Please fill lead name, phone number or email");
    } else {
      const index = data.length;
      const newState = data;
      newState.lanes[0].cards[index] = {
        id: `Card ${index}`,
        title: name,
        description: (
          <>
            <p>name: {name}</p>
            <p>Phone number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>{notes}</p>
          </>
        ),
        label: "30 mins",
        lane: "lane1",
        draggable: true,
      };
      console.log(`state before add new lead to data obj: ${JSON.stringify(data)}`);
      setData(newState);
      setIsUserAddedLead(true);
      setVisible(false);
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

  const handleDataChange = (newData) => {
    setData(() => newData);
    setIsLoading(true);
    setIsLoading(false);
  };

  const arrangeDataToFitSchema = (changedData) => {
    const iterate = Object.keys(changedData).map((key) => changedData[key]);
    return iterate;
  };

  const handleOnCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
    console.log(fromLaneId, toLaneId, cardId, index);
  };

  return (
    <div>
      <Button onClick={openModal}>Add lead</Button>
      {/* check if data recived from server. if so, render Board component.*/}
      {!isLoading && (
        <Board
          data={data}
          style={{ backgroundColor: "#FDFFFC" }}
          onCardAdd={openModal}
          // TODO: HANDLE DATA CHANGE BY SENDING TO SERVER
          // onDataChange={() => forceUpdate()}
          onCardMoveAcrossLanes={handleOnCardMoveAcrossLanes}
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
