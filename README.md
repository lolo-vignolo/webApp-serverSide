**file app.js** es el file que maneja todas las rutas. Alli defino cada una y ademaas determino que file ofolder voy a renderizar.

**Peticiones GET** las respondo usando:
_instancia.get_

**Para leer archivos estaticos** debo usar midleware, uso :
_instancia.use(express.static("path"))_

**prioridades** cuando una ruta publica tiene _instacia.use_ tiene el mismo path que un _instancia.get_ , la ruta publica tiene prioridad.

**crear rutas absolutas**, agregas un (\_\_dirname + "/......" )
cuando uso el "\*" debo ponerlo al final de todos los get o use.

app.get('\*', function (req, res) {
res.sendFile(\_\_dirname + '/public/404.html');
});

**handelbars** te permite renderizar contenido estatico, automaticamente. O sea renderiza como hace next, cuando realizo get initialProps por ejemplo. Directamente se trabaja el estatico en el Back.
