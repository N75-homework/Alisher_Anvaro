//  2.task










// 3. OTM TASK
const eco = 'TDIU',
fin = 'TDMI',
nat = 'MU'

let name = prompt('Ismingizni kiriting'),
otm = prompt(`${name},qaysi OTM tanlaysiz:
1.${eco}
2.${fin}
3.${nat}
PS: Nomini misoldagidek kiriting :)
`),
addScore = prompt(`${name}, toplagan balingizni kiriting`);

if(otm != eco && otm != fin && otm != nat ) {
    alert(`OTM nomini togri kiriting:)`)
}else if(otm === eco && addScore > 150){
    alert(`Siz ${eco} ga grantga kirdiz `)
}else if( otm === eco && addScore > 120 && addScore < 150){
    alert(`Siz ${eco} ga kontraktga  kirdiz `)
}else if( otm === eco && addScore < 120){
    alert(`Sizni ballingiz ${eco}ga etmadi. Siz yiqildiz `)
}else if(otm === fin && addScore > 160){
    alert(`Siz ${fin} ga grantga kirdiz `)
}else if( otm === fin && addScore > 100 && addScore < 160){
    alert(`Siz ${fin} ga kontraktga  kirdiz `)
}else if( otm === fin && addScore < 100){
    alert(`Sizni ballingiz ${fin}ga etmadi. Siz yiqildiz `)
}else if(otm === nat && addScore > 180){
    alert(`Siz ${nat} ga grantga kirdiz `)
}else if( otm === nat && addScore > 168 && addScore < 180){
    alert(`Siz ${nat} ga kontraktga  kirdiz `)
}else if( otm === nat && addScore < 168){
    alert(`Sizni ballingiz ${nat} ga etmadi. Siz yiqildiz `)
}else if(typeof(addScore) != 'Number'){
    alert('Son kiriting')
};










    