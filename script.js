

const poems = {
    p1: "Ne çıkar yanımda olmasan! / Kalbim senden ibaret değil mi? / Uzaktan sevmek zor demişsin, / Etme sevdam. / Görmeden sevmek ibadet değil mi?",
    p2: "Dün seni sevdim, / Bugün de seviyorum. / Öbür gün borcum olsun. / Yaşarsam söz, / Yine seni seveceğim.",
    p3: "Bin yıl ömrüm olsaydı, / Bin yıl seni severdim. / Bin yıl benim olsaydın, / Bin yıl yine isterdim.",
    p4: "Yaşım henüz yirmilerde, sana kırk senedir aşığım.",
    p5: "Dünya ele avuca sığarmış, elini tutunca anladım.",
    p6: "Fotoğrafını çekmek istediğim bir sürü yer var, hepsinin önünde sen dur istiyorum.",
    p7: "Uzun bir yolda denizi görmek gibisin.",
    p8: "Ben aşk nedir bilmem. / Eski kafalıyım. / Bir seni bilirim, / Bir de adın geçince sıkışan kalbimi.",
    p9: "Senin kusur sandığın her zerrene aşığım.",
    p10: "Rüzgâr yine kokunu getirdi, anlayacağın canım burnumda.",
    p11: "Beklemek Cehennemdir, ama beklerim seni",
}

const wall = document.getElementById('poem-wall');
const rowCount = 18; // row number
const poemValues = Object.values(poems);

for (let i = 0; i < rowCount; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    const track = document.createElement('div');
    track.className = 'track';

    let rowText = "";
    for(let j = 0; j < 10; j++) {
        rowText += poemValues[Math.floor(Math.random() * poemValues.length)] + " — ";
    }

    track.innerHTML = `<span>${rowText}</span><span>${rowText}</span>`;

    // speed between 120-180
    const speed = Math.floor(Math.random() * 60) + 120;
    track.style.animationDuration = `${speed}s`;

    // Randomize starting delay so they don't all start at the same spot
    track.style.animationDelay = `-${Math.random() * 20}s`;

    row.appendChild(track);
    wall.appendChild(row);
}

/*   MOBİL   */

const splash = document.querySelector('.splash');
const splashHover = document.querySelector('.splash-hover');

// Mobil: basılı tut
splash.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Sayfanın scroll/zoom yapmasını engelle
    splashHover.style.opacity = '1';
});

splash.addEventListener('touchend', () => {
    splashHover.style.opacity = '0';
});

splash.addEventListener('touchcancel', () => {
    splashHover.style.opacity = '0';
});