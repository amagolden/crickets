import Card from 'react-bootstrap/Card';
import { CgNotes } from "react-icons/cg";
import { MdOutlineQuestionAnswer, MdOutlineOndemandVideo } from "react-icons/md";


const EmployeeMeeting = ({ id, date, topic }) => {

    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-start">
                        <Card.Text className="mb-0">
                            {topic}
                        </Card.Text>
                        <small className="mt-2 small-text">
                            {date}
                        </small>
                    </div>
                    <div className="vote-buttons">
                        <div className="d-flex mb-2">
                            <button onClick={() => console.log('see poll', id)}><MdOutlineQuestionAnswer /></button>
                            <button onClick={() => console.log('see summary', id)}><CgNotes /></button>
                            <button onClick={() => console.log('see recording', id)}><MdOutlineOndemandVideo /></button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default EmployeeMeeting;