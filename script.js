// Array simple de listas de pelis con url's
var listaPelis = [
    "https://4.bp.blogspot.com/-Oia-iYdUrc4/ViA9dGx3M4I/AAAAAAAAGl8/X7sIjZIOaWU/s1600/cartel-kaze-tachinu-japon.jpg",
    "https://3.bp.blogspot.com/-Mt9xtjJVtBM/VYWgjDTimTI/AAAAAAAAFpc/iSxdLZrxYfU/s1600/2014-marnie-cartel-japon-web.jpg",
    "https://i.pinimg.com/1200x/39/16/42/39164219eaed3057fc6991c591d0a889.jpg",
    "https://3.bp.blogspot.com/-r0IdlX5g44c/W5FkO0uwtqI/AAAAAAAAIuo/dTmMq4JWO9UipG6J2MkeqSvrirFU_tiUgCLcBGAs/s1600/mary-1-cartel-3%2Bespana.jpg",
    "https://www.infobae.com/new-resizer/zHi8h16nzdzouO5Nghfr_kQscbk=/arc-anglerfish-arc2-prod-infobae/public/3RGXZE2DNBFXVLN3FYFW6SOPVY.jpg",
    "https://i.pinimg.com/originals/00/af/24/00af2415b16facfdf90290f5a46fbb41.jpg"
  ];
  
  //Desafío 2: agregue elementos a la lista usando .push
  listaPelis.push(
    "https://i.pinimg.com/originals/69/cc/f4/69ccf4b3cb15a77b297c67a191dcb16d.jpg",
    "https://www.japantimes.co.jp/wp-content/uploads/2014/09/p22-martin-ghibli-books-e-20140921.jpg",
    "https://musicart.xboxlive.com/7/aa355100-0000-0000-0000-000000000002/504/image.jpg",
    "https://musicart.xboxlive.com/7/aa355100-0000-0000-0000-000000000002/504/image.jpg",
    "https://musicart.xboxlive.com/7/aa355100-0000-0000-0000-000000000002/504/image.jpg"
  );
  
  // Array de nombres de peliculas
  var nombrePelis = [
    "El viento se levanta",
    "El recuerdo de Marnie",
    "Ponyo en el acantilado",
    "Mary y la Flor de la Bruja",
    "Kiki Entregas a Domicilio",
    "Susurros del corazón",
    "El Castillo Ambulante",
    "La Princesa Mononoke",
    "El viaje de Chihiro"
  ];
  
  // Array de link de peliculas
  var linksDeVideos = [
    "https://www.youtube.com/watch?v=QrpSt5wZN3c",
    "https://www.youtube.com/watch?v=jjmrxqcQdYg",
    "https://www.youtube.com/watch?v=CsR3KVgBzSM",
    "https://www.youtube.com/watch?v=888z3ku4t3I",
    "https://www.youtube.com/watch?v=4bG17OYs-GA",
    "https://www.youtube.com/watch?v=ywFbbZXMsGs",
    "https://www.youtube.com/watch?v=BCDEOoNYW18",
    "https://www.youtube.com/watch?v=xhh8PzDnhiI",
    "https://www.youtube.com/watch?v=5Fgq4Osh6XQ"
  ];
  
  document.write('<div class="container_todoFilms">');
  
  // Función para mostrar el trailer específico
  function mostrarTrailer(link) {
    window.location.href = link; // Redirige al usuario al trailer de la película en YouTube.
  }
  
  //Desafío 1 - Convertir for en while
  var i = 0;
  var listaFiltrada = [];
  
  while (i < listaPelis.length) {
    // verificar si la imagen ya está en la lista
    if (!listaFiltrada.includes(listaPelis[i])) {
      // agregar peliculas solo si son de formato .jpg, .jpeg
      if (listaPelis[i].endsWith("jpg") || listaPelis[i].endsWith("jpeg")) {
        document.write('<div class="container_filmes">');
        document.write("<img src=" + listaPelis[i] + ">");
        document.write("<p>" + nombrePelis[i] + "</p>");
        // Insertar iframe de YouTube aquí
        document.write(
          "<button onclick=\"mostrarTrailer('" +
            linksDeVideos[i] +
            '\')" class="buttom_trailer">Ver trailer</button>'
        );
  
        //Desafío 4 - Colocar títulos debajo de la imagen
        document.write("</div>");
        // agregar la imagen a la lista filtrada
        listaFiltrada.push(listaPelis[i]);
      } else {
        document.write(
          "<p> La imagen " +
            i +
            " no se leyó porque no es un archivo jpeg o jpg </p>"
        );
      }
    }
    i++;
  }
  document.write("</div>");
  
