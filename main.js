init();
var ftoc, ctof, ftok, ctok, farCel, celFar, farKel, celKel, userInput;
/* FAHRENHEIT TO CELSIUS */

function fc() {
    var fcInput = document.getElementById('fcinput').value;

    var fcInput = fcInput.toString();
    var cel = (fcInput - 32) * 5 / 9;

    cel = cel.toString();

    ftocOutput = document.querySelector('.farCel-output');
    ftocOutput.textContent = (Math.trunc(cel)) + `℃`;
    ftocOutput = ftocOutput.toString();

    return cel;
};

ftoc.addEventListener('click', function () {
    farCel.style.display = 'flex';
    document.querySelector('.conversion-facts-far').style.display = 'block';
    document.querySelector('.conversion-facts-cel').style.display = 'none';
    document.querySelector('.conversion-facts-kel').style.display = 'none';

    celFar.style.display = 'none';
    farKel.style.display = 'none';
    celKel.style.display = 'none';
});

/* CELSIUS TO FAHRENHEIT */
function cf() {

    var cfInput = document.getElementById('cfinput').value;
    var far = cfInput * 9 / 5 + 32;
    var ctofOutput = document.querySelector('.celFar-output');
    ctofOutput.textContent = (Math.trunc(far)) + `℉`;
    return far;
};

ctof.addEventListener('click', function () {
    celFar.style.display = 'flex';

    document.querySelector('.conversion-facts-far').style.display = 'none';
    document.querySelector('.conversion-facts-cel').style.display = 'block';
    document.querySelector('.conversion-facts-kel').style.display = 'none';

    farCel.style.display = 'none';
    farKel.style.display = 'none';
    celKel.style.display = 'none';
});

/* FAHRENHEIT TO KELVIN */
function fk() {
    var fkInput = document.getElementById('fkinput').value;
    var kelvin = (fkInput - 32) * 5 / 9 + 273.15;
    var ftokOutput = document.querySelector('.farKel-output');
    ftokOutput.textContent = parseInt(Math.trunc(kelvin)) + `°K`;
    return kelvin;
};

ftok.addEventListener('click', function () {
    farKel.style.display = 'flex';

    document.querySelector('.conversion-facts-far').style.display = 'none';
    document.querySelector('.conversion-facts-cel').style.display = 'none';
    document.querySelector('.conversion-facts-kel').style.display = 'block';

    farCel.style.display = 'none';
    celFar.style.display = 'none';
    celKel.style.display = 'none';
});

/* CELSIUS TO KELVIN */
function ck() {
    var ckInput = document.getElementById('ckinput').value;
    var kel = ckInput * 5 / 9 + 273.15;
    var ctokOutput = document.querySelector('.celKel-output');
    ctokOutput.textContent = parseInt(Math.trunc(kel)) + `°K`;
    return kel;
};

ctok.addEventListener('click', function () {
    celKel.style.display = 'flex';

    document.querySelector('.conversion-facts-far').style.display = 'none';
    document.querySelector('.conversion-facts-cel').style.display = 'none';
    document.querySelector('.conversion-facts-kel').style.display = 'block';

    farCel.style.display = 'none';
    celFar.style.display = 'none';
    farKel.style.display = 'none';
});

/* INIT */
function init() {
    ftoc = document.querySelector('.ftoc');
    ctof = document.querySelector('.ctof');
    ftok = document.querySelector('.ftok');
    ctok = document.querySelector('.ctok');

    farCel = document.getElementById('farCel');
    celFar = document.getElementById('celFar');
    farKel = document.getElementById('farKel');
    celKel = document.getElementById('celKel');

    farCel.style.display = 'none';
    celFar.style.display = 'none';
    farKel.style.display = 'none';
    celKel.style.display = 'none';

    // facts 
    document.querySelector('.conversion-facts-far').style.display = 'none';
    document.querySelector('.conversion-facts-cel').style.display = 'none';
    document.querySelector('.conversion-facts-kel').style.display = 'none';
};