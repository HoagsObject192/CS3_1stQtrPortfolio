process.stdin.on('data', input => {

  let greeting = input.toString().trim();

   // use the greeting variable in your code, and start it on the next line
   console.log(greeting);

   if (greeting === "Hello") {
       console.log("English");
   } else if (greeting === "Mabuhay") {
       console.log("Tagalog");
   } else if (greeting === "Hola") {
       console.log("Spanish");
   } else if (greeting === "Bonjour") {
       console.log("French");
   } else if (greeting === "Ciao") {
       console.log("Italian");
   } else if (greeting === "Zdravstvujte") {
       console.log("Russian");
   } else {
       console.log("Unknown");
   }

  // end of your code
  // do not remove the lines below

  process.exit();

});
