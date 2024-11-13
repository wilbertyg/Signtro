import React from "react"

class Course extends React.Component {
    // Constructor

    constructor(props) {
        super(props);

        this.id = props.id;
        this.name = props.name;
        this.description = props.description;
        this.subjects = props.subjects;
    }

    // Methods

    render() {
        return (
            <div>
                <h1>{this.name}</h1>
                <p>{this.description}</p>
            </div>
        );
    }
}

export default Course;