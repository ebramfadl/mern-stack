import {useEffect, useState} from "react";
import GoalDetails from "../components/GoalDetails";

const Home = () =>{
    const [goals,setGoals] = useState(null)
    useEffect( () => {
        const fetchGoals = async () => {
            const response = await fetch('/api/goal')
            const json = await response.json()
            if (response.ok){
                setGoals(json)
            }
        }
        fetchGoals()
    }, [])

    return(
        <div className={home}>
            <h2>Home</h2>
            <div className={goals}>
                {goals && goals.map(goal => (
                    <GoalDetails goal={goal} key={goal.id} />
                ))}
            </div>
        </div>
    )
}