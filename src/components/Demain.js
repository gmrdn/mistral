import React from "react";
import { getDirection, isMistral, isStrong } from "../utils/windUtils";

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
