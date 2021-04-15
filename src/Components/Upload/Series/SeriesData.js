import React from "react";
import { Col, Row } from "reactstrap";
import { Form } from "semantic-ui-react";

const SeriesData = ({
  onRemoveTags,
  yearOptions,
  industries,
  genreOptions, 
  maturityRating, 
  tagsState,
}) => {
  return (
    <div>
      
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

      
    </div>
  )
}

export default SeriesData;