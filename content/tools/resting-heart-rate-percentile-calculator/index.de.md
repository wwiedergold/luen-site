---
title: "Ruheherzfrequenz Perzentil-Rechner"
seoTitle: "Ruheherzfrequenz Perzentil-Rechner — Prüfe dein Fitnesslevel"
description: "Finde dein Ruheherzfrequenz-Perzentil nach Alter und Geschlecht. Gib deine RHF ein und sieh, wie deine kardiovaskuläre Fitness im Vergleich zu Gleichaltrigen abschneidet."
subtitle: "Gib dein Alter, Geschlecht und deine Ruheherzfrequenz ein, um zu sehen, wie deine kardiovaskuläre Fitness im Vergleich zu Gleichaltrigen abschneidet."
ogTitle: "Ruheherzfrequenz Perzentil-Rechner nach Alter und Geschlecht"
jsonLd: true
calculatorJS: "js/rhr-calculator.js"
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
          <input type="number" id="age-input" class="calc-input" placeholder="z.B. 35" min="18" max="99" inputmode="numeric">
      </div>
      <div class="calc-field">
          <label class="calc-label" for="rhr-input">Ruheherzfrequenz (bpm)</label>
          <input type="number" id="rhr-input" class="calc-input" placeholder="z.B. 62" min="30" max="120" inputmode="numeric">
          <p class="calc-hint">Prüfe deine Apple Watch, Garmin oder anderen Fitness-Tracker. Oder miss manuell: Sitz 5 Minuten still, zähle deinen Puls für 30 Sekunden und multipliziere mit 2.</p>
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
                  <div class="result-detail-value" id="result-rhr">--</div>
                  <div class="result-detail-label">Deine RHF</div>
              </div>
              <div class="result-detail">
                  <div class="result-detail-value" id="result-median">--</div>
                  <div class="result-detail-label">Median für Alter</div>
              </div>
          </div>
          <div class="result-cta">
              <p><strong>Verfolge, wie sich deine Ruheherzfrequenz im Zeitverlauf verändert.</strong> Luen zeigt deinen RHF-Trend zusammen mit deinen Bewegungs-, Schlaf- und Stressmustern.</p>
              <a href="https://apps.apple.com/app/luen/id6758587026" class="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Für iOS laden
              </a>
          </div>
      </div>
  </div>
faq:
  - question: "Was ist ein gutes Ruheherzfrequenz-Perzentil?"
    answer: "Eine Ruheherzfrequenz auf oder über dem 50. Perzentil bedeutet, dass deine kardiovaskuläre Fitness besser ist als mindestens die Hälfte der Bevölkerung deines Alters. Das 75. Perzentil oder höher zeigt gute bis ausgezeichnete Fitness an. Elite-Sportler liegen typischerweise über dem 90. Perzentil."
  - question: "Wie finde ich meine Ruheherzfrequenz?"
    answer: "Am einfachsten prüfst du deine Apple Watch oder deinen Fitness-Tracker, der sie automatisch misst. Du kannst auch manuell messen: Sitz 5 Minuten still, lege zwei Finger auf dein Handgelenk, zähle die Schläge für 30 Sekunden und multipliziere mit 2. Für den genauesten Wert miss morgens direkt nach dem Aufwachen."
  - question: "Unterscheidet sich die Ruheherzfrequenz zwischen Männern und Frauen?"
    answer: "Ja. Frauen haben tendenziell eine etwas höhere Ruheherzfrequenz als Männer gleichen Alters, typischerweise um 2-4 Schläge pro Minute. Dies liegt teilweise an Unterschieden in Herzgröße und Schlagvolumen. Dieser Rechner berücksichtigt diese Unterschiede in seinen Perzentilberechnungen."
  - question: "Auf welchen Daten basiert dieser Rechner?"
    answer: "Die Perzentil-Rankings basieren auf bevölkerungsbezogenen Ruheherzfrequenzdaten der American Heart Association, der ACSM und der CDC National Health and Nutrition Examination Survey (NHANES), die die Ruhepulsrate bei Tausenden von US-amerikanischen Erwachsenen gemessen hat."
  - question: "Kann ich mein Ruheherzfrequenz-Perzentil verbessern?"
    answer: "Ja. Konsequentes aerobes Training ist der effektivste Weg. Die meisten sehen einen Rückgang von 5-10 Schlägen pro Minute innerhalb von 4-8 Wochen regelmäßigen Kardio-Trainings. Besserer Schlaf und Stressmanagement tragen ebenfalls bei. Lies unseren Leitfaden zur Senkung deiner Ruheherzfrequenz."
related:
  - title: "Ruheherzfrequenz nach Alter: Was ist normal für dich?"
    url: "/learn/resting-heart-rate-by-age/"
  - title: "Was ist eine normale Ruheherzfrequenz?"
    url: "/learn/normal-resting-heart-rate/"
  - title: "Wie du deine Ruheherzfrequenz senkst"
    url: "/learn/how-to-lower-resting-heart-rate/"
  - title: "Wie Schlaf deine Herzfrequenz beeinflusst (und deine Fitness)"
    url: "/learn/does-sleep-affect-heart-rate/"
  - title: "VO2 Max nach Alter und Geschlecht: Wo stehst du?"
    url: "/learn/vo2-max-by-age-and-gender/"
  - title: "VO2 Max Perzentil-Rechner"
    url: "/tools/vo2-max-percentile-calculator/"
---

## Wie dieser Rechner funktioniert

Dieser Rechner vergleicht deine Ruheherzfrequenz mit Bevölkerungsnormen für dein Alter und Geschlecht. Er gibt ein **Fitness-Perzentil** zurück – den Prozentsatz der Menschen in deiner demografischen Gruppe, deren kardiovaskuläre Fitness du erreichst oder übertriffst. Ein höheres Perzentil bedeutet bessere Fitness.

Eine niedrigere Ruheherzfrequenz deutet generell auf ein stärkeres, effizienteres Herz hin. Wenn dein Herz pro Schlag mehr Blut pumpt (höheres Schlagvolumen), braucht es weniger Schläge pro Minute, um die gleiche Menge Sauerstoff zu liefern. Deshalb haben Sportler und sehr fitte Personen konstant niedrigere Ruheherzfrequenzen als inaktive Menschen.

## Was dein Perzentil bedeutet

<div class="table-wrapper">
    <table class="data-table" aria-label="Ruheherzfrequenz Fitness-Perzentil Interpretation">
        <thead>
            <tr>
                <th>Perzentil</th>
                <th>Kategorie</th>
                <th>Was es bedeutet</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>90.+</td><td>Sportler</td><td>Deine RHF ist in den oberen 10 %. Typisch für trainierte Ausdauersportler.</td></tr>
            <tr><td>70.–89.</td><td>Ausgezeichnet</td><td>Weit über dem Durchschnitt. Regelmäßiges Training zahlt sich deutlich aus.</td></tr>
            <tr><td>50.–69.</td><td>Gut</td><td>Über dem Median. Du bist fitter als die meisten Menschen deines Alters.</td></tr>
            <tr><td>30.–49.</td><td>Durchschnitt</td><td>Im Mittelfeld. Spielraum für Verbesserung mit regelmäßigem Kardio-Training.</td></tr>
            <tr><td>10.–29.</td><td>Unterdurchschnittlich</td><td>Niedrigere Fitness als die meisten Gleichaltrigen. Regelmäßiges aerobes Training kann helfen.</td></tr>
            <tr><td>Unter 10.</td><td>Niedrig</td><td>Erwäge den Beginn einer konsequenten Trainingsroutine und konsultiere deinen Arzt.</td></tr>
        </tbody>
    </table>
</div>

## Ruheherzfrequenz-Bereiche nach Alter

Dies sind typische Ruheherzfrequenz-Bereiche nach Altersgruppe. Die Spalte "Durchschnitt" zeigt das 50. Perzentil – den Mittelpunkt, an dem die Hälfte der Bevölkerung darüber und die Hälfte darunter liegt. Beachte, dass Frauen tendenziell leicht höhere Ruheherzfrequenzen haben als Männer gleichen Alters.

<div class="table-wrapper">
    <table class="data-table" aria-label="Typische Ruheherzfrequenz-Bereiche nach Altersgruppe">
        <thead>
            <tr>
                <th>Alter</th>
                <th>Ausgezeichnet (M/W)</th>
                <th>Gut (M/W)</th>
                <th>Durchschnitt (M/W)</th>
                <th>Unterdurchschn. (M/W)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>18-25</td><td>49-55 / 53-60</td><td>56-61 / 61-65</td><td>62-65 / 66-69</td><td>66-73 / 70-73</td></tr>
            <tr><td>26-35</td><td>49-54 / 53-59</td><td>55-61 / 60-64</td><td>62-65 / 65-68</td><td>66-70 / 69-72</td></tr>
            <tr><td>36-45</td><td>50-56 / 54-59</td><td>57-62 / 60-64</td><td>63-66 / 65-69</td><td>67-70 / 70-73</td></tr>
            <tr><td>46-55</td><td>50-57 / 54-60</td><td>58-63 / 61-65</td><td>64-67 / 66-69</td><td>68-71 / 70-73</td></tr>
            <tr><td>56-65</td><td>51-56 / 54-59</td><td>57-61 / 60-64</td><td>62-67 / 65-68</td><td>68-71 / 69-73</td></tr>
            <tr><td>65+</td><td>50-55 / 54-59</td><td>56-61 / 60-64</td><td>62-65 / 65-68</td><td>66-69 / 69-72</td></tr>
        </tbody>
    </table>
</div>

Werte in Schlägen pro Minute (bpm). Bereiche abgeleitet aus Daten der American Heart Association, ACSM-Richtlinien und CDC NHANES-Bevölkerungsdaten.

## Wie du deine Ruheherzfrequenz misst

**Mit einem Wearable.** Apple Watch, Garmin, WHOOP und die meisten Fitness-Tracker messen deine Ruheherzfrequenz automatisch. Die Apple Watch berechnet sie anhand von Messungen, die während Ruhephasen über den Tag hinweg erfasst werden. Der Wert wird täglich aktualisiert und in Apple Health gespeichert. Öffne die Health-App, gehe zu Herz und suche nach „Ruheherzfrequenz".

**Manuell.** Miss morgens direkt nach dem Aufwachen, bevor du aufstehst. Sitz oder lieg mindestens 5 Minuten still. Lege zwei Finger auf die Innenseite deines Handgelenks (Radialarterie) und zähle die Schläge für 30 Sekunden. Multipliziere mit 2. Wiederhole dies über mehrere Morgen für einen zuverlässigen Wert.

## Was deine Ruheherzfrequenz beeinflusst

**Fitnesslevel** ist der größte Einzelfaktor. Regelmäßiges aerobes Training stärkt den Herzmuskel und erhöht das Schlagvolumen, sodass weniger Schläge pro Minute benötigt werden. Selbst moderate Bewegung wie zügiges Gehen 3-4 Mal pro Woche erzeugt [messbare Verringerungen](/learn/how-to-lower-resting-heart-rate/) innerhalb von Wochen.

**Schlafqualität** beeinflusst die Erholung direkt. Schlechter Schlaf erhöht deine Tages-Ruheherzfrequenz. Schon eine schlechte Nacht kann 3-5 Schläge pro Minute zu deiner nächsten Messung hinzufügen. Konstant 7-9 Stunden Qualitätsschlaf machen einen messbaren Unterschied.

**Stress** hält dein sympathisches Nervensystem aktiviert und deine Herzfrequenz höher. Eine stressige Woche kann deine Ruheherzfrequenz um mehrere Schläge erhöhen, ohne dass sich an deinen Trainingsgewohnheiten etwas ändert.

**Koffein, Medikamente, Hydration und Temperatur** beeinflussen ebenfalls deinen Wert. Wenn du [deinen Trend verfolgst](/learn/normal-resting-heart-rate/), berücksichtige Änderungen bei diesen Variablen.

## Warum der Trend mehr zählt als eine einzelne Zahl

Jede einzelne Ruheherzfrequenz-Messung ist eine Momentaufnahme. Sie kann durch Koffein, eine schlechte Nacht Schlaf, Dehydrierung oder Stress verzerrt werden. Der wahre Wert liegt im Trend über Wochen und Monate. Eine allmählich sinkende Ruheherzfrequenz bedeutet, dass sich deine [kardiovaskuläre Fitness](/learn/what-is-cardio-fitness/) verbessert. Ein steigender Trend könnte auf Übertraining, schlechte Schlafgewohnheiten oder erhöhten Stress hindeuten.

[Luen](/) verfolgt deine Ruheherzfrequenz zusammen mit deinen Bewegungs-, Schlaf-, Tageslicht- und Stressmustern, damit du nicht nur die Zahl siehst, sondern auch die Gewohnheiten, die sie bestimmen.
