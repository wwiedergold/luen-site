---
title: "Cardio Fitness Level Checker"
seoTitle: "Cardio Fitness Level Checker — What Does Your Apple Watch Score Mean? | Luen"
description: "Enter your VO2 Max, age, and sex to see your Apple Watch cardio fitness level — Low, Below Average, Above Average, or High — and what to do next."
subtitle: "Enter your VO2 Max, age, and sex to see your Apple Watch cardio fitness classification — Low, Below Average, Above Average, or High — and what it means for your health."
date: 2026-02-20
lastmod: 2026-02-20
ogTitle: "Cardio Fitness Level Checker — What Does Your Apple Watch Score Mean?"
type: tools
jsonLd: true
calculatorJS: "js/cardio-fitness-checker.js"
sitemap:
  priority: 0.9
  changefreq: monthly
calculatorHTML: |
  <div class="calculator" id="calculator">
      <div class="calc-field">
          <label class="calc-label">Sex</label>
          <div class="toggle-group" role="radiogroup" aria-label="Sex">
              <button type="button" class="toggle-btn active" data-value="male" role="radio" aria-checked="true">Male</button>
              <button type="button" class="toggle-btn" data-value="female" role="radio" aria-checked="false">Female</button>
          </div>
      </div>
      <div class="calc-field">
          <label class="calc-label" for="age-input">Age</label>
          <input type="number" id="age-input" class="calc-input" placeholder="e.g. 35" min="20" max="99" inputmode="numeric">
      </div>
      <div class="calc-field">
          <label class="calc-label" for="vo2-input">VO2 Max (ml/kg/min)</label>
          <input type="number" id="vo2-input" class="calc-input" placeholder="e.g. 42" min="5" max="90" step="0.1" inputmode="decimal">
          <p class="calc-hint">Apple Watch: Health app > Browse > Heart > Cardio Fitness. Garmin: Garmin Connect > Performance Stats. You can also enter a result from a lab test.</p>
      </div>
      <button type="button" class="calc-submit" id="calc-submit">Check My Level</button>
  </div>
  <div class="result" id="result">
      <div class="result-card">
          <div class="result-percentile" id="result-level">--</div>
          <div class="result-percentile-label">Apple Watch Cardio Fitness Level</div>
          <div class="result-bar-container">
              <div class="result-bar-labels">
                  <span>Low</span>
                  <span>High</span>
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
                  <div class="result-detail-label">Your VO2 Max</div>
              </div>
              <div class="result-detail">
                  <div class="result-detail-value" id="result-threshold">--</div>
                  <div class="result-detail-label" id="result-threshold-label">Next Level At</div>
              </div>
          </div>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--color-border);">
              <p class="result-description" id="result-health"></p>
          </div>
          <div class="result-cta">
              <p><strong>Track how your cardio fitness changes over time.</strong> Luen shows your VO2 Max trend alongside your exercise, sleep, and stress patterns so you can see what actually moves the number.</p>
              <a href="https://apps.apple.com/app/luen/id6758587026" class="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
              </a>
          </div>
      </div>
  </div>
faq:
  - question: "What do the Apple Watch cardio fitness levels mean?"
    answer: "Apple Watch classifies your cardio fitness into four levels based on your estimated VO2 Max compared to population data for your age and sex. Low means you are in the bottom 20%. Below Average places you between the 20th and 40th percentile. Above Average is the 40th to 60th percentile. High means you are above the 60th percentile. These classifications are based on data from the FRIEND (Fitness Registry and the Importance of Exercise National Database)."
  - question: "What VO2 Max is considered low on Apple Watch?"
    answer: "It depends on your age and sex. For example, a 40-year-old male with a VO2 Max below about 32 ml/kg/min would be classified as Low, while a 40-year-old female would need to be below about 24 ml/kg/min. The thresholds decrease with age. Use the calculator above to check your specific classification."
  - question: "How do I improve my Apple Watch cardio fitness level?"
    answer: "Consistent aerobic exercise is the most effective approach. Combine Zone 2 base training (conversational pace, 3-4 times per week) with high-intensity intervals (1-2 times per week). Beginners typically see 10-15% improvement in VO2 Max over 8-12 weeks. Even small improvements can move you up a classification level."
  - question: "Why does Apple Watch say my cardio fitness is below average?"
    answer: "There are two possibilities. Your cardio fitness may genuinely be below average for your age and sex, which is common and improvable with regular exercise. Alternatively, the reading may be inaccurate — Apple Watch only estimates VO2 Max from outdoor walks, runs, and hikes. If you primarily exercise indoors, your reading may not reflect your true fitness. Try dedicated outdoor walks when fresh for a more accurate estimate."
related:
  - title: "VO2 Max by Age and Gender: Where Do You Stand?"
    url: "/learn/vo2-max-by-age-and-gender/"
  - title: "What Is Cardio Fitness? A Simple Explanation"
    url: "/learn/what-is-cardio-fitness/"
  - title: "How to Improve Your VO2 Max: What Actually Works"
    url: "/learn/how-to-improve-vo2-max/"
  - title: "How Accurate Is Apple Watch VO2 Max?"
    url: "/learn/apple-watch-vo2-max-accuracy/"
  - title: "VO2 Max Percentile Calculator"
    url: "/tools/vo2-max-percentile-calculator/"
---

## How This Tool Works

This tool estimates your Apple Watch [cardio fitness](/learn/what-is-cardio-fitness/) classification based on your VO2 Max, age, and sex. It uses approximate percentile breakpoints from the FRIEND (Fitness Registry and the Importance of Exercise National Database) to map your VO2 Max to one of four levels: Low, Below Average, Above Average, or High.

Apple Watch uses the same underlying population data to classify your cardio fitness. The thresholds vary by age and sex, so a "High" VO2 Max for a 60-year-old is different from a "High" for a 25-year-old. For ages between decades, this tool interpolates the thresholds to give you a smooth classification.

If you want to see your exact percentile ranking within your age group, use our [VO2 Max Percentile Calculator](/tools/vo2-max-percentile-calculator/), which provides finer-grained percentile data based on ACSM norms.

## What the Levels Mean

<div class="table-wrapper">
    <table class="data-table" aria-label="Apple Watch cardio fitness levels and what they mean">
        <thead>
            <tr>
                <th>Level</th>
                <th>Percentile Range</th>
                <th>What It Means</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Low</td><td>Below 20th</td><td>Associated with higher cardiovascular risk. Greatest potential for improvement.</td></tr>
            <tr><td>Below Average</td><td>20th–40th</td><td>Below the midpoint for your age group. Regular exercise can move you up quickly.</td></tr>
            <tr><td>Above Average</td><td>40th–60th</td><td>Better than most. Good cardiovascular health.</td></tr>
            <tr><td>High</td><td>Above 60th</td><td>Strong fitness. Associated with lower mortality risk.</td></tr>
        </tbody>
    </table>
</div>

The specific VO2 Max numbers for each level vary by age and sex. See the full [VO2 Max by age and gender](/learn/vo2-max-by-age-and-gender/) charts for detailed breakdowns.

## How Apple Watch Classifies Your Cardio Fitness

Apple Watch estimates your VO2 Max using data from outdoor walks, runs, and hikes. It combines heart rate, pace, elevation, and personal data (age, sex, weight, height) to produce a cardio fitness estimate. This estimate is then compared against population-level percentile data to assign a classification.

The [accuracy of Apple Watch VO2 Max](/learn/apple-watch-vo2-max-accuracy/) estimates is within roughly 1 ml/kg/min of laboratory testing for most people. However, the classification can be affected by factors like walking after intense exercise, a loose watch band, or limited outdoor workout data.

If your reading seems lower than expected, see our guide on [why your Apple Watch cardio fitness might be below average](/learn/apple-watch-cardio-fitness-below-average/).

## How to Improve Your Level

The most effective approach combines **Zone 2 base training** (conversational pace, 60–70% of max heart rate, 3–4 times per week) with **high-intensity intervals** (85–95% max heart rate, 1–2 times per week). This polarized approach is the most efficient way to [improve your VO2 Max](/learn/how-to-improve-vo2-max/).

If your level is Low or Below Average, you are likely to see the fastest improvements. Beginners typically see 10–15% VO2 Max improvement over 8–12 weeks. Even a 3–5 ml/kg/min improvement can move you up one or two classification levels, depending on where you start.

## Disclaimer

This tool provides approximate classifications based on published percentile data from the FRIEND (Fitness Registry and the Importance of Exercise National Database). Apple does not publicly disclose exact VO2 Max cutoffs for each category. Actual Apple Watch classifications may differ slightly. This is not medical advice — consult a healthcare professional for clinical fitness assessment.
