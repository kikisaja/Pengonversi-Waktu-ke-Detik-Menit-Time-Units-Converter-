// --- 1. AMBIL ELEMEN DOM ---
const timeValueInput = document.getElementById("time-value");
const unitSelect = document.getElementById("unit-select");
const toast = document.getElementById("toast");

const valSeconds = document.getElementById("val-seconds");
const valMinutes = document.getElementById("val-minutes");
const valHours = document.getElementById("val-hours");
const valDays = document.getElementById("val-days");
const valWeeks = document.getElementById("val-weeks");

// Rasio konversi berbasis DETIK (base unit = second)
const SECONDS_IN = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800
};

// --- 2. FUNGSI FORMAT ANGKA DESIMAL ---
function formatNumber(num) {
    if (isNaN(num)) return "0";
    // Jika angka bulat, tampilkan tanpa desimal. Jika desimal, maksimal 4 digit
    return Number.isInteger(num) ? num.toString() : parseFloat(num.toFixed(4)).toString();
}

// --- 3. LOGIKA KONVERSI REAL-TIME ---
function convertTime() {
    const inputVal = parseFloat(timeValueInput.value);
    const fromUnit = unitSelect.value;

    if (isNaN(inputVal) || inputVal < 0) {
        valSeconds.textContent = "0";
        valMinutes.textContent = "0";
        valHours.textContent = "0";
        valDays.textContent = "0";
        valWeeks.textContent = "0";
        return;
    }

    // Langkah 1: Ubah nilai input ke detik terlebih dahulu (base conversion)
    const totalSeconds = inputVal * SECONDS_IN[fromUnit];

    // Langkah 2: Konversi dari detik total ke masing-masing satuan
    valSeconds.textContent = formatNumber(totalSeconds / SECONDS_IN.seconds);
    valMinutes.textContent = formatNumber(totalSeconds / SECONDS_IN.minutes);
    valHours.textContent = formatNumber(totalSeconds / SECONDS_IN.hours);
    valDays.textContent = formatNumber(totalSeconds / SECONDS_IN.days);
    valWeeks.textContent = formatNumber(totalSeconds / SECONDS_IN.weeks);
}

// --- 4. FUNGSI COPY TO CLIPBOARD ---
function copyValue(elementId) {
    const textToCopy = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Teks berhasil disalin! 🚀");
    }).catch(() => {
        showToast("Gagal menyalin teks.");
    });
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// --- 5. EVENT LISTENERS ---
timeValueInput.addEventListener("input", convertTime);
unitSelect.addEventListener("change", convertTime);

// Inisialisasi kalkulasi awal
convertTime();
