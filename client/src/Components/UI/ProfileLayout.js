import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Button } from "antd";
import {
    FolderOutlined,
    UserAddOutlined,
    DatabaseFilled,
    HomeOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import FooterUI from "./FooterUI";
import Profile from "../Profile";

const { Header, Content } = Layout;

export default function ProfileLayout() {
    const [displayForm, setDisplayForm] = useState(false);
    const [displayTable, setDisplayTable] = useState(false);
    const [displayProfileHomePage, setDisplayProfileHomePage] = useState(false);
    const { logout } = useAuth0();

    useState(() => {
        fetch("https://api.trello.com/1/boards/6167d6887ac0497639b8772c?key=140a5ec28bb12cea1577c88e28790277&token=8cf0f148751d89791a58bc396449d5947a0b1155d3eb39d13623c06a20b997bc")
            .then(res => res.json()).then((data) => console.log(`board: ${JSON.stringify(data)}`))
    })

    function handleDisplayProfileHomePage() {
        if (!displayProfileHomePage) {
            setDisplayForm(() => false);
            setDisplayTable(() => false);
            setDisplayProfileHomePage(() => true);
        } else {
            setDisplayProfileHomePage(() => false);
        }
    }

    function handelDisplayForm() {
        if (!displayForm) {
            setDisplayTable(false);
            setDisplayForm(true);
        } else {
            setDisplayForm(false);
        }
    }

    function handelDisplayTable() {
        if (!displayTable) {
            setDisplayForm(false);
            setDisplayTable(true);
        } else {
            setDisplayTable(false);
        }
    }

    return ( <
        >
        <
        Layout style = {
            { minHeight: "100vh", backgroundColor: "#FDFFFC" }
        } >
        <
        Header className = "site-layout-background"
        style = {
            {
                padding: 0,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "30%",
                backgroundColor: "#2B58DE",
            }
        } >
        <
        div style = {
            { fontSize: "1.2rem", marginLeft: "30px" }
        } >
        <
        span style = {
            { color: "white" }
        } > SCRM < /span> <
        FolderOutlined style = {
            { color: "white" }
        }
        /> < /
        div > <
        div style = {
            { marginLeft: "auto", marginRight: "30px" }
        } >
        <
        Button style = {
            {
                fontWeight: "bold",
                fontSize: "1.4rem",
                border: "1px solid rgb(108, 99, 255)",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                width: "55px",
                height: "45px",
                textAlign: "center",
                alignSelf: "center"
            }
        }
        onClick = { handleDisplayProfileHomePage } >
        <
        Link to = "/profile" >
        <
        HomeOutlined / >
        <
        /Link> < /
        Button > <
        Button style = {
            {
                fontWeight: "bold",
                fontSize: "1.4rem",
                border: "1px solid rgb(108, 99, 255)",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                width: "55px",
                height: "45px",
                textAlign: "center",
                alignSelf: "center"
            }
        } >
        <
        Link to = "/profile/add" >
        <
        UserAddOutlined / >
        <
        /Link> < /
        Button >

        <
        Button style = {
            {
                fontWeight: "bold",
                fontSize: "1.4rem",
                border: "1px solid rgb(108, 99, 255)",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                width: "55px",
                height: "45px",
                textAlign: "center",
                alignSelf: "center"
            }
        }
        onClick = { handelDisplayTable } >
        <
        Link to = "/profile/my-customers" >
        <
        DatabaseFilled / >
        <
        /Link> < /
        Button >

        <
        Button style = {
            {
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: "rgb(201, 29, 18)",
                border: "1px solid rgb(108, 99, 255)",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                width: "55px",
                height: "45px",
                textAlign: "center",
                alignSelf: "center"
            }
        }
        onClick = {
            () => logout({ returnTo: window.location.origin })
        } >
        <
        LogoutOutlined / >
        <
        /Button> < /
        div > <
        /Header> <
        Content style = {
            { margin: "0 16px" }
        } >
        <
        div className = "site-layout-background"
        style = {
            { padding: 24, minHeight: 360 }
        } >
        <
        Profile displayForm = { displayForm }
        displayTable = { displayTable }
        displayProfileHomePag = { displayProfileHomePage }
        /> < /
        div > <
        /Content> <
        FooterUI / >
        <
        /Layout> < / >
    );
}