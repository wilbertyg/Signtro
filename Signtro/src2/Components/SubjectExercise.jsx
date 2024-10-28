import React from "react"

class SubjectExercise extends React.Component {
    // Constructor

    constructor(props) {
        super(props);

        this.id = props.id;
        this.subjectId = props.subjectId;
        this.title = props.title;
        this.description = props.description;
        this.status = props.status;
        this.difficulty = props.difficulty;
        this.estimatedTime = props.estimatedTime;
        this.exercisePoints = props.exercisePoints;
        this.questionIds = props.questionIds;
        this.prerequisiteExerciseIds = props.prerequisiteExerciseIds;
    }

    // Methods

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.description}</p>
                <p>Status: {this.status}</p>
                <p>Difficulty: {this.difficulty}</p>
                <p>Estimated time: {this.estimatedTime} minutes</p>
                <p>Exercise points: {this.exercisePoints}</p>
                <p>Number of questions: {this.questionIds.length}</p>
            </div>
        );
    }
}

export default SubjectExercise;