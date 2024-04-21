import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { addToWatchHistoryAPI, deleteVideoAPI } from "../services/allAPI";



function VideoCard({ video ,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //generate data to watchHistory
    const { caption, link } = video;
    let today = new Date();
    let timeStrap=new Intl.DateTimeFormat("es-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    let videoHistory={caption,link,timeStrap}
    await addToWatchHistoryAPI(videoHistory)
  };

  const removeVideo=async (id) =>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log('drag started and video id :'+id,e)
    e.dataTransfer.setData('videoId',id)
  }
  return (
    <>
      <Card style={{ width: "18rem", height: "20rem" }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={video?.url}
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <div className="title-btn-wrapper d-flex justify-content-between align-items-center">
            <Card.Title style={{fontSize:'12px',fontWeight:"900"}}>
              {video?.caption}
            </Card.Title>
            {insideCategory?null:<Button className="btn" onClick={()=>removeVideo(video?.id)}>
              <i class="fa-solid fa-trash"></i>
            </Button>}
          </div>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="w-100"
            width="854"
            height="480"
            src={`${video?.link}?autoplay=1`}
            title="React Full Course for free ⚛️ (2024)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
