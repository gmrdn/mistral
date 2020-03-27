import React from "react";

const getDirection = degrees => {
  if (degrees < 11.25) {
    return "Nord Est";
  } else if (degrees < 56.25) {
    return "Nord Est";
  } else if (degrees < 101.25) {
    return "Est";
  } else if (degrees < 146.25) {
    return "Sud Est";
  } else if (degrees < 191.25) {
    return "Sud";
  } else if (degrees < 236.25) {
    return "Sud Ouest";
  } else if (degrees < 281.25) {
    return "Ouest";
  } else if (degrees < 326.25) {
    return "Nord Ouest";
  } else if (degrees <= 360) {
    return "Nord";
  }
};

const isMistral = degrees => {
  if (degrees > 280 && degrees < 360) {
    return true;
  } else {
    return false;
  }
};

const isStrong = speed => {
  if (speed > 4.5) {
    return true;
  } else {
    return false;
  }
};

const Demain = props => {
  if (props.isFetching) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm mx-auto" style={{ width: "20rem" }}>
      <h5 className="card-header">Dans les 3 prochaines heures</h5>
      <div className="card-body">
        <h5 className="card-title" id="is_mistral">
          {isMistral(props.data.list[0].wind.deg)
            ? "Y'a du mistral"
            : "Y'a pas de mistral"}
        </h5>
        <p className="card-text" id="deg_today">
          {props.data.list[0].wind.deg} degrés (
          {getDirection(props.data.list[0].wind.deg)})
        </p>
        <h5 className="card-title" id="is_strong">
          {isStrong(props.data.list[0].wind.speed)
            ? "Ca souffle fort"
            : "Ca souffle pas fort"}
        </h5>
        <p className="card-text" id="speed_today">
          {Math.floor((props.data.list[0].wind.speed * 3600) / 1000)} km/h
        </p>
      </div>
    </div>
  );
};

export default Demain;
