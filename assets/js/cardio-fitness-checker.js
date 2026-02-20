(function() {
    'use strict';

    // FRIEND database approximate percentile breakpoints
    // Each array: [20th percentile, 40th percentile, 60th percentile]
    var THRESHOLDS = {
        male: {
            20: [38.1, 42.8, 47.4],
            30: [35.5, 39.9, 44.2],
            40: [32.3, 36.7, 41.0],
            50: [28.4, 32.8, 37.1],
            60: [23.5, 27.9, 32.2],
            70: [19.8, 23.8, 27.8]
        },
        female: {
            20: [29.4, 33.4, 37.4],
            30: [26.5, 30.5, 34.5],
            40: [24.0, 27.7, 31.4],
            50: [21.1, 24.8, 28.5],
            60: [17.7, 21.4, 25.1],
            70: [15.2, 18.6, 22.0]
        }
    };

    var LEVELS = {
        low:          { label: 'Low',           color: '#D94F4F', bg: '#F0DEDE', gradient: 'linear-gradient(90deg, #E8A0A0, #D94F4F)' },
        belowAverage: { label: 'Below Average', color: '#D98F4F', bg: '#FFF3CD', gradient: 'linear-gradient(90deg, #E8C8A0, #D98F4F)' },
        aboveAverage: { label: 'Above Average', color: '#3C763D', bg: '#DFF0D8', gradient: 'linear-gradient(90deg, #A8D4A8, #6AAC6A)' },
        high:         { label: 'High',          color: '#3D7A7A', bg: '#D4EDED', gradient: 'linear-gradient(90deg, #8BC08B, #4D8F4D)' }
    };

    function getInterpolatedThresholds(age, sex) {
        var data = THRESHOLDS[sex];
        var decades = [20, 30, 40, 50, 60, 70];

        if (age <= 20) return data[20].slice();
        if (age >= 70) return data[70].slice();

        for (var i = 0; i < decades.length - 1; i++) {
            if (age >= decades[i] && age < decades[i + 1]) {
                var fraction = (age - decades[i]) / (decades[i + 1] - decades[i]);
                var lower = data[decades[i]];
                var upper = data[decades[i + 1]];
                return [
                    lower[0] + (upper[0] - lower[0]) * fraction,
                    lower[1] + (upper[1] - lower[1]) * fraction,
                    lower[2] + (upper[2] - lower[2]) * fraction
                ];
            }
        }

        return data[70].slice();
    }

    function classify(vo2, thresholds) {
        if (vo2 < thresholds[0]) return 'low';
        if (vo2 < thresholds[1]) return 'belowAverage';
        if (vo2 < thresholds[2]) return 'aboveAverage';
        return 'high';
    }

    function estimatePercentile(vo2, thresholds) {
        var gap1 = thresholds[1] - thresholds[0];
        var gap2 = thresholds[2] - thresholds[1];

        if (vo2 < thresholds[0]) {
            var lowerBound = thresholds[0] - gap1;
            if (vo2 <= lowerBound) return 1;
            var pct = 1 + (vo2 - lowerBound) / gap1 * 19;
            return Math.max(1, Math.min(19, Math.round(pct)));
        } else if (vo2 < thresholds[1]) {
            var pct = 20 + (vo2 - thresholds[0]) / gap1 * 20;
            return Math.round(pct);
        } else if (vo2 < thresholds[2]) {
            var pct = 40 + (vo2 - thresholds[1]) / gap2 * 20;
            return Math.round(pct);
        } else {
            var upperBound = thresholds[2] + gap2 * 2;
            if (vo2 >= upperBound) return 99;
            var pct = 60 + (vo2 - thresholds[2]) / (gap2 * 2) * 39;
            return Math.max(61, Math.min(99, Math.round(pct)));
        }
    }

    function getDescription(level, sex) {
        var group = sex === 'female' ? 'women' : 'men';
        switch (level) {
            case 'low':
                return 'Your cardio fitness is classified as Low for ' + group + ' your age. This places you in approximately the bottom 20% of the population. Low cardio fitness is associated with higher risks for cardiovascular disease and all-cause mortality. The good news: people starting from a lower baseline see the fastest improvements with regular exercise.';
            case 'belowAverage':
                return 'Your cardio fitness is Below Average for ' + group + ' your age, placing you between approximately the 20th and 40th percentile. Regular aerobic exercise 3\u20135 times per week can move you into the Above Average range within 8\u201312 weeks.';
            case 'aboveAverage':
                return 'Your cardio fitness is Above Average for ' + group + ' your age, placing you between approximately the 40th and 60th percentile. You are fitter than the majority of people your age. To reach the High classification, consider adding high-intensity interval training to your routine.';
            case 'high':
                return 'Your cardio fitness is classified as High for ' + group + ' your age, placing you above approximately the 60th percentile. This level is associated with significantly lower risks for cardiovascular disease and all-cause mortality. Consistent training will help maintain this as you age.';
        }
    }

    function getHealthContext(level) {
        switch (level) {
            case 'low':
                return 'Research from the Cleveland Clinic shows that low cardio fitness carries a greater mortality risk than smoking, diabetes, or heart disease. However, moving from Low to even Below Average reduces that risk dramatically. Starting a consistent exercise routine is the single most impactful change you can make.';
            case 'belowAverage':
                return 'Moving from Below Average to Above Average is associated with meaningful mortality reduction. A structured program combining Zone 2 training (3\u20134 times per week) with one high-intensity session per week is the most efficient path forward.';
            case 'aboveAverage':
                return 'Above Average fitness is a strong foundation for long-term health. Research shows continued improvements provide incremental longevity benefits with no upper limit. Consider mixing steady-state cardio with interval training for further gains.';
            case 'high':
                return 'High cardio fitness is strongly associated with longevity and reduced risk of chronic disease. Research shows no upper limit to the health benefits of higher fitness. Maintaining this level through consistent training is one of the most powerful things you can do for long-term health.';
        }
    }

    function ordinal(n) {
        var s = ['th', 'st', 'nd', 'rd'];
        var v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    var sex = 'male';

    var toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(function(b) {
                b.classList.remove('active');
                b.setAttribute('aria-checked', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-checked', 'true');
            sex = this.getAttribute('data-value');
        });
    });

    document.getElementById('calc-submit').addEventListener('click', function() {
        var age = parseInt(document.getElementById('age-input').value, 10);
        var vo2 = parseFloat(document.getElementById('vo2-input').value);

        if (!age || age < 20 || age > 99) {
            document.getElementById('age-input').focus();
            return;
        }
        if (!vo2 || vo2 < 5 || vo2 > 90) {
            document.getElementById('vo2-input').focus();
            return;
        }

        var thresholds = getInterpolatedThresholds(age, sex);
        var level = classify(vo2, thresholds);
        var percentile = estimatePercentile(vo2, thresholds);
        var info = LEVELS[level];

        // Classification
        var levelEl = document.getElementById('result-level');
        levelEl.textContent = info.label;
        levelEl.style.color = info.color;

        // Percentile badge
        var badgeEl = document.getElementById('result-percentile-badge');
        badgeEl.textContent = '~' + ordinal(percentile) + ' Percentile';
        badgeEl.style.background = info.bg;
        badgeEl.style.color = info.color;

        // Bar
        var barFill = document.getElementById('result-bar-fill');
        barFill.style.width = '0%';
        barFill.style.background = info.gradient;
        var marker = barFill.querySelector('.result-bar-marker');
        marker.style.background = info.color;
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                barFill.style.width = Math.max(2, percentile) + '%';
            });
        });

        // Details
        document.getElementById('result-vo2').textContent = vo2.toFixed(1) + ' ml/kg/min';

        var thresholdEl = document.getElementById('result-threshold');
        var thresholdLabelEl = document.getElementById('result-threshold-label');
        if (level === 'high') {
            thresholdEl.textContent = 'Highest Level';
            thresholdLabelEl.textContent = 'Classification';
        } else {
            var nextThreshold;
            var nextLabel;
            if (level === 'low') {
                nextThreshold = thresholds[0];
                nextLabel = 'Below Avg Starts At';
            } else if (level === 'belowAverage') {
                nextThreshold = thresholds[1];
                nextLabel = 'Above Avg Starts At';
            } else {
                nextThreshold = thresholds[2];
                nextLabel = 'High Starts At';
            }
            thresholdEl.textContent = nextThreshold.toFixed(1) + ' ml/kg/min';
            thresholdLabelEl.textContent = nextLabel;
        }

        // Description and health context
        document.getElementById('result-description').textContent = getDescription(level, sex);
        document.getElementById('result-health').textContent = getHealthContext(level);

        // Show result
        var resultEl = document.getElementById('result');
        resultEl.classList.add('visible');
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    ['age-input', 'vo2-input'].forEach(function(id) {
        document.getElementById(id).addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('calc-submit').click();
            }
        });
    });
})();
