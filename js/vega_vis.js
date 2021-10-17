var vg_1 = "diabetesPatientsGender.vg.json";
vegaEmbed("#gender", vg_1, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_2 = "map.vg.json";
vegaEmbed("#change", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "diabetesIsopleth.vg.json";
vegaEmbed("#isopleth", vg_3, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_4 = "causesOfDeath.vg.json";
vegaEmbed("#death", vg_4, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_5 = "diabetesPrediction.vg.json";
vegaEmbed("#predict", vg_5, {"actions": false}).then(function(result) {
}).catch(console.error);