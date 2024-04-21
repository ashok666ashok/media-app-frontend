import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


//upload new videos "POST"
export const uploadVideoAPI=async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

// get all videos
export const getAllVideosAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}

// get a video for play single videio in card
export const getAVideoAPI=async (id)=>{
   return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")
}
 
// add to watch history
export const addToWatchHistoryAPI=async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/watchhistory`,video)
}

// get a video from watch history

export const getWatchHistoryAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/watchhistory`,"")
}

// delete video from watch history
export const deleteWatchHistoryAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/watchhistory/${id}`,{})
}

//delete video 
export const deleteVideoAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}

// add video to category
export const addCategory=async (category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

// get all video from category
export const getAllCategoryAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

// delete Category
export const deleteCategoryAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})

}

// update video to category
export const updateCategory = async (id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}