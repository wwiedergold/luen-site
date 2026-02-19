---
title: "Resting Heart Rate Percentile Calculator"
description: "Find your resting heart rate percentile by age and gender. Enter your RHR and see how your cardiovascular fitness compares to others in your age group."
subtitle: "Enter your age, sex, and resting heart rate to see how your cardiovascular fitness compares to others in your age group."
ogTitle: "Resting Heart Rate Percentile Calculator by Age and Gender"
jsonLd: true
calculatorJS: "js/rhr-calculator.js"
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
          <input type="number" id="age-input" class="calc-input" placeholder="e.g. 35" min="18" max="99" inputmode="numeric">
      </div>
      <div class="calc-field">
          <label class="calc-label" for="rhr-input">Resting Heart Rate (bpm)</label>
          <input type="number" id="rhr-input" class="calc-input" placeholder="e.g. 62" min="30" max="120" inputmode="numeric">
          <p class="calc-hint">Check your Apple Watch, Garmin, or other fitness tracker. Or measure manually: sit still for 5 minutes, count your pulse for 30 seconds, and multiply by 2.</p>
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
                  <div class="result-detail-value" id="result-rhr">--</div>
                  <div class="result-detail-label">Your RHR</div>
              </div>
              <div class="result-detail">
                  <div class="result-detail-value" id="result-median">--</div>
                  <div class="result-detail-label">Median for Age</div>
              </div>
          </div>
          <div class="result-cta">
              <p><strong>Track how your resting heart rate changes over time.</strong> Luen shows your RHR trend alongside your exercise, sleep, and stress patterns.</p>
              <a href="https://apps.apple.com/app/luen/id6758587026" class="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
              </a>
          </div>
      </div>
  </div>
faq:
  - question: "What is a good resting heart rate percentile?"
    answer: "A resting heart rate at or above the 50th percentile means your cardiovascular fitness is better than at least half the population your age. The 75th percentile or higher indicates good to excellent fitness. Elite athletes typically fall above the 90th percentile."
  - question: "How do I find my resting heart rate?"
    answer: "The easiest way is to check your Apple Watch or fitness tracker, which measures it automatically. You can also measure manually: sit still for 5 minutes, place two fingers on your wrist, count the beats for 30 seconds, and multiply by 2. For the most accurate reading, measure first thing in the morning."
  - question: "Does resting heart rate differ between men and women?"
    answer: "Yes. Women tend to have a slightly higher resting heart rate than men of the same age, typically by 2-4 bpm. This is partly due to differences in heart size and stroke volume. This calculator accounts for these differences in its percentile calculations."
  - question: "What data is this calculator based on?"
    answer: "The percentile rankings are derived from population-level resting heart rate data published by the American Heart Association, the ACSM, and the CDC National Health and Nutrition Examination Survey (NHANES), which measured resting pulse rate across thousands of U.S. adults."
  - question: "Can I improve my resting heart rate percentile?"
    answer: "Yes. Consistent aerobic exercise is the most effective way. Most people see a drop of 5-10 bpm within 4-8 weeks of regular cardio training. Better sleep and stress management also contribute. Read our guide on how to lower your resting heart rate."
related:
  - title: "Resting Heart Rate by Age: What's Normal for You?"
    url: "/learn/resting-heart-rate-by-age/"
  - title: "What Is a Normal Resting Heart Rate?"
    url: "/learn/normal-resting-heart-rate/"
  - title: "How to Lower Your Resting Heart Rate"
    url: "/learn/how-to-lower-resting-heart-rate/"
  - title: "How Sleep Affects Your Heart Rate (and Your Fitness)"
    url: "/learn/does-sleep-affect-heart-rate/"
  - title: "VO2 Max by Age and Gender: Where Do You Stand?"
    url: "/learn/vo2-max-by-age-and-gender/"
  - title: "VO2 Max Percentile Calculator"
    url: "/tools/vo2-max-percentile-calculator/"
---

## How This Calculator Works

This calculator compares your resting heart rate to population norms for your age and sex. It returns a **fitness percentile**, the percentage of people in your demographic group whose cardiovascular fitness you match or exceed. A higher percentile means better fitness.

A lower resting heart rate generally indicates a stronger, more efficient heart. When your heart pumps more blood per beat (higher stroke volume), it needs fewer beats per minute to deliver the same amount of oxygen. This is why athletes and highly fit individuals consistently have lower resting heart rates than sedentary people.

## What Your Percentile Means

<div class="table-wrapper">
    <table class="data-table" aria-label="Resting heart rate fitness percentile interpretation">
        <thead>
            <tr>
                <th>Percentile</th>
                <th>Category</th>
                <th>What It Means</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>90th+</td><td>Athlete</td><td>Your RHR is in the top 10%. Typical of trained endurance athletes.</td></tr>
            <tr><td>70th-89th</td><td>Excellent</td><td>Well above average. Consistent exercise is clearly paying off.</td></tr>
            <tr><td>50th-69th</td><td>Good</td><td>Above the median. You're fitter than most people your age.</td></tr>
            <tr><td>30th-49th</td><td>Average</td><td>In the middle of the pack. Room to improve with regular cardio.</td></tr>
            <tr><td>10th-29th</td><td>Below Average</td><td>Lower fitness than most peers. Regular aerobic exercise can help.</td></tr>
            <tr><td>Below 10th</td><td>Low</td><td>Consider starting a consistent exercise routine and consulting your doctor.</td></tr>
        </tbody>
    </table>
</div>

## Resting Heart Rate Ranges by Age

These are typical resting heart rate ranges by age group. The "average" column shows the 50th percentile, the midpoint where half the population falls above and half below. Note that women tend to have slightly higher resting heart rates than men of the same age.

<div class="table-wrapper">
    <table class="data-table" aria-label="Typical resting heart rate ranges by age group">
        <thead>
            <tr>
                <th>Age</th>
                <th>Excellent (M/F)</th>
                <th>Good (M/F)</th>
                <th>Average (M/F)</th>
                <th>Below Avg (M/F)</th>
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

Values in beats per minute (bpm). Ranges derived from the American Heart Association, ACSM guidelines, and CDC NHANES population data.

## How to Measure Your Resting Heart Rate

**With a wearable.** Apple Watch, Garmin, WHOOP, and most fitness trackers measure your resting heart rate automatically. Apple Watch calculates it from readings taken during periods of inactivity throughout the day. The value updates daily and is stored in Apple Health. Open the Health app, go to Heart, and look for "Resting Heart Rate."

**Manually.** Measure first thing in the morning before getting out of bed. Sit or lie still for at least 5 minutes. Place two fingers on the inside of your wrist (radial artery) and count the beats for 30 seconds. Multiply by 2. Repeat across several mornings for a reliable number.

## What Affects Your Resting Heart Rate

**Fitness level** is the single biggest factor. Regular aerobic exercise strengthens the heart muscle, increasing stroke volume so fewer beats are needed per minute. Even moderate exercise, such as brisk walking 3-4 times per week, produces [measurable reductions](/learn/how-to-lower-resting-heart-rate/) within weeks.

**Sleep quality** directly influences recovery. Poor sleep raises your daytime resting heart rate. Even one bad night can add 3-5 bpm to your next reading. Consistent 7-9 hours of quality sleep makes a measurable difference.

**Stress** keeps your sympathetic nervous system activated, holding your heart rate higher. A stressful week can push your resting heart rate up by several beats without any change in exercise habits.

**Caffeine, medications, hydration, and temperature** also affect your reading. If you are [tracking your trend](/learn/normal-resting-heart-rate/), factor in any changes to these variables.

## Why the Trend Matters More Than a Single Number

Any single resting heart rate reading is a snapshot. It can be skewed by caffeine, a bad night of sleep, dehydration, or stress. The real value is in the trend over weeks and months. A gradually declining resting heart rate means your [cardiovascular fitness](/learn/what-is-cardio-fitness/) is improving. A rising trend might signal overtraining, poor sleep habits, or increased stress.

[Luen](/) tracks your resting heart rate alongside your exercise, sleep, daylight exposure, and stress patterns, so you can see not just the number but the habits that drive it.
