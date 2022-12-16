// enregister de temps écouler dans un fichier s 
function timefichier(){
    let debut = new Date();
    process.on('SIGINT',function(){
      let fin = new Date();
      let duree = fin.getTime() - debut.getTime();
      dat = `Durée écoulée : ${duree} millisecondes`;
      fs.appendFileSync("doc.json",dat);
      process.exit();
      });
  }
  //affiche le temps écoulee dans la console
  var timeS=0;
  timer= function(){setInterval(count.time,1000);}
  var count ={
    time :function(){
    timeS++;
    console.log(timeS);
  }
  }
  
  module.exports = { timer };
  
  module.exports = { timefichier };
  