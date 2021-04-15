import React, { useCallback } from "react";
import { Col, Row, Alert, Spinner, } from "reactstrap";
import { useDropzone } from "react-dropzone";

import "./PosterUploader.css";

const SeriesCover = ({
  handleVidoeoPoster,
  poster,
  errorMsg,
  video,
}) => {

  const onDrop = useCallback(acceptedFiles => {}, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});
  return (
    <div className="main-upload-container">
      <Row className="mt-3">
        <Col xs="12" xl="12">
          <label>Upload Series Cover Photo</label>
          <div {...getRootProps()} className="text-center file-uploader">
            {poster && poster.length > 0 ? <img src={poster} alt="identity" style={{ width: "100%", height: "100%" }} /> : (
              <>
                <input {...getInputProps()} accept="image/jpg, image/jpeg, image/png" onChange={(e) => handleVidoeoPoster(e)} />
                <i className="ri-folder-reduce-fill"></i>
                {
                  isDragActive ?
                    <p style={{ color: "#00000045",  marginTop: "120px" }}>Drop the files here ...</p> :
                    <p style={{ color: "#00000045", marginTop: "120px" }}>Drag 'n' drop some files here, or click to select files</p>
                }
              </>
            )}
          </div>
          {/* {Array.isArray(errorMsg) && errorMsg.length > 0 ? errorMsg.map((error, i) => error.param === "poster" ? 
            (<><Alert color="danger" key={i} style={{ color: "#ff0000", fontSize: "12px", marginTop: "15px" }}>{error.msg}</Alert> <br /></>) : null): null} */}
        </Col>
      </Row>
      <Row>
        <Col xs="12" xl="10">
          {/* {video.posterLoading ? <Alert color="info">Uploading video poster. Please wait... <Spinner style={{ color: "#F05366" }} /></Alert> : 
          video.posterSuccess ? <Alert color="success">Poster success uploaded</Alert> : null} */}
        </Col>
      </Row>
    </div>
  );
}

export default SeriesCover;