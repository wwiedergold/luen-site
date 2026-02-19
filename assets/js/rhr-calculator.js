(function() {
    'use strict';

    var DATA = {
        male: {
            '18-25': [[40,99],[46,97],[52,93],[56,88],[60,80],[65,65],[69,50],[73,35],[77,22],[81,12],[85,6],[90,3],[100,1]],
            '26-35': [[40,99],[46,97],[52,93],[55,88],[59,80],[64,65],[68,50],[72,35],[76,22],[81,12],[85,6],[90,3],[100,1]],
            '36-45': [[40,99],[47,97],[53,93],[57,88],[61,80],[65,65],[69,50],[73,35],[77,22],[82,12],[86,6],[92,3],[100,1]],
            '46-55': [[40,99],[47,97],[54,93],[58,88],[62,80],[66,65],[70,50],[74,35],[78,22],[83,12],[87,6],[92,3],[100,1]],
            '56-65': [[40,99],[46,97],[53,93],[57,88],[61,80],[65,65],[69,50],[73,35],[77,22],[81,12],[85,6],[90,3],[100,1]],
            '65+':   [[40,99],[46,97],[52,93],[56,88],[60,80],[64,65],[68,50],[72,35],[76,22],[80,12],[84,6],[90,3],[100,1]]
        },
        female: {
            '18-25': [[42,99],[48,97],[55,93],[60,88],[65,80],[69,65],[73,50],[77,35],[81,22],[85,12],[90,6],[95,3],[105,1]],
            '26-35': [[42,99],[48,97],[54,93],[59,88],[64,80],[68,65],[72,50],[76,35],[80,22],[84,12],[89,6],[94,3],[105,1]],
            '36-45': [[42,99],[48,97],[55,93],[60,88],[64,80],[68,65],[72,50],[76,35],[80,22],[85,12],[90,6],[95,3],[105,1]],
            '46-55': [[42,99],[49,97],[55,93],[60,88],[65,80],[69,65],[73,50],[77,35],[81,22],[86,12],[90,6],[95,3],[105,1]],
            '56-65': [[42,99],[48,97],[54,93],[59,88],[64,80],[68,65],[72,50],[76,35],[80,22],[84,12],[88,6],[94,3],[105,1]],
            '65+':   [[42,99],[48,97],[54,93],[59,88],[64,80],[68,65],[71,50],[75,35],[79,22],[83,12],[88,6],[93,3],[105,1]]
        }
    };

    function getAgeGroup(age) {
        if (age < 26) return '18-25';
        if (age < 36) return '26-35';
        if (age < 46) return '36-45';
        if (age < 56) return '46-55';
        if (age < 66) return '56-65';
        return '65+';
    }

    function interpolate(bpm, table) {
        if (bpm <= table[0][0]) return table[0][1];
        if (bpm >= table[table.length - 1][0]) return table[table.length - 1][1];
        for (var i = 0; i < table.length - 1; i++) {
            if (bpm >= table[i][0] && bpm <= table[i + 1][0]) {
                var bpmRange = table[i + 1][0] - table[i][0];
                var pctRange = table[i + 1][1] - table[i][1];
                var ratio = (bpm - table[i][0]) / bpmRange;
                return Math.round(table[i][1] + ratio * pctRange);
            }
        }
        return 50;
    }

    function getMedian(table) {
        for (var i = 0; i < table.length - 1; i++) {
            if (table[i][1] >= 50 && table[i + 1][1] <= 50) {
                return table[i][0];
            }
        }
        return table[Math.floor(table.length / 2)][0];
    }

    function getCategory(pct) {
        if (pct >= 90) return { label: 'Athlete', bg: '#D4EDED', color: '#3D7A7A' };
        if (pct >= 70) return { label: 'Excellent', bg: '#D4EDED', color: '#3D7A7A' };
        if (pct >= 50) return { label: 'Good', bg: '#DFF0D8', color: '#3C763D' };
        if (pct >= 30) return { label: 'Average', bg: '#FFF3CD', color: '#856404' };
        if (pct >= 10) return { label: 'Below Average', bg: '#F0DEDE', color: '#8B4A4A' };
        return { label: 'Low', bg: '#F0DEDE', color: '#8B4A4A' };
    }

    function getDescription(pct, sex) {
        var pronoun = sex === 'female' ? 'women' : 'men';
        if (pct >= 90) return 'Your resting heart rate is in the top 10% of ' + pronoun + ' your age. This level of cardiovascular fitness is typical of trained endurance athletes.';
        if (pct >= 70) return 'Your resting heart rate indicates excellent cardiovascular fitness. You are fitter than roughly ' + pct + '% of ' + pronoun + ' your age.';
        if (pct >= 50) return 'Your resting heart rate is above average. You are fitter than roughly ' + pct + '% of ' + pronoun + ' your age. Consistent exercise can push this higher.';
        if (pct >= 30) return 'Your resting heart rate is in the average range for ' + pronoun + ' your age. Regular aerobic exercise can improve this over 4-8 weeks.';
        if (pct >= 10) return 'Your resting heart rate is below average for ' + pronoun + ' your age. Adding consistent aerobic exercise 3-5 times per week can lower it within weeks.';
        return 'Your resting heart rate is higher than most ' + pronoun + ' your age. Consider starting a consistent exercise routine and speaking with your doctor if you have concerns.';
    }

    function ordinal(n) {
        var s = ['th','st','nd','rd'];
        var v = n % 100;
        return n + (s[(v-20)%10] || s[v] || s[0]);
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
        var rhr = parseInt(document.getElementById('rhr-input').value, 10);

        if (!age || age < 18 || age > 99) {
            document.getElementById('age-input').focus();
            return;
        }
        if (!rhr || rhr < 30 || rhr > 120) {
            document.getElementById('rhr-input').focus();
            return;
        }

        var ageGroup = getAgeGroup(age);
        var table = DATA[sex][ageGroup];
        var percentile = interpolate(rhr, table);
        var median = getMedian(table);
        var category = getCategory(percentile);
        var description = getDescription(percentile, sex);

        document.getElementById('result-percentile').textContent = ordinal(percentile);
        document.getElementById('result-rhr').textContent = rhr + ' bpm';
        document.getElementById('result-median').textContent = median + ' bpm';
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

        var resultEl = document.getElementById('result');
        resultEl.classList.add('visible');
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    ['age-input', 'rhr-input'].forEach(function(id) {
        document.getElementById(id).addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('calc-submit').click();
            }
        });
    });
})();
