import { useNavigate } from "react-router-dom"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutsContext()
  const navigate = useNavigate()
  const handleClick = async () => {
    const response = await fetch("https://4000-test1883-blogwebsite-920y6lufjef.ws-us101.gitpod.io/api/workouts/" + workout._id, {
      method: "DELETE",
    })
    const json = await response.json()
    if(response.ok) {
      dispatch({type: "DELETE_WORKOUT", payload: json})
    }
  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.updatedAt), {addSuffix: true})}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails