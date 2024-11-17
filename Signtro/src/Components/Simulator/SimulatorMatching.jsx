import {useEffect, useState} from "react";
import {Button, Card, Image, Stack} from "react-bootstrap";
import {ArcherContainer, ArcherElement} from "react-archer";
import "./SimulatorMatching.css";

function SimulatorMatching(answer, labels, images) {
    const Content = () => {
        const [matches, setMatches] = useState([]);
        const [stringMatches, setStringMatches] = useState([]);
        const [selectedLabelIndex, setSelectedLabelIndex] = useState(-1);
        const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

        useEffect(() => {
            if (answer !== '') {
                const answerElement = document.getElementById("currentAnswer");
                answerElement.textContent = JSON.stringify(answer);

                let currentMatches = answer;
                setMatches(currentMatches.map(match => ({
                    label: labels.indexOf(match.label),
                    image: images.indexOf(match.image)
                })));
                setStringMatches(currentMatches);
            }
        }, []);

        const selectLabel = (index) => {
            setSelectedLabelIndex(index);
            checkMatch(index, selectedImageIndex);
        }

        const selectImage = (index) => {
            setSelectedImageIndex(index);
            checkMatch(selectedLabelIndex, index);
        }

        const checkMatch = (lblIndex, imgIndex) => {
            if (lblIndex === -1 || imgIndex === -1) {
                return;
            }

            const existingMatch = matches.find(match => match.label === lblIndex);
            if (existingMatch && existingMatch.image === imgIndex) {
                setSelectedLabelIndex(-1);
                setSelectedImageIndex(-1);
            }
            else {
                setMatches([...matches, {label: lblIndex, image: imgIndex}]);
                setStringMatches([...stringMatches, {label: labels[lblIndex], image: images[imgIndex]}]);

                setSelectedLabelIndex(-1);
                setSelectedImageIndex(-1);

                const currentAnswer = document.getElementById("currentAnswer");
                currentAnswer.textContent = JSON.stringify([...stringMatches, {label: labels[lblIndex], image: images[imgIndex]}]);
            }
        }

        const resetMatches = () => {
            setMatches([]);
            setStringMatches([]);

            setSelectedLabelIndex(-1);
            setSelectedImageIndex(-1);

            document.getElementById("currentAnswer").textContent = '';
        }

        return (
            <Card style={{width: '450px'}}>
                <Button variant="secondary" className="squashed-reset-button" onClick={resetMatches}>
                    RESET MATCHES
                </Button>
                <ArcherContainer strokeColor="gray">
                    <Stack direction="horizontal" className="align-items-center justify-content-between" gap={5}
                           style={{padding: '15px 20px'}}>
                        <Stack direction="vertical" className="align-items-center justify-content-center" style={{flex: "none"}} gap={3}>
                            {labels.map((lbl, index) => (
                                <ArcherElement
                                    key={index}
                                    id={`label-${index}`}
                                    relations={matches.filter(match => match.label === index)
                                        .map(selfMatch => ({
                                            targetId: `image-${selfMatch.image}`,
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                        }))}>
                                    <Button
                                        className={`matching-button fs-5 ${selectedLabelIndex === index ? "matching-button-selected" : ""}`}
                                        onClick={() => selectLabel(index)}>
                                        {lbl}
                                    </Button>
                                </ArcherElement>
                            ))}
                        </Stack>
                        <Stack direction="vertical" className="align-items-center justify-content-center" style={{flex: "none"}} gap={3}>
                            {images.map((img, index) => (
                                <ArcherElement
                                    key={index}
                                    id={`image-${index}`}>
                                    <div key={index}
                                         className={`matching-image-box ${selectedImageIndex === index ? "matching-image-box-selected" : ""}`}
                                         onClick={() => selectImage(index)}>
                                        <Image src={"/asset-bulks/hand-signs/" + img} alt="Image" />
                                    </div>
                                </ArcherElement>
                            ))}
                        </Stack>
                    </Stack>
                </ArcherContainer>
            </Card>
        );
    }

    return <Content />
}

export default SimulatorMatching;