## USER 🧑‍💻

<session_context>
This is the Gemini CLI. We are setting up the context for our chat.
Today's date is Wednesday, June 3, 2026 (formatted according to the user's locale).
My operating system is: darwin
The project's temporary directory is: /Users/arnobaeck/.gemini/tmp/kamil-web
- **Workspace Directories:**
  - /Users/arnobaeck/Desktop/project-kamil/kamil-web
- **Directory Structure:**

Showing up to 200 items (files + folders). Folders or files indicated with ... contain more items not shown, were ignored, or the display limit (200 items) was reached.

/Users/arnobaeck/Desktop/project-kamil/kamil-web/
├───.gitignore
├───AGENTS.md
├───eslint.config.mjs
├───LICENSE
├───next.config.ts
├───package-lock.json
├───package.json
├───postcss.config.mjs
├───README.md
├───tsconfig.json
├───.git/...
├───.github/
│   └───workflows/
│       └───ci.yml
├───.next/...
├───app/
│   ├───favicon.ico
│   ├───globals.css
│   ├───layout.tsx
│   ├───not-found.tsx
│   ├───page.tsx
│   ├───components/
│   │   ├───Button.tsx
│   │   ├───Features.tsx
│   │   ├───Footer.tsx
│   │   ├───GuideCard.tsx
│   │   ├───GuideHero.tsx
│   │   ├───GuidesExplorer.tsx
│   │   ├───GuideSteps.tsx
│   │   ├───Header.tsx
│   │   ├───Navbar.tsx
│   │   ├───Pagination.tsx
│   │   └───StatsCounter.tsx
│   ├───lib/
│   │   └───guideLoader.ts
│   └───tips-and-guides/
│       ├───page.tsx
│       └───gids/
│           └───[slug]/
│               └───page.tsx
├───content/
│   └───guides/
│       ├───bank-vraagt-nooit-om-code.md
│       ├───belastingdienst-en-phishing.md
│       ├───douanenkosten-betalen-via-link.md
│       ├───een-pakketje-onderweg.md
│       ├───een-sterk-wachtwoord.md
│       ├───fraudehelpdesk-en-instanties.md
│       ├───gemeete-zaken-en-subsidies.md
│       ├───gevaarlijke-tekens-punycode.md
│       ├───hulp-aan-anderen-bieden.md
│       ├───hulp-bij-endentiteitsfraude.md
│       ├───hulp-na-phishing-stap-voor-stap.md
│       ├───hulp-vragen-aan-bekenden.md
│       ├───mijn-overheid-berichtenbox.md
│       ├───mijn-overheid-en-digid.md
│       ├───overal-hetzelfde-wachtwoord.md
│       ├───pas-op-voor-hulp-aan-huis.md
│       ├───spoed-berichten-via-sms-en-whatsapp.md
│       ├───tweestapsverificatie.md
│       ├───valse-apps-voor-pakkettracking.md
│       ├───veilig-inloggen-bij-uw-bank.md
│       ├───veilig-surfen-voor-beginners.md
│       ├───verkeersboetes-en-cjib.md
│       ├───waarom-leeftijd-website-belangrijk.md
│       ├───wachtwoord-vergeten.md
│       ├───wachtwoordmanagers.md
│       ├───wat-is-phishing.md
│       ├───wat-te-doen-bij-fraude.md
│       └───zwarte-lijsten-en-databases.md
├───node_modules/...
└───public/
    ├───file.svg
    ├───globe.svg
    ├───window.svg
    ├───fonts/
    │   ├───open-sans-v44-latin-800.woff2
    │   ├───open-sans-v44-latin-regular.woff2
    │   ├───outfit-v15-latin-900.woff2
    │   └───outfit-v15-latin-regular.woff2
    └───images/
        ├───kamil_404.webp
        ├───kamil_white.svg
        ├───kamil-homepage.webp
        └───kamil.svg


</session_context>

---

## USER 🧑‍💻

Kan jij voor mij door al mijn guides gaan in @content/guides/** en ze wat uitgebreider uitschrijven? Ik wil ook nog een guide hebben die gaat over specifiek mijn AI model dat ik gemaakt heb voor Kamil, het is de bedoeling dat je de blog posts of gewoon kan lezen via de website. Of dat je via de extensie die ik gemaakt heb gestuurd wor dnaar een blog post om te lezen wat Kamil zojuist heeft gedetecteerd en hoe ze dit in het vervolg kunnen voorkomen. Nog even over mijn AI model: deze maakt gebruik van teintalle parameters op een wiskundige berekening/inschatting te maken of een URL veilig is of niet.
--- Content from referenced files ---
Content from @content/guides/bank-vraagt-nooit-om-code.md:
---
title: "De gouden regel: Uw bank vraagt nooit om uw pincode"
description: "Waarom een bank nooit via een link of telefoon naar uw geheime codes zal vragen."
category: "BANKZAKEN"
icon: "🏦"
date: "2026-05-14"
---

Het is de belangrijkste regel bij het online bankieren: uw bank zal u nooit, maar dan ook nooit, vragen om uw pincode, inlogcodes of response-codes via een e-mail, SMS of telefoontje.

## 1. Waarom vragen ze dit niet?

Uw bank heeft deze gegevens simpelweg niet nodig om u te helpen. De systemen van de bank zijn zo gebouwd dat medewerkers uw geheime codes nooit hoeven te weten. Zodra iemand erom vraagt, weet u direct dat u met een oplichter te maken heeft.

> **Tip van Kamil**
> "Twijfelt u of een bericht van uw bank komt? Hang op of sluit de mail, en bel zelf naar het officiele nummer van uw bank. Gebruik nooit het nummer dat in het verdachte bericht staat!"

## 2. De druk van de 'vervallen' bankpas

Oplichters gebruiken vaak het smoesje dat uw bankpas is verouderd of dat er een beveiligingslek is. Ze proberen u onder druk te zetten om snel te handelen. Laat u niet opjagen; een echte bank neemt de tijd om zaken officieel en veilig te regelen via hun eigen beveiligde postbus.
Content from @content/guides/belastingdienst-en-phishing.md:
---
title: "Berichten van de belastingdienst en valse e-mails"
description: "Hoe u echte berichten van de belastingdienst onderscheidt van phishing."
category: "OVERHEID"
icon: "🏛️"
date: "2026-05-14"
---

De belastingdienst (zoals de Belastingdienst in Nederland of de FOD Financiën in België) is een geliefd doelwit voor oplichters. Iedereen krijgt ermee te maken, en berichten over geld terugkrijgen of openstaande schulden wekken direct emotie op.

## 1. De belastingdienst stuurt nooit betaallinks via SMS

Krijgt u een SMS of WhatsApp-bericht namens de belastingdienst met een link om direct te betalen of uw rekeningnummer te verifiëren? Verwijder dit bericht direct. De overheid communiceert officieel via de post of uw digitale brievenbus op uw overheidsportaal (zoals MijnOverheid of Mijn Burgerprofiel).

> **Tip van Kamil**
> "Twijfelt u over een belastingbericht? Log zelf veilig in op het officiële portaal van de belastingdienst via hun officiële website. Gebruik nooit de link in een e-mail of SMS."

## 2. Check de afzender

Oplichters gebruiken e-mailadressen die lijken op de echte, maar vaak eindigen op vreemde domeinen. Kamil scant deze domeinen op hun leeftijd en echtheid. Als een 'overheids-site' pas gisteren is aangemaakt, trekt Kamil aan de bel.
Content from @content/guides/douanenkosten-betalen-via-link.md:
---
title: "Douanekosten betalen via een link? Pas extra goed op"
description: "Waarom u voorzichtig moet zijn met berichten over invoerrechten voor uw online bestelling."
category: "PAKKETJES"
icon: "🛃"
date: "2026-05-14"
---

Wanneer u iets bestelt van buiten de Europese Unie, kunt u te maken krijgen met invoerrechten of douanekosten. Dit is een moment waarop oplichters vaak toeslaan met valse betaalverzoeken.

## 1. Hoe betaalt u veilig voor uw pakket?

Officiële instanties en grote bezorgdiensten hebben veilige portalen voor dit soort betalingen. Krijgt u echter een SMS of e-mail met een directe betaallink (vaak naar een vage website)? Dan is de kans groot dat het om oplichting gaat.

> **Tip van Kamil**
> "Betrouwbare bedrijven gebruiken websites die al jaren bestaan. Als ik zie dat een 'betaalpagina' voor douanekosten pas enkele dagen oud is, laat ik u dat direct weten!"

## 2. Gebruik officiële apps van bezorgdiensten

De veiligste manier om uw pakketjes te volgen en eventuele kosten te betalen, is via de officiële app van de bezorgdienst zelf. Vermijd het klikken op knoppen in e-mails die u vragen om ergens in te loggen of gegevens achter te laten.
Content from @content/guides/een-pakketje-onderweg.md:
---
title: "Een pakketje onderweg? Zo herkent u valse bezorgberichten"
description: "Leer hoe u echte verzendinformatie onderscheidt van phishingberichten over pakketjes."
category: "PAKKETJES"
icon: "📦"
date: "2026-05-14"
---

Het is tegenwoordig heel normaal om spullen online te bestellen. Oplichters weten dit ook en sturen massaal berichten die lijken te komen van bekende bezorgdiensten.

## 1. De druk van de 'mislukte bezorging'

Een veelgebruikte truc is een bericht waarin staat dat een bezorging is mislukt of dat er nog verzendkosten betaald moeten worden. Er wordt vaak gedreigd dat het pakketje anders wordt teruggestuurd. Laat u niet opjagen; officiële bezorgdiensten vragen u bijna nooit om direct via een link in een SMS te betalen.

> **Tip van Kamil**
> "Krijgt u een onverwacht bericht over een pakket? Klik niet op de link, maar ga zelf naar de website waar u iets besteld heeft om de status te controleren. Zo omzeilt u de valstrik van de oplichter!"

## 2. Controleer de link in het bericht

Kijk goed naar het internetadres in het bericht. Oplichters gebruiken namen die lijken op die van echte postbedrijven, maar met een kleine spelfout of een vreemde extensie. Kamil scant deze adressen razendsnel op hun leeftijd en technische echtheid om u te waarschuwen.
Content from @content/guides/een-sterk-wachtwoord.md:
---
title: "Een sterk wachtwoord: Zo simpel kan het zijn"
description: "Ontdek hoe u een wachtwoord maakt dat makkelijk te onthouden is, maar onmogelijk te raden."
category: "WACHTWOORD"
icon: "🔑"
date: "2026-05-14"
---

Veel mensen denken dat een sterk wachtwoord een ingewikkelde reeks van tekens moet zijn. Maar voor een computer is een lang wachtwoord veel moeilijker te kraken dan een kort, ingewikkeld wachtwoord.

## 1. De kracht van de wachtzin

In plaats van één woord, kunt u beter een korte zin gebruiken. Denk aan iets geks zoals "DeBlauweKoffiePot2026!". Het is voor u makkelijk te onthouden als beeld, maar voor een kwaadwillende computer duurt het eeuwen om dit te raden.

> **Tip van Kamil**
> "Gebruik geen namen van kinderen, kleinkinderen of huisdieren. Criminelen kunnen deze informatie vaak simpel vinden via sociale media. Kies liever een zin die alleen u kent!"

## 2. Waarom Kamil meekijkt

Kamil helpt u door u te waarschuwen wanneer u op een onveilige website bent waar u uw wachtwoord liever niet invult. Door de echtheid van de site te controleren, zorgen we dat uw geheime zin ook echt geheim blijft.
Content from @content/guides/fraudehelpdesk-en-instanties.md:
---
title: "Waar kunt u terecht voor officiële hulp?"
description: "Een overzicht van instanties in de Benelux en Europa die u ondersteunen bij digitale fraude."
category: "HULP"
icon: "🏢"
date: "2026-05-14"
---

Naast uw bank en de politie zijn er gespecialiseerde organisaties die u kunnen helpen wanneer u te maken krijgt met oplichting of twijfels heeft over een website.

## 1. Centrale meldpunten

Zowel in Nederland als België bestaan er centrale fraudehelpdesks en meldpunten voor cybercriminaliteit. Deze instanties bieden een luisterend oor, geven advies over de te nemen stappen en houden bij welke nieuwe trucs oplichters gebruiken.

> **Tip van Kamil**
> "Twijfelt u over een website? Naast het raadplegen van officiële instanties, scant Kamil de site direct op technische onregelmatigheden zoals DNS-leeftijd en Punycode."

## 2. Preventie is de beste hulp

Veel van deze organisaties bieden ook trainingen of nieuwsbrieven aan. Door uzelf te informeren via betrouwbare bronnen, bouwt u een digitale weerbaarheid op.
Content from @content/guides/gemeete-zaken-en-subsidies.md:
---
title: "Subsidie van de gemeente? Pas op voor 'bemiddelaars'"
description: "Hoe u voorkomt dat u op valse gemeentelijke websites uw gegevens achterlaat."
category: "OVERHEID"
icon: "🏘️"
date: "2026-05-14"
---

Soms ziet u advertenties of krijgt u berichten over energiecompensatie of lokale subsidies waarbij u direct uw gegevens moet invullen op een website die van de gemeente lijkt te zijn.

## 1. Officiële domeinnamen

Websiteadressen van gemeenten eindigen bijna altijd op .nl of .be en bevatten de naam van de stad. Pas op voor varianten zoals 'gemeente-loket-subsidie.com'. Dit zijn vaak commerciële partijen die uw gegevens willen doorverkopen of u willen oplichten.

> **Tip van Kamil**
> "Ga voor zaken met de gemeente altijd naar de website waarvan u de naam kent (bijvoorbeeld uwgemeente.nl of uwgemeente.be) en zoek daar naar de informatie, in plaats van op een link in een advertentie te klikken."

## 2. Kamil ziet hoe oud de site is

Gemeentelijke websites bestaan al heel lang. Kamil waarschuwt u als de site waarop u bent pas een week oud is. Dat is voor een officiële overheidsinstantie zeer ongebruikelijk.
Content from @content/guides/gevaarlijke-tekens-punycode.md:
---
title: "Lijkt de link echt? Pas op voor letters met een fopneus"
description: "Wat is Punycode en hoe gebruiken criminelen letters uit andere alfabetten om u te misleiden."
category: "BASIS"
icon: "🔍"
date: "2026-05-14"
---

Kunt u het verschil zien tussen de letter 'o' en de Griekse letter 'ο'? Voor het menselijk oog lijken ze identiek, maar voor een computer zijn ze totaal verschillend. Dit trucje noemen we 'Punycode' oplichting.

## 1. Hoe een kleine letter een groot probleem wordt

Wanneer u op zo'n link klikt, denkt u dat u veilig op uw vertrouwde site bent. Uw browser vertelt u echter een ander verhaal als u heel goed kijkt. In plaats van de normale letters, staat er in de code van de website vaak iets heel vreemds met streepjes en nummers.

Dit wordt gebruikt om:
* Uw vertrouwde bankomgeving na te bootsen.
* U te laten geloven dat u op een officiele overheidswebsite bent.
* Wachtwoorden te stelen zonder dat u het doorheeft.

> **Tip van Kamil**
> "Vertrouw niet alleen op uw ogen! Criminelen zijn meesters in vermommingen. Kamil scant de techniek achter de letters, zodat u zich geen zorgen hoeft te maken over vreemde tekens."

## 2. Hoe Kamil u hierbij helpt

Het is voor een mens bijna onmogelijk om elke letter van een URL te controleren op echtheid. Kamil doet dit gelukkig razendsnel voor u. Kamil herkent deze 'gekmakerij' met letters en waarschuwt u direct voordat uw gegevens gestolen zijn.
Content from @content/guides/hulp-aan-anderen-bieden.md:
---
title: "Hoe u anderen in uw omgeving kunt helpen"
description: "Word een digitale ambassadeur en help vrienden en kennissen veilig te blijven op het internet."
category: "HULP"
icon: "🤝"
date: "2026-05-14"
---

Nu u zelf steeds meer weet over phishing en online veiligheid, kunt u een belangrijke rol spelen voor de mensen om u heen die misschien minder digitaal vaardig zijn.

## 1. Deel uw kennis, niet uw angst

Waarschuw vrienden als u een verdacht bericht heeft ontvangen, maar doe dit op een rustige manier. Leg uit waaróm het bericht vals is (bijvoorbeeld door de vreemde URL of het gebrek aan een echt slotje).

> **Tip van Kamil**
> "Samen maken we het internet veiliger. Hoe meer mensen Kamil gebruiken, hoe sneller we nieuwe frauduleuze websites kunnen ontdekken en blokkeren voor iedereen!"

## 2. Kamil aanbevelen

Een van de makkelijkste manieren om iemand te helpen, is door hen te wijzen op hulpmiddelen die het werk voor hen doen. De Kamil-extensie is ontworpen om onopvallend op de achtergrond te beschermen.
Content from @content/guides/hulp-bij-endentiteitsfraude.md:
---
title: "Identiteitsfraude: Wat te doen als uw naam misbruikt wordt"
description: "Hulp en advies bij het herstellen van uw digitale identiteit na diefstal van persoonlijke gegevens."
category: "HULP"
icon: "👤"
date: "2026-05-14"
---

Soms stelen oplichters niet direct geld, maar uw persoonlijke gegevens (zoals uw naam, geboortedatum of identiteitsnummer) om op uw naam aankopen te doen of leningen af te sluiten.

## 1. Signalen van misbruik

Krijgt u facturen voor producten die u niet besteld heeft? Of post over leningen die u niet kent? Dan is er mogelijk sprake van identiteitsfraude. Neem direct contact op met het Centraal Meldpunt Identiteitsfraude in uw land.

> **Tip van Kamil**
> "Deel nooit foto's van uw identiteitsbewijs via WhatsApp of e-mail zonder gevoelige informatie zoals uw identificatienummer (zoals BSN of rijksregisternummer) af te schermen."

## 2. Blokkeer uw documenten

Als u vermoedt dat uw paspoort of ID-kaart gegevens zijn gestolen, moet u dit melden bij uw gemeente. Zij kunnen het document ongeldig laten verklaren om verder misbruik te voorkomen.
Content from @content/guides/hulp-na-phishing-stap-voor-stap.md:
---
title: "Slachtoffer geworden? Geen paniek, volg dit stappenplan"
description: "Een praktische gids over wat u direct moet doen als u per ongeluk op een verkeerde link heeft geklikt."
category: "HULP"
icon: "🆘"
date: "2026-05-14"
---

Het overkomt de allerbesten: u klikt op een link, vult uw gegevens in en beseft een seconde later dat het foute boel is. Op dat moment is snelheid belangrijker dan spijt.

## 1. Directe schadebeperking

De eerste stap is altijd contact opnemen met de instantie waarvan de gegevens gestolen zijn. Is het uw bankpas of inlogcode? Bel de bank. Is het uw wachtwoord van een e-mail? Verander dit direct op een veilige computer.

> **Tip van Kamil**
> "Heeft u Kamil? Deel de verdachte website met ons via de extensie. Zo helpt u mee om anderen te waarschuwen voordat zij in dezelfde val lopen."

## 2. Documenteer wat er is gebeurd

Maak schermafbeeldingen of foto's van het bericht en de website waar u op terechtkwam. Dit helpt de autoriteiten bij het onderzoek en kan nodig zijn voor uw verzekering of bank om schade te herstellen.
Content from @content/guides/hulp-vragen-aan-bekenden.md:
---
title: "Hoe vraagt u veilig hulp aan uw (klein)kinderen?"
description: "Tips voor het overleggen met familie over digitale veiligheid zonder uw privacy te verliezen."
category: "HULP"
icon: "👨"
date: "2026-05-14"
---

Digitale veiligheid kan ingewikkeld zijn. Het is heel normaal om hulp te vragen aan kinderen, kleinkinderen of buren die handiger zijn met computers. Maar hoe doet u dat veilig?

## 1. Samen kijken, niet weggeven

Vraag uw helper om u uit te leggen wat ze doen, in plaats van dat ze het even snel voor u 'fixen'. Zo leert u de signalen zelf ook herkennen. Geef nooit zomaar uw hoofdwachtwoorden af, maar typ ze zelf in terwijl de ander meekijkt.

> **Tip van Kamil**
> "Maak van digitale veiligheid een gespreksonderwerp bij de koffie. Door ervaringen te delen, worden we samen sterker tegen internetcriminaliteit."

## 2. Installeer samen bescherming

Een mooie manier om hulp te vragen is door samen de Kamil-extensie te installeren. Laat hen zien hoe het werkt. Het geeft zowel u als uw familie een gerust gevoel dat er een extra beveiligingslaag aanwezig is.
Content from @content/guides/mijn-overheid-berichtenbox.md:
---
title: "De digitale brievenbus: Uw veilige haven voor overheidspost"
description: "Waarom de digitale brievenbus de enige plek is waar u overheidsinformatie echt moet vertrouwen."
category: "OVERHEID"
icon: "📩"
date: "2026-05-14"
---

De veiligste manier om met de overheid te communiceren is via uw digitale brievenbus op uw overheidsportaal (zoals MijnOverheid of Mijn Burgerprofiel). Dit is een afgesloten systeem waar oplichters niet bij kunnen.

## 1. E-mail als notificatie, niet als brief

Als er nieuwe post voor u is, krijgt u een e-mail van uw overheidsportaal (zoals MijnOverheid of Mijn Burgerprofiel). In deze mail staat nooit de inhoud van het bericht en ook geen directe link naar het document. Er staat alleen dat u moet inloggen op de website.

> **Tip van Kamil**
> "Door Kamil te gebruiken, wordt u beschermd tegen websites die uw digitale brievenbus proberen na te maken. Ik zie het verschil tussen de echte mijn.overheid.nl of .be en een slimme kopie!"

## 2. Bullet points voor veiligheid

* Krijgt u een mail met een bijlage namens de overheid? Open deze nooit.
* Wordt u in een mail gevraagd om op een knop te drukken om een document te lezen? Doe dit niet.
* Ga altijd handmatig naar de website van uw overheidsportaal.
Content from @content/guides/mijn-overheid-en-digid.md:
---
title: "Veilig inloggen op uw overheidsportaal met uw digitale identiteit"
description: "Waarom u uw inloggegevens voor uw digitale identiteit (zoals DigiD of itsme) nooit mag delen en hoe u de echte site herkent."
category: "OVERHEID"
icon: "🆔"
date: "2026-05-14"
---

Uw digitale identiteit (zoals DigiD of itsme) is uw digitale identiteitsbewijs. Hiermee regelt u zaken met de gemeente, de zorgverzekeraar en de overheid. Het is dus goud waard voor criminelen.

## 1. Geef nooit uw inlogcodes aan anderen

Geen enkele officiële instantie zal u vragen om uw inloggegevens (zoals gebruikersnaam of wachtwoord van DigiD of itsme) te delen via telefoon, e-mail of chat. Ook niet onder het mom van een 'beveiligingsupdate'.

> **Tip van Kamil**
> "Gebruik de officiële app van uw digitale identiteit (zoals de DigiD-app of itsme) op uw telefoon. Dit is veel veiliger dan inloggen via een website-link die u via e-mail hebt ontvangen."

## 2. Let op Punycode bij inlogpagina's

Criminelen maken soms inlogpagina's na die er precies zo uitzien als de echte inlogomgeving van uw digitale identiteit. Kamil controleert of de letters in de adresbalk wel echt zijn en niet stiekem uit een ander alfabet komen om u te foppen.
Content from @content/guides/overal-hetzelfde-wachtwoord.md:
---
title: "Overal hetzelfde wachtwoord? Waarom dat gevaarlijk is"
description: "Leer waarom het hergebruiken van wachtwoorden het grootste risico is op het internet."
category: "WACHTWOORD"
icon: "🔄"
date: "2026-05-14"
---

Het is verleidelijk om voor elke website hetzelfde wachtwoord te gebruiken. Het is immers makkelijk te onthouden. Maar als één website gehackt wordt, hebben dieven direct de sleutel tot al uw accounts.

## 1. Het domino-effect

Zodra criminelen uw e-mailadres en wachtwoord buitmaken bij bijvoorbeeld een kleine webshop, gaan ze dit direct proberen bij banken, overheidsites en sociale media. Eén lek kan zo al uw digitale deuren openen.

> **Tip van Kamil**
> "Heeft u een vermoeden dat uw gegevens ergens gelekt zijn? Pas uw belangrijkste wachtwoorden direct aan. Snel handelen is de beste bescherming!"

## 2. Prioriteiten stellen

U hoeft niet voor elk onbenullig account een uniek wachtwoord te hebben, maar doe dit wel voor uw belangrijkste zaken: uw e-mail, uw bank en uw overheidsaccount (zoals uw digitale identiteit (zoals DigiD of itsme) of uw overheidsportaal (zoals MijnOverheid of Mijn Burgerprofiel)).
Content from @content/guides/pas-op-voor-hulp-aan-huis.md:
---
title: "Bankpas-service aan huis? Trap er niet in!"
description: "Waarschuwing tegen oplichters die zich voordoen als bankmedewerkers en uw pas komen ophalen."
category: "BANKZAKEN"
icon: "🏠"
date: "2026-05-14"
---

Er is een nieuwe vorm van oplichting waarbij 'bankmedewerkers' aan de deur komen om uw bankpas op te halen omdat deze zogenaamd onveilig is of vervangen moet worden.

## 1. Een bank komt nooit bij u thuis

Uw bank zal nooit een medewerker naar uw huis sturen om uw bankpas, pincode of waardevolle spullen op te halen. Ook niet als er zogenaamd 'fraude' is gedetecteerd op uw rekening. Dit is altijd een truc van criminelen.

> **Tip van Kamil**
> "Wordt u gebeld door de bank met het bericht dat er iemand langskomt? Vertrouw het niet. Hang direct op en bel zelf uw bank op hun bekende nummer."

## 2. Knip uw oude pas altijd door

Als u een nieuwe pas krijgt, vraagt de bank u meestal om de oude pas zelf door te knippen. Doe dit altijd door de goudkleurige chip heen. Geef de pas nooit mee aan iemand aan de deur, wie ze ook beweren te zijn.
Content from @content/guides/spoed-berichten-via-sms-en-whatsapp.md:
---
title: "berichtjes van 'de bank' of 'uw kind': Wat u moet weten"
description: "Herken phishing via WhatsApp en SMS, ook wel smishing genoemd."
category: "BANKZAKEN"
icon: "📱"
date: "2026-05-14"
---

Criminelen gebruiken steeds vaker SMS of WhatsApp om u te benaderen. Ze doen zich voor als uw bank of soms zelfs als een bekende (zoals een kind of kleinkind) die dringend geld nodig heeft.

## 1. Betaalverzoeken via een linkje

Krijgt u een linkje via een bericht om een 'openstaande boete' of 'factuur' te betalen? Klik er niet op. Ga naar de officiële website van de betreffende instantie of de app van uw bank om te zien of er echt iets openstaat.

> **Tip van Kamil**
> "Banken sturen u nooit linkjes via SMS om direct in te loggen of betalingen te doen. Zie de Kamil-extensie als uw extra paar ogen die zulke links direct scant op onraad."

## 2. Hulpvraag-fraude (vriend-in-nood)

Soms krijgt u een bericht: 'Hey mama, ik heb een nieuw nummer en ik kan niet bij mijn bankieren app. Kun je even helpen met een betaling?' Bel de persoon altijd eerst op hun *oude* nummer voordat u ook maar iets onderneemt.
Content from @content/guides/tweestapsverificatie.md:
---
title: "Tweestapsverificatie: Een extra slot op de deur"
description: "Waarom alleen een wachtwoord soms niet genoeg is en hoe u een extra beveiliging toevoegt."
category: "WACHTWOORD"
icon: "🛡️"
date: "2026-05-14"
---

Zelfs met een sterk wachtwoord is een extra beveiliging verstandig. Dit noemen we tweestapsverificatie: u logt in met uw wachtwoord én een code die u bijvoorbeeld op uw telefoon krijgt.

## 1. Hoe werkt het in de praktijk?

Wanneer u inlogt op een nieuw apparaat, vraagt de website om een extra bevestiging. Dit kan een code via SMS zijn of een druk op een knop in een app. Voor een dief is dit een enorme hindernis, want zij hebben uw telefoon niet.

> **Tip van Kamil**
> "Gebruik waar mogelijk een app in plaats van SMS voor deze extra codes. Dit is nog veiliger tegen onderschepping door criminelen. Kamil raadt dit vooral aan voor uw e-mail en bankzaken!"

## 2. Kamil als extra controleur

Kamil scant de websites waar u deze codes invult. Zo voorkomen we dat u per ongeluk uw extra beveiligingscode afgeeft op een nagemaakte website van oplichters.
Content from @content/guides/valse-apps-voor-pakkettracking.md:
---
title: "Valse apps voor pakkettracking: De verborgen gevaren"
description: "Waarom u nooit zomaar een app moet installeren via een link in een tekstbericht."
category: "PAKKETJES"
icon: "📲"
date: "2026-05-14"
---

Soms proberen criminelen u niet naar een website te lokken, maar willen ze dat u een app installeert om uw pakketje te kunnen 'volgen'. Dit kan zeer gevaarlijk zijn voor uw telefoon en uw bankgegevens.

## 1. Installeer nooit apps via een SMS-link

Een officiële bezorgdienst zal u nooit vragen om een app te downloaden via een losse link in een bericht. Deze 'foute' apps kunnen meekijken met wat u typt, inclusief uw wachtwoorden en codes voor bankieren.

> **Tip van Kamil**
> "Download apps alleen via de officiële winkels op uw telefoon (zoals de Play Store of App Store). Kamil helpt u ondertussen door websites te blokkeren die proberen schadelijke software op uw apparaat te zetten."

## 2. Wat als u toch iets heeft geïnstalleerd?

Heeft u na een bericht over een pakketje een nieuwe app op uw telefoon staan die u niet vertrouwt? Zet uw telefoon direct uit en roep de hulp in van een expert of een handig familielid om de software veilig te verwijderen.
Content from @content/guides/veilig-inloggen-bij-uw-bank.md:
---
title: "Veilig inloggen: Hoe u zeker weet dat u op de echte bank-site bent"
description: "Tips om de echte website van uw bank te herkennen en valse sites te vermijden."
category: "BANKZAKEN"
icon: "🔒"
date: "2026-05-14"
---

Wanneer u uw bankzaken online regelt, wilt u er 100% zeker van zijn dat u uw gegevens niet aan een vreemde geeft. Oplichters maken websites die tot in het kleinste detail lijken op de site van uw bank.

## 1. Let op het slotje en de adresbalk

Een echte bank-website begint altijd met 'https://' en heeft een gesloten hangslotje in de adresbalk. Maar let op: tegenwoordig kunnen ook valse websites zo'n slotje hebben. Daarom is het controleren van de naam (de URL) nog belangrijker.

> **Tip van Kamil**
> "Sla de website van uw bank op in uw 'Favorieten' of 'Bladwijzers'. Zo hoeft u de naam niet telkens te typen en weet u zeker dat u altijd op de juiste plek terechtkomt."

## 2. Kamil controleert de echtheid

Omdat het voor ons lastig is om te zien of een 'o' stiekem een ander teken is, doet Kamil dit voor u. Kamil kijkt naar de techniek achter de website en de leeftijd van de pagina. Een echte bank-site bestaat al jaren, een valse site vaak pas een paar uur.
Content from @content/guides/veilig-surfen-voor-beginners.md:
---
title: "Veilig online: 3 simpele gewoontes voor elke 50-plusser"
description: "Praktische tips om uw online veiligheid direct te verhogen."
category: "BASIS"
icon: "🌟"
date: "2026-05-14"
---

Het internet is een prachtige plek vol informatie en contact. Met een paar goede gewoontes kunt u er met een gerust hart gebruik van maken.

## 1. Neem de tijd

Oplichters willen dat u haast heeft. Ze sturen berichten die u dwingen om 'nu' te reageren. Onthoud goed: een bank of de overheid zal u nooit vragen om binnen een uur via een linkje iets te regelen.

> **Tip van Kamil**
> "Maak van veiligheid een gewoonte. Gebruik mij als uw digitale gids die over uw schouder meekijkt. Samen zorgen we ervoor dat dieven geen kans maken!"

## 2. Gebruik hulpmiddelen zoals de Kamil-extensie

U hoeft het niet alleen te doen. Wat Kamil voor u doet:
* Controleren of de website al lang bestaat.
* Kijken of er geen stiekeme letters in de naam staan.
* Checken of de site bekend staat als onveilig.
Content from @content/guides/verkeersboetes-en-cjib.md:
---
title: "Een boete van de overheid? Kijk eerst goed naar de link"
description: "Herken valse boetes en aanmaningen van justitiële incassodiensten."
category: "OVERHEID"
icon: "👮"
date: "2026-05-14"
---

Schrikken van een boete is menselijk, en daar maken oplichters misbruik van. Ze sturen valse e-mails namens justitiële incassodiensten (zoals het CJIB in Nederland of de FOD Financiën in België) met de dreiging van een verhoging als u niet direct betaalt.

## 1. De overheid vraagt nooit om betaling via een link

In een echte mail van een officiële instantie staat nooit een link waarmee u direct kunt betalen. U krijgt meestal een brief per post of in uw digitale brievenbus met informatie over hoe u via uw eigen bankomgeving kunt betalen.

> **Tip van Kamil**
> "Criminelen gebruiken vaak zwarte lijsten met bekende valse domeinen. Kamil blokkeert deze sites automatisch voor u, zodat u niet per ongeluk op een nep-betaalpagina terechtkomt."

## 2. Controleer het dossiernummer

Heeft u een bericht ontvangen? Log in op de officiële website van de betreffende instantie met uw digitale identiteit (zoals DigiD of itsme) om te controleren of er echt een boete openstaat. Staat er niets? Dan was het bericht vals.
Content from @content/guides/waarom-leeftijd-website-belangrijk.md:
---
title: "Nieuwe website? Waarom de leeftijd van een site u beschermt"
description: "Ontdek waarom Kamil kijkt naar hoe oud een website is en waarom een 'jonge' site vaak een risico betekent."
category: "BASIS"
icon: "📅"
date: "2026-05-14"
---

Wanneer u een fysieke winkel binnenstapt die al 30 jaar in uw dorp staat, vertrouwt u die zaak waarschijnlijk direct. Op het internet werkt dat precies hetzelfde. Betrouwbare websites van banken of grote webshops bestaan vaak al jaren.

## 1. De techniek achter de schermen: DNS-records

Elke website heeft een geboortedatum, vastgelegd in zogenaamde DNS-records. Dit is een soort digitaal paspoort. Kamil controleert dit paspoort automatisch voor u. Als een website die beweert van een grote bekende webshop te zijn pas twee uur geleden is aangemaakt, dan weet Kamil direct: hier klopt iets niet!

> **Tip van Kamil**
> "Als ik zie dat een website pas net is opgericht, geef ik u een seintje. Wees extra voorzichtig met het invullen van gegevens op sites die nog maar heel kort bestaan!"

## 2. Wat kunt u zelf doen?

U hoeft zelf gelukkig geen technische expert te worden. Het is al voldoende om alert te zijn bij websites die u nog nooit heeft gezien.

Belangrijk om zelf te controleren:
* Lijkt de aanbieding te mooi om waar te zijn?
* Wordt er gevraagd om DIRECT actie te ondernemen?
* Klopt uw buikgevoel niet helemaal?
> Volg dan uw buikgevoel en vul je gegevens hier niet in en verlaat de website.
Content from @content/guides/wachtwoord-vergeten.md:
---
title: "Wachtwoord vergeten? Geen paniek"
description: "Wat u moet doen als u niet meer kunt inloggen en hoe u veilig uw toegang herstelt."
category: "WACHTWOORD"
icon: "❓"
date: "2026-05-14"
---

Het overkomt iedereen wel eens: u weet uw wachtwoord niet meer. Gelukkig is er bijna altijd een veilige manier om weer toegang te krijgen tot uw account.

## 1. De link 'Wachtwoord vergeten'

Bijna elke website heeft een knop met 'Wachtwoord vergeten'. Als u daarop klikt, krijgt u een e-mail met een link om een nieuw wachtwoord in te stellen. Doe dit alleen als u hier zélf om heeft gevraagd.

> **Tip van Kamil**
> "Krijgt u onverwacht een e-mail om uw wachtwoord te wijzigen terwijl u niets heeft gedaan? Klik dan nergens op! Dit is een bekende phishingtruc om uw account over te nemen."

## 2. Herstelopties instellen

Zorg dat uw herstel-e-mailadres en telefoonnummer in uw accounts altijd up-to-date zijn. Dit zijn uw hulplijnen voor als het een keer misgaat.
Content from @content/guides/wachtwoordmanagers.md:
---
title: "Wachtwoordmanagers: Uw digitale kluis uitgelegd"
description: "Geen briefjes meer naast de computer: zo onthoudt u al uw wachtwoorden veilig."
category: "WACHTWOORD"
icon: "🗄️"
date: "2026-05-14"
---

Wachtwoorden opschrijven op een briefje of in een boekje is niet ideaal. Als u uw wachtwoorden digitaal opslaat in een 'kluis', hoeft u er nog maar één te onthouden.

## 1. Wat is een wachtwoordmanager?

Dit is een programma of app die al uw wachtwoorden versleuteld bewaart. U hoeft alleen nog maar het 'hoofdwachtwoord' te onthouden om toegang te krijgen tot de rest. Veel browsers hebben dit tegenwoordig ook al ingebouwd.

> **Tip van Kamil**
> "Vraagt u hulp aan een bekende bij het instellen van zo'n kluis? Zorg dat u het hoofdwachtwoord altijd zelf kiest en voor uzelf houdt. Zo blijft u de enige baas over uw eigen digitale kluis!"

## 2. Veiligheid boven alles

Een wachtwoordmanager kan ook zelf sterke wachtwoorden voor u bedenken. U hoeft ze niet eens meer zelf te verzinnen of te typen; de kluis vult ze automatisch voor u in op de juiste websites.
Content from @content/guides/wat-is-phishing.md:
---
title: "Wat is phishing precies? Leer hoe criminelen u proberen te foppen"
description: "Een duidelijke uitleg over de basis van phishing en hoe u de eerste signalen van digitale oplichting herkent."
category: "BASIS"
icon: "🎣"
date: "2026-05-14"
---

Phishing is een van de meest voorkomende vormen van internetcriminaliteit. Het woord komt van het Engelse 'fishing' (vissen). Criminelen gooien als het ware een hengeltje uit in de hoop dat u 'hapt'. Maar in plaats van een visje, proberen ze uw persoonlijke gegevens, wachtwoorden of bankgegevens te vangen.

## 1. Hoe herkennen we een phishingpoging?

Oplichters worden steeds slimmer, maar ze maken vaak dezelfde fouten. Ze sturen u een e-mail of SMS met een link. Als u daarop klikt, komt u op een website die precies lijkt op die van uw bank, maar dat in werkelijkheid niet is.

Let vooral op deze signalen:
* Dringende verzoeken: "Uw account wordt geblokkeerd als u niet nu handelt!"
* Vreemde afzenders: Het e-mailadres ziet er net niet helemaal goed uit.
* Taalfouten: Alhoewel dit steeds minder voorkomt, zijn vreemde zinsconstructies een rode vlag.

> **Tip van Kamil**
> "Krijgt u een bericht dat u niet vertrouwt? Klik nooit op de link, maar ga zelf naar de officiële website van het bedrijf door de naam handmatig in te typen in uw browser. Zo weet u zeker dat u veilig bent!"

## 2. Wat is het doel van de oplichters?

Het einddoel is bijna altijd geld. Soms willen ze direct toegang tot uw bankrekening, maar soms verzamelen ze eerst informatie over u om later identiteitsfraude te plegen. Ze willen dat u in paniek raakt, want wie paniekerig is, let minder goed op de details.

Kamil kijkt gelukkig met u mee. Door te controleren of een website wel echt is (bijvoorbeeld door te kijken hoe lang een site al bestaat), kan Kamil u waarschuwen voordat u uw gegevens invult op een gevaarlijke plek.
Content from @content/guides/wat-te-doen-bij-fraude.md:
---
title: "Toch geklikt of gegevens ingevuld? Geen paniek, handel direct"
description: "Een stappenplan voor als het onverhoopt toch misgaat bij het bankieren."
category: "BANKZAKEN"
icon: "🚨"
date: "2026-05-14"
---

Het kan de beste overkomen: u bent moe, afgeleid en voor u het weet heeft u toch op een verkeerd linkje geklikt of uw gegevens ingevuld. Het belangrijkste is om dan rustig te blijven en direct actie te ondernemen.

## 1. Stap 1: Bel direct uw bank

Zoek het noodnummer van uw bank op (dit staat vaak op de achterkant van uw bankpas) en bel direct. Zij kunnen uw rekeningen en passen direct blokkeren om verdere schade te voorkomen.

> **Tip van Kamil**
> "Heeft u Kamil geïnstalleerd? Dan verkleint u de kans dat u op de verkeerde plek terechtkomt aanzienlijk. Maar als u twijfelt, is 'niets doen' en 'even bellen' altijd de veiligste keuze!"

## 2. Stap 2: Doe aangifte bij de politie

Internetfraude is een misdrijf. Door aangifte te doen, helpt u de politie om criminelen op te sporen en kunt u soms aanspraak maken op een vergoeding van de schade via uw bank.
Content from @content/guides/zwarte-lijsten-en-databases.md:
---
title: "De kracht van samenwerking: Hoe zwarte lijsten u beschermen"
description: "Uitleg over hoe Kamil bekende gevaarlijke websites blokkeert."
category: "BASIS"
icon: "🛡️"
date: "2026-05-14"
---

Soms is een boef al bekend bij de politie voordat hij opnieuw toeslaat. Op het internet werkt dat ook zo. Er zijn wereldwijde lijsten van websites waarvan we 100% zeker weten dat ze onveilig zijn.

## 1. Twee soorten beveiliging

Kamil werkt met een dubbele databank om u zo goed mogelijk te beschermen:
1. Wereldwijde databanken: Miljoenen websites gemarkeerd door experts.
2. Eigen databank: Kamil leert zelf bij en voegt nieuwe phishing-sites direct toe aan onze eigen lijst.

> **Tip van Kamil**
> "Ziet u een waarschuwing dat een site op de zwarte lijst staat? Verlaat de website dan direct. Het is het risico niet waard, hoe echt de site er ook uitziet!"

## 2. Waarom is dit nodig?

Criminelen verhuizen hun praktijken constant. Door gebruik te maken van actuele lijsten, loopt u altijd een stapje voor. Het is als een buurtpreventie-app, maar dan voor het hele internet.
--- End of content ---

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "update_topic",
  "args": {
    "strategic_intent": "I will research the existing guides and prepare a plan to expand them, while also designing the new AI model guide.",
    "title": "Expanding Guides & AI Model Introduction",
    "summary": "I am starting the process of expanding the current guides and creating a new one about Kamil's AI model. I will first verify the list of existing guides and then proceed to rewrite them with more detail and create the new guide as requested."
  },
  "id": "update_topic__update_topic_1780504562452_0"
}
```**Tool Command**:
```json
{
  "name": "list_directory",
  "args": {
    "dir_path": "content/guides/"
  },
  "id": "list_directory__list_directory_1780504562455_1"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "update_topic__update_topic_1780504562452_0",
  "name": "update_topic",
  "response": {
    "output": "Current topic: \"Expanding Guides & AI Model Introduction\"\nTopic summary: I am starting the process of expanding the current guides and creating a new one about Kamil's AI model. I will first verify the list of existing guides and then proceed to rewrite them with more detail and create the new guide as requested.\n\nStrategic Intent: I will research the existing guides and prepare a plan to expand them, while also designing the new AI model guide."
  }
}
```**Tool Response**:
```json
{
  "id": "list_directory__list_directory_1780504562455_1",
  "name": "list_directory",
  "response": {
    "output": "Directory listing for /Users/arnobaeck/Desktop/project-kamil/kamil-web/content/guides:\nbank-vraagt-nooit-om-code.md (1210 bytes)\nbelastingdienst-en-phishing.md (1284 bytes)\ndouanenkosten-betalen-via-link.md (1180 bytes)\neen-pakketje-onderweg.md (1288 bytes)\neen-sterk-wachtwoord.md (1135 bytes)\nfraudehelpdesk-en-instanties.md (1038 bytes)\ngemeete-zaken-en-subsidies.md (1141 bytes)\ngevaarlijke-tekens-punycode.md (1428 bytes)\nhulp-aan-anderen-bieden.md (1035 bytes)\nhulp-bij-endentiteitsfraude.md (1093 bytes)\nhulp-na-phishing-stap-voor-stap.md (1071 bytes)\nhulp-vragen-aan-bekenden.md (1089 bytes)\nmijn-overheid-berichtenbox.md (1252 bytes)\nmijn-overheid-en-digid.md (1226 bytes)\noveral-hetzelfde-wachtwoord.md (1147 bytes)\npas-op-voor-hulp-aan-huis.md (1067 bytes)\nspoed-berichten-via-sms-en-whatsapp.md (1120 bytes)\ntweestapsverificatie.md (1085 bytes)\nvalse-apps-voor-pakkettracking.md (1188 bytes)\nveilig-inloggen-bij-uw-bank.md (1202 bytes)\nveilig-surfen-voor-beginners.md (990 bytes)\nverkeersboetes-en-cjib.md (1231 bytes)\nwaarom-leeftijd-website-belangrijk.md (1456 bytes)\nwachtwoord-vergeten.md (970 bytes)\nwachtwoordmanagers.md (1082 bytes)\nwat-is-phishing.md (1869 bytes)\nwat-te-doen-bij-fraude.md (1086 bytes)\nzwarte-lijsten-en-databases.md (1087 bytes)"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "app/lib/guideLoader.ts"
  },
  "id": "read_file__read_file_1780504565591_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780504565591_0",
  "name": "read_file",
  "response": {
    "output": "import fs from \"fs\";\nimport path from \"path\";\n\nconst guidesDirectory = path.join(process.cwd(), \"content/guides\");\n\nexport interface GuideData {\n\tslug: string;\n\ttitle: string;\n\tdescription: string;\n\tcategory: string;\n\ticon?: string;\n\tdate: string;\n\tcontent: string;\n}\n\nfunction parseFrontmatter(fileContents: string) {\n\tconst frontmatterRegex = /^---\\r?\\n([\\s\\S]*?)\\r?\\n---\\r?\\n?([\\s\\S]*)$/;\n\tconst match = fileContents.match(frontmatterRegex);\n\n\tif (!match) {\n\t\treturn { data: {}, content: fileContents };\n\t}\n\n\tconst yamlBlock = match[1];\n\tconst content = match[2];\n\tconst data: any = {};\n\n\tyamlBlock.split(\"\\n\").forEach((line) => {\n\t\tconst colonIndex = line.indexOf(\":\");\n\t\tif (colonIndex > -1) {\n\t\t\tconst key = line.slice(0, colonIndex).trim();\n\t\t\tlet value = line.slice(colonIndex + 1).trim();\n\t\t\t\n\t\t\tif ((value.startsWith('\"') && value.endsWith('\"')) || (value.startsWith(\"'\") && value.endsWith(\"'\"))) {\n\t\t\t\tvalue = value.slice(1, -1);\n\t\t\t}\n\t\t\t\n\t\t\tdata[key] = value;\n\t\t}\n\t});\n\n\treturn { data, content };\n}\n\nexport function getGuideBySlug(slug: string): GuideData | null {\n\tconst fullPath = path.join(guidesDirectory, `${slug}.md`);\n\tif (!fs.existsSync(fullPath)) {\n\t\treturn null;\n\t}\n\n\tconst fileContents = fs.readFileSync(fullPath, \"utf8\");\n\tconst { data, content } = parseFrontmatter(fileContents);\n\n\treturn {\n\t\tslug,\n\t\tcontent,\n\t\ttitle: data.title || \"Geen titel\",\n\t\tdescription: data.description || \"\",\n\t\tcategory: data.category || \"BASIS\",\n\t\ticon: data.icon,\n\t\tdate: data.date || new Date().toISOString(),\n\t};\n}\n\nexport function getAllGuides(): GuideData[] {\n\tif (!fs.existsSync(guidesDirectory)) {\n\t\treturn [];\n\t}\n\n\tconst fileNames = fs.readdirSync(guidesDirectory);\n\tconst allGuidesData = fileNames\n\t\t.filter((fileName) => fileName.endsWith(\".md\"))\n\t\t.map((fileName) => {\n\t\t\tconst slug = fileName.replace(/\\.md$/, \"\");\n\t\t\tconst fullPath = path.join(guidesDirectory, fileName);\n\t\t\tconst fileContents = fs.readFileSync(fullPath, \"utf8\");\n\t\t\tconst { data, content } = parseFrontmatter(fileContents);\n\n\t\t\treturn {\n\t\t\t\tslug,\n\t\t\t\tcontent,\n\t\t\t\ttitle: data.title || \"Geen titel\",\n\t\t\t\tdescription: data.description || \"\",\n\t\t\t\tcategory: data.category || \"BASIS\",\n\t\t\t\ticon: data.icon,\n\t\t\t\tdate: data.date || new Date().toISOString(),\n\t\t\t};\n\t\t});\n\n\treturn allGuidesData.sort((a, b) => (a.date < b.date ? 1 : -1));\n}\n"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "app/components/GuidesExplorer.tsx"
  },
  "id": "read_file__read_file_1780504568522_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780504568522_0",
  "name": "read_file",
  "response": {
    "output": "\"use client\";\n\nimport { useState, useMemo } from \"react\";\nimport GuideCard from \"./GuideCard\";\nimport Pagination from \"./Pagination\";\nimport { GuideData } from \"../lib/guideLoader\";\n\nconst categories = [\"ALLES\", \"BASIS\", \"BANKZAKEN\", \"OVERHEID\", \"HULP\", \"PAKKETJES\", \"WACHTWOORD\"];\nconst POSTS_PER_PAGE = 6;\n\nexport default function GuidesExplorer({ initialGuides }: { initialGuides: GuideData[] }) {\n\tconst [searchQuery, setSearchQuery] = useState(\"\");\n\tconst [selectedCategory, setSelectedCategory] = useState(\"ALLES\");\n\tconst [currentPage, setCurrentPage] = useState(1);\n\n\tconst filteredGuides = useMemo(() => {\n\t\treturn initialGuides.filter((guide) => {\n\t\t\tconst matchesSearch =\n\t\t\t\tguide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||\n\t\t\t\tguide.description.toLowerCase().includes(searchQuery.toLowerCase());\n\t\t\tconst matchesCategory = selectedCategory === \"ALLES\" || guide.category === selectedCategory;\n\t\t\treturn matchesSearch && matchesCategory;\n\t\t});\n\t}, [initialGuides, searchQuery, selectedCategory]);\n\n\tconst totalPages = Math.ceil(filteredGuides.length / POSTS_PER_PAGE);\n\tconst paginatedGuides = useMemo(() => {\n\t\treturn filteredGuides.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);\n\t}, [filteredGuides, currentPage]);\n\n\tconst handlePageChange = (page: number) => {\n\t\tsetCurrentPage(page);\n\t\tdocument.getElementById(\"raad-van-kamil\")?.scrollIntoView({ behavior: \"smooth\" });\n\t};\n\n\treturn (\n\t\t<section id=\"raad-van-kamil\" className=\"py-24 px-6 bg-white border-t border-accent-background\">\n\t\t\t<div className=\"max-w-7xl mx-auto px-6 space-y-12\">\n\t\t\t\t<div className=\"flex flex-col lg:flex-row lg:items-center justify-between gap-8\">\n\t\t\t\t\t<h2>De raad van Kamil</h2>\n\n\t\t\t\t\t<div className=\"relative max-w-md w-full\">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tplaceholder=\"Ik ben opzoek naar...\"\n\t\t\t\t\t\t\tvalue={searchQuery}\n\t\t\t\t\t\t\tonChange={(e) => {\n\t\t\t\t\t\t\t\tsetSearchQuery(e.target.value);\n\t\t\t\t\t\t\t\tsetCurrentPage(1);\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\tclassName=\"w-full bg-accent-background rounded-full py-4 px-8 pr-14 text-body-green focus:outline-none focus:ring-2 focus:ring-accent-green/10 font-body\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<button className=\"absolute right-2 top-1/2 -translate-y-1/2 bg-accent-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity\">\n\t\t\t\t\t\t\t<span>→</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div className=\"flex flex-wrap gap-3\">\n\t\t\t\t\t{categories.map((category) => (\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tkey={category}\n\t\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\t\tsetSelectedCategory(category);\n\t\t\t\t\t\t\t\tsetCurrentPage(1);\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\tclassName={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${\n\t\t\t\t\t\t\t\tselectedCategory === category\n\t\t\t\t\t\t\t\t\t? \"bg-accent-green text-white\"\n\t\t\t\t\t\t\t\t\t: \"bg-accent-background text-accent-green hover:bg-accent-green/5\"\n\t\t\t\t\t\t\t}`}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{category}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t))}\n\t\t\t\t</div>\n\n\t\t\t\t{paginatedGuides.length > 0 ? (\n\t\t\t\t\t<>\n\t\t\t\t\t\t<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">\n\t\t\t\t\t\t\t{paginatedGuides.map((guide) => (\n\t\t\t\t\t\t\t\t<GuideCard key={guide.slug} guide={guide} />\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />\n\t\t\t\t\t</>\n\t\t\t\t) : (\n\t\t\t\t\t<div className=\"py-20 text-center\">\n\t\t\t\t\t\t<p className=\"text-body-green opacity-60 italic font-body\">Geen gidsen gevonden die voldoen aan je zoekopdracht.</p>\n\t\t\t\t\t</div>\n\t\t\t\t)}\n\t\t\t</div>\n\t\t</section>\n\t);\n}\n"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "AGENTS.md"
  },
  "id": "read_file__read_file_1780504571225_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780504571225_0",
  "name": "read_file",
  "response": {
    "output": "<!-- BEGIN:nextjs-agent-rules -->\n# This is NOT the Next.js you know\n\nThis version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.\n<!-- END:nextjs-agent-rules -->\n\n## Workflow & Operations\n\n### Project Context\n- **Mandatory Initialization:** At the start of every prompt or task, you **must** explore and analyze the entire project structure. Ensure you fully understand the file hierarchy and existing logic before suggesting or making any changes.\n\n### Git & Commit Protocol\n- **Strict Permission:** You are **never** allowed to perform a commit without explicit user permission.\n- **Major Changes:** For any significant architectural changes, large refactors, or new features, you must explain your plan and ask for specific approval before proceeding with the work.\n\n## Development Standards & UI Guidelines\n\n### Architecture & Styling\n- **Styling:** Always use Tailwind utility classes for styling. Avoid external CSS or inline styles.\n- **Components:** Keep components small, modular, and functional. Adhere to the Single Responsibility Principle.\n\n### Color Palette (Design Tokens)\nUse the following hex codes for all component styling:\n- **Surfaces:**\n  - `background: #FFFFFF`\n  - `accent-background: #EEF9F4`\n- **Brand Colors:**\n  - `accent-green: #054431`\n  - `accent-orange: #FF805C`\n- **Typography:**\n  - `title-green: #054431`\n  - `body-green: #2D6A4F`\n- **Status:**\n  - `warning-background: #FFFDEA`\n  - `warning-border: #FFC44F`\n\n### Typography & Fonts\nStrictly follow these font definitions:\n- **Main-title:** Font: `Outfit`, Weight: 700 (bold), Size: 56px\n- **Section-title:** Font: `Outfit`, Weight: 700 (bold), Size: 48px\n- **Body:** Font: `Open Sans`, Weight: Regular (400), Size: 20px\n- **Body-bold:** Font: `Open Sans`, Weight: 700 (bold), Size: 20px"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "content/guides/wat-is-phishing.md"
  },
  "id": "read_file__read_file_1780504575177_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780504575177_0",
  "name": "read_file",
  "response": {
    "output": "---\ntitle: \"Wat is phishing precies? Leer hoe criminelen u proberen te foppen\"\ndescription: \"Een duidelijke uitleg over de basis van phishing en hoe u de eerste signalen van digitale oplichting herkent.\"\ncategory: \"BASIS\"\nicon: \"🎣\"\ndate: \"2026-05-14\"\n---\n\nPhishing is een van de meest voorkomende vormen van internetcriminaliteit. Het woord komt van het Engelse 'fishing' (vissen). Criminelen gooien als het ware een hengeltje uit in de hoop dat u 'hapt'. Maar in plaats van een visje, proberen ze uw persoonlijke gegevens, wachtwoorden of bankgegevens te vangen.\n\n## 1. Hoe herkennen we een phishingpoging?\n\nOplichters worden steeds slimmer, maar ze maken vaak dezelfde fouten. Ze sturen u een e-mail of SMS met een link. Als u daarop klikt, komt u op een website die precies lijkt op die van uw bank, maar dat in werkelijkheid niet is.\n\nLet vooral op deze signalen:\n* Dringende verzoeken: \"Uw account wordt geblokkeerd als u niet nu handelt!\"\n* Vreemde afzenders: Het e-mailadres ziet er net niet helemaal goed uit.\n* Taalfouten: Alhoewel dit steeds minder voorkomt, zijn vreemde zinsconstructies een rode vlag.\n\n> **Tip van Kamil**\n> \"Krijgt u een bericht dat u niet vertrouwt? Klik nooit op de link, maar ga zelf naar de officiële website van het bedrijf door de naam handmatig in te typen in uw browser. Zo weet u zeker dat u veilig bent!\"\n\n## 2. Wat is het doel van de oplichters?\n\nHet einddoel is bijna altijd geld. Soms willen ze direct toegang tot uw bankrekening, maar soms verzamelen ze eerst informatie over u om later identiteitsfraude te plegen. Ze willen dat u in paniek raakt, want wie paniekerig is, let minder goed op de details.\n\nKamil kijkt gelukkig met u mee. Door te controleren of een website wel echt is (bijvoorbeeld door te kijken hoe lang een site al bestaat), kan Kamil u waarschuwen voordat u uw gegevens invult op een gevaarlijke plek."
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "GEMINI.md"
  },
  "id": "read_file__read_file_1780504578713_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780504578713_0",
  "name": "read_file",
  "response": {
    "error": "File not found: /Users/arnobaeck/Desktop/project-kamil/kamil-web/GEMINI.md"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "invoke_agent",
  "args": {
    "agent_name": "generalist",
    "prompt": "Expand all 28 guides in `content/guides/` to be more extensive and detailed. Additionally, create a new guide `hoe-kamil-ai-jou-beschermt.md` specifically about the AI model created for Kamil.\n\nAI Model Guide Details:\n- Title: \"Hoe de AI van Kamil u beschermt tegen oplichting\"\n- Description: \"Een kijkje achter de schermen: hoe ons slimme AI-model in een fractie van een seconde ziet of een website veilig is.\"\n- Category: \"BASIS\"\n- Icon: \"🤖\"\n- Content should explain:\n    - It uses dozens of mathematical parameters to calculate/estimate if a URL is safe.\n    - It checks things like domain age, Punycode, technical irregularities, etc.\n    - It's designed to educate users who are redirected from the extension after a detection.\n    - It explains what was detected and how to avoid it in the future.\n\nGeneral Expansion Requirements:\n- Make each guide more detailed with more examples and practical advice.\n- Maintain the current frontmatter structure (title, description, category, icon, date).\n- The tone should be senior, educational, and reassuring, specifically for an older audience (50+).\n- Language: Dutch.\n\nList of files to expand:\n1. bank-vraagt-nooit-om-code.md\n2. belastingdienst-en-phishing.md\n3. douanenkosten-betalen-via-link.md\n4. een-pakketje-onderweg.md\n5. een-sterk-wachtwoord.md\n6. fraudehelpdesk-en-instanties.md\n7. gemeete-zaken-en-subsidies.md\n8. gevaarlijke-tekens-punycode.md\n9. hulp-aan-anderen-bieden.md\n10. hulp-bij-endentiteitsfraude.md\n11. hulp-na-phishing-stap-voor-stap.md\n12. hulp-vragen-aan-bekenden.md\n13. mijn-overheid-berichtenbox.md\n14. mijn-overheid-en-digid.md\n15. overal-hetzelfde-wachtwoord.md\n16. pas-op-voor-hulp-aan-huis.md\n17. spoed-berichten-via-sms-en-whatsapp.md\n18. tweestapsverificatie.md\n19. valse-apps-voor-pakkettracking.md\n20. veilig-inloggen-bij-uw-bank.md\n21. veilig-surfen-voor-beginners.md\n22. verkeersboetes-en-cjib.md\n23. waarom-leeftijd-website-belangrijk.md\n24. wachtwoord-vergeten.md\n25. wachtwoordmanagers.md\n26. wat-is-phishing.md\n27. wat-te-doen-bij-fraude.md\n28. zwarte-lijsten-en-databases.md\n\nI have already verified the content of these files, they are relatively short (around 1000-1800 bytes). Please use `write_file` to update them with the expanded versions. For the new file, use `write_file` as well.\n\nEnsure the date in the frontmatter remains consistent or is updated to today's date if appropriate (2026-06-03). Let's use 2026-06-03 for all of them to show they are updated.\n\nI'll provide the content of a few to get you started, but you should read them all to ensure you don't lose any specific points. Actually, just read them all since they are in one directory.\n\nWait, I'll provide the content of all of them here to save you turns:\n(I will paste the content provided in the prompt)\n"
  },
  "id": "invoke_agent__invoke_agent_1780504587273_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "invoke_agent__invoke_agent_1780504587273_0",
  "name": "invoke_agent",
  "response": {
    "output": "Subagent 'generalist' finished.\nTermination Reason: GOAL\nResult:\n{\n  \"response\": \"All 28 guides have been fully expanded with a more detailed, educational, and reassuring tone aimed at a 50+ audience, complete with practical examples. The requested frontmatter structure has been carefully maintained, and the date has been updated to `2026-06-03` for all of them.\\n\\nAdditionally, the new guide `hoe-kamil-ai-jou-beschermt.md` has been created with the specific explanations about the Kamil AI model, detailing how it calculates safety, checks for domain age/Punycode, and educates users.\"\n}"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "list_directory",
  "args": {
    "dir_path": "content/guides/"
  },
  "id": "list_directory__list_directory_1780505125535_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "list_directory__list_directory_1780505125535_0",
  "name": "list_directory",
  "response": {
    "output": "Directory listing for /Users/arnobaeck/Desktop/project-kamil/kamil-web/content/guides:\nbank-vraagt-nooit-om-code.md (2999 bytes)\nbelastingdienst-en-phishing.md (2974 bytes)\ndouanenkosten-betalen-via-link.md (2605 bytes)\neen-pakketje-onderweg.md (2455 bytes)\neen-sterk-wachtwoord.md (2679 bytes)\nfraudehelpdesk-en-instanties.md (2982 bytes)\ngemeete-zaken-en-subsidies.md (2321 bytes)\ngevaarlijke-tekens-punycode.md (2559 bytes)\nhoe-kamil-ai-jou-beschermt.md (3770 bytes)\nhulp-aan-anderen-bieden.md (2536 bytes)\nhulp-bij-endentiteitsfraude.md (2934 bytes)\nhulp-na-phishing-stap-voor-stap.md (2799 bytes)\nhulp-vragen-aan-bekenden.md (2430 bytes)\nmijn-overheid-berichtenbox.md (2659 bytes)\nmijn-overheid-en-digid.md (2586 bytes)\noveral-hetzelfde-wachtwoord.md (2764 bytes)\npas-op-voor-hulp-aan-huis.md (2846 bytes)\nspoed-berichten-via-sms-en-whatsapp.md (2698 bytes)\ntweestapsverificatie.md (2719 bytes)\nvalse-apps-voor-pakkettracking.md (2446 bytes)\nveilig-inloggen-bij-uw-bank.md (2593 bytes)\nveilig-surfen-voor-beginners.md (2485 bytes)\nverkeersboetes-en-cjib.md (2330 bytes)\nwaarom-leeftijd-website-belangrijk.md (2601 bytes)\nwachtwoord-vergeten.md (2776 bytes)\nwachtwoordmanagers.md (2791 bytes)\nwat-is-phishing.md (3176 bytes)\nwat-te-doen-bij-fraude.md (3192 bytes)\nzwarte-lijsten-en-databases.md (2726 bytes)"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "content/guides/hoe-kamil-ai-jou-beschermt.md"
  },
  "id": "read_file__read_file_1780505138451_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780505138451_0",
  "name": "read_file",
  "response": {
    "output": "---\ntitle: \"Hoe de AI van Kamil u beschermt tegen oplichting\"\ndescription: \"Een kijkje achter de schermen: hoe ons slimme AI-model in een fractie van een seconde ziet of een website veilig is.\"\ncategory: \"BASIS\"\nicon: \"🤖\"\ndate: \"2026-06-03\"\n---\n\nWanneer u op het internet surft, vertrouwt u erop dat de websites die u bezoekt veilig en betrouwbaar zijn. Helaas worden valse websites die gemaakt zijn door oplichters – zogenaamde phishingsites – met de dag geavanceerder en zijn ze met het blote oog bijna niet meer van echt te onderscheiden. Om u hiertegen te wapenen, maakt de browser-extensie van Kamil gebruik van een geavanceerd, speciaal getraind Artificial Intelligence (AI) model. \n\nIn deze gids leggen we op een toegankelijke manier uit hoe dit \"digitale brein\" achter de schermen werkt om u veilig te houden.\n\n## 1. Wat is AI in deze context?\n\nArtificial Intelligence, of Kunstmatige Intelligentie, betekent in het geval van Kamil dat we een computerprogramma hebben geleerd om patronen te herkennen. U kunt het vergelijken met een zeer ervaren digitaal detective die al miljoenen valse en echte websites heeft bestudeerd. Zodra u een nieuwe website opent, kijkt deze detective met u mee en controleert razendsnel of de website vertrouwde patronen vertoont, of juist de kenmerken van een oplichter.\n\n## 2. Hoe bepaalt Kamil of een website veilig is?\n\nHet AI-model van Kamil kijkt niet slechts naar één ding, maar analyseert in een fractie van een milliseconde tientallen verschillende technische en wiskundige eigenschappen van de website die u bezoekt. Enkele belangrijke zaken die Kamil controleert zijn:\n\n- **De leeftijd van het domein (Domain Age):** Een betrouwbare website, zoals die van een grote bank of de Belastingdienst, bestaat vaak al vele jaren. Oplichters maken daarentegen aan de lopende band nieuwe website-adressen aan, die vaak pas dagen of zelfs uren oud zijn. Kamil ziet direct hoe \"oud\" het adres is; jonge websites krijgen onmiddellijk extra controle.\n- **Punycode en verborgen tekens:** Oplichters proberen het adres in uw adresbalk na te maken, bijvoorbeeld door een 'a' te vervangen door een Russische of Griekse letter die er precies zo uitziet (bijvoorbeeld `bạnk.nl`). Voor u lijkt het echt, maar het AI-model leest de pure computercode en ontmaskert deze truc direct als een zogeheten 'Punycode'-aanval.\n- **Technische onregelmatigheden:** Het model kijkt naar de veiligheidscertificaten op de achtergrond. Is de beveiliging wel uitgegeven door een bekende, gerenommeerde instantie? Staan er vreemde omleidingen in de code?\n- **Structuur van het adres:** Bevat het adres vreemde combinaties van woorden of verdachte toevoegingen, zoals `login-beveiliging-uwbank.com` in plaats van het simpele, echte adres?\n\nHet AI-model combineert al deze signalen, berekent een risicoscore en beslist nog voordat de pagina volledig is geladen of het veilig is om verder te gaan.\n\n> **Tip van Kamil**\n> \"Mijn AI is zo ontworpen dat het u niet alleen beschermt, maar u ook uitlegt wát er precies is gebeurd. Als ik u blokkeer, geef ik u de kans om te begrijpen welke truc de oplichter probeerde te gebruiken. Zo leert u zelf ook steeds beter waar u op moet letten!\"\n\n## 3. Een educatief vangnet\n\nHet doel van Kamil is tweeledig: ten eerste het blokkeren van het onmiddellijke gevaar, en ten tweede educatie. Als het AI-model een onveilige site detecteert en u wordt omgeleid naar het waarschuwingsscherm, is dat een perfect leermoment. Het scherm legt in begrijpelijke taal uit waarom de site is geblokkeerd (bijvoorbeeld \"Deze website is pas 3 dagen oud\"). Door u inzicht te geven in de technieken van de oplichter, vergroten we uw digitale weerbaarheid, zodat u de volgende keer misschien zelf de valstrik al herkent voordat u klikt.\n"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "read_file",
  "args": {
    "file_path": "content/guides/bank-vraagt-nooit-om-code.md"
  },
  "id": "read_file__read_file_1780505140392_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "read_file__read_file_1780505140392_0",
  "name": "read_file",
  "response": {
    "output": "---\ntitle: \"De gouden regel: Uw bank vraagt nooit om uw pincode\"\ndescription: \"Waarom een bank nooit via een link of telefoon naar uw geheime codes zal vragen.\"\ncategory: \"BANKZAKEN\"\nicon: \"🏦\"\ndate: \"2026-06-03\"\n---\n\nHet is misschien wel de belangrijkste regel bij het veilig online regelen van uw bankzaken: uw bank zal u nooit, maar dan ook echt nooit, vragen om uw pincode, inlogcodes of response-codes af te staan via een e-mail, SMS, WhatsApp-bericht of telefoontje. Deze regel is het fundament van veilig bankieren en geldt voor iedere bank in Nederland en België.\n\n## 1. Waarom vragen ze dit niet?\n\nUw bank heeft deze gegevens simpelweg niet nodig om u te helpen. De systemen van de bank zijn speciaal zo gebouwd dat medewerkers uw geheime codes nooit hoeven in te zien om bijvoorbeeld een probleem met uw rekening op te lossen. Zodra iemand, op welke manier dan ook, om deze codes vraagt, weet u direct en zonder twijfel dat u met een oplichter te maken heeft. \n\nVeel mensen worden overvallen door een onverwacht telefoontje van een vriendelijke \"bankmedewerker\" die vertelt dat er fraude is ontdekt op hun rekening. Dit is een bekende babbeltruc. De oplichter klinkt professioneel en behulpzaam, maar zal uiteindelijk altijd proberen uw codes te bemachtigen of u vragen geld over te maken naar een 'veilige kluisrekening'. Laat u niet misleiden: een kluisrekening bestaat niet.\n\n> **Tip van Kamil**\n> \"Twijfelt u of een bericht of telefoontje daadwerkelijk van uw bank komt? Verbreek direct de verbinding of sluit de e-mail. Zoek vervolgens zelf het officiële telefoonnummer van uw bank op (bijvoorbeeld via uw bankpas of de website) en bel hen zelf. Gebruik nooit het telefoonnummer dat in het verdachte bericht staat of dat door de beller wordt gegeven!\"\n\n## 2. De druk van de 'vervallen' bankpas\n\nOplichters gebruiken vaak het smoesje dat uw bankpas is verouderd, dat er een nieuwe Europese wetgeving is, of dat er een acuut beveiligingslek is. Ze proberen u onder grote druk te zetten om snel te handelen. \"Als u niet vandaag klikt, wordt uw rekening geblokkeerd,\" is een veelgebruikte dreiging. \n\nLaat u niet opjagen. Een echte bank zal u nooit op deze manier dwingen om onmiddellijk actie te ondernemen, en al helemaal niet via een link in een berichtje. Echte banken nemen de tijd om zaken officieel en veilig te regelen, meestal via de beveiligde omgeving van uw internetbankieren of via een brief per post.\n\n## 3. Wat te doen als u toch heeft geklikt?\n\nMocht u onverhoopt toch op een link hebben geklikt en uw gegevens hebben ingevuld, raak dan niet in paniek, maar kom wel direct in actie:\n1. Neem onmiddellijk contact op met uw bank via het officiële noodnummer. Dit nummer is 24 uur per dag bereikbaar.\n2. Laat uw bankpas of inlogmiddelen direct blokkeren.\n3. Wijzig, indien mogelijk, uw inloggegevens vanaf een ander, veilig apparaat.\n4. Doe altijd aangifte bij de politie.\n\nOnthoud: Veiligheid begint bij rust. Neem de tijd, controleer de feiten en deel nooit uw codes.\n"
  }
}
```

---

## MODEL ✨

**Tool Command**:
```json
{
  "name": "update_topic",
  "args": {
    "summary": "I have successfully expanded all 28 existing guides in the `content/guides/` directory, providing more detail and practical advice for a 50+ audience. I also created a new guide, `hoe-kamil-ai-jou-beschermt.md`, which explains the mathematical and AI-driven safety checks Kamil performs. All guides now include updated content and a consistent date of 2026-06-03.",
    "title": "Finalizing Guide Expansions",
    "strategic_intent": "I have expanded all the guides and created the new AI guide. I will now finalize the changes and inform the user."
  },
  "id": "update_topic__update_topic_1780505143449_0"
}
```

---

## USER 🧑‍💻

**Tool Response**:
```json
{
  "id": "update_topic__update_topic_1780505143449_0",
  "name": "update_topic",
  "response": {
    "output": "Current topic: \"Finalizing Guide Expansions\"\nTopic summary: I have successfully expanded all 28 existing guides in the `content/guides/` directory, providing more detail and practical advice for a 50+ audience. I also created a new guide, `hoe-kamil-ai-jou-beschermt.md`, which explains the mathematical and AI-driven safety checks Kamil performs. All guides now include updated content and a consistent date of 2026-06-03.\n\nStrategic Intent: I have expanded all the guides and created the new AI guide. I will now finalize the changes and inform the user."
  }
}
```

---

## MODEL ✨

Ik heb alle 28 bestaande gidsen in `content/guides/` uitgebreid en een nieuwe gids toegevoegd over het AI-model van Kamil.

### Wat er is aangepast:
- **Uitbreiding:** Elke gids is nu een stuk uitgebreider (gemiddeld verdubbeld in lengte) met meer context, concrete voorbeelden en praktische stappen voor de gebruiker.
- **Toon:** De teksten zijn geschreven met een geruststellende, educatieve toon, specifiek gericht op een 50+ doelgroep.
- **Nieuwe Gids:** Ik heb `hoe-kamil-ai-jou-beschermt.md` aangemaakt. Deze gids legt in begrijpelijke taal uit hoe het AI-model gebruikmaakt van tientallen parameters (zoals domeinleeftijd, Punycode en technische onregelmatigheden) om de veiligheid van een URL te berekenen.
- **Consistentie:** Alle gidsen hebben nu de datum `2026-06-03` gekregen om aan te geven dat ze zijn bijgewerkt.

De nieuwe gids is te vinden onder de categorie **BASIS** en heeft een robot-icoon (🤖). Gebruikers die via de extensie worden omgeleid na een detectie, kunnen hier nu rustig nalezen wat er precies is gebeurd en hoe het model hen beschermt.