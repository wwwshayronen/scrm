import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddCustomer from "./AddCustomer";
import TableOfCustomers from "./TableOfCustomers";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import LedasBoard from "./UI/Profile-page/LedasBoard";

const Profile = ({ displayForm, displayTable, displayProfileHomePage }) => {
    // const [displayForm, setDisplayForm] = useState(false);
    // const [displayTable, setDisplayTable] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();
    const location = useLocation();

    const removeAllCharsAtSing = () => {
        const atSign = `@`;
        const removeChars = user.name.split(atSign, 1)[0] || "";

        return `Hey ${removeChars || ""} 👋`;
    };

    if (isLoading) {
        return <div > Loading... < /div>;
    }

    console.log("location.pathname: ", location.pathname);

    return (
        isAuthenticated && ( <
            div style = {
                { minHeight: "100vh" } } > {
                location.pathname === "/profile" && ( <
                    >
                    <
                    h2 > { removeAllCharsAtSing() } < /h2> <
                    RecentActivity >
                    <
                    h3 > Leads: < /h3> <
                    LedasBoard user = { user }
                    /> <
                    /RecentActivity> <
                    />
                )
            } { location.pathname === "/profile/add" && < AddCustomer / > } { location.pathname === "/profile/my-customers" && < TableOfCustomers / > } <
            /div>
        )
    );
};

export default Profile;

const RecentActivity = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;