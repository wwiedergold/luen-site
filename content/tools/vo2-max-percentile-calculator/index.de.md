---
title: "VO2 Max Perzentil-Rechner"
description: "Finde dein VO2-Max-Perzentil nach Alter und Geschlecht. Gib deinen Wert ein und sieh, wie deine Kardio-Fitness im Vergleich zu anderen abschneidet. Basierend auf ACSM-Daten."
subtitle: "Gib dein Alter, Geschlecht und deine VO2 Max ein, um zu sehen, wie deine Kardio-Fitness im Vergleich zu Gleichaltrigen abschneidet."
ogTitle: "VO2 Max Perzentil-Rechner nach Alter und Geschlecht"
jsonLd: true
calculatorJS: "js/vo2-max-calculator.js"
sitemap:
  priority: 0.9
  changefreq: monthly
calculatorHTML: |
  <div class="calculator" id="calculator">
      <div class="calc-field">
          <label class="calc-label">Geschlecht</label>
          <div class="toggle-group" role="radiogroup" aria-label="Geschlecht">
              <button type="button" class="toggle-btn active" data-value="male" role="radio" aria-checked="true">Männlich</button>
              <button type="button" class="toggle-btn" data-value="female" role="radio" aria-checked="false">Weiblich</button>
          </div>
      </div>
      <div class="calc-field">
          <label class="calc-label" for="age-input">Alter</label>
          <input type="number" id="age-input" class="calc-input" placeholder="z.B. 35" min="20" max="99" inputmode="numeric">
      </div>
      <div class="calc-field">
          <label class="calc-label" for="vo2-input">VO2 Max (ml/kg/min)</label>
          <input type="number" id="vo2-input" class="calc-input" placeholder="z.B. 42" min="10" max="90" step="0.1" inputmode="decimal">
          <p class="calc-hint">Apple Watch: Health-App > Entdecken > Herz > Kardio-Fitness. Garmin: Garmin Connect > Leistungsstatistiken. Du kannst auch ein Ergebnis aus einem Labortest eingeben.</p>
      </div>
      <button type="button" class="calc-submit" id="calc-submit">Dein Perzentil anzeigen</button>
  </div>
  <div class="result" id="result">
      <div class="result-card">
          <div class="result-percentile" id="result-percentile">--</div>
          <div class="result-percentile-label">Fitness-Perzentil</div>
          <div class="result-bar-container">
              <div class="result-bar-labels">
                  <span>Niedrigere Fitness</span>
                  <span>Höhere Fitness</span>
              </div>
              <div class="result-bar">
                  <div class="result-bar-fill" id="result-bar-fill" style="width: 0%">
                      <div class="result-bar-marker"></div>
                  </div>
              </div>
          </div>
          <div class="result-category" id="result-category">--</div>
          <p class="result-description" id="result-description"></p>
          <div class="result-details">
              <div class="result-detail">
                  <div class="result-detail-value" id="result-vo2">--</div>
                  <div class="result-detail-label">Deine VO2 Max</div>
              </div>
              <div class="result-detail">
                  <div class="result-detail-value" id="result-median">--</div>
                  <div class="result-detail-label">Median für Alter</div>
              </div>
          </div>
          <div class="whatif" id="whatif">
              <div class="whatif-label">Was wäre, wenn du dich verbesserst?</div>
              <div class="whatif-row">
                  <input type="range" class="whatif-slider" id="whatif-slider" min="10" max="70" step="0.5">
                  <span class="whatif-value" id="whatif-value">--</span>
              </div>
              <p class="whatif-result" id="whatif-result"></p>
          </div>
          <div class="result-cta">
              <p><strong>Verfolge, wie sich deine VO2 Max im Zeitverlauf verändert.</strong> Luen zeigt deinen Trend zusammen mit deinen Bewegungs-, Schlaf- und Stressmustern, damit du siehst, was die Zahl wirklich bewegt.</p>
              <a href="https://apps.apple.com/app/luen/id6758587026" class="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Für iOS laden
              </a>
          </div>
      </div>
  </div>
faq:
  - question: "Was ist ein gutes VO2-Max-Perzentil?"
    answer: "Eine VO2 Max auf oder über dem 50. Perzentil bedeutet, dass deine Kardio-Fitness besser ist als mindestens die Hälfte der Bevölkerung deines Alters. Das 75. Perzentil oder höher zeigt gute bis ausgezeichnete Fitness an. Für Langlebigkeit zeigt die Forschung, dass ein Wert über dem 25. Perzentil erhebliche gesundheitliche Vorteile bietet."
  - question: "Wo finde ich meine VO2 Max?"
    answer: "Auf der Apple Watch öffne die Health-App und gehe zu Entdecken > Herz > Kardio-Fitness. Bei Garmin prüfe Garmin Connect unter Leistungsstatistiken. Du kannst auch eine präzise Messung durch einen Labortest in einer sportmedizinischen Klinik erhalten."
  - question: "Unterscheidet sich die VO2 Max zwischen Männern und Frauen?"
    answer: "Ja. Männer haben typischerweise höhere VO2-Max-Werte als Frauen gleichen Alters, hauptsächlich aufgrund von Unterschieden in Körperzusammensetzung, Hämoglobinwerten und Herzgröße. Dieser Rechner verwendet geschlechtsspezifische Perzentil-Tabellen, damit dein Vergleich genau ist."
  - question: "Auf welchen Daten basiert dieser Rechner?"
    answer: "Die Perzentil-Rankings basieren auf normativen Daten der American College of Sports Medicine (ACSM) Guidelines for Exercise Testing and Prescription, die die kardiorespiratorische Fitness nach Alter und Geschlecht über Bevölkerungsdaten kategorisiert."
  - question: "Kann ich meine VO2 Max nach 40 oder 50 verbessern?"
    answer: "Ja. Konsequentes aerobes Training erzeugt messbare Verbesserungen in jedem Alter. Studien zeigen 5-10 % Verbesserungen über 8-12 Wochen bei Erwachsenen über 50. Sowohl hochintensive Intervalle als auch Steady-State-Kardio sind effektiv. Lies unseren Leitfaden zur Verbesserung deiner VO2 Max."
related:
  - title: "VO2 Max nach Alter und Geschlecht: Wo stehst du?"
    url: "/learn/vo2-max-by-age-and-gender/"
  - title: "Wie du deine VO2 Max verbesserst: Was wirklich funktioniert"
    url: "/learn/how-to-improve-vo2-max/"
  - title: "Wie genau ist die VO2 Max der Apple Watch?"
    url: "/learn/apple-watch-vo2-max-accuracy/"
  - title: "VO2 Max und Langlebigkeit: Die Kennzahl, die vorhersagt, wie lange du lebst"
    url: "/learn/vo2-max-and-longevity/"
  - title: "Ruheherzfrequenz Perzentil-Rechner"
    url: "/tools/resting-heart-rate-percentile-calculator/"
---

## Wie dieser Rechner funktioniert

Dieser Rechner vergleicht deine VO2 Max mit Bevölkerungsnormen für dein Alter und Geschlecht. Er gibt ein **Fitness-Perzentil** zurück – den Prozentsatz der Menschen in deiner demografischen Gruppe, deren Kardio-Fitness du erreichst oder übertriffst. Ein höheres Perzentil bedeutet bessere Fitness.

VO2 Max misst die maximale Menge an Sauerstoff, die dein Körper bei intensiver Belastung nutzen kann, ausgedrückt in Milliliter pro Kilogramm Körpergewicht pro Minute (ml/kg/min). Sie gilt weithin als einer der stärksten Marker für kardiovaskuläre Fitness und ist eng mit der [Gesamtmortalität](/learn/vo2-max-and-longevity/) verknüpft. Höher ist besser.

## Was dein Perzentil bedeutet

<div class="table-wrapper">
    <table class="data-table" aria-label="VO2 Max Fitness-Perzentil Interpretation">
        <thead>
            <tr>
                <th>Perzentil</th>
                <th>Kategorie</th>
                <th>Was es bedeutet</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>95.+</td><td>Hervorragend</td><td>Elite-Kardio-Fitness. Typisch für trainierte Ausdauersportler.</td></tr>
            <tr><td>80.–94.</td><td>Ausgezeichnet</td><td>Weit über dem Durchschnitt. Starke kardiovaskuläre Gesundheit.</td></tr>
            <tr><td>60.–79.</td><td>Gut</td><td>Überdurchschnittlich. Regelmäßiges Training zahlt sich deutlich aus.</td></tr>
            <tr><td>40.–59.</td><td>Überdurchschnittlich</td><td>Besser als die meisten. Spielraum für Verbesserung mit gezielterem Training.</td></tr>
            <tr><td>20.–39.</td><td>Durchschnitt</td><td>Im Mittelfeld. Regelmäßiges Kardio-Training kann dich nach oben bringen.</td></tr>
            <tr><td>5.–19.</td><td>Unterdurchschnittlich</td><td>Niedrigere Fitness als die meisten Gleichaltrigen. Eine konstante Routine wird helfen.</td></tr>
            <tr><td>Unter 5.</td><td>Schlecht</td><td>Erwäge den Beginn eines strukturierten Trainingsprogramms.</td></tr>
        </tbody>
    </table>
</div>

## Wo du deine VO2 Max findest

**Apple Watch.** Öffne die Health-App auf deinem iPhone, gehe zu Entdecken > Herz > Kardio-Fitness. Die Apple Watch schätzt deine VO2 Max anhand von Outdoor-Geh-, Lauf- und Wanderworkouts mithilfe von Herzfrequenz-, Tempo- und Höhendaten. Die Schätzung liegt für die meisten Menschen [innerhalb von etwa 1 ml/kg/min der Labortests](/learn/apple-watch-vo2-max-accuracy/).

**Garmin.** Öffne Garmin Connect und gehe zu Leistungsstatistiken > VO2 Max. Garmin schätzt die VO2 Max anhand von Lauf- und Radfahraktivitäten mithilfe des Firstbeat-Algorithmus.

**Labortest.** Ein stufenweiser Belastungstest auf einem Laufband oder Fahrradergometer mit Gasaustauschanalyse liefert die genaueste Messung. Diese sind typischerweise in sportmedizinischen Kliniken und einigen Fitnessstudios verfügbar.

**Kein Gerät?** Du kannst deine VO2 Max anhand eines zeitgesteuerten 2,4-km-Laufs (Cooper-Test) oder eines 12-Minuten-Lauftests schätzen. Viele Online-Rechner können deine Zeit in eine geschätzte VO2 Max umrechnen.

## VO2 Max Bereiche nach Alter und Geschlecht

Die folgende Tabelle zeigt die ACSM-Klassifikationsbereiche für VO2 Max nach Altersgruppe für Männer. Die vollständige Frauentabelle findest du auf unserer [VO2 Max nach Alter und Geschlecht](/learn/vo2-max-by-age-and-gender/) Referenzseite.

<div class="table-wrapper">
    <table class="data-table" aria-label="VO2 Max Klassifikation für Männer nach Altersgruppe">
        <caption>VO2 Max Klassifikation – Männer (ml/kg/min)</caption>
        <thead>
            <tr>
                <th>Alter</th>
                <th>Schlecht</th>
                <th>Unterdurchschn.</th>
                <th>Durchschnitt</th>
                <th>Gut</th>
                <th>Ausgezeichnet</th>
                <th>Hervorragend</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>20-29</td><td>&lt;33</td><td>33-36</td><td>37-42</td><td>47-52</td><td>53-56</td><td>&gt;56</td></tr>
            <tr><td>30-39</td><td>&lt;32</td><td>32-35</td><td>36-41</td><td>45-49</td><td>50-54</td><td>&gt;54</td></tr>
            <tr><td>40-49</td><td>&lt;30</td><td>30-34</td><td>34-39</td><td>44-48</td><td>48-52</td><td>&gt;52</td></tr>
            <tr><td>50-59</td><td>&lt;26</td><td>26-30</td><td>30-36</td><td>41-45</td><td>45-49</td><td>&gt;49</td></tr>
            <tr><td>60-69</td><td>&lt;21</td><td>21-26</td><td>26-32</td><td>37-41</td><td>41-45</td><td>&gt;45</td></tr>
            <tr><td>70+</td><td>&lt;18</td><td>18-23</td><td>23-29</td><td>33-37</td><td>37-41</td><td>&gt;41</td></tr>
        </tbody>
    </table>
</div>

Werte in ml/kg/min. Quelle: ACSM's Guidelines for Exercise Testing and Prescription.

## Wie du deine VO2 Max verbesserst

Der effektivste Ansatz kombiniert **Zone-2-Grundlagentraining** (Gesprächstempo, 60-70 % der maximalen Herzfrequenz, 3-4 Mal pro Woche) mit **hochintensiven Intervallen** (85-95 % maximale Herzfrequenz, 1-2 Mal pro Woche). Dieser polarisierte Ansatz wird durch Forschung als der effizienteste Weg zur [Verbesserung der VO2 Max](/learn/how-to-improve-vo2-max/) gestützt.

Anfänger sehen typischerweise 10-15 % Verbesserung über 8-12 Wochen. Bereits fitte Personen sehen 3-5 % Verbesserung im selben Zeitraum. Die VO2 Max nimmt natürlich mit dem Alter ab, etwa 1 % pro Jahr nach 30, aber konsequentes Training kann diesen Rückgang verlangsamen, stoppen oder sogar umkehren. Menschen über 50 können mit strukturiertem Training immer noch bedeutende Verbesserungen erzielen.

## VO2 Max und Langlebigkeit

In JAMA veröffentlichte Forschung ergab, dass Personen mit den niedrigsten VO2-Max-Werten ein vierfach erhöhtes Sterblichkeitsrisiko im Vergleich zu denen mit den höchsten Werten hatten. Der Aufstieg vom untersten 25. Perzentil zum Bereich des 25.–50. Perzentils ist mit einer 50-prozentigen Reduktion der Gesamtmortalität verbunden. Höhere Fitnesslevel bieten weiterhin inkrementellen Nutzen, ohne eine Obergrenze, ab der mehr Fitness aufhört zu helfen.

Deshalb ist die VO2 Max zu einer der am meisten diskutierten Gesundheitskennzahlen in der Langlebigkeitsforschung geworden – und warum es wichtig ist, dein Perzentil zu kennen. Mehr zu diesem Thema findest du in unserem Leitfaden zu [VO2 Max und Langlebigkeit](/learn/vo2-max-and-longevity/).
