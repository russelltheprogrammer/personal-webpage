const DropDownList = (props) => {

    if(props.wordsDescribe) {
    return (
        <div id="dropdownwordlist">
            <p>Problem Solver</p>
            <p>Detail-Oriented</p>
            <p>Reliable</p>
            <p>Professional</p>
            <p>Adaptable and Versatile</p>
            <p>Leader and Listener</p>
            <p>Intellectually Curious</p>
            <p>Organized and Time Management Extraordinaire</p>
        </div>
    )
    }

    else if(props.priorWork) {
        return (
            <div id="dropdownwordlist">
                <p>Millionaire</p>
            </div>
    )
    }
    else if(props.education) {
        return (
            <div id="dropdownwordlist">
                <p>University</p>
            </div>
    )
    }
    else if(props.otherInterests) {
        return (
            <div id="dropdownwordlist">
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