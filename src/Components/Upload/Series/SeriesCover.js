import React, { useCallback } from "react";
import { Col, Row } from "reactstrap";
import { useDropzone } from "react-dropzone";

import "./PosterUploader.css";

const SeriesCover = ({
  handleVidoeoPoster,
  poster,
  // errorMsg,
  // video,
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

      <Row>
        <Col xs="12" xl="12">
          <div className="new-episode-button">
            <Row>
              <Col xs="12" xl="12">
                <p>Season 1</p>
                <p id="episode">2 Episode</p>
              </Col>
            </Row>
            <Row>
              <Col xs="12" xl="8"></Col>
              <Col xs="12" xl="4">
                <Row>
                  <Col xs="4" xl="2" className="delete">Delete</Col>
                  <Col xs="4" xl="3" className="manage">Manage</Col>
                  <Col xs="4" xl="4" className="add">Add new episode</Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SeriesCover;