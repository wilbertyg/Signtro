import {useLocation} from "react-router-dom";
import Error from "../Error/Error.jsx";
import CourseExerciseOverview from "../../Components/Course-Exercise/CourseExerciseOverview.jsx";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import {Container} from "react-bootstrap";
import CourseExerciseQuestion from "../../Components/Course-Exercise/CourseExerciseQuestion.jsx";
import './CourseExercise.css'
import CourseExerciseResult from "../../Components/Course-Exercise/CourseExerciseResult.jsx";

function CourseExercise() {
    const location = useLocation();
    if (location.state === null) {
        return <Error />;
    }

    const {status, question_ids} = location.state;

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid className="flex-grow-1 flex-column justify-content-center">
                <div style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    opacity: 0.5,
                    width: '100%',
                    height: '100vh',
                    zIndex: -1
                }}/>
                <p id="hiddenAnswers" className="hidden-answers"></p>
                {status === "overview" &&
                    new CourseExerciseOverview()
                }
                {status === "questions" &&
                    new CourseExerciseQuestion(question_ids)
                }
                {status === "result" &&
                    new CourseExerciseResult()
                }
            </Container>
        </div>
    )
}

export default CourseExercise;