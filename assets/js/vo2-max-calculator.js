(function() {
    'use strict';

    var DATA = {
        male: {
            '20-29': [[20,1],[33.0,5],[34.7,10],[36.5,20],[39.5,30],[42.5,40],[44.5,50],[46.5,60],[49.5,70],[52.5,80],[54.3,90],[56.0,95],[62,99]],
            '30-39': [[18,1],[31.5,5],[33.5,10],[35.5,20],[38.2,30],[41.0,40],[43.0,50],[45.0,60],[47.2,70],[49.5,80],[51.8,90],[54.0,95],[60,99]],
            '40-49': [[16,1],[30.2,5],[31.9,10],[33.6,20],[36.3,30],[39.0,40],[41.4,50],[43.8,60],[45.9,70],[48.1,80],[50.1,90],[52.0,95],[58,99]],
            '50-59': [[14,1],[26.1,5],[28.2,10],[30.2,20],[33.0,30],[35.8,40],[38.4,50],[41.0,60],[43.2,70],[45.4,80],[47.2,90],[49.0,95],[55,99]],
            '60-69': [[12,1],[20.5,5],[23.3,10],[26.1,20],[29.2,30],[32.3,40],[34.4,50],[36.5,60],[38.7,70],[41.0,80],[43.0,90],[45.0,95],[52,99]],
            '70+':   [[10,1],[17.5,5],[20.3,10],[23.1,20],[26.1,30],[29.1,40],[31.1,50],[33.1,60],[35.1,70],[37.1,80],[39.1,90],[41.0,95],[48,99]]
        },
        female: {
            '20-29': [[14,1],[23.6,5],[26.3,10],[29.0,20],[31.0,30],[33.0,40],[35.0,50],[37.0,60],[39.0,70],[41.1,80],[42.7,90],[44.2,95],[50,99]],
            '30-39': [[12,1],[22.8,5],[24.9,10],[27.0,20],[29.3,30],[31.5,40],[33.6,50],[35.7,60],[37.9,70],[40.1,80],[41.3,90],[42.4,95],[48,99]],
            '40-49': [[12,1],[21.0,5],[22.8,10],[24.5,20],[26.7,30],[29.0,40],[30.9,50],[32.9,60],[34.9,70],[37.0,80],[38.5,90],[40.0,95],[46,99]],
            '50-59': [[10,1],[20.2,5],[21.5,10],[22.8,20],[24.9,30],[27.0,40],[29.2,50],[31.5,60],[33.6,70],[35.8,80],[36.9,90],[38.0,95],[44,99]],
            '60-69': [[10,1],[17.5,5],[18.8,10],[20.2,20],[22.3,30],[24.5,40],[26.3,50],[28.1,60],[30.1,70],[32.1,80],[33.6,90],[35.0,95],[42,99]],
            '70+':   [[8,1],[15.0,5],[16.2,10],[17.5,20],[19.8,30],[22.1,40],[23.6,50],[25.1,60],[27.1,70],[29.1,80],[30.6,90],[32.0,95],[38,99]]
        }
    };

    function getAgeGroup(age) {
        if (age < 30) return '20-29';
        if (age < 40) return '30-39';
        if (age < 50) return '40-49';
        if (age < 60) return '50-59';
        if (age < 70) return '60-69';
        return '70+';
    }

    function interpolate(vo2, table) {
        if (vo2 <= table[0][0]) return table[0][1];
        if (vo2 >= table[table.length - 1][0]) return table[table.length - 1][1];
        for (var i = 0; i < table.length - 1; i++) {
            if (vo2 >= table[i][0] && vo2 <= table[i + 1][0]) {
                var range = table[i + 1][0] - table[i][0];
                var pctRange = table[i + 1][1] - table[i][1];
                var ratio = (vo2 - table[i][0]) / range;
                return Math.round(table[i][1] + ratio * pctRange);
            }
        }
        return 50;
    }

    function getMedian(table) {
        for (var i = 0; i < table.length - 1; i++) {
            if (table[i][1] <= 50 && table[i + 1][1] >= 50) {
                return table[i + 1][0];
            }
        }
        return table[Math.floor(table.length / 2)][0];
    }

    function getCategory(pct) {
        if (pct >= 95) return { label: 'Superior', bg: '#D4EDED', color: '#3D7A7A' };
        if (pct >= 80) return { label: 'Excellent', bg: '#D4EDED', color: '#3D7A7A' };
        if (pct >= 60) return { label: 'Good', bg: '#DFF0D8', color: '#3C763D' };
        if (pct >= 40) return { label: 'Above Average', bg: '#DFF0D8', color: '#3C763D' };
        if (pct >= 20) return { label: 'Average', bg: '#FFF3CD', color: '#856404' };
        if (pct >= 5)  return { label: 'Below Average', bg: '#F0DEDE', color: '#8B4A4A' };
        return { label: 'Poor', bg: '#F0DEDE', color: '#8B4A4A' };
    }

    function getDescription(pct, sex) {
        var group = sex === 'female' ? 'women' : 'men';
        if (pct >= 95) return 'Your VO2 Max is in the top 5% of ' + group + ' your age. This level of cardio fitness is typical of trained endurance athletes.';
        if (pct >= 80) return 'Your VO2 Max indicates excellent cardiovascular fitness. You are fitter than roughly ' + pct + '% of ' + group + ' your age.';
        if (pct >= 60) return 'Your VO2 Max is above average. You are fitter than roughly ' + pct + '% of ' + group + ' your age. Consistent training can push this higher.';
        if (pct >= 40) return 'Your VO2 Max is above the midpoint for ' + group + ' your age. Adding high-intensity intervals to your routine can drive further improvement.';
        if (pct >= 20) return 'Your VO2 Max is in the average range for ' + group + ' your age. Regular aerobic exercise can improve this over 6-12 weeks.';
        if (pct >= 5)  return 'Your VO2 Max is below average for ' + group + ' your age. A consistent aerobic exercise routine 3-5 times per week can make a meaningful difference.';
        return 'Your VO2 Max is lower than most ' + group + ' your age. Consider starting a structured exercise program and speaking with your doctor.';
    }

    function ordinal(n) {
        var s = ['th','st','nd','rd'];
        var v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    var sex = 'male';
    var currentTable = null;
    var currentVo2 = null;

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

    var slider = document.getElementById('whatif-slider');
    var whatifValue = document.getElementById('whatif-value');
    var whatifResult = document.getElementById('whatif-result');

    slider.addEventListener('input', function() {
        if (!currentTable) return;
        var val = parseFloat(this.value);
        whatifValue.textContent = val.toFixed(1) + ' ml/kg/min';
        var newPct = interpolate(val, currentTable);
        var diff = val - currentVo2;
        var sign = diff > 0 ? '+' : '';
        whatifResult.innerHTML = 'At <strong>' + val.toFixed(1) + '</strong> ml/kg/min (' + sign + diff.toFixed(1) + '), you would be in the <strong>' + ordinal(newPct) + '</strong> percentile.';
    });

    document.getElementById('calc-submit').addEventListener('click', function() {
        var age = parseInt(document.getElementById('age-input').value, 10);
        var vo2 = parseFloat(document.getElementById('vo2-input').value);

        if (!age || age < 20 || age > 99) {
            document.getElementById('age-input').focus();
            return;
        }
        if (!vo2 || vo2 < 10 || vo2 > 90) {
            document.getElementById('vo2-input').focus();
            return;
        }

        var ageGroup = getAgeGroup(age);
        var table = DATA[sex][ageGroup];
        currentTable = table;
        currentVo2 = vo2;

        var percentile = interpolate(vo2, table);
        var median = getMedian(table);
        var category = getCategory(percentile);
        var description = getDescription(percentile, sex);

        document.getElementById('result-percentile').textContent = ordinal(percentile);
        document.getElementById('result-vo2').textContent = vo2.toFixed(1) + ' ml/kg/min';
        document.getElementById('result-median').textContent = median.toFixed(1) + ' ml/kg/min';
        document.getElementById('result-description').textContent = description;

        var catEl = document.getElementById('result-category');
        catEl.textContent = category.label;
        catEl.style.background = category.bg;
        catEl.style.color = category.color;

        var barFill = document.getElementById('result-bar-fill');
        barFill.style.width = '0%';
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                barFill.style.width = Math.max(2, percentile) + '%';
            });
        });

        var sliderMin = Math.max(10, Math.floor(vo2 - 10));
        var sliderMax = Math.min(70, Math.ceil(vo2 + 15));
        slider.min = sliderMin;
        slider.max = sliderMax;
        slider.value = vo2;
        whatifValue.textContent = vo2.toFixed(1) + ' ml/kg/min';
        whatifResult.innerHTML = 'Drag the slider to explore how a change in VO2 Max would affect your percentile.';

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
