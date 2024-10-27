import {useEffect, useState} from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import SubjectExercise from "../../Components/SubjectExercise.jsx";
import SubjectExerciseQuestion from "../../Components/SubjectExerciseQuestion.jsx";
import data from '../../../db.json';

function SubjectExercisePage() {
    const { exerciseId } = useParams();
    //const { exerciseData, isPending, error } = UseFetch('/subjectExercises/' + exerciseId);
    const exerciseData = data.subjectExercises.find(exercise => exercise.id === parseInt(exerciseId));

    const [searchParams] = useSearchParams();
    let questionId = searchParams.get('questionId');

    let isInProgress = questionId !== null;
    const [pageContent, setPageContent] = useState(isInProgress ? buildQuestionsContent(exerciseData.questionIds, questionId) : buildExerciseContent(exerciseData));

    return (
        <>
            {pageContent}
        </>
    );
}

function buildExerciseContent(exerciseData) {
    // const subjectExerciseData =
    //     {
    //         id: 1,
    //         subjectId: 1,
    //         title: "Exercise 1",
    //         description: "This is the first exercise.",
    //         status: "Available",
    //         difficulty: "Easy",
    //         estimatedTime: 10,
    //         exercisePoints: 10,
    //         questionIds: [1, 2, 3],
    //         prerequisiteExerciseIds: []
    //     };

    let subjectExerciseRendering = new SubjectExercise(exerciseData).render();
    const navigate = useNavigate();

    return (
        <div>
            {subjectExerciseRendering}
            <button style={{ backgroundColor: 'white', borderColor: 'black'}} onClick={() => {
                navigate('?questionId=' + exerciseData.questionIds[0]);
                window.location.reload();
            }}>
                Go!
            </button>
        </div>
    );
}

function buildQuestionsContent(questionIds, questionId) {
    // var questionIds = [1, 2, 3];
    // var exerciseQuestionData = questionId === 1 ? {
    //     id: 1,
    //     subjectExerciseId: 1,
    //     points: 5,
    //     text: "Choose the picture that represents the letter 'A'.",
    //     type: "MultipleChoice",
    //     answerOptions: [
    //         {
    //             text: "A",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         },
    //         {
    //             text: "B",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         },
    //         {
    //             text: "C",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         },
    //         {
    //             text: "D",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         }
    //     ],
    //     correctAnswer: "A",
    //     feedback: "The letter 'A' is represented by the first picture.",
    //     isAnswered: false,
    //     isCorrect: false
    // } : questionId === 2 ? {
    //     id: 2,
    //     subjectExerciseId: 1,
    //     points: 5,
    //     text: "Simulate the hand sign for the letter 'A'.",
    //     type: "SimulationVideo",
    //     answerOptions: [],
    //     correctAnswer: "A",
    //     feedback: "The hand sign for the letter 'A' is formed by making a fist and extending the thumb.",
    //     isAnswered: false,
    //     isCorrect: false
    // } : questionId === 3 ? {
    //     id: 3,
    //     subjectExerciseId: 1,
    //     points: 5,
    //     text: "Match each letter to its corresponding hand sign on the right.",
    //     type: "Matching",
    //     answerOptions: [
    //         {
    //             label: "A",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         },
    //         {
    //             label: "B",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         },
    //         {
    //             label: "C",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         },
    //         {
    //             label: "D",
    //             image: "https://picsum.photos/seed/picsum/90/60"
    //         }
    //     ],
    //     isAnswered: false,
    //     isCorrect: false
    // } : '';

    //const { questionData, isPending, error } = UseFetch('/subjectExerciseQuestions/' + questionIds[0]);
    const questionData = data.subjectExerciseQuestions.find(question => question.id === parseInt(questionId));
    const exerciseQuestionRendering = SubjectExerciseQuestion(questionData);
    const navigate = useNavigate();

    let index = questionIds.indexOf(questionData.id);
    let previousQuestionId = index === 0 ? questionIds[questionIds.length - 1] : questionIds[index - 1];
    let nextQuestionId = index === questionIds.length - 1 ? questionIds[0] : questionIds[index + 1];

    return (
        <div>
            <div className="button-section">
                {questionIds.map((id, index) => (
                    <button
                        key={index}
                        style={{
                            backgroundColor: id === questionData.id ? 'lightblue' : 'white',
                            borderColor: 'black'
                        }}
                        onClick={() => {
                            navigate('?questionId=' + id);
                            window.location.reload();
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {exerciseQuestionRendering}
            <button style={{ backgroundColor: 'white', borderColor: 'black'}} onClick={() => {
                navigate('?questionId=' + previousQuestionId);
                window.location.reload();
            }}>
                Previous
            </button>
            <button style={{ backgroundColor: 'white', borderColor: 'black'}} onClick={() => {
                alert("Saved!");
            }}>
                Save
            </button>
            <button style={{ backgroundColor: 'white', borderColor: 'black'}} onClick={() => {
                navigate('?questionId=' + nextQuestionId);
                window.location.reload();
            }}>
                Next
            </button>
        </div>
    );
}

export default SubjectExercisePage;