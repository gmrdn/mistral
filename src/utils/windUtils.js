export const windUtils = () => {};

export const getDirection = degrees => {
  if (degrees < 11.25) {
    return "Nord";
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

export const isMistral = degrees => {
  if (degrees >= 280 && degrees < 360) {
    return true;
  } else {
    return false;
  }
};

export const isStrong = speed => {
  if (speed > 4.5) {
    return true;
  } else {
    return false;
  }
};
