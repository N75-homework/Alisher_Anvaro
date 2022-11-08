let img = prompt('Paste link to the pic'),
name = prompt('Enter your name'),
lastName = prompt('Enter your lastname'),
email = prompt('Enter your email'),
tel = prompt('Enter your phone number', 998),
add = prompt('Enter your  address'),
edu = prompt('What school did you go to'),
durOfedu = prompt('Your education period at this school. Ex: 2010-2021 or 2012-current'),
heu = prompt('Which university you finished'),
durOfHeu = prompt('Your education period at this university.'),
work = prompt('Where do you work'),
durOfWork = prompt('How long have you worked there')
top1.innerHTML = 
`
<h2 class="top1__name"> ${name} <br> ${lastName}</h2>
<a href=""  class="icon top1__tel"><i class="fa-solid fa-phone"></i> :  ${tel}</a>
<a href=""  class="icon top1__email"><i class="fa-solid fa-envelope"></i> :  ${email}</a>
<a href=""  class="icon top1__add"><i class="fa-solid fa-location-dot"></i> :  ${add}</a>
`
top2.innerHTML = 
`
<img class="img" src="${img}" alt="">
`

edu1.innerHTML = 
`
<p class="title"> ${durOfedu}</p>
<p class="subtitle"> ${edu}</p>
`

edu2.innerHTML = 
`
<p class="title"> ${durOfHeu}</p>
<p class="subtitle">${heu}</p>

`
exp1.innerHTML = 
`
<p class="title"> ${durOfWork}</p>
<p class="subtitle"> ${work}</p>
`


