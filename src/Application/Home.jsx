import { useState } from "react";
import Background from "../Component/Background/Background";
import Navbar from "../Component/Navbar/Navbar";
import Caloriefood from "../Component/Caloriefood/Caloriefood";
const Home = () => {
    let calorieData = [
        { text1: "Know Your Food", text2: "Love Your Health", text3: "Count Your Calories!" },
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