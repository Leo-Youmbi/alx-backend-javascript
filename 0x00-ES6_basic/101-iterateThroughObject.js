export default function iterateThroughObject(reportWithIterator) {
  let answerString = '';
  let firstname = true;
  for (const employee of reportWithIterator) {
    // eslint-disable-next-line no-unused-expressions
    firstname ? answerString += employee : answerString += ` | ${employee}`;
    firstname = false;
  }
  return answerString;
}
