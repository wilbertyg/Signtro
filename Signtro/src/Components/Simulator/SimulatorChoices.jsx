import {Image, Stack} from "react-bootstrap";
import './SimulatorChoices.css';
import {useEffect, useState} from "react";

function SimulatorChoices(answer, options) {
    const Content = () => {
        const [currentAnswer, setCurrentAnswer] = useState(answer);

        useEffect(() => {
            if (answer !== '') {
                const answerElement = document.getElementById("currentAnswer");
                answerElement.textContent = answer;
            }
        }, []);

        const setAnswer = (optionText) => {
            const answerElement = document.getElementById("currentAnswer");
            answerElement.textContent = optionText;

            setCurrentAnswer(optionText);
        }

        return (
            <Stack direction="horizontal" className="align-items-center justify-content-evenly" style={{width: '100%'}}>
                {options.map((opt, index) => (
                    <div key={index}
                         className={`answer-option-item ${currentAnswer === opt.text ? "answer-option-selected" : ""}`}
                         onClick={() => setAnswer(opt.text)}>
                        <Image src={"/asset-bulks/hand-signs/" + opt.image} alt="Image"/>
                    </div>
                ))}
            </Stack>
        );
    }

    return <Content />
}

export default SimulatorChoices;