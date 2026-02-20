---
title: "Kardio-Fitness-Level Checker"
seoTitle: "Kardio-Fitness-Level Checker — Was bedeutet dein Apple Watch Wert? | Luen"
description: "Gib deinen VO2 Max, dein Alter und Geschlecht ein, um deine Apple Watch Kardio-Fitness-Einstufung zu sehen — Niedrig, Unterdurchschnittlich, Überdurchschnittlich oder Hoch."
subtitle: "Gib deinen VO2 Max, dein Alter und Geschlecht ein, um deine Apple Watch Kardio-Fitness-Einstufung zu sehen — Niedrig, Unterdurchschnittlich, Überdurchschnittlich oder Hoch — und was sie für deine Gesundheit bedeutet."
date: 2026-02-20
lastmod: 2026-02-20
ogTitle: "Kardio-Fitness-Level Checker — Was bedeutet dein Apple Watch Wert?"
type: tools
jsonLd: true
calculatorJS: "js/cardio-fitness-checker.js"
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
          <input type="number" id="vo2-input" class="calc-input" placeholder="z.B. 42" min="5" max="90" step="0.1" inputmode="decimal">
          <p class="calc-hint">Apple Watch: Health-App > Entdecken > Herz > Kardio-Fitness. Garmin: Garmin Connect > Leistungsstatistiken. Du kannst auch ein Ergebnis aus einem Labortest eingeben.</p>
      </div>
      <button type="button" class="calc-submit" id="calc-submit">Mein Level prüfen</button>
  </div>
  <div class="result" id="result">
      <div class="result-card">
          <div class="result-percentile" id="result-level">--</div>
          <div class="result-percentile-label">Apple Watch Kardio-Fitness-Level</div>
          <div class="result-bar-container">
              <div class="result-bar-labels">
                  <span>Niedrig</span>
                  <span>Hoch</span>
              </div>
              <div class="result-bar">
                  <div class="result-bar-fill" id="result-bar-fill" style="width: 0%">
                      <div class="result-bar-marker"></div>
                  </div>
              </div>
          </div>
          <div class="result-category" id="result-percentile-badge">--</div>
          <p class="result-description" id="result-description"></p>
          <div class="result-details">
              <div class="result-detail">
                  <div class="result-detail-value" id="result-vo2">--</div>
                  <div class="result-detail-label">Deine VO2 Max</div>
              </div>
              <div class="result-detail">
                  <div class="result-detail-value" id="result-threshold">--</div>
                  <div class="result-detail-label" id="result-threshold-label">Nächstes Level ab</div>
              </div>
          </div>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--color-border);">
              <p class="result-description" id="result-health"></p>
          </div>
          <div class="result-cta">
              <p><strong>Verfolge, wie sich deine Kardio-Fitness im Zeitverlauf verändert.</strong> Luen zeigt deinen VO2 Max Trend zusammen mit deinen Bewegungs-, Schlaf- und Stressmustern, damit du siehst, was die Zahl wirklich bewegt.</p>
              <a href="https://apps.apple.com/app/luen/id6758587026" class="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Für iOS laden
              </a>
          </div>
      </div>
  </div>
faq:
  - question: "Was bedeuten die Apple Watch Kardio-Fitness-Stufen?"
    answer: "Die Apple Watch stuft deine Kardio-Fitness in vier Stufen ein, basierend auf deiner geschätzten VO2 Max im Vergleich zu Bevölkerungsdaten für dein Alter und Geschlecht. Niedrig bedeutet, dass du in den unteren 20 % liegst. Unterdurchschnittlich liegt zwischen der 20. und 40. Perzentile. Überdurchschnittlich ist die 40. bis 60. Perzentile. Hoch bedeutet, dass du über der 60. Perzentile liegst."
  - question: "Welche VO2 Max gilt auf der Apple Watch als niedrig?"
    answer: "Das hängt von deinem Alter und Geschlecht ab. Zum Beispiel würde ein 40-jähriger Mann mit einer VO2 Max unter etwa 32 ml/kg/min als Niedrig eingestuft, während eine 40-jährige Frau unter etwa 24 ml/kg/min liegen müsste. Die Schwellenwerte sinken mit dem Alter. Nutze den Rechner oben, um deine spezifische Einstufung zu prüfen."
  - question: "Wie verbessere ich mein Apple Watch Kardio-Fitness-Level?"
    answer: "Regelmäßiges aerobes Training ist der effektivste Ansatz. Kombiniere Zone-2-Grundlagentraining (Gesprächstempo, 3–4 Mal pro Woche) mit hochintensiven Intervallen (1–2 Mal pro Woche). Anfänger sehen typischerweise 10–15 % Verbesserung der VO2 Max über 8–12 Wochen."
  - question: "Warum sagt die Apple Watch, meine Kardio-Fitness ist unterdurchschnittlich?"
    answer: "Es gibt zwei Möglichkeiten. Deine Kardio-Fitness könnte tatsächlich unterdurchschnittlich für dein Alter und Geschlecht sein, was häufig vorkommt und durch regelmäßiges Training verbesserbar ist. Alternativ könnte der Wert ungenau sein — die Apple Watch schätzt die VO2 Max nur bei Spaziergängen, Läufen und Wanderungen im Freien. Wenn du hauptsächlich drinnen trainierst, spiegelt dein Wert möglicherweise nicht deine wahre Fitness wider."
related:
  - title: "VO2 Max nach Alter und Geschlecht: Wo stehst du?"
    url: "/learn/vo2-max-by-age-and-gender/"
  - title: "Was ist Kardio-Fitness? Eine einfache Erklärung"
    url: "/learn/what-is-cardio-fitness/"
  - title: "Wie du deine VO2 Max verbesserst: Was wirklich funktioniert"
    url: "/learn/how-to-improve-vo2-max/"
  - title: "Wie genau ist die VO2 Max der Apple Watch?"
    url: "/learn/apple-watch-vo2-max-accuracy/"
  - title: "VO2 Max Perzentil-Rechner"
    url: "/tools/vo2-max-percentile-calculator/"
---

## Wie dieses Tool funktioniert

Dieses Tool schätzt deine Apple Watch [Kardio-Fitness](/learn/what-is-cardio-fitness/)-Einstufung basierend auf deiner VO2 Max, deinem Alter und Geschlecht. Es verwendet ungefähre Perzentil-Schwellenwerte aus der FRIEND-Datenbank (Fitness Registry and the Importance of Exercise National Database), um deine VO2 Max einer von vier Stufen zuzuordnen: Niedrig, Unterdurchschnittlich, Überdurchschnittlich oder Hoch.

Die Apple Watch verwendet dieselben zugrunde liegenden Bevölkerungsdaten zur Einstufung deiner Kardio-Fitness. Die Schwellenwerte variieren nach Alter und Geschlecht, sodass eine "Hohe" VO2 Max für einen 60-Jährigen anders ist als für einen 25-Jährigen. Für Alter zwischen Jahrzehnten interpoliert dieses Tool die Schwellenwerte für eine glatte Einstufung.

Wenn du deine genaue Perzentil-Einordnung innerhalb deiner Altersgruppe sehen möchtest, nutze unseren [VO2 Max Perzentil-Rechner](/tools/vo2-max-percentile-calculator/), der feinere Perzentildaten basierend auf ACSM-Normen liefert.

## Was die Stufen bedeuten

<div class="table-wrapper">
    <table class="data-table" aria-label="Apple Watch Kardio-Fitness-Stufen und ihre Bedeutung">
        <thead>
            <tr>
                <th>Stufe</th>
                <th>Perzentilbereich</th>
                <th>Was es bedeutet</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Niedrig</td><td>Unter der 20.</td><td>Verbunden mit höherem kardiovaskulären Risiko. Größtes Verbesserungspotenzial.</td></tr>
            <tr><td>Unterdurchschnittlich</td><td>20.–40.</td><td>Unter dem Mittelwert für deine Altersgruppe. Regelmäßiges Training bringt schnelle Fortschritte.</td></tr>
            <tr><td>Überdurchschnittlich</td><td>40.–60.</td><td>Besser als die meisten. Gute kardiovaskuläre Gesundheit.</td></tr>
            <tr><td>Hoch</td><td>Über der 60.</td><td>Starke Fitness. Verbunden mit niedrigerem Sterblichkeitsrisiko.</td></tr>
        </tbody>
    </table>
</div>

Die konkreten VO2 Max Werte für jede Stufe variieren nach Alter und Geschlecht. Detaillierte Aufschlüsselungen findest du in den [VO2 Max nach Alter und Geschlecht](/learn/vo2-max-by-age-and-gender/) Tabellen.

## Wie die Apple Watch deine Kardio-Fitness einstuft

Die Apple Watch schätzt deine VO2 Max anhand von Daten aus Spaziergängen, Läufen und Wanderungen im Freien. Sie kombiniert Herzfrequenz, Tempo, Höhenmeter und persönliche Daten (Alter, Geschlecht, Gewicht, Größe) zu einer Kardio-Fitness-Schätzung. Diese Schätzung wird dann mit Bevölkerungs-Perzentildaten verglichen, um eine Einstufung zuzuweisen.

Die [Genauigkeit der Apple Watch VO2 Max](/learn/apple-watch-vo2-max-accuracy/)-Schätzungen liegt bei den meisten Menschen innerhalb von etwa 1 ml/kg/min des Laborergebnisses. Die Einstufung kann jedoch durch Faktoren wie Spaziergänge nach intensivem Training, ein lockeres Uhrenarmband oder begrenzte Outdoor-Workout-Daten beeinflusst werden.

Wenn dein Wert niedriger als erwartet erscheint, lies unseren Leitfaden [warum deine Apple Watch Kardio-Fitness unterdurchschnittlich sein könnte](/learn/apple-watch-cardio-fitness-below-average/).

## Wie du dein Level verbesserst

Der effektivste Ansatz kombiniert **Zone-2-Grundlagentraining** (Gesprächstempo, 60–70 % der maximalen Herzfrequenz, 3–4 Mal pro Woche) mit **hochintensiven Intervallen** (85–95 % maximale Herzfrequenz, 1–2 Mal pro Woche). Dieser polarisierte Ansatz ist der effizienteste Weg, deine [VO2 Max zu verbessern](/learn/how-to-improve-vo2-max/).

Wenn dein Level Niedrig oder Unterdurchschnittlich ist, wirst du wahrscheinlich die schnellsten Verbesserungen sehen. Anfänger sehen typischerweise 10–15 % VO2-Max-Verbesserung über 8–12 Wochen. Schon eine Verbesserung von 3–5 ml/kg/min kann dich um ein oder zwei Einstufungsstufen nach oben bringen.

## Haftungsausschluss

Dieses Tool liefert ungefähre Einstufungen basierend auf veröffentlichten Perzentildaten aus der FRIEND-Datenbank (Fitness Registry and the Importance of Exercise National Database). Apple veröffentlicht keine genauen VO2-Max-Schwellenwerte für jede Kategorie. Tatsächliche Apple Watch Einstufungen können leicht abweichen. Dies ist kein medizinischer Rat — konsultiere einen Arzt für eine klinische Fitnessbeurteilung.
