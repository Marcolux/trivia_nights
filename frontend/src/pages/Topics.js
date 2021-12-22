import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Topics = () => {

    const { nameState } = useContext(Context);
    const [ name, setName ] = nameState;

    return (
        <div className="topic">
            <div className="topicImg">Left Image</div>
            <div className="topicRight">
                <h2>Welcome to Team Rocket Trivia, {name}!</h2>
                <p>Which of these topics are you interested in?</p>
                <div className="topicButtons">
                    <button >Music</button>
                    <button >Film</button>
                    <button >Sports</button>
                    <button >General Knowledge</button>
                    <button >Pop Culture</button>
                    <button >History</button>
                    <button >Science</button>
                    <button >Current Events</button>
                </div>
                <div className="topicNextPage">
                    <Link to='/account'>Skip</Link>
                    <Link to='/account'>
                        <button className="buttons">Next</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Topics;