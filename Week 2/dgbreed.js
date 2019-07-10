var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          dName = JSON.parse(this.responseText);
          console.log(dName);
          for (i = 0; i < dName.message.length; i++) {
            var x = document.createElement("LI");
            var t = document.createTextNode(dName.message[i]);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x);
            x.addEventListener("click", function(event) {
              console.log(event.target.innerHTML);
              var y = event.target.innerHTML;
              document.getElementById("name").innerHTML = y;
          
              myfunction(y);
            });
          }
        }
      };

      xhttp.open("GET", "https://dog.ceo/api/breeds/list", true);
      xhttp.send();

      function myfunction(item) {
        function reqListener() {
          console.log(this.responseText);
          dName = JSON.parse(this.responseText);
          console.log(dName);
          var r = dName.message;
          document.getElementById("myImg").src = r;
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open(
          "GET",
          "https://dog.ceo/api/breed/" + item + "/images/random"
        );
        oReq.send();
      }