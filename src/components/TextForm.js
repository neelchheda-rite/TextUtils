import React, {useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleUppercaseClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("Converted to Upper Case", "primary");
    }

    const handleClearText = () => {
        setText('');
        props.showAlert("Text Cleared", "danger");
    }
    const handleLowercaseClick = () => {
        let upperCaseText = text.toLowerCase();
        setText(upperCaseText);
        props.showAlert("Converted to Lower Case", "success");
    }
    // const handleCamelcaseClick=()=>{
    //     let upperCaseText=text._.camelCase();
    //     setText(upperCaseText);
    // }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById("mytextbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard", "secondary");
    }

    const [text, setText] = useState("");
    return (
        <>

            <div>
                <div className="mb-3">
                    <h3>{
                        props.heading
                    }</h3>
                    <textarea className={
                            `form-control ${
                                props.mode === 'light' ? 'text-dark' : 'text-light'
                            }`
                        }
                        value={text}
                        onChange={handleOnChange}
                        id="mytextbox"
                        rows="8"
                        style={
                            {
                                backgroundColor: props.mode === 'light' ? 'white' : '#333A44',
                                color: props.mode === 'light' ? 'black' : 'white'
                            }
                    }></textarea>
                    <button disabled={
                            text.length === 0
                        }
                        type="button"
                        onClick={handleUppercaseClick}
                        className={
                            `btn btn-${
                                props.mode === 'light' ? 'primary' : 'outline-primary'
                            } my-2 mx-1`
                    }>Convert to Uppercase</button>
                    <button disabled={
                            text.length === 0
                        }
                        type="button"
                        onClick={handleLowercaseClick}
                        className={
                            `btn btn-${
                                props.mode === 'light' ? 'primary' : 'outline-success'
                            } my-2 mx-1`
                    }>Convert to LowerCase</button>
                    <button disabled={
                            text.length === 0
                        }
                        type="button"
                        onClick={handleClearText}
                        className={
                            `btn btn-${
                                props.mode === 'light' ? 'primary' : 'outline-danger'
                            } my-2 mx-1`
                    }>Clear Text</button>
                    <button disabled={
                            text.length === 0
                        }
                        type="button"
                        onClick={handleCopy}
                        className={
                            `btn btn-${
                                props.mode === 'light' ? 'primary' : 'outline-secondary'
                            } my-2 mx-1`
                    }>Copy To Clipboard</button>


                </div>
            </div>
            <div className="container">
                <h3>Text Summary</h3>
                <p className='my-2'>
                    {
                    text.split(" ").filter((element) => {
                        return element.length !== 0
                    }).length
                }
                    Word | {
                    text.length
                }
                    Characters</p>
                <h3 className='my-4'>Preview of your Text</h3>
                <p>{
                    text === '' ? "Nothing to preview" : text
                }</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter text to analyze"
}
