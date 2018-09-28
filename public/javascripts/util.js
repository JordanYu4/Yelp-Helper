export const formInput = form => {
  let inputs = {};
  for (let i = 0; i < form.length; i++) {
    let input = form[i];
    if (input.type === "text") {
      inputs[input.id] = input.value;
    } else if (input.type === "checkbox") {
      inputs[input.value] = input.checked;
    }
  }
  console.log(inputs);
  return inputs;
};

export const minValue = points => {
  if (points.length === 0) return 0;
  let min = points[0].y;
  for (let i = 1; i < points.length; i++) {
    let value = points[i].y;
    if (value < min) min = value;
  }
  return min === 0 ? 0 : Math.floor(min) - 1;
};

export const maxDistance = points => {
  if (points.length === 0) return 25;
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    let distance = points[i].x;
    if (distance > max) max = distance;
  }
  return Math.ceil(max);
};