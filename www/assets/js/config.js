

waldayu.transducers["izumo_compare"] = (function() {
    var correspondences = {'k': 'k', 'g': 'g', 's': 's', 'a': 'a'};
    var keys = ['k', 'g', 's', 'a'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Izumo",
        "underlying": "",
        "compare": "izumo_compare",
        "lettersInLanguage" : ['a', 'aa', 'i', 'ii', 'u', 'uu', 'e', 'ee', 'o', 'oo', 'ka', 'ga', 'ki', 'gi', 'ku', 'gu', 'ke', 'ge', 'ko', 'go', 'sa', 'za', 'si', 'zi', 'su', 'zu', 'se', 'ze', 'so', 'zo', 'ta', 'da', 'ci', 'cu', 'te', 'de', 'to', 'do', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'ba', 'pa', 'hi', 'bi', 'pi', 'hu', 'bu', 'pu', 'he', 'be', 'pe', 'ho', 'bo', 'po', 'ma', 'mi', 'mu', 'me', 'mo', 'ja', 'ji', 'ju', 'je', 'jo', 'ra', 'ri', 'ru', 're', 'rowa', 'wi', 'wu', 'we', 'wo', 'N']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
