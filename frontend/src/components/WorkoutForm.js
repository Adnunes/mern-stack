import { useState } from "react";

const WorkoutForm = () => {
    const [ title, setTitle] = useState('');
    const [ load, setLoad] = useState('');
    const [ reps, setReps] = useState('');
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            
            <label>Exercise Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        
            <label>Exercise Load (in Kg):</label>
            <input type="text" onChange={(e)=>setLoad(e.target.value)} value={load}/>
        
            <label>Exercise Reps:</label>
            <input type="text" onChange={(e)=>setReps(e.target.value)} value={reps}/>
        
        </form>
        
        
    )
};

export default WorkoutForm