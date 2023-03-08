const scores = async (url, playername, playerscore) => {
  const displayMsg = document.querySelector('.message');
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: playername,
      score: playerscore,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((Response) => {
      Response.json();
    })

    .catch((error) => {
      displayMsg.innerText = `${JSON.stringify(error)}`;
    });
};

export default scores;