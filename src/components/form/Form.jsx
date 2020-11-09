import React from "react";

import "./Form.scss";
import {AiFillCloseSquare} from "react-icons/ai";
import {MdAddAPhoto} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {fileAdded, fileRemoved} from "../../store/files";

const Form = () => {

    const hiddenFileInput = React.useRef(null);

    const {files} = useSelector(state => state);

    const dispatch = useDispatch();

    const selectFiles = e => {
        e.preventDefault();

        const selectedFiles = e.target.files;

        if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFiles[i]);
                reader.onload = value => {
                    let file = value.target.result;
                    dispatch(fileAdded(file));
                }
            }
        }
    }

    const handleClick = e => {
        hiddenFileInput.current.click();
    }

    return (
        <div className="form">
            <div className="upload">
                <input type="file" multiple hidden ref={hiddenFileInput} onChange={selectFiles}/>
                <div className="upload-btn">
                    <p>Upload Images:</p>
                    <MdAddAPhoto className="upload-icon" onClick={handleClick}/>
                    <span style={{marginLeft: "20px"}}>Total Image: {files.length}</span>
                </div>
            </div>

            <div className="image-preview-list">
                {
                    files.map((value, index) => {
                        return (
                            <div className="image-card" key={index}>
                                <img src={value} alt=""/>
                                <span>
                                    <AiFillCloseSquare
                                        className="remove-icon"
                                        onClick={() => dispatch(fileRemoved(index))}
                                    />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Form;
