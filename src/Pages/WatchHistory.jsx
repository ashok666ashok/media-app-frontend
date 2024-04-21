import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteWatchHistoryAPI, getWatchHistoryAPI } from "../services/allAPI";


function WatchHistory() {
  const [history,setHistory]=useState([])
  useEffect(()=>{
  getHistory()
  },[])
  const getHistory=async ()=>{
    const result=await getWatchHistoryAPI()
    if(result.status===200){
      setHistory(result.data)
    }else{
      console.log('api failed')
      console.log(result.message)
    }

  }
  const deleteHistory=async (id)=>{
    await deleteWatchHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      <div className="container d-flex justify-content-between mt-5 mb-5">
        <h2>Watch History</h2>
        <Link to={"/home"} style={{ textDecoration: "none" }} className="btn btn-outline-light ">
          <i class="fa-solid fa-arrow-left me-2"></i>Back To Home
        </Link>
      </div>
      <div className="table " style={{display:'grid',placeItems:'center'}}>
        <table className="border table text-center" style={{width:'80dvw'}}>
          <thead className="border">
            <th className="border">#</th>
            <th className="border">Caption</th>
            <th className="border">URL</th>
            <th className="border">Time Strap</th>
            <th className="border">Action</th>
          </thead>
          <tbody>
            {
              history?.length>0?history.map((video,index)=>(
                <tr>
              <td className="border">{index+1}</td>
              <td className="border">{video?.caption}</td>
              <td className="border"><a href={video?.link} target="_blank">{video?.link}</a></td>
              <td className="border">{video?.timeStrap}</td>
              <td className="border">
                <button className="btn" onClick={()=>deleteHistory(video?.id)}><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
              )):<p>Empty Watch History</p>
              }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
