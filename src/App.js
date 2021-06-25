// import React, { useState } from "react";
// import Title from "./comps/Title";
// import UploadForm from "./comps/UploadForm";
// import ImageGrid from "./comps/ImageGrid";
// import SinglePic from "./comps/SinglePic";

import React from "react";
import LandingPage from "./comps/LandingPage";
import Navbar from "./comps/Navbar";
import Routes from "./Routes";

function App() {
  // const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Navbar />
      <Routes />

      {/* <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <SinglePic selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
    </div>
  );
}

export default App;
