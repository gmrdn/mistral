import React from "react";
import * as moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

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

const joursDeMistral = forecast => {
  return forecast.list.filter(function(jour) {
    return isMistral(jour.wind.deg) && isStrong(jour.wind.speed);
  });
};

const Prochain = props => {
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
      <h5 className="card-header">Prochain Mistral</h5>
      <div className="card-body">
        <p className="card-text" id="prochain_jour">
          {joursDeMistral(props.data).length > 0
            ? moment(joursDeMistral(props.data)[0].dt_txt).format("LLLL")
            : "Pas de mistral en vue"}
        </p>
      </div>
    </div>
  );
};

export default Prochain;
