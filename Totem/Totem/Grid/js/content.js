      function GenerateContent(i) {
        console.log("un contenu a été généré :" + i);
      var section = document.createElement('section');
      var aside = document.createElement('aside');
      var title = document.createElement('h2');

       //section.style.backgroundImage = "url('content/img/" + i + ".jpg')";
       section.style.indexZ = "0"
       section.className += "box";
       //section.style.backgroundSize = "cover";
       section.style.left = Math.random()*document.getElementById('main').offsetWidth;
       section.style.top = Math.random()*document.getElementById('main').offsetHeight;
       section.style.position = "absolute";
       section.style.height = "200px";
       section.style.width = "200px";
       section.appendChild(title);
       section.appendChild(aside);


       document.getElementsByTagName('body')[0].appendChild(section);

          var arr = ["Hope & Bike", "Figurines imprimées en 3D", "Imprimante prusa I3", "Onewheel", "TreasureBox", "T-shirt Stromtrooper"];
          title.innerHTML = arr[i];
          aside.style.backgroundImage = "url('content/img/" + i + ".jpg')";
          aside.style.backgroundSize = "cover";
          console.log(i);

       };

///////////////////////////////////LANCEMENT DE LA GENERATION DES PROJETS//////////////////////////////////////////////     

       for (i=0;i<=5;i++)
        {
         GenerateContent(i);
        }