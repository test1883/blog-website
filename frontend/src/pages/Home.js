import { useEffect } from "react"

import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async  () => {
      const response = await fetch("https://4000-test1883-blogwebsite-920y6lufjef.ws-us101.gitpod.io/api/workouts")
      const json = await response.json()

      if (response.ok) {
        console.log(json)
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home