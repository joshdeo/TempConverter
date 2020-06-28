init();
var ftoc, ctof, ftok, ctok, farCel, celFar, farKel, celKel, userInput;

ftoc.addEventListener('click', function () {
    farCel.style.display = 'flex';

    celFar.style.display = 'none';
    farKel.style.display = 'none';
    celKel.style.display = 'none';

    var fcInput = document.getElementById('fcinput').value;

    function fc() {
        var cel = (fcInput - 32) * 5 / 9;
        return cel;
    };

    var celsius = fc();

    var ftocOutput = document.querySelector('.farCel-output');
    ftocOutput.textContent = parseInt(Math.trunc(celsius));

});

ctof.addEventListener('click', function () {
    celFar.style.display = 'flex';

    farCel.style.display = 'none';
    farKel.style.display = 'none';
    celKel.style.display = 'none';

    var cfInput = document.getElementById('cfinput').value;

    function cf() {
        var far = cfInput * 9 / 5 + 32;
        return far;
    };

    var fahrenheit = cf();

    var ctofOutput = document.querySelector('.celFar-output');
    ctofOutput.textContent = parseInt(Math.trunc(fahrenheit));
});

ftok.addEventListener('click', function () {
    farKel.style.display = 'flex';

    farCel.style.display = 'none';
    celFar.style.display = 'none';
    celKel.style.display = 'none';

    var fkInput = document.getElementById('fkinput').value;

    function fk() {
        var kelvin = fkInput + 459.67 * 5 / 9;
        return kelvin;
    };

    var kelvinOut = fk();

    var ftokOutput = document.querySelector('.farKel-output');
    ftokOutput.textContent = parseInt(Math.trunc(kelvinOut));

});

ctok.addEventListener('click', function () {
    celKel.style.display = 'flex';

    farCel.style.display = 'none';
    celFar.style.display = 'none';
    farKel.style.display = 'none';

    var ckInput = document.getElementById('ckinput').value;

    function ck() {
        var kel = ckInput + 273.15;
        return kel;
    }

    var kelOut = ck();

    var ctokOutput = document.querySelector('.celKel-output');
    ctokOutput.textContent = parseInt(Math.trunc(kelOut));
});

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
};