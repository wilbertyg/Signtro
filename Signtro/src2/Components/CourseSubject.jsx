import React from "react"

class CourseSubject extends React.Component {
    // Constructor
    constructor(props) {
        super(props);

        this.id = props.id;
        this.title = props.title;
        this.caption = props.caption;
        this.subjectExerciseId = props.subjectExerciseId;
    }

    // Methods

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.caption}</p>
            </div>
        );
    }
}

export default CourseSubject;