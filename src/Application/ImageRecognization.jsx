import React, { useState } from "react";
import '../style/ImageRecognization.css';

const ImageRecognization = () => {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null); // To display backend response
    const [loading, setLoading] = useState(false); // To indicate loading state

    const handleImageChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Preview the image
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(selectedFile);

            // Create FormData
            const formData = new FormData();
            formData.append("image", selectedFile);

            try {
                setLoading(true);
                setResult(null); // Clear previous result

                // Send FormData to backend (example URL: http://localhost:5000/api/recognize)
                const response = await fetch("https://mock-api.example.com/food-recognition/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error("Failed to upload image");
                }

                const data = await response.json();
                setResult(data); // Display backend response
            } catch (error) {
                console.error("Error uploading image:", error);
                setResult({ error: "Failed to recognize the image." });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container">
            <h1>Upload Your Food Image</h1>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
            />
            {image && (
                <div className="image-preview">
                    <img src={image} alt="Uploaded food" />
                </div>
            )}
            {loading && <p>Processing your image...</p>}
            {result && (
                <div className="result">
                    {result.error ? (
                        <p className="error">{result.error}</p>
                    ) : (
                        <div>
                            <h2>Recognized Data:</h2>
                            <pre>{JSON.stringify(result, null, 2)}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageRecognization;
