import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Button } from "semantic-ui-react";
import SeriesCover from "./SeriesCover";
import SeriesData from "./SeriesData";

import "./UploadSeries.css";

const UploadSeries = () => {
  const [ years, setYears ] = useState([]);
  const [ tagsState, setTagsState ] = useState([ "Sex", "Dating", "Romance", "Relationship" ]);
  const [ count, setCount ] = useState(1);

  useEffect(() => {
    var max = new Date().getFullYear()
    var min = max - 50;
    var years = [];
  
    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    setYears(years);
  }, []);
  
  const maturityRating = [
    { key: '9', text: '9+', value: '9+' },
    { key: '13', text: '13+', value: '13+' },
    { key: '16', text: '16+', value: '16+' },
    { key: '18', text: '18+', value: '18+' },
  ]

  const yearOptions = years.map((y, i) => ({ key: i, text: y, value: y }));

  const industries = [
    { key: 'b', text: 'Bollywood', value: 'bollywood' },
    { key: 'h', text: 'Hollywood', value: 'hollywood' },
    { key: 'n', text: 'Nollywood', value: 'nollywood' },
  ];

  const genreOptions = [
    { key: 'a', text: 'Action', value: 'action' },
    { key: 'r', text: 'Romance', value: 'romance' },
    { key: 'h', text: 'Horror', value: 'horror' },
    { key: 'l', text: 'Love', value: 'love'},
  ]

  const onRemoveTags = (i) => {
    let newTag = [...tagsState];
    newTag.splice(i, 1);
    setTagsState(newTag);
  }



  return (
    <div>
      <Card id="series-card">
        <CardBody>
          <Row className="mb-5">
            <Col xs="12" xl="12">
              <p className="series-page-title">Tell us about this series</p>
              <p className="series-second-level-text">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz.</p>
            </Col>
          </Row>
          {
            count === 1 ? 
            <SeriesData 
              onRemoveTags={onRemoveTags} 
              yearOptions={yearOptions} 
              industries={industries} 
              genreOptions={genreOptions} 
              maturityRating={maturityRating} 
              tagsState={tagsState}
            /> : 
            count === 2 ? <SeriesCover /> :
            null
          }
          <Row className="mt-5">
            <Col xs="6">
              <Button onClick={() => setCount(count - 1)} className="back-button">Go Back</Button>
            </Col>
            <Col xs="3">
              <Button className="draft-button">Save Draft</Button>
            </Col>
            <Col xs="3">
              {count === 2 ?
              <Button onClick={() => setCount(count + 1)} className="next-button">Upload</Button> :
              <Button onClick={() => setCount(count + 1)} className="next-button">Next</Button>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default UploadSeries;