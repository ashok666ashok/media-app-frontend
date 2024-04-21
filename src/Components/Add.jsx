import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { TextField } from "@mui/material";
import { uploadVideoAPI } from "../services/allAPI";

function Add({setUploadvideoResponse}) {
  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: ""
  });
  console.log(uploadVideo)
  const getYtLink=(e)=>{
    let {value}=e.target;
    if(value.includes('v=')){
      let vId=value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vId}`)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vId}`})
    }else{
         setUploadVideo({...uploadVideo,link:''})
    }
  }
  // https://www.youtube.com/watch?v=qeMFqkcPYcg
  // https://www.youtube.com/embed/qeMFqkcPYcg

  const handleUpload =async ()=>{
    const {id,caption,url,link}=uploadVideo;
    if(!id || !caption || !url || !link){
      alert('please fill the empty feilds')
    }else{
      const result = await uploadVideoAPI(uploadVideo)
      if(result.status>=200 && result.status<300){
        handleClose();
        setUploadVideo({
          id: "",
          caption: "",
          url: "",
          link: ""
        })
        setUploadvideoResponse(result.data)
      }else{
        alert(result.message)
      }

    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="upload-btn ">
        <button
          onClick={handleShow}
          className="btn btn-primary"
          style={{ height: "auto" }}
        >
          Upload Vedios<i class="fa-solid fa-upload ms-1"></i>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">Please Fill The Form</p>
          <TextField
            className="m-1"
            fullWidth
            label="Vedio Id"
            id="fullWidth"
            onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}
          />
          <TextField
            className="m-1"
            fullWidth
            label="Video Title"
            id="fullWidth"
            onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}
          />
          <TextField
            className="m-1"
            fullWidth
            label="Image URL"
            id="fullWidth"
            onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}
          />
          <TextField
            className="m-1"
            fullWidth
            label="Video URL"
            id="fullWidth"
            onChange={getYtLink}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Calcel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
