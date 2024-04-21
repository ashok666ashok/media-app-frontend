import React, { useState } from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import View from "../Components/View";
import Category from "../Components/Category";

function Home() {
  const [dropResponse, setdropResponse] = useState({});
  const [uploadVideoResponse, setUploadvideoResponse] = useState([]);
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between ">
        <div className="add-videos">
          <Add setUploadvideoResponse={setUploadvideoResponse} />
        </div>
        <Link
          to={"/watchhistory"}
          style={{ textDecoration: "none" }}
          className="btn btn-outline-light "
        >
          <i class="fa-solid fa-arrow-right me-1"></i>Watch History
        </Link>
      </div>

      <div className="container d-flex justify-content-between w-100">
        <div className="all-vedios">
          <h2>All-Vedios</h2>
          <View
            uploadVideoResponse={uploadVideoResponse}
            setdropResponse={setdropResponse}
          />
        </div>
        <div className="category" dropResponse={dropResponse}>
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
