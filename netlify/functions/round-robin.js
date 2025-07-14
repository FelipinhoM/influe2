// /netlify/functions/round-robin.js

let counter = 0; // reinicia a cada deploy/restart; para produção, usar Redis ou KV

const message = encodeURIComponent("Olá Arlênio, quero aprender a te imitar e ganhar 10 mil ainda neste mês.");

const attendants = [
  `https://wa.me/5522981307064?text=${message}`,
  `https://wa.me/5522981087361?text=${message}`,
  `https://wa.me/5522981276734?text=${message}`,
  `https://wa.me/5522981276824?text=${message}`,
  `https://wa.me/5522981499458?text=${message}`
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
