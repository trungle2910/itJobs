/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Badge, Card, ListGroup, ListGroupItem, Media } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const JobDetail = () => {
  const { id } = useParams();
  let url = `https://my-json-server.typicode.com/trungle2910/jobs-sever/jobs/${id}`;
  const [idJob, setIdJob] = useState({});
  const [tags, setTags] = useState([]);
  const [benefits, setBenefits] = useState([]);
  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setIdJob(data);
        setTags(data.tags);
        setBenefits(data.benefits);
      } catch (error) {
        // alert(error);
      }
    };
    getJobDetail();
  }, [url]);
  return (
    <div className="row mt-2 d-flex justify-content-center">
      <Media className="ListJob">
        <img width={100} height={100} className="ml-3" src={idJob.img} alt="" />
        <Media.Body style={{ marginLeft: "10px" }}>
          <h1>{idJob.title}</h1>
          <h5>{moment(idJob.time).fromNow()}</h5>
          <h5>
            Address: {idJob.city} district {idJob.district}{" "}
          </h5>

          <div>
            <h3>
              Benefits:{" "}
              {benefits.map((item) => {
                return (
                  <Badge
                    pill
                    variant="info"
                    className="mr-3"
                    style={{ fontSize: "15px" }}
                  >
                    {item}
                  </Badge>
                );
              })}
            </h3>
            <p>{idJob.description}</p>
            <div>
              <FontAwesomeIcon
                icon={faTags}
                spin
                className="mr-2 "
                style={{ fontSize: "25px", color: "f54e8e" }}
              />
              {tags.map((item) => (
                <Badge
                  pill
                  variant="info"
                  className="mr-3"
                  style={{ fontSize: "15px" }}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default JobDetail;
