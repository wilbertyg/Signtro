import axios from 'axios';
// const csrfToken = document.cookie.split(';').find(c => c.trim().startsWith('csrftoken=')).split('=')[1];

const ImagePredictionService = async (imageSrc, correctAns) => {
    try {
        const response = await axios.post('http://localhost:8000/api/predict-image/', {
            image: imageSrc,
            ans: correctAns,
        });

        return response.data;
    }
    catch (error) {
        throw error;
    }
};

export default ImagePredictionService;