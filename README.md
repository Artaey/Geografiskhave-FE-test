<img src="https://i.imgur.com/oAEtBup.png?maxwidth=1584&fidelity=grand"></img>

<h1 align="center"> Geografisk Have - Frontend </h1>
<p align="justify">
  Dette er frontend delen af vores projekt, som er skrevet i sammarbejde med Geografisk have i Kolding. Projektet er udarbejdet i forbindelse med vores 2. Semesters eksamensprojekts på UCL's P.Ba i webudvikling. Projektet er et sammenspil mellem uddannelser, hvor vi har fået udleveret et koncept udarbejdet af digitale konceptudviklere, og vi har skulle arbejde sammen med en Økonomi og IT studerende som skulle agere som vores "Product Owner".
<br>
<br>
Projektet er tiltænkt at være en standalone app for Geografisk Have, som skulle bruges som blandt andet en måde at købe billeter på, men også se kommenende events og lave skattejagt for at få en mere interaktiv oplevelse i haven, med en nogle virtuelle mønter som kunne bruges på ting i deres butik. Dog grundet tidsmangel og manglende viden omkring udvikling af apps, er appen lavet om til en PWA (Progressive Web App) som stadig har nogle af de samme features som den originale app skulle have haft.
</p>

<h2 align="center">Teknologier brugt til projektet</h2>
<p align="center">
<a href="https://react.dev" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
</a>
<a href="https://vitejs.dev" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>
</a>
<a href="https://mobx.js.org/README.html" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-MobX-FF9955?style=for-the-badge&logo=mobx&logoColor=white"/>
</a>
<a href="https://axios-http.com/docs/intro" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
</a>
  <a href="https://www.typescriptlang.org" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
</a>
  <a href="https://www.prisma.io" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-Prisma-2D3748?style=for-the-badge&logo=Prisma"/>
</a>
</p>
<h1 align="center">Forudsætninger og brug</h1>
<h3 align="center">Forudsætninger</h3>
<p class="justify">
  For at kunne køre dette projekt, skal du have følgende installeret på din computer:
  <ul>
    <li>Node.js</li>
    <li>NPM</li>
  </ul>
</p>

<h3 align="center">Brug</h3>
<p align="justify">
  For at kunne køre dette projekt, skal du følge disse trin:
  <ol>
    <li>Clone projektet til din computer</li>
    <li>Åben terminalen og naviger til projektets rodmappe</li>
    <li>Skriv `npm install` for at installere alle nødvendige pakker</li>
    <li>Skriv `npm run dev` for at starte projektet</li>
</ol>
</p>

<h1 align="center">ENV Variabler</h1>
<p align="justify">
I projektet gør vi brug af nogle ENV variabler. Disse er nødvendige at være tilstede da vores services bruger dem. For at bruge dem, laves en .env fil i webdock rod mappen med følgende indhold:
</p>

```sh
VITE_API_URL="http://localhost:5000/api/v1/"
```
