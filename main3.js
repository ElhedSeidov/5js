const ages = [NaN, 0, 15, false, -22, '', undefined, 47, null,55,"dd"];
const result = ages.filter(checkAdult);

function checkAdult(element) {
  return element !== null && element !== 0 && element !== '' && element !== false && element !== undefined && !Number.isNaN(element);
}

console.log(result)