import React, { useEffect, useState } from "react";
import { Badge, Media } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const JobsList = () => {
  const [jobList, setJobList] = useState([]);
  const [benefit, setBenefit] = useState([]);
  let url = `https://my-json-server.typicode.com/trungle2910/jobs-sever/jobs`;
  let history = useHistory();
  useEffect(() => {
    const getJobsList = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setJobList(data);
        setBenefit(data.benefits);
      } catch (error) {
        console.log("error message", error);
      }
    };
    getJobsList();
  }, [url]);

  return (
    <div>
      <div>
        <h1 className="text-center">IT JOBS FOR YOU</h1>
      </div>
      <div className="row mt-2 d-flex justify-content-center">
        {jobList.map((job) => (
          <Media className="ListJob">
            <div
              className="col-md-3 col-lg-2 d-none d-md-block"
              style={{ padding: "3rem" }}
            >
              <img
                width={100}
                height={100}
                className="ml-3"
                src={job.img}
                alt=""
              />
            </div>
            <div
              class="col-sm-12 col-md-9 col-lg-10"
              style={{ padding: "3rem" }}
            >
              <Media.Body>
                <h5>
                  <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                </h5>
                <p>$ {job.salary}</p>
                <p>
                  {job.benefits.map((item) => (
                    <li>{item}</li>
                  ))}
                </p>
                {job.tags.map((item) => (
                  <Badge pill variant="info" className="mr-1">
                    {item}
                  </Badge>
                ))}
              </Media.Body>
            </div>
          </Media>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
