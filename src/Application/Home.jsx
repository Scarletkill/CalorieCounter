import { useState } from "react";
import Background from "../Component/Background/Background";
import Navbar from "../Component/Navbar/Navbar";
import Caloriefood from "../Component/Caloriefood/Caloriefood";
const Home = () => {
    let calorieData = [
        { text1: "Know your food", text2: "love your health", text3:"count your calories!" },
        { text1: "Eat More", text2: "Gain Less" },
    ]
    const [calorieAdd, setCalorieAdd] = useState(0);
    const [playStatus, setPlayStatus] = useState(true);
    return (
        <div>
            <Background playStatus={playStatus} calorieAdd={calorieAdd} />
            <Navbar />
            <Caloriefood
                setPlayStatus={setPlayStatus}
                calorieData={calorieData[calorieAdd]}
                calorieAdd={calorieAdd}
                setCalorieAdd={setCalorieAdd}
                playStatus={playStatus}
            />
        </div>
    )
}
export default Home;