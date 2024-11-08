# applikation-kontaktlista
<h3>Uppgifts beskrivning</h3>
<p>En enkel webbaserad kontaktlista byggd med HTML och JavaScript. Denna applikation låter användaren lägga till, redigera och radera kontakter med namn och telefonnummer.</p>

<h3>Användning</h3>

<ol>
<li>Ange ett namn och telefonnummer i respektive fält och klicka på "Skapa ny kontakt".</li>
<li>Kontakten visas i listan nedanför, med knappar för att ändra eller radera.</li>
<li>Klicka på "Radera lista" för att ta bort alla kontakter från listan.</li>
<li>Felmeddelanden visas om något fält är tomt eller om telefonnumret är ogiltigt.</li>
</ol>

<h3>Kodstruktur</h3>
<ol>
<li><b>index.html:</b> Innehåller strukturen för kontaktlistan och input-fält för att skapa kontakter.</li>
<li><b>script.js:</b> Innehåller logiken för att lägga till, redigera, radera och validera kontakter.</li>
</ol>

<h3>PSUDO-KOD</h3>

<p>Lista med kontakter. Dessa kontakter  kan raderas och ändras. Om inte både namn och telefon nummer finns, får användaren ett felmedelande att inte obligatoriska fält är ifyllda.
<br>
Användaren kan lägga till en kontakt som måste innehålla namn och telefon nummer. Om inte både namn och telefon nummer finns, får användaren ett felmedelande att inte obligatoriska fält är ifyllda.
<br>
Användaren kan även radera hela kontakt listan.</p>

<h3>TO DO LIST</h3>
<ul>
    <li>Lägg till HTML element</li>
    <ul>
        <li>input textfält för namn</li>
        <li>input textfält för telefon nummer</li>
        <li>knapp för att lägga till ny kontakt</li>
        <li>knapp för att radera lista</li>
        <li>div för felmedelanden</li>
        <li>Rubrik "kontaktlista"</li>
    </ul>
    <li>JS funktioner</li>
    <ul>
        <li>När användaren fyllt i båda fälten och trycker på knappen - skapas en ny kontakt</li>
        <li>Felmeddelande om inte båda fälten är ifyllda och användaren försöker skapa kontakt</li>
        <li>Lista som visar kontakter</li>
        <li>Möjlighet att redigare existerande kontakt</li>
        <li>Felmedelande om tomt fält när kontakt ska ändras</li>
        <li>Kontaktens textfält är oredigerbara om ej tryckt på ändra knappen</li>
    </ul>
</ul>