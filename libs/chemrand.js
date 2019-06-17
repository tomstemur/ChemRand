var reagents1 = ["1A","1B","1C","1D"];
var reagents2 = ["2A","2B","2C","2D"];
var re1;
var re2;
var prod;
var ansSmiles;

function qGen() {
  re1 = reagents1[Math.floor((Math.random()*reagents1.length))];
  re2 = reagents2[Math.floor((Math.random()*reagents2.length))];

  $('#reagent1').html('<img class="eqimg" width="200px" src="reagents/' + re1 + '.png" />');
  $('#reagent2').html('<img class="eqimg" height="40px" src="reagents/' + re2 + '.png" />');

  prod = re1+re2;

  for (var x=0; x < answers.length; x++) {
    if (answers[x].code == prod) {
      ansSmiles = answers[x].smiles;
    };
  };
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
  try {
    var testmol = getCurrMol();
    var testdata = Kekule.IO.saveFormatData(testmol, 'smi');
  } catch (err) {
    $('#product').html('<img width="50px" class="eqimg" src="images/n.png" />');
  } finally {
    var mol = getCurrMol();
    var data = Kekule.IO.saveFormatData(mol, 'smi');
    if (data == ansSmiles) {
     $('#product').html('<img width="50px" class="eqimg" src="images/y.png" />');
    } else {
     $('#product').html('<img width="50px" class="eqimg" src="images/n.png" />');
    };
  };
};

$(document).ready(qGen());
