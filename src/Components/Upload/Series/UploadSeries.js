import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Button, Form } from "semantic-ui-react";

import "./UploadSeries.css";

const UploadSeries = () => {
  const [ years, setYears ] = useState([]);
  const [ tagsState, setTagsState ] = useState([ "Sex", "Dating", "Romance", "Relationship" ]);

  useEffect(() => {
    var max = new Date().getFullYear()
    var min = max - 50
    var years = []
  
    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    setYears(years);
  }, [])
  
  const maturityRating = [
    { key: '9', text: '9+', value: '9+' },
    { key: '13', text: '13+', value: '13+' },
    { key: '16', text: '16+', value: '16+' },
    { key: '18', text: '18+', value: '18+' },
  ]

  const yearOptions = years.map((y, i) => ({ key: i, text: y, value: y }))
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
      <Card>
        <CardBody>
          <Row className="mb-5">
            <Col xs="12" xl="12">
              <p className="series-page-title">Tell us about this series</p>
              <p className="series-second-level-text">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz.</p>
            </Col>
          </Row>
          <Form>
            <Form.Group>
              <Form.Input width="six" fluid label="Series Title" placeholder="Series Title" />
              <Form.Input width="four" fluid label="Studio" placeholder="Studio" />
            </Form.Group>
            <Form.Group>
              <Form.Select className="series-select" width="six" options={maturityRating} fluid label="Maturity Rating" placeholder="Select PG" />
              <Form.Select className="series-select" width="six" options={yearOptions && yearOptions} fluid label="Production Year" placeholder="Select production year" />
              <Form.Select className="series-select" width="six" options={industries} fluid label="Industry" placeholder="Select Industry" />
              <Form.Select className="series-select" width="six" options={genreOptions} fluid label="Genre" placeholder="Select Genre" />
            </Form.Group>
            <div className="mt-3">Tags</div>
            <div className="tags-container mb-3">
              {tagsState.map((t, i) => <span className="tag-span" key={i}>{t} <span onClick={() => onRemoveTags(i)} className="x">x</span></span>)}
            </div>
            <Form.TextArea label="Description" placeholder="The quick, brown fox jumps over a lazy dog." />
            <Form.TextArea label="Casts" placeholder="The quick, brown fox jumps over a lazy dog." />
          </Form>

          <Row>
            <Col xs="6">
              <Button className="cancel-button">Cancel</Button>
            </Col>
            <Col xs="3">
              <Button className="prev-button">Previous</Button>
            </Col>
            <Col xs="3">
              <Button className="next-button">Next</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default UploadSeries;