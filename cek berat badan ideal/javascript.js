let selectedGender = 'male';

function selectGender(gender) {
    selectedGender = gender;
    document.querySelectorAll('.gender').forEach(el => el.classList.remove('selected'));
    document.querySelector(`.${gender}`).classList.add('selected');
}

function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const alertMessage = document.getElementById('alert-message');

    // Cek apakah input tinggi dan berat badan kosong
    if (!height || !weight) {
        alertMessage.innerText = "Tolong masukkan tinggi dan berat badan Anda!";
        return;
    } else {
        alertMessage.innerText = ""; // Hapus pesan error jika input tidak kosong
    }

    // Perhitungan BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    document.getElementById('display-height').innerText = height;
    document.getElementById('display-weight').innerText = weight;
    document.getElementById('bmi-point').innerText = bmi;
    document.getElementById('gender-result').innerText = `BMI untuk ${selectedGender === 'male' ? 'Laki-laki' : 'Perempuan'}`;

    // Tampilkan hasil dan sembunyikan form input
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    // Tentukan status BMI
    let bmiStatus = '';
    if (bmi < 18.5) {
        bmiStatus = 'Berat Badan Kurang';
    } else if (bmi < 24.9) {
        bmiStatus = 'Berat Badan Ideal';
    } else if (bmi < 29.9) {
        bmiStatus = 'Berat Badan Berlebih';
    } else {
        bmiStatus = 'Obesitas';
    }
    document.getElementById('bmi-status').innerText = bmiStatus;
}


function resetForm() {
    // Bersihkan nilai tinggi dan berat badan
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';

    // Sembunyikan hasil dan tampilkan input kembali
    document.getElementById('input-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}