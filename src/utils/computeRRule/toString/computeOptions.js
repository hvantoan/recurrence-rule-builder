import {RRule} from 'rrule';

const computeOptions = ({ hideStart, weekStartsOnSunday }) => {
  const options = {};

  // Edit alway has dtstart
  // if (hideStart) {
  //   options.dtstart = null;
  // }

  if (weekStartsOnSunday) {
    options.wkst = RRule.SU;
  }

  return options;
};

export default computeOptions;
