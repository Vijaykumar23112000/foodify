import axios from "axios"

const upload_preset = "foodify"
const cloud_name = "dhepou0kc"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloudinary = async (file) => {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', upload_preset)
    // data.append('cloud_name', cloud_name)

    //     const res = await fetch(api_url, { method: "post", body: data })
    //     const fileData = await res.json()
    //     return fileData.url
    
    try {
        const res = await axios.post(api_url, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return res.data.url;
    } catch (error) {
        console.error("Cloudinary Upload Failed:", error);
        throw new Error('Failed to upload image');
    }
}