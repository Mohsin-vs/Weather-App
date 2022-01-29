import { Col, Row } from "antd";
import { FaMapMarkerAlt, FaExclamationCircle } from "react-icons/fa";
import { BsCloudy } from "react-icons/bs";
import { FiDroplet } from "react-icons/fi";
import { TiSocialPinterest } from "react-icons/ti";

const WeatherDetailCard = (props) => {
  const baseProp = props?.location;
  return (
    <div className="WeatherDetialCard-body">
      <h1>Current Weather</h1>
      <Row
        justify="space-between"
        className="WeatherDetialCard-body--inner-container"
      >
        <Col lg={12} sm={24}>
          <p>
            <FaMapMarkerAlt />
            {baseProp?.name}
          </p>
        </Col>
        <Col lg={12} sm={24}>
          <p>
            <span>Lat {baseProp?.lat}</span>,<span>Long {baseProp?.lon}</span>
          </p>
        </Col>
        <Col lg={12} sm={24}>
          <p>
            <FaExclamationCircle />
            {props?.current?.condition?.text}
          </p>
        </Col>
        <Col lg={12} sm={24}>
          <p>
            <FiDroplet />
            {baseProp?.lat}
          </p>
        </Col>
        <Col lg={12} sm={24}>
          <p>
            <TiSocialPinterest />
            {props?.current?.wind_mph}
          </p>
        </Col>
        <Col lg={12} sm={24}>
          <p>
            <BsCloudy />
            {props?.current?.cloud}
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default WeatherDetailCard;
