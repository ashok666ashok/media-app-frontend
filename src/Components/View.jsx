import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { getAllCategoryAPI, getAllVideosAPI, updateCategory } from "../services/allAPI";

function View({uploadVideoResponse,setdropResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  const [AllVideo, setAllVideo] = useState([]);
  useEffect(() => {
    getAllUploadVideo();
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse]);
  const getAllUploadVideo = async () => {
    const result = await getAllVideosAPI();
    if (result.status === 200) {
      //console.log(result);
      setAllVideo(result.data);
    } else {
      console.log("API Failed");
      setAllVideo([]);
    }
    console.log(AllVideo);
  };

  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDropped=async (e)=>{
    const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData('data'))
    console.log(videoId,categoryId)
    const {data}= await getAllCategoryAPI()
    const selectedCategory=data.find(item=>item.id===categoryId)
    //console.log(selectedCategory.allVideos)

      let result=selectedCategory.allvideo.filter(video=>video.id!==videoId)
    //  console.log(result)
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allvideo:result}
    console.log(newCategory)
    const res=await updateCategory(categoryId,newCategory)
    //console.log(res.data)
    setdropResponse(res)
  }
  return (
    <>
      <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)} className="d-flex gap-3">
        {AllVideo?.length > 0 ? (
          AllVideo.map((video) => (
            <Col  className="m-1" >
              <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
            </Col>
          ))
        ) : (
          <p>nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
