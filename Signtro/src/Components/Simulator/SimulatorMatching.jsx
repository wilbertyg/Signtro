import {useState} from "react";
import {Button, Card, Col, Image, Row, Stack} from "react-bootstrap";
import {ArcherContainer, ArcherElement} from "react-archer";
import "./SimulatorMatching.css";

function SimulatorMatching(labels, images) {
    let [matches, setMatches] = useState([]);
    let [stringifiedMatches, setStringifiedMatches] = useState([]);
    const [selectedLabelIndex, setSelectedLabelIndex] = useState(-1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

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
            return;
        }
        else if (existingMatch && existingMatch.image !== imgIndex) {
            matches = [...matches, {label: lblIndex, image: imgIndex}];
            stringifiedMatches = [...stringifiedMatches, {label: labels[lblIndex], image: images[imgIndex]}];
        }
        else if (!existingMatch) {
            matches.push({label: lblIndex, image: imgIndex});
            stringifiedMatches.push({label: labels[lblIndex], image: images[imgIndex]});
        }

        setSelectedLabelIndex(-1);
        setSelectedImageIndex(-1);

        const matchingData = document.getElementById("matching-data");
        matchingData.textContent = JSON.stringify(stringifiedMatches);
        console.log(stringifiedMatches);
    }

    const resetMatches = () => {
        setMatches([]);
        setStringifiedMatches([]);
        setSelectedLabelIndex(-1);
        setSelectedImageIndex(-1);

        document.getElementById("matching-data").textContent = "";
    }

    return (
        <Card style={{width: '450px'}}>
            <p id="matching-data" className="hidden-element"/>
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

export default SimulatorMatching;