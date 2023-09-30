const GoalDetails = ({goal}) =>{
    return(
        <div className={goal-details}>
            <h4>{goal.text}</h4>
            <p><strong>{goal.user}</strong></p>
        </div>
    )
}

export default GoalDetails