      function GenerateContent(raw) {
        console.log(raw);
        var content = JSON.parse(raw);
        console.log(content);
        
        
        
      //  console.log("un contenu a été généré :" + i);
      //var section = document.createElement('section');
      //var header = document.createElement('div');
      //var title = document.createElement('h2');
      //
      //
      // //section.style.backgroundImage = "url('content/img/" + i + ".jpg')";
      // section.style.indexZ = "0"
      // section.className += "box container";
      // //section.style.backgroundSize = "cover";
      // section.style.left = Math.random()*document.getElementById('main').offsetWidth;
      // section.style.top = Math.random()*document.getElementById('main').offsetHeight;
      // section.style.position = "absolute";
      // section.style.height = "200px";
      // section.style.width = "200px";
             //content.title
             //content.description
             //content.content
      //
      // header.className += "header";
      //
      // document.getElementsByTagName('body')[0].appendChild(section);
      //
      //    var arr = ["Hope & Bike", "Figurines imprimées en 3D", "Imprimante prusa I3", "Onewheel", "TreasureBox", "T-shirt Stromtrooper"];
      //    title.innerHTML = arr[i];
            //title.innerHTML += content.title;
      //    aside.style.backgroundImage = "url('content/img/" + i + ".jpg')";
      //    aside.style.backgroundSize = "cover";
      //    console.log(i);

       };

///////////////////////////////////LANCEMENT DE LA GENERATION DES PROJETS//////////////////////////////////////////////     
 var projects = ["figurines3d", "hopeandbike", "imprimanteprusai3", "onewheel", "treasurebox", "tshirtstormtrooper"];       
      
for (var i=0;i<projects.length;i++)
{
  var req = new XMLHttpRequest();
  req.open('GET', 'content/'+ projects[i]+'/textContent.json')
  
  req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            GenerateContent(this.responseText);
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

  req.send();
  
  
 //GenerateContent(i);
}