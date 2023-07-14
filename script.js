const clickKonsultasi = document.getElementById('konsultasi')
const clickMentoring = document.getElementById('mentoring')
const clickTes = document.getElementById('tes')
const clickMenu = document.getElementById('button')

const navRightBar = document.getElementById('right-bar')
const showHiddenKonsultasi = document.getElementById('hidden-shown konsultasi')
const showHiddenMentoring = document.getElementById('hidden-shown mentoring')
const showHiddenTes = document.getElementById('hidden-shown tes')

clickKonsultasi.addEventListener('click', function() {
    if (showHiddenKonsultasi.style.display === 'none') {
        showHiddenKonsultasi.style.display = 'flex'
        showHiddenMentoring.style.display ='none'
        showHiddenTes.style.display = 'none'
    } else {
        showHiddenKonsultasi.style.display = 'none'
    }
})

clickMentoring.addEventListener('click', function() {
    if (showHiddenMentoring.style.display === 'none') {
        showHiddenMentoring.style.display = 'flex'
        showHiddenKonsultasi.style.display ='none'
        showHiddenTes.style.display = 'none'
    } else {
        showHiddenMentoring.style.display = 'none'
    }
})

clickTes.addEventListener('click', function() {
    if (showHiddenTes.style.display === 'none') {
        showHiddenTes.style.display = 'flex'
        showHiddenMentoring.style.display ='none'
        showHiddenKonsultasi.style.display = 'none'
    } else {
        showHiddenTes.style.display = 'none'
    }
})

clickMenu.addEventListener('click', function() {
    if (navRightBar.style.right === '-100%') {
        navRightBar.style.right = '0'
    } else {
        navRightBar.style.right = '-100%'
    }
    
    
})