import { useEffect, useState } from "react";
import "./styles/App.css";
import Table from "./table/Table";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    state: string;
  };
  gender: string;
  login: {
    username: string;
  };
  picture: {
    thumbnail: string;
  };
}

function App() {
  const [data, setData] = useState<User[]>([]); // För att lagra hämtad data

  useEffect(() => {
    // Hämta data från randomuser.me
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=48"); // Hämta 10 användare
        const jsonData = await response.json();
        setData(jsonData.results); // Sätt den hämtade datan till state
        console.log("Data fetched:", jsonData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const tableData = data.map((user) => ({
    thumbnail: user.picture.thumbnail,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    location: `${user.location.city}, ${user.location.state}`,
    gender: user.gender,
    username: user.login.username,
  }));

  /*   const onDelete = () => {
    console.log("Delete action");
  };

  const onCopy = () => {
    console.log("Copy action");
  };

  const toolbarCtaData = [
    { key: 1, label: "Delete", onClick: onDelete },
    { key: 2, label: "Copy", onClick: onCopy },
  ]; */

  return (
    <div className="app">
      <div className="card-1"></div>
      <div className="card-2">
        <Table
          data={tableData}
          rowHoverColor="#cecece"
          autoGenerateHeaders={true}
          thumbnailClass="my-thumbnail"
          showThumbnails={true}
          horizontalScroll={false}
          toolbar={true}
          toolbarCta={true}
          selectRows={true}
          /*  toolbarCtaData={toolbarCtaData} */
        />
      </div>
    </div>
  );
}

export default App;
