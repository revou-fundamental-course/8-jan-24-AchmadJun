const kolominput = document.getElementById("inputkotak");
const textalert = document.getElementById("redalert");
const tmblhitung = document.getElementById("tmblhitung");
const tmblreset = document.getElementById("tmblreset");

const kolominputklng = document.getElementById("inputkotakkeliling");
const alerttext = document.getElementById("redalert-1");
const tmblhtngklng = document.getElementById("tmblhitungkeliling");
const tmblrstklng = document.getElementById("tmblresetkeliling");

//Mengitung Luas
kolominput.addEventListener('input', function() {
    const NilaiInput = kolominput.value.trim();
    if (validateInput(NilaiInput)) {
        textalert.style.display = 'none';
        tmblhitung.disabled = false;
    } else {
        textalert.style.display = 'block';
        tmblhitung.disabled = true;
    }
});

tmblhitung.addEventListener('click', function() {
    const NilaiInput = kolominput.value.trim();
    if (validateInput(NilaiInput)) {
        const luas = calculateLuas(NilaiInput);
        alert(`Luas Persegi dengan sisi ${NilaiInput} adalah ${luas}`);
    }
});

tmblreset.addEventListener('click', function() {
    kolominput.value = '';
    textalert.style.display = 'none';
    tmblhitung.disabled = false;
});

function validateInput(input) {
    const intRegex = /^-?\d+$/;
    return intRegex.test(input);
}

function calculateLuas(sisi) {
    return Math.pow(sisi, 2);
}

//Mengitung Keliling
kolominputklng.addEventListener('input', function() {
    const InputNilai = kolominputklng.value.trim();
    if (validateInput(InputNilai)) {
        alerttext.style.display = 'none';
        tmblhtngklng.disabled = false;
    } else {
        alerttext.style.display = 'block';
        tmblhtngklng.disabled = true;
    }
});

tmblhtngklng.addEventListener('click', function() {
    const InputNilai = kolominputklng.value.trim();
    if (validateInput(InputNilai)) {
        const keliling = calculateKeliling(InputNilai);
        alert(`Keliling Persegi dengan sisi ${InputNilai} adalah ${keliling}`);
    }
});

tmblrstklng.addEventListener('click', function() {
    kolominputklng.value = '';
    alerttext.style.display = 'none';
    tmblhtngklng.disabled = false;
});

function calculateKeliling(sisi) {
    return 4 * sisi;
}