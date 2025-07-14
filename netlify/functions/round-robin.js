// /netlify/functions/round-robin.js

let counter = 0; // reinicia a cada deploy/restart; para produção, usar Redis ou KV

const attendants = [
  "https://wa.me/5522981307064",
  "https://wa.me/5522981087361",
  "https://wa.me/5522981276734",
  "https://wa.me/5522981276824",
  "https://wa.me/5522981499458",
];

exports.handler = async function(event, context) {
  const nextIndex = counter % attendants.length;
  counter++;

  const redirectUrl = attendants[nextIndex];

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl
    },
    body: ""
  };
};
