module.exports.createKey = async () => {
  let string = Math.floor(Math.random() * (10 ** 18)).toString(36) +
    Math.floor(Math.random() * (10 ** 18)).toString(36) +
    Math.floor(Math.random() * (10 ** 18)).toString(36);
  let urlTest = await getUserFromKey(string);
  if (urlTest !== null) return await CreateUrl();
  return string;
};