import React from "react";
import axios from "axios";   // ✅ correct axios import
import { useState } from "react";

function App() {

  let [username, setUsername] = useState("");
  let [age, setAge] = useState("");
  let [city, setCity] = useState("");

  async function getRes() {
    // try {
    //   const res = await fetch("http://localhost:3000/");
    //   const data = await res.json();   // await added
    //   console.log(data);               // output will show
    // } catch (error) {
    //   console.log(error);
    // }

    // axios.get("http://localhost:3000")      /// this uses GET method to get data from server
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // ✅ POST request to SEND data to server
axios.post("http://localhost:3000", {
  username,
  age,
  city
})

      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getRes}>Send</button>
    </div>
  );
}

export default App;
