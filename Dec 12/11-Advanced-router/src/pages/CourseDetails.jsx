import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const {courseInfo, id} = useParams();

  return (
    <div >
        <h3 style={{color: "Orange"}}>CourseDetails Page</h3>
        <h3 style={{color: "White"}}>Course Info: {courseInfo}</h3>
        <h3 style={{color: "Green"}}>Course Id: {id}</h3>
    </div>
  )
}

export default CourseDetails
