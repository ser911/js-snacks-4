// In un array sono contenuti i nomi degli invitati alla festa del
// grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var elencoInviti = ["test-1", "test-2", "test-3", "test-4", "test-5", "test-6", "test-7", "test-8", "test-9", "test-10", "test-11", "test-12", "test-13"];

var invitoValido = prompt("Fornisci il tuo nome");

var accessoAutorizzato = "Puoi entrare";
var accessoNonAutorizzato ="Non puoi entrare";

for (var i = 0; i < elencoInviti.length; i++) {

  if (elencoInviti[i] === invitoValido) {
  console.log(accessoAutorizzato);
  }
}

if (elencoInviti[i] != invitoValido){
  console.log(accessoNonAutorizzato);
}
