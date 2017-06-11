# Web Agency

## Voraussetzungen
Um dieses Paket zu installieren, benötigst du [Node.js](https://nodejs.org/) und [NPM](https://www.npmjs.com/). Am einfachsten installierst du beides zusammen über den Node.js-Installer, den du auf [nodejs.org](https://nodejs.org/) herunterladen kannst. Nimm doch die neuste Version – ich arbeite auch mit der, dann gibt es am wenigsten Probleme. Upgrade anschliessend NPM über die Kommandozeile.

```
npm install npm -g
```

*Hinweis: Solltest du unter Mac oder Linux arbeiten, musst du möglicherweise das Wort `sudo` vor die Befehle schreiben, um sie mit Administrationsrechten auszuführen.*

Node.js sollte nun in der Version 6.1.0 und NPM in der Version 3.9.0 installiert sein. Überprüfen kannst du das wie folgt:

```
node -v
```

```
npm -v
```

Als Antwort auf die Befehle solltest du `v6.1.0` bzw. `3.9.0` erhalten.

Für ein Tool, das ich dir später erkläre, musst du noch das Command Line Interface global installieren. Gib hierfür folgenden Befehl ein:

```
npm install gulp-cli -g
```

## Installation
Hast du Node.js und NPM erfolgreich installiert, kannst du die benötigten Dependencies herunterladen. Navigiere hierfür in der Kommandozeile in diesen Ordner auf deinem Computer. Zum Beispiel so:

```
cd C:\Users\<username>\GitHub\web-agency
```

Führe anschliessend folgenden Befehl aus, um die Dependencies über NPM herunterzuladen:

```
npm install
```

Fertig. Alle Dependencies sollten in den Ordner `node_modules` heruntergeladen worden sein.

## Komponenten
Für unsere Webseite habe ich einige Bibliotheken und Engines herausgesucht, die das Leben vereinfachen werden. Ich werde sie dir nachfolgend kurz auflisten.

### HTML
Unsere Webseite werden wir nicht in HTML, sondern mithilfe der Template-Engine [Pug.js](http://jade-lang.com/) schreiben – auch bekannt als Jade. Diese hat vor allem zwei Vorteile:

1. Es ist eine Template-Engine. Wiederholende Elemente, wie beispielsweise der Header, können in separate Dateien ausgelagert werden.
2. Die Sprache ist wesentlich minimalistischer, wodurch wir weniger schreiben müssen. Auch bleiben die Dateien übersichtlicher.

### Styles
Die Styles können wir in [Sass](http://sass-lang.com/) (bzw. in SCSS) schreiben. Diese CSS-Erweiterung kennst du ja bereits.

Des Weiteren habe ich ein flexibles Grid-System integriert, es heisst [Susy](http://susy.oddbird.net/). Der Vorteil bei Susy ist, dass *sie* kein fixes Grid vorgibt. Hingegen lassen sich verschiedene Grids direkt in die SCSS-Files importiert.

Auf ein Framework habe ich bewusst verzichtet, da es die ganze Sache meines Erachtens überladen hätte. Mit Sass kommt man derart schnell vorwärts, dass wir die Styles auch selbst effizient schreiben können.

### Scripts
Als Script habe ich zurzeit nur [jQuery](https://jquery.com/) importiert. Sollte wohl auch ausreichen. Und vielleicht benötigen wir die Bibliothek auch gar nicht, dann nehme ich sie wieder raus.

### Fonts
Zurzeit ist lediglich [Font Awesome](http://fontawesome.io/) installiert und zusätzlich habe ich noch Open Sans über [Google Fonts](https://www.google.com/fonts) eingebunden. Letztere lässt sich sehr einfach im Stylesheet auswechseln.

## Workflow
Was jetzt kommt, ist echt cool. Für unseren Workflow – und damit alle Komponenten schön zusammenspielen – verwenden wir [Gulp.js](http://gulpjs.com/) in Kombination mit vielen Plugins. Nachfolgend eine Auflistung der Funktionen, die ich implementiert habe:

- Pug wird zu HTML.
- Sass wird zu CSS.
- Alle CSS- und JS-Dateien werden in jeweils eine Datei zusammengeführt (all.css, all.js).
- Im Entwicklungsmodus werden Sourcemaps für CSS und JS erstellt. Dadurch lassen sich die Zeilen der kompilierten Dateien mit den Originaldateien vergleichen.
- In CSS-Dokumenten werden automatisch Präfixe für sämtliche Browser-Versionen gesetzt, die einen Marktanteil haben, der grösser als ein Prozent ist.
- Im Produktionsmodus wird sämtlicher Code komprimiert.
- Bilder werden komprimiert.
- Es wird ein lokaler Server erstellt und Änderungen werden live synchronisiert.

Wie du vorgehen musst, um von all diesen Funktionen Gebrauch zu machen, zeige ich dir jetzt.

### Ordnerstruktur
Die Ordnerstruktur ist folgendermassen aufgebaut:

```
/web-agency
---- /dist
-------- /css
-------- /fonts
-------- /js
---- /node-modules
---- /src
-------- /assets
------------ /img
------------ /js
------------ /sass
-------- /pages
------------ /layouts
```

#### /dist
Im Ordner `/dist` musst du grundsätzlich nie etwas machen. In diesen Ordner werden schlicht alle Dateien kopiert und kompiliert, die für die veröffentlichte Webseite benötigt werden. Dieser Ordner kommt dem Webseiten-Root gleich.

#### /node-modules
Im Ordner `/node_modules` werden alle Node.js-Module gespeichert, die über NPM installiert wurden. Auch in diesem Ordner musst du grundsätzlich nichts machen.

#### /src
Im Ordner `/src` befinden sich alle Originaldateien. Hier drin werden wir am meisten arbeiten. Im Ordner befinden sich zwei Unterordner: `/src/assets` und `/src/pages`.

Im Ordner `/src/assets` müssen alle SCSS-, JS- und Bild-Dateien in den jeweiligen Unterordner (`/src/assets/sass`, `/src/assets/js` und `/src/assets/img`) gespeichert werden. Aus diesen drei Unterordnern werden schliesslich alle Dateien gesammelt, kompiliert und nach `/dist/css/all.css`, `/dist/js/all.js` bzw. `/dist/img/` kopiert. Die Originaldateien können sich auch in Unter-Unterordnern (beispielsweise `/src/assets/img/portfolio/projekt-xy.jpg`) befinden.

Im Ordner `/src/pages` befinden sich die Pug.js-Seiten. Sie erweitern die Layouts im Unterordner `/src/pages/layouts`. Hier werden aber nur die Datein im Ordner `/src/pages` kompiliert, nicht aber die in den Unterordnern.

### Vorgehen
Wie geht man nun aber bei der Entwicklung vor? So:

Navigiere in der Kommandozeile in den Projektordner. Zum Beispiel:

```
cd C:\Users\<username>\GitHub\web-agency
```

Starte das Gulp.js-Script.

```
gulp watch
```

Die Webseite sollte sich im Firefox öffnen. Ich musste den Browser leider hardcoden, sonst ging es nicht. Alternativ kannst du auch die URL `http://localhost:3000` in einem beliebigen Browser aufrufen. Solange das Script läuft, werden Änderungen im Ordner `/src/` verfolgt und beim Speichern einer Datei automatisch übernommen. Die Webseite im Browser wird aktualisiert.

Möchtest du das Script beenden, musst du in der Kommandozeile die Tastenkombination `Ctrl + C` drücken. Bestätige anschliessend die Frage mit `y`.

Das war's. Have fun! ;)
