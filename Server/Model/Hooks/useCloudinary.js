import { v2 as cloudinary } from 'cloudinary';
async function uploading(item) {

    // Configuration
    cloudinary.config({
        cloud_name: 'dwbdkd28k',
        api_key: '984192924678754',
        api_secret: "LkIEG-3XPPFCmzf3bbZm6OuwHho" // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            `${item}`, 
        )
        .catch((error) => {
            console.log(error);
        });
    
   
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(`Shoes`);
    return optimizeUrl
    
}
export default uploading;