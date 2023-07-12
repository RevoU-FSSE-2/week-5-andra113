const clickKonsultasi = document.getElementById('konsultasi')
const showHiddenKonsultasi = document.getElementById('hidden-shown')

clickKonsultasi.addEventListener('click', function() {
    if (showHiddenKonsultasi.style.display === 'none') {
        showHiddenKonsultasi.style.display = 'flex'
    } else {
        showHiddenKonsultasi.style.display = 'none'
    }
})