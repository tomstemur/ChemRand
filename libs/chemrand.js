var reagents1 = ["1A","1B","1C","1D"];
var reagents2 = ["2A","2B","2C","2D"];
var re1;
var re2;
var prod;

function qGen() {
  re1 = reagents1[Math.floor((Math.random()*reagents1.length))];
  re2 = reagents2[Math.floor((Math.random()*reagents2.length))];

  $('#reagent1').html('<img class="eqimg" width="200px" src="reagents/' + re1 + '.png" />');
  $('#reagent2').html('<img class="eqimg" height="40px" src="reagents/' + re2 + '.png" />');

  prod = re1+re2;

  for (var x=0; x < answers.length; x++) {
    if (answers[x].code == prod) {
      var ansSmiles = answers[x].smiles;
    };
  };
console.log(ansSmiles);
};

function showSolution() {
  $('#product').html('<img class="eqimg" width="200px" src="products/' + prod + '.png" />');
};

function newReaction() {
   $('#product').html('<img width="50px" class="eqimg" src="images/qmark.png" />');
   qGen();
};

function getCurrMol() {
  return getChemViewer().getChemObj();
};

function getChemViewer() {
  return Kekule.Widget.getWidgetById('chemViewer');
};

function saveMolToData() {
  var mol = getCurrMol();
  var data = Kekule.IO.saveFormatData(mol, 'smi');
  console.log(data);
  return mol;
};

$(document).ready(qGen());
