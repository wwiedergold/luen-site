---
title: "VO2 Max Percentile Calculator"
description: "Find your VO2 Max percentile by age and gender. Enter your score and see how your cardio fitness compares to others. Based on ACSM data."
subtitle: "Enter your age, sex, and VO2 Max to see how your cardio fitness compares to others in your age group."
ogTitle: "VO2 Max Percentile Calculator by Age and Gender"
jsonLd: true
calculatorJS: "js/vo2-max-calculator.js"
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
          <input type="number" id="vo2-input" class="calc-input" placeholder="e.g. 42" min="10" max="90" step="0.1" inputmode="decimal">
          <p class="calc-hint">Apple Watch: Health app > Browse > Heart > Cardio Fitness. Garmin: Garmin Connect > Performance Stats. You can also enter a result from a lab test.</p>
      </div>
      <button type="button" class="calc-submit" id="calc-submit">See Your Percentile</button>
  </div>
  <div class="result" id="result">
      <div class="result-card">
          <div class="result-percentile" id="result-percentile">--</div>
          <div class="result-percentile-label">Fitness Percentile</div>
          <div class="result-bar-container">
              <div class="result-bar-labels">
                  <span>Lower fitness</span>
                  <span>Higher fitness</span>
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
                  <div class="result-detail-label">Your VO2 Max</div>
              </div>
              <div class="result-detail">
                  <div class="result-detail-value" id="result-median">--</div>
                  <div class="result-detail-label">Median for Age</div>
              </div>
          </div>
          <div class="whatif" id="whatif">
              <div class="whatif-label">What if you improved?</div>
              <div class="whatif-row">
                  <input type="range" class="whatif-slider" id="whatif-slider" min="10" max="70" step="0.5">
                  <span class="whatif-value" id="whatif-value">--</span>
              </div>
              <p class="whatif-result" id="whatif-result"></p>
          </div>
          <div class="result-cta">
              <p><strong>Track how your VO2 Max changes over time.</strong> Luen shows your trend alongside your exercise, sleep, and stress patterns so you can see what actually moves the number.</p>
              <a href="https://apps.apple.com/app/luen/id6758587026" class="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
              </a>
          </div>
      </div>
  </div>
faq:
  - question: "What is a good VO2 Max percentile?"
    answer: "A VO2 Max at or above the 50th percentile means your cardio fitness is better than at least half the population your age. The 75th percentile or higher indicates good to excellent fitness. For longevity, research suggests that being above the 25th percentile provides substantial health benefits."
  - question: "Where do I find my VO2 Max?"
    answer: "On Apple Watch, open the Health app and go to Browse > Heart > Cardio Fitness. On Garmin, check Garmin Connect under Performance Stats. You can also get a precise measurement through a lab test at a sports medicine clinic."
  - question: "Does VO2 Max differ between men and women?"
    answer: "Yes. Men typically have higher VO2 Max values than women of the same age, primarily due to differences in body composition, hemoglobin levels, and heart size. This calculator uses sex-specific percentile tables so your comparison is accurate."
  - question: "What data is this calculator based on?"
    answer: "The percentile rankings are based on normative data from the American College of Sports Medicine (ACSM) Guidelines for Exercise Testing and Prescription, which categorizes cardiorespiratory fitness by age and sex across population-level data."
  - question: "Can I improve my VO2 Max after 40 or 50?"
    answer: "Yes. Consistent aerobic exercise produces measurable improvements at any age. Studies show 5-10% gains over 8-12 weeks in adults over 50. Both high-intensity intervals and steady-state cardio are effective. Read our guide on how to improve your VO2 Max."
related:
  - title: "VO2 Max by Age and Gender: Where Do You Stand?"
    url: "/learn/vo2-max-by-age-and-gender/"
  - title: "How to Improve Your VO2 Max: What Actually Works"
    url: "/learn/how-to-improve-vo2-max/"
  - title: "How Accurate Is Apple Watch VO2 Max?"
    url: "/learn/apple-watch-vo2-max-accuracy/"
  - title: "VO2 Max and Longevity: The Metric That Predicts How Long You Live"
    url: "/learn/vo2-max-and-longevity/"
  - title: "Resting Heart Rate Percentile Calculator"
    url: "/tools/resting-heart-rate-percentile-calculator/"
---

## How This Calculator Works

This calculator compares your VO2 Max to population norms for your age and sex. It returns a **fitness percentile**, the percentage of people in your demographic group whose cardio fitness you match or exceed. A higher percentile means better fitness.

VO2 Max measures the maximum amount of oxygen your body can use during intense exercise, expressed in milliliters per kilogram of body weight per minute (ml/kg/min). It is widely considered one of the strongest markers of cardiovascular fitness and is closely linked to [all-cause mortality](/learn/vo2-max-and-longevity/). Higher is better.

## What Your Percentile Means

<div class="table-wrapper">
    <table class="data-table" aria-label="VO2 Max fitness percentile interpretation">
        <thead>
            <tr>
                <th>Percentile</th>
                <th>Category</th>
                <th>What It Means</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>95th+</td><td>Superior</td><td>Elite cardio fitness. Typical of trained endurance athletes.</td></tr>
            <tr><td>80th-94th</td><td>Excellent</td><td>Well above average. Strong cardiovascular health.</td></tr>
            <tr><td>60th-79th</td><td>Good</td><td>Above average. Consistent exercise is clearly paying off.</td></tr>
            <tr><td>40th-59th</td><td>Above Average</td><td>Better than most. Room to improve with more targeted training.</td></tr>
            <tr><td>20th-39th</td><td>Average</td><td>In the middle of the pack. Regular cardio can move you up.</td></tr>
            <tr><td>5th-19th</td><td>Below Average</td><td>Lower fitness than most peers. A consistent routine will help.</td></tr>
            <tr><td>Below 5th</td><td>Poor</td><td>Consider starting a structured exercise program.</td></tr>
        </tbody>
    </table>
</div>

## Where to Find Your VO2 Max

**Apple Watch.** Open the Health app on your iPhone, go to Browse > Heart > Cardio Fitness. Apple Watch estimates your VO2 Max from outdoor walks, runs, and hikes using heart rate, pace, and elevation data. The estimate is [within roughly 1 ml/kg/min of lab testing](/learn/apple-watch-vo2-max-accuracy/) for most people.

**Garmin.** Open Garmin Connect and go to Performance Stats > VO2 Max. Garmin estimates VO2 Max from running and cycling activities using the Firstbeat algorithm.

**Lab test.** A graded exercise test on a treadmill or cycle ergometer with gas exchange analysis gives the most accurate measurement. These are typically available at sports medicine clinics and some gyms.

**No device?** You can estimate your VO2 Max from a timed 1.5-mile run (Cooper test) or a 12-minute run test. Many online calculators can convert your time to an estimated VO2 Max.

## VO2 Max Ranges by Age and Gender

The table below shows the ACSM classification ranges for VO2 Max by age group for men. For the full female chart, see our [VO2 Max by age and gender](/learn/vo2-max-by-age-and-gender/) reference page.

<div class="table-wrapper">
    <table class="data-table" aria-label="VO2 Max classification for males by age group">
        <caption>VO2 Max Classification - Male (ml/kg/min)</caption>
        <thead>
            <tr>
                <th>Age</th>
                <th>Poor</th>
                <th>Below Avg</th>
                <th>Average</th>
                <th>Good</th>
                <th>Excellent</th>
                <th>Superior</th>
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

Values in ml/kg/min. Source: ACSM's Guidelines for Exercise Testing and Prescription.

## How to Improve Your VO2 Max

The most effective approach combines **Zone 2 base training** (conversational pace, 60-70% of max heart rate, 3-4 times per week) with **high-intensity intervals** (85-95% max heart rate, 1-2 times per week). This polarized approach is supported by research as the most efficient way to [improve VO2 Max](/learn/how-to-improve-vo2-max/).

Beginners typically see 10-15% improvement over 8-12 weeks. Already-fit individuals see 3-5% gains over the same period. VO2 Max declines naturally with age, roughly 1% per year after 30, but consistent training can slow, stop, or even reverse this decline. People over 50 can still see meaningful improvements with structured training.

## VO2 Max and Longevity

Research published in JAMA found that individuals with the lowest VO2 Max values had a fourfold increased risk of mortality compared to those with the highest values. Moving from the bottom 25th percentile to even the 25th-50th percentile range is associated with a 50% reduction in all-cause mortality. Higher fitness levels continue to provide incremental benefit, with no upper limit found where more fitness stops helping.

This is why VO2 Max has become one of the most discussed health metrics in longevity research, and why knowing your percentile matters. For more on this topic, see our guide on [VO2 Max and longevity](/learn/vo2-max-and-longevity/).
