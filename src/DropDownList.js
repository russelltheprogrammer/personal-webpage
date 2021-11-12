const DropDownList = (props) => {

    if(props.wordsDescribe && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <div id="words-describe">
                    <p>Problem Solver</p>
                    <p>Detail-Oriented</p>
                    <p>Reliable</p>
                    <p>Professional</p>
                    <p>Adaptable and Versatile</p>
                    <p>Leader and Listener</p>
                    <p>Intellectually Curious</p>
                    <p>Organized and Time Management Extraordinaire</p>
                </div>
            </div>
        )
    }

    else if(props.priorWork && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <p>Millionaire</p>
            </div>
        )
    }
    else if(props.education && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <p>University</p>
            </div>
        )
    }
    else if(props.otherInterests && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <p>Fun</p>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default DropDownList;