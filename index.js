module.exports.getLinksFromMd = function getLinksFromMd(str) {
  const link = new RegExp(/\[\w+\]\((https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z0-9]+)+(\/\w+)*\)/g);
  let markdown = validateParameter(str).match(link);
  return markdown ? markdown = markdown.map(toObject) : markdown = [];
};
function toObject(x) {
  x = x.replace(/\[|\)/g, '').split('](');
  let obj = {href: x[1], text: x[0]};
  return obj;
}
function validateParameter(param) {
  if(param == null) {
    throw new Error('Empty input');
  } else if (typeof(param) !== 'string'){
    throw new TypeError('Not a string');
  }
  return param;
}