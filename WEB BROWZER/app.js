let aboutsec = document.getElementById(`aboutsec`) ; 
let aboutdiv = document.getElementById(`aboutdiv`) ;
aboutsec.style.display = `flex`
aboutsec.style.flexDirection = `column`
aboutsec.style.alignItems = `center`
aboutdiv.style.marginTop = `15vh`
let more1 = document.getElementById(`more1`) ;
let more2 = document.getElementById(`more2`) ;
let more3 = document.getElementById(`more3`) ;
let carouselExample = document.getElementById(`carouselExample`) ;
let sec = document.getElementById(`sec`) ;
let three = document.getElementById(`three`) ;
let results = document.getElementById(`results`) ;
let importers = document.getElementById(`importers`) ;
let first_fert = document.getElementById(`first_fert`) ;
let second_pest = document.getElementById(`second_pest`) ;
let third_seed = document.getElementById(`third_seed`) ;
let nav = document.getElementById(`nav`) ;
let firstfertimg = document.getElementById(`firstfertimg`) ;
let secpestimg = document.getElementById(`secpestimg`) ;
let thirdseedimg = document.getElementById(`thirdseedimg`) ;

more1.addEventListener(`click` , function () {
    carouselExample.style.display = `none`
    sec.style.display = `none`
    three.style.display = `none`
    results.style.display = `none`
    importers.style.display = `none`
    aboutsec.style.display = `none`
    nav.style.display = `none`
    first_fert.style.display = `block`
    firstfertimg.style.display = `block`
})

more2.addEventListener(`click` , function () {
    carouselExample.style.display = `none`
    sec.style.display = `none`
    three.style.display = `none`
    results.style.display = `none`
    importers.style.display = `none`
    aboutsec.style.display = `none`
    nav.style.display = `none`
    second_pest.style.display = `block`
    secpestimg.style.display = `block`
})

more3.addEventListener(`click` , function () {
    carouselExample.style.display = `none`
    sec.style.display = `none`
    three.style.display = `none`
    results.style.display = `none`
    importers.style.display = `none`
    aboutsec.style.display = `none`
    nav.style.display = `none`
    third_seed.style.display = `block`
    thirdseedimg.style.display = `block`
})

firstfertimg.addEventListener(`click` , function () {
    carouselExample.style.display = `none`
    sec.style.display = `block`
    three.style.display = `block`
    results.style.display = `block`
    importers.style.display = `block`
    aboutsec.style.display = `block`
    nav.style.display = `block`
    first_fert.style.display = `none`
    firstfertimg.style.display = `none`
})

secpestimg.addEventListener(`click` , function () {
    carouselExample.style.display = `none`
    sec.style.display = `block`
    three.style.display = `block`
    results.style.display = `block`
    importers.style.display = `block`
    aboutsec.style.display = `block`
    nav.style.display = `block`
    second_pest.style.display = `none`
    secpestimg.style.display = `none`
})

thirdseedimg.addEventListener(`click` , function () {
    carouselExample.style.display = `none`
    sec.style.display = `block`
    three.style.display = `block`
    results.style.display = `block`
    importers.style.display = `block`
    aboutsec.style.display = `block`
    nav.style.display = `block`
    third_seed.style.display = `none`
    thirdseedimg.style.display = `none`
})

let armor = document.getElementById(`armor`) ;
let armorImg = document.getElementById(`armorImg`) ;
let armorp1 = document.getElementById(`armorp1`) ;
let armorp2 = document.getElementById(`armorp2`) ;
let armorp3 = document.getElementById(`armorp3`) ;
let armorimg = document.querySelector(`#armor div`) ;

armor.addEventListener(`mouseover` , function () {
    armor.style.transition = `all , 0.5s`
    armor.style.display = `flex` 
    armor.style.justifyContent = `center` 
    armor.style.alignItems = `center`
    armor.style.flexDirection = `column`
    armorImg.style.height = `0px`
    armor.style.backgroundColor = `green`
    armorp1.innerText = `active substance ՝ Acetamiprid 20 + Lambda 15`
    armorp1.style.fontSize = `14px`
    armorp1.style.color = `white`
    armorp2.innerText = `made in Germany`
    armorp2.style.fontSize = `14px`
    armorp2.style.color = `white`
    armorp3.innerText = `creater ՝ DVA agro`
    armorp3.style.fontSize = `14px`
    armorp3.style.color = `white`
    armorimg.style.marginLeft = `0px`
})

armor.addEventListener(`mouseleave` , function () {
    armorImg.style.height = `400px`
    armor.style.backgroundColor = `transparent`
    armorp1.innerText = ``
    armorp2.innerText = ``
    armorp3.innerText = ``
    armorimg.style.marginLeft = `0px`
})

let fipro = document.getElementById(`fipro`) ;
let fiproImg = document.getElementById(`fiproImg`) ;
let fiprop1 = document.getElementById(`fiprop1`) ;
let fiprop2 = document.getElementById(`fiprop2`) ;
let fiprop3 = document.getElementById(`fiprop3`) ;
let fiproimg = document.querySelector(`#fipro div`) ;

fipro.addEventListener(`mouseover` , function () {
    fipro.style.transition = `all , 0.5s`
    fipro.style.display = `flex` 
    fipro.style.justifyContent = `center` 
    fipro.style.alignItems = `center`
    fipro.style.flexDirection = `column`
    fiproImg.style.height = `0px`
    fipro.style.backgroundColor = `green`
    fiprop1.innerText = `active substance ՝fipronil + cloropirifos`
    fiprop1.style.fontSize = `14px`
    fiprop1.style.color = `white`
    fiprop2.innerText = `made in India`
    fiprop2.style.fontSize = `14px`
    fiprop2.style.color = `white`
    fiprop3.innerText = `creater ՝ Parijat`
    fiprop3.style.fontSize = `14px`
    fiprop3.style.color = `white`
    fiproimg.style.marginLeft = `0px`
})

fipro.addEventListener(`mouseleave` , function () {
    fiproImg.style.height = `400px`
    fipro.style.backgroundColor = `transparent`
    fiprop1.innerText = ``
    fiprop2.innerText = ``
    fiprop3.innerText = ``
    fiproimg.style.marginLeft = `0px`
})

let medal = document.getElementById(`medal`) ;
let medalImg = document.getElementById(`medalImg`) ;
let medalp1 = document.getElementById(`medalp1`) ;
let medalp2 = document.getElementById(`medalp2`) ;
let medalp3 = document.getElementById(`medalp3`) ;
let medalimg = document.querySelector(`#medal div`) ;

medal.addEventListener(`mouseover` , function () {
    medal.style.transition = `all , 0.5s`
    medal.style.display = `flex` 
    medal.style.justifyContent = `center` 
    medal.style.alignItems = `center`
    medal.style.flexDirection = `column`
    medalImg.style.height = `0px`
    medal.style.backgroundColor = `green`
    medalp1.innerText = `active substance ՝ tiametocsam`
    medalp1.style.fontSize = `14px`
    medalp1.style.color = `white`
    medalp2.innerText = `made in India`
    medalp2.style.fontSize = `14px`
    medalp2.style.color = `white`
    medalp3.innerText = `creater ՝ Parijat`
    medalp3.style.fontSize = `14px`
    medalp3.style.color = `white`
    medalimg.style.marginLeft = `0px`
})

medal.addEventListener(`mouseleave` , function () {
    medalImg.style.height = `400px`
    medal.style.backgroundColor = `transparent`
    medalp1.innerText = ``
    medalp2.innerText = ``
    medalp3.innerText = ``
    medalimg.style.marginLeft = `0px`
})

let napaleon = document.getElementById(`napaleon`) ;
let napaleonImg = document.getElementById(`napaleonImg`) ;
let napaleonp1 = document.getElementById(`napaleonp1`) ;
let napaleonp2 = document.getElementById(`napaleonp2`) ;
let napaleonp3 = document.getElementById(`napaleonp3`) ;
let napaleonimg = document.querySelector(`#napaleon div`) ;

napaleon.addEventListener(`mouseover` , function () {
    napaleon.style.transition = `all , 0.5s`
    napaleon.style.display = `flex` 
    napaleon.style.justifyContent = `center` 
    napaleon.style.alignItems = `center`
    napaleon.style.flexDirection = `column`
    napaleonImg.style.height = `0px`
    napaleon.style.backgroundColor = `green`
    napaleonp1.innerText = `cloropirifos 480`
    napaleonp1.style.fontSize = `14px`
    napaleonp1.style.color = `white`
    napaleonp2.innerText = `made in India`
    napaleonp2.style.fontSize = `14px`
    napaleonp2.style.color = `white`
    napaleonp3.innerText = `creater ՝ Parijat`
    napaleonp3.style.fontSize = `14px`
    napaleonp3.style.color = `white`
    napaleonimg.style.marginLeft = `0px`
})

napaleon.addEventListener(`mouseleave` , function () {
    napaleonImg.style.height = `400px`
    napaleon.style.backgroundColor = `transparent`
    napaleonp1.innerText = ``
    napaleonp2.innerText = ``
    napaleonp3.innerText = ``
    napaleonimg.style.marginLeft = `0px`
})

let payt = document.getElementById(`payt`) ;
let paytImg = document.getElementById(`paytImg`) ;
let paytp1 = document.getElementById(`paytp1`) ;
let paytp2 = document.getElementById(`paytp2`) ;
let paytp3 = document.getElementById(`paytp3`) ;
let paytimg = document.querySelector(`#payt div`) ;

payt.addEventListener(`mouseover` , function () {
    payt.style.transition = `all , 0.5s`
    payt.style.display = `flex` 
    payt.style.justifyContent = `center` 
    payt.style.alignItems = `center`
    payt.style.flexDirection = `column`
    paytImg.style.height = `0px`
    payt.style.backgroundColor = `green`
    paytp1.innerText = `active substance ՝ bifentrin 100`
    paytp1.style.fontSize = `14px`
    paytp1.style.color = `white`
    paytp2.innerText = `made in India`
    paytp2.style.fontSize = `14px`
    paytp2.style.color = `white`
    paytp3.innerText = `creater ՝ Parijat`
    paytp3.style.fontSize = `14px`
    paytp3.style.color = `white`
    paytimg.style.marginLeft = `0px`
})

payt.addEventListener(`mouseleave` , function () {
    paytImg.style.height = `400px`
    payt.style.backgroundColor = `transparent`
    paytp1.innerText = ``
    paytp2.innerText = ``
    paytp3.innerText = ``
    paytimg.style.marginLeft = `0px`
})

let perfecto = document.getElementById(`perfecto`) ;
let perfectoImg = document.getElementById(`perfectoImg`) ;
let perfectop1 = document.getElementById(`perfectop1`) ;
let perfectop2 = document.getElementById(`perfectop2`) ;
let perfectop3 = document.getElementById(`perfectop3`) ;
let perfectoimg = document.querySelector(`#perfecto div`) ;

perfecto.addEventListener(`mouseover` , function () {
    perfecto.style.transition = `all , 0.5s`
    perfecto.style.display = `flex` 
    perfecto.style.justifyContent = `center` 
    perfecto.style.alignItems = `center`
    perfecto.style.flexDirection = `column`
    perfectoImg.style.height = `0px`
    perfecto.style.backgroundColor = `green`
    perfectop1.innerText = `active substance ՝ imidacloprid + lambda-cihalotrin 5%`
    perfectop1.style.fontSize = `14px`
    perfectop1.style.color = `white`
    perfectop2.innerText = `made in Germany`
    perfectop2.style.fontSize = `14px`
    perfectop2.style.color = `white`
    perfectop3.innerText = `creater ՝ DVA AGRO`
    perfectop3.style.fontSize = `14px`
    perfectop3.style.color = `white`
    perfectoimg.style.marginLeft = `0px`
})

perfecto.addEventListener(`mouseleave` , function () {
    perfectoImg.style.height = `400px`
    perfecto.style.backgroundColor = `transparent`
    perfectop1.innerText = ``
    perfectop2.innerText = ``
    perfectop3.innerText = ``
    perfectoimg.style.marginLeft = `0px`
})

let pirani = document.getElementById(`pirani`) ;
let piraniImg = document.getElementById(`piraniImg`) ;
let piranip1 = document.getElementById(`piranip1`) ;
let piranip2 = document.getElementById(`piranip2`) ;
let piranip3 = document.getElementById(`piranip3`) ;
let piraniimg = document.querySelector(`#pirani div`) ;

pirani.addEventListener(`mouseover` , function () {
    pirani.style.transition = `all , 0.5s`
    pirani.style.display = `flex` 
    pirani.style.justifyContent = `center` 
    pirani.style.alignItems = `center`
    pirani.style.flexDirection = `column`
    piraniImg.style.height = `0px`
    pirani.style.backgroundColor = `green`
    piranip1.innerText = `active substance ՝ emamektin bezoat 50g/kg`
    piranip1.style.fontSize = `14px`
    piranip1.style.color = `white`
    piranip2.innerText = `made in India`
    piranip2.style.fontSize = `14px`
    piranip2.style.color = `white`
    piranip3.innerText = `creater ՝ Parijat`
    piranip3.style.fontSize = `14px`
    piranip3.style.color = `white`
    piraniimg.style.marginLeft = `0px`
})

pirani.addEventListener(`mouseleave` , function () {
    piraniImg.style.height = `400px`
    pirani.style.backgroundColor = `transparent`
    piranip1.innerText = ``
    piranip2.innerText = ``
    piranip3.innerText = ``
    piraniimg.style.marginLeft = `0px`
})

let profeno = document.getElementById(`profeno`) ;
let profenoImg = document.getElementById(`profenoImg`) ;
let profenop1 = document.getElementById(`profenop1`) ;
let profenop2 = document.getElementById(`profenop2`) ;
let profenop3 = document.getElementById(`profenop3`) ;
let profenoimg = document.querySelector(`#profeno div`) ;

profeno.addEventListener(`mouseover` , function () {
    profeno.style.transition = `all , 0.5s`
    profeno.style.display = `flex` 
    profeno.style.justifyContent = `center` 
    profeno.style.alignItems = `center`
    profeno.style.flexDirection = `column`
    profenoImg.style.height = `0px`
    profeno.style.backgroundColor = `green`
    profenop1.innerText = `active substance ՝ profenofos 500`
    profenop1.style.fontSize = `14px`
    profenop1.style.color = `white`
    profenop2.innerText = `made in India`
    profenop2.style.fontSize = `14px`
    profenop2.style.color = `white`
    profenop3.innerText = `creater ՝ JUL`
    profenop3.style.fontSize = `14px`
    profenop3.style.color = `white`
    profenoimg.style.marginLeft = `0px`
})

profeno.addEventListener(`mouseleave` , function () {
    profenoImg.style.height = `400px`
    profeno.style.backgroundColor = `transparent`
    profenop1.innerText = ``
    profenop2.innerText = ``
    profenop3.innerText = ``
    profenoimg.style.marginLeft = `0px`
})

let shooter = document.getElementById(`shooter`) ;
let shooterImg = document.getElementById(`shooterImg`) ;
let shooterp1 = document.getElementById(`shooterp1`) ;
let shooterp2 = document.getElementById(`shooterp2`) ;
let shooterp3 = document.getElementById(`shooterp3`) ;
let shooterimg = document.querySelector(`#shooter div`) ;

shooter.addEventListener(`mouseover` , function () {
    shooter.style.transition = `all , 0.5s`
    shooter.style.display = `flex` 
    shooter.style.justifyContent = `center` 
    shooter.style.alignItems = `center`
    shooter.style.flexDirection = `column`
    shooterImg.style.height = `0px`
    shooter.style.backgroundColor = `green`
    shooterp1.innerText = `active substance ՝ lambda-cialotrin 50g/l`
    shooterp1.style.fontSize = `14px`
    shooterp1.style.color = `white`
    shooterp2.innerText = `made in India`
    shooterp2.style.fontSize = `14px`
    shooterp2.style.color = `white`
    shooterp3.innerText = `creater ՝ JUL`
    shooterp3.style.fontSize = `14px`
    shooterp3.style.color = `white`
    shooterimg.style.marginLeft = `0px`
})

shooter.addEventListener(`mouseleave` , function () {
    shooterImg.style.height = `400px`
    shooter.style.backgroundColor = `transparent`
    shooterp1.innerText = ``
    shooterp2.innerText = ``
    shooterp3.innerText = ``
    shooterimg.style.marginLeft = `0px`
})

let ultimate = document.getElementById(`ultimate`) ;
let ultimateImg = document.getElementById(`ultimateImg`) ;
let ultimatep1 = document.getElementById(`ultimatep1`) ;
let ultimatep2 = document.getElementById(`ultimatep2`) ;
let ultimatep3 = document.getElementById(`ultimatep3`) ;
let ultimateimg = document.querySelector(`#ultimate div`) ;

ultimate.addEventListener(`mouseover` , function () {
    ultimate.style.transition = `all , 0.5s`
    ultimate.style.display = `flex` 
    ultimate.style.justifyContent = `center` 
    ultimate.style.alignItems = `center`
    ultimate.style.flexDirection = `column`
    ultimateImg.style.height = `0px`
    ultimate.style.backgroundColor = `green`
    ultimatep1.innerText = `active substance ՝ cloropirifos 500 + cipermetrin 50`
    ultimatep1.style.fontSize = `14px`
    ultimatep1.style.color = `white`
    ultimatep2.innerText = `made in India`
    ultimatep2.style.fontSize = `14px`
    ultimatep2.style.color = `white`
    ultimatep3.innerText = `creater ՝ Parijat`
    ultimatep3.style.fontSize = `14px`
    ultimatep3.style.color = `white`
    ultimateimg.style.marginLeft = `0px`
})

ultimate.addEventListener(`mouseleave` , function () {
    ultimateImg.style.height = `400px`
    ultimate.style.backgroundColor = `transparent`
    ultimatep1.innerText = ``
    ultimatep2.innerText = ``
    ultimatep3.innerText = ``
    ultimateimg.style.marginLeft = `0px`
})

let maksak = document.getElementById(`maksak`) ;
let maksakImg = document.getElementById(`maksakImg`) ;
let maksakp1 = document.getElementById(`maksakp1`) ;
let maksakp2 = document.getElementById(`maksakp2`) ;
let maksakp3 = document.getElementById(`maksakp3`) ;
let maksakimg = document.querySelector(`#maksak div`) ;

maksak.addEventListener(`mouseover` , function () {
    maksak.style.transition = `all , 0.5s`
    maksak.style.display = `flex` 
    maksak.style.justifyContent = `center` 
    maksak.style.alignItems = `center`
    maksak.style.flexDirection = `column`
    maksakImg.style.height = `0px`
    maksak.style.backgroundColor = `green`
    maksakp1.innerText = `active substance ՝ alfa cipermetrin 100g/l`
    maksakp1.style.fontSize = `14px`
    maksakp1.style.color = `white`
    maksakp2.innerText = `made in India`
    maksakp2.style.fontSize = `14px`
    maksakp2.style.color = `white`
    maksakp3.innerText = `creater ՝ JUL`
    maksakp3.style.fontSize = `14px`
    maksakp3.style.color = `white`
    maksakimg.style.marginLeft = `0px`
})

maksak.addEventListener(`mouseleave` , function () {
    maksakImg.style.height = `400px`
    maksak.style.backgroundColor = `transparent`
    maksakp1.innerText = ``
    maksakp2.innerText = ``
    maksakp3.innerText = ``
    maksakimg.style.marginLeft = `0px`
})

let samrat = document.getElementById(`samrat`) ;
let samratImg = document.getElementById(`samratImg`) ;
let samratp1 = document.getElementById(`samratp1`) ;
let samratp2 = document.getElementById(`samratp2`) ;
let samratp3 = document.getElementById(`samratp3`) ;
let samratimg = document.querySelector(`#samrat div`) ;

samrat.addEventListener(`mouseover` , function () {
    samrat.style.transition = `all , 0.5s`
    samrat.style.display = `flex` 
    samrat.style.justifyContent = `center` 
    samrat.style.alignItems = `center`
    samrat.style.flexDirection = `column`
    samratImg.style.height = `0px`
    samrat.style.backgroundColor = `green`
    samratp1.innerText = `active substance ՝ imidakloprid 350g/l`
    samratp1.style.fontSize = `14px`
    samratp1.style.color = `white`
    samratp2.innerText = `made in India`
    samratp2.style.fontSize = `14px`
    samratp2.style.color = `white`
    samratp3.innerText = `creater ՝ JUL`
    samratp3.style.fontSize = `14px`
    samratp3.style.color = `white`
    samratimg.style.marginLeft = `0px`
})

samrat.addEventListener(`mouseleave` , function () {
    samratImg.style.height = `400px`
    samrat.style.backgroundColor = `transparent`
    samratp1.innerText = ``
    samratp2.innerText = ``
    samratp3.innerText = ``
    samratimg.style.marginLeft = `0px`
})

let diaz = document.getElementById(`diaz`) ;
let diazImg = document.getElementById(`diazImg`) ;
let diazp1 = document.getElementById(`diazp1`) ;
let diazp2 = document.getElementById(`diazp2`) ;
let diazp3 = document.getElementById(`diazp3`) ;
let diazimg = document.querySelector(`#diaz div`) ;

diaz.addEventListener(`mouseover` , function () {
    diaz.style.transition = `all , 0.5s`
    diaz.style.display = `flex` 
    diaz.style.justifyContent = `center` 
    diaz.style.alignItems = `center`
    diaz.style.flexDirection = `column`
    diazImg.style.height = `0px`
    diaz.style.backgroundColor = `green`
    diazp1.innerText = `active substance ՝ fipronil 3g/kg`
    diazp1.style.fontSize = `14px`
    diazp1.style.color = `white`
    diazp2.innerText = `made in India`
    diazp2.style.fontSize = `14px`
    diazp2.style.color = `white`
    diazp3.innerText = `creater ՝ JUL`
    diazp3.style.fontSize = `14px`
    diazp3.style.color = `white`
    diazimg.style.marginLeft = `0px`
})

diaz.addEventListener(`mouseleave` , function () {
    diazImg.style.height = `400px`
    diaz.style.backgroundColor = `transparent`
    diazp1.innerText = ``
    diazp2.innerText = ``
    diazp3.innerText = ``
    diazimg.style.marginLeft = `0px`
})

let felix = document.getElementById(`felix`) ;
let felixImg = document.getElementById(`felixImg`) ;
let felixp1 = document.getElementById(`felixp1`) ;
let felixp2 = document.getElementById(`felixp2`) ;
let felixp3 = document.getElementById(`felixp3`) ;
let feliximg = document.querySelector(`#felix div`) ;

felix.addEventListener(`mouseover` , function () {
    felix.style.transition = `all , 0.5s`
    felix.style.display = `flex` 
    felix.style.justifyContent = `center` 
    felix.style.alignItems = `center`
    felix.style.flexDirection = `column`
    felixImg.style.height = `0px`
    felix.style.backgroundColor = `green`
    felixp1.innerText = `active substance ՝ glifosat 757g/kg`
    felixp1.style.fontSize = `14px`
    felixp1.style.color = `white`
    felixp2.innerText = `made in Germany`
    felixp2.style.fontSize = `14px`
    felixp2.style.color = `white`
    felixp3.innerText = `creater ՝ DVA agro`
    felixp3.style.fontSize = `14px`
    felixp3.style.color = `white`
    feliximg.style.marginLeft = `0px`
})

felix.addEventListener(`mouseleave` , function () {
    felixImg.style.height = `400px`
    felix.style.backgroundColor = `transparent`
    felixp1.innerText = ``
    felixp2.innerText = ``
    felixp3.innerText = ``
    feliximg.style.marginLeft = `0px`
})

let vetfinish = document.getElementById(`vetfinish`) ;
let vetfinishImg = document.getElementById(`vetfinishImg`) ;
let vetfinishp1 = document.getElementById(`vetfinishp1`) ;
let vetfinishp2 = document.getElementById(`vetfinishp2`) ;
let vetfinishp3 = document.getElementById(`vetfinishp3`) ;
let vetfinishimg = document.querySelector(`#vetfinish div`) ;

vetfinish.addEventListener(`mouseover` , function () {
    vetfinish.style.transition = `all , 0.5s`
    vetfinish.style.display = `flex` 
    vetfinish.style.justifyContent = `center` 
    vetfinish.style.alignItems = `center`
    vetfinish.style.flexDirection = `column`
    vetfinishImg.style.height = `0px`
    vetfinish.style.backgroundColor = `green`
    vetfinishp1.innerText = `active substance ՝ 2,4d metil salt`
    vetfinishp1.style.fontSize = `14px`
    vetfinishp1.style.color = `white`
    vetfinishp2.innerText = `made in India`
    vetfinishp2.style.fontSize = `14px`
    vetfinishp2.style.color = `white`
    vetfinishp3.innerText = `creater ՝ Parijat`
    vetfinishp3.style.fontSize = `14px`
    vetfinishp3.style.color = `white`
    vetfinishimg.style.marginLeft = `0px`
})

vetfinish.addEventListener(`mouseleave` , function () {
    vetfinishImg.style.height = `400px`
    vetfinish.style.backgroundColor = `transparent`
    vetfinishp1.innerText = ``
    vetfinishp2.innerText = ``
    vetfinishp3.innerText = ``
    vetfinishimg.style.marginLeft = `0px`
})

let xizak = document.getElementById(`xizak`) ;
let xizakImg = document.getElementById(`xizakImg`) ;
let xizakp1 = document.getElementById(`xizakp1`) ;
let xizakp2 = document.getElementById(`xizakp2`) ;
let xizakp3 = document.getElementById(`xizakp3`) ;
let xizakimg = document.querySelector(`#xizak div`) ;

xizak.addEventListener(`mouseover` , function () {
    xizak.style.transition = `all , 0.5s`
    xizak.style.display = `flex` 
    xizak.style.justifyContent = `center` 
    xizak.style.alignItems = `center`
    xizak.style.flexDirection = `column`
    xizakImg.style.height = `0px`
    xizak.style.backgroundColor = `green`
    xizakp1.innerText = `active substance ՝ xizalaxop + etil 50g/l`
    xizakp1.style.fontSize = `14px`
    xizakp1.style.color = `white`
    xizakp2.innerText = `made in India`
    xizakp2.style.fontSize = `14px`
    xizakp2.style.color = `white`
    xizakp3.innerText = `creater ՝ JUL`
    xizakp3.style.fontSize = `14px`
    xizakp3.style.color = `white`
    xizakimg.style.marginLeft = `0px`
})

xizak.addEventListener(`mouseleave` , function () {
    xizakImg.style.height = `400px`
    xizak.style.backgroundColor = `transparent`
    xizakp1.innerText = ``
    xizakp2.innerText = ``
    xizakp3.innerText = ``
    xizakimg.style.marginLeft = `0px`
})

let pendiPlus = document.getElementById(`pendiPlus`) ;
let pendiPlusImg = document.getElementById(`pendiPlusImg`) ;
let pendiPlusp1 = document.getElementById(`pendiPlusp1`) ;
let pendiPlusp2 = document.getElementById(`pendiPlusp2`) ;
let pendiPlusp3 = document.getElementById(`pendiPlusp3`) ;
let pendiPlusimg = document.querySelector(`#pendiPlus div`) ;

pendiPlus.addEventListener(`mouseover` , function () {
    pendiPlus.style.transition = `all , 0.5s`
    pendiPlus.style.display = `flex` 
    pendiPlus.style.justifyContent = `center` 
    pendiPlus.style.alignItems = `center`
    pendiPlus.style.flexDirection = `column`
    pendiPlusImg.style.height = `0px`
    pendiPlus.style.backgroundColor = `green`
    pendiPlusp1.innerText = `active substance ՝ pendimetalin 30%`
    pendiPlusp1.style.fontSize = `14px`
    pendiPlusp1.style.color = `white`
    pendiPlusp2.innerText = `made in India`
    pendiPlusp2.style.fontSize = `14px`
    pendiPlusp2.style.color = `white`
    pendiPlusp3.innerText = `creater ՝ Parijat`
    pendiPlusp3.style.fontSize = `14px`
    pendiPlusp3.style.color = `white`
    pendiPlusimg.style.marginLeft = `0px`
})

pendiPlus.addEventListener(`mouseleave` , function () {
    pendiPlusImg.style.height = `400px`
    pendiPlus.style.backgroundColor = `transparent`
    pendiPlusp1.innerText = ``
    pendiPlusp2.innerText = ``
    pendiPlusp3.innerText = ``
    pendiPlusimg.style.marginLeft = `0px`
})

let prometrin = document.getElementById(`prometrin`) ;
let prometrinImg = document.getElementById(`prometrinImg`) ;
let prometrinp1 = document.getElementById(`prometrinp1`) ;
let prometrinp2 = document.getElementById(`prometrinp2`) ;
let prometrinp3 = document.getElementById(`prometrinp3`) ;
let prometrinimg = document.querySelector(`#prometrin div`) ;

prometrin.addEventListener(`mouseover` , function () {
    prometrin.style.transition = `all , 0.5s`
    prometrin.style.display = `flex` 
    prometrin.style.justifyContent = `center` 
    prometrin.style.alignItems = `center`
    prometrin.style.flexDirection = `column`
    prometrinImg.style.height = `0px`
    prometrin.style.backgroundColor = `green`
    prometrinp1.innerText = `active substance ՝ perimetrin 500g/l`
    prometrinp1.style.fontSize = `14px`
    prometrinp1.style.color = `white`
    prometrinp2.innerText = `made in Germany`
    prometrinp2.style.fontSize = `14px`
    prometrinp2.style.color = `white`
    prometrinp3.innerText = `creater ՝ DVA agro`
    prometrinp3.style.fontSize = `14px`
    prometrinp3.style.color = `white`
    prometrinimg.style.marginLeft = `0px`
})

prometrin.addEventListener(`mouseleave` , function () {
    prometrinImg.style.height = `400px`
    prometrin.style.backgroundColor = `transparent`
    prometrinp1.innerText = ``
    prometrinp2.innerText = ``
    prometrinp3.innerText = ``
    prometrinimg.style.marginLeft = `0px`
})

let bluecup = document.getElementById(`bluecup`) ;
let bluecupImg = document.getElementById(`bluecupImg`) ;
let bluecupp1 = document.getElementById(`bluecupp1`) ;
let bluecupp2 = document.getElementById(`bluecupp2`) ;
let bluecupp3 = document.getElementById(`bluecupp3`) ;
let bluecupimg = document.querySelector(`#bluecup div`) ;

bluecup.addEventListener(`mouseover` , function () {
    bluecup.style.transition = `all , 0.5s`
    bluecup.style.display = `flex` 
    bluecup.style.justifyContent = `center` 
    bluecup.style.alignItems = `center`
    bluecup.style.flexDirection = `column`
    bluecupImg.style.height = `0px`
    bluecup.style.backgroundColor = `green`
    bluecupp1.innerText = `active substance ՝ cupper sulfate 200g/kg + calcium hidrocside`
    bluecupp1.style.fontSize = `14px`
    bluecupp1.style.color = `white`
    bluecupp2.innerText = `made in India`
    bluecupp2.style.fontSize = `14px`
    bluecupp2.style.color = `white`
    bluecupp3.innerText = `creater ՝ Parijat`
    bluecupp3.style.fontSize = `14px`
    bluecupp3.style.color = `white`
    bluecupimg.style.marginLeft = `0px`
})

bluecup.addEventListener(`mouseleave` , function () {
    bluecupImg.style.height = `400px`
    bluecup.style.backgroundColor = `transparent`
    bluecupp1.innerText = ``
    bluecupp2.innerText = ``
    bluecupp3.innerText = ``
    bluecupimg.style.marginLeft = `0px`
})

let box = document.getElementById(`box`) ;
let boxImg = document.getElementById(`boxImg`) ;
let boxp1 = document.getElementById(`boxp1`) ;
let boxp2 = document.getElementById(`boxp2`) ;
let boxp3 = document.getElementById(`boxp3`) ;
let boximg = document.querySelector(`#box div`) ;

box.addEventListener(`mouseover` , function () {
    box.style.transition = `all , 0.5s`
    box.style.display = `flex` 
    box.style.justifyContent = `center` 
    box.style.alignItems = `center`
    box.style.flexDirection = `column`
    boxImg.style.height = `0px`
    box.style.backgroundColor = `green`
    boxp1.innerText = `active substance ՝ hexaconazol 50g/l`
    boxp1.style.fontSize = `14px`
    boxp1.style.color = `white`
    boxp2.innerText = `made in India`
    boxp2.style.fontSize = `14px`
    boxp2.style.color = `white`
    boxp3.innerText = `creater ՝ Parijat`
    boxp3.style.fontSize = `14px`
    boxp3.style.color = `white`
    boximg.style.marginLeft = `0px`
})

box.addEventListener(`mouseleave` , function () {
    boxImg.style.height = `400px`
    box.style.backgroundColor = `transparent`
    boxp1.innerText = ``
    boxp2.innerText = ``
    boxp3.innerText = ``
    boximg.style.marginLeft = `0px`
})

let boss = document.getElementById(`boss`) ;
let bossImg = document.getElementById(`bossImg`) ;
let bossp1 = document.getElementById(`bossp1`) ;
let bossp2 = document.getElementById(`bossp2`) ;
let bossp3 = document.getElementById(`bossp3`) ;
let bossimg = document.querySelector(`#boss div`) ;

boss.addEventListener(`mouseover` , function () {
   boss.style.transition = `all , 0.5s`
   boss.style.display = `flex` 
   boss.style.justifyContent = `center` 
   boss.style.alignItems = `center`
   boss.style.flexDirection = `column`
   bossImg.style.height = `0px`
   boss.style.backgroundColor = `green`
   bossp1.innerText = `active substance ՝ hexakonazol 5%`
   bossp1.style.fontSize = `14px`
   bossp1.style.color = `white`
   bossp2.innerText = `made in India`
   bossp2.style.fontSize = `14px`
   bossp2.style.color = `white`
   bossp3.innerText = `creater ՝ Parijat`
   bossp3.style.fontSize = `14px`
   bossp3.style.color = `white`
   bossimg.style.marginLeft = `0px`
})

boss.addEventListener(`mouseleave` , function () {
   bossImg.style.height = `400px`
   boss.style.backgroundColor = `transparent`
   bossp1.innerText = ``
   bossp2.innerText = ``
   bossp3.innerText = ``
   bossimg.style.marginLeft = `0px`
})

let dvakarb = document.getElementById(`dvakarb`) ;
let dvakarbImg = document.getElementById(`dvakarbImg`) ;
let dvakarbp1 = document.getElementById(`dvakarbp1`) ;
let dvakarbp2 = document.getElementById(`dvakarbp2`) ;
let dvakarbp3 = document.getElementById(`dvakarbp3`) ;
let dvakarbimg = document.querySelector(`#dvakarb div`) ;

dvakarb.addEventListener(`mouseover` , function () {
    dvakarb.style.transition = `all , 0.5s`
    dvakarb.style.display = `flex` 
    dvakarb.style.justifyContent = `center` 
    dvakarb.style.alignItems = `center`
    dvakarb.style.flexDirection = `column`
    dvakarbImg.style.height = `0px`
    dvakarb.style.backgroundColor = `green`
    dvakarbp1.innerText = `active substance ՝ proponacarb hidrocsid 722`
    dvakarbp1.style.fontSize = `14px`
    dvakarbp1.style.color = `white`
    dvakarbp2.innerText = `made in Germany`
    dvakarbp2.style.fontSize = `14px`
    dvakarbp2.style.color = `white`
    dvakarbp3.innerText = `creater ՝ DVA agro`
    dvakarbp3.style.fontSize = `14px`
    dvakarbp3.style.color = `white`
    dvakarbimg.style.marginLeft = `0px`
})

dvakarb.addEventListener(`mouseleave` , function () {
    dvakarbImg.style.height = `400px`
    dvakarb.style.backgroundColor = `transparent`
    dvakarbp1.innerText = ``
    dvakarbp2.innerText = ``
    dvakarbp3.innerText = ``
    dvakarbimg.style.marginLeft = `0px`
})

let favorit = document.getElementById(`favorit`) ;
let favoritImg = document.getElementById(`favoritImg`) ;
let favoritp1 = document.getElementById(`favoritp1`) ;
let favoritp2 = document.getElementById(`favoritp2`) ;
let favoritp3 = document.getElementById(`favoritp3`) ;
let favoritimg = document.querySelector(`#favorit div`) ;

favorit.addEventListener(`mouseover` , function () {
    favorit.style.transition = `all , 0.5s`
    favorit.style.display = `flex` 
    favorit.style.justifyContent = `center` 
    favorit.style.alignItems = `center`
    favorit.style.flexDirection = `column`
    favoritImg.style.height = `0px`
    favorit.style.backgroundColor = `green`
    favoritp1.innerText = `active substance ՝ propineb 700g/l`
    favoritp1.style.fontSize = `14px`
    favoritp1.style.color = `white`
    favoritp2.innerText = `made in Germany`
    favoritp2.style.fontSize = `14px`
    favoritp2.style.color = `white`
    favoritp3.innerText = `creater ՝ DVA agro`
    favoritp3.style.fontSize = `14px`
    favoritp3.style.color = `white`
    favoritimg.style.marginLeft = `0px`
})

favorit.addEventListener(`mouseleave` , function () {
    favoritImg.style.height = `400px`
    favorit.style.backgroundColor = `transparent`
    favoritp1.innerText = ``
    favoritp2.innerText = ``
    favoritp3.innerText = ``
    favoritimg.style.marginLeft = `0px`
})

let fundazon = document.getElementById(`fundazon`) ;
let fundazonImg = document.getElementById(`fundazonImg`) ;
let fundazonp1 = document.getElementById(`fundazonp1`) ;
let fundazonp2 = document.getElementById(`fundazonp2`) ;
let fundazonp3 = document.getElementById(`fundazonp3`) ;
let fundazonimg = document.querySelector(`#fundazon div`) ;

fundazon.addEventListener(`mouseover` , function () {
    fundazon.style.transition = `all , 0.5s`
    fundazon.style.display = `flex` 
    fundazon.style.justifyContent = `center` 
    fundazon.style.alignItems = `center`
    fundazon.style.flexDirection = `column`
    fundazonImg.style.height = `0px`
    fundazon.style.backgroundColor = `green`
    fundazonp1.innerText = `active substance ՝ karbendazim 120g/kg + mankoceb  630g/kg`
    fundazonp1.style.fontSize = `14px`
    fundazonp1.style.color = `white`
    fundazonp2.innerText = `made in India`
    fundazonp2.style.fontSize = `14px`
    fundazonp2.style.color = `white`
    fundazonp3.innerText = `creater ՝ Parijat`
    fundazonp3.style.fontSize = `14px`
    fundazonp3.style.color = `white`
    fundazonimg.style.marginLeft = `0px`
})

fundazon.addEventListener(`mouseleave` , function () {
    fundazonImg.style.height = `400px`
    fundazon.style.backgroundColor = `transparent`
    fundazonp1.innerText = ``
    fundazonp2.innerText = ``
    fundazonp3.innerText = ``
    fundazonimg.style.marginLeft = `0px`
})

let korus = document.getElementById(`korus`) ;
let korusImg = document.getElementById(`korusImg`) ;
let korusp1 = document.getElementById(`korusp1`) ;
let korusp2 = document.getElementById(`korusp2`) ;
let korusp3 = document.getElementById(`korusp3`) ;
let korusimg = document.querySelector(`#korus div`) ;

korus.addEventListener(`mouseover` , function () {
    korus.style.transition = `all , 0.5s`
    korus.style.display = `flex` 
    korus.style.justifyContent = `center` 
    korus.style.alignItems = `center`
    korus.style.flexDirection = `column`
    korusImg.style.height = `0px`
    korus.style.backgroundColor = `green`
    korusp1.innerText = `active substance ՝ ciprodinil 750`
    korusp1.style.fontSize = `14px`
    korusp1.style.color = `white`
    korusp2.innerText = `made in Germany`
    korusp2.style.fontSize = `14px`
    korusp2.style.color = `white`
    korusp3.innerText = `creater ՝ DVA agro`
    korusp3.style.fontSize = `14px`
    korusp3.style.color = `white`
    korusimg.style.marginLeft = `0px`
})

korus.addEventListener(`mouseleave` , function () {
    korusImg.style.height = `400px`
    korus.style.backgroundColor = `transparent`
    korusp1.innerText = ``
    korusp2.innerText = ``
    korusp3.innerText = ``
    korusimg.style.marginLeft = `0px`
})


let krezo = document.getElementById(`krezo`) ;
let krezoImg = document.getElementById(`krezoImg`) ;
let krezop1 = document.getElementById(`krezop1`) ;
let krezop2 = document.getElementById(`krezop2`) ;
let krezop3 = document.getElementById(`krezop3`) ;
let krezoimg = document.querySelector(`#krezo div`) ;

krezo.addEventListener(`mouseover` , function () {
    krezo.style.transition = `all , 0.5s`
    krezo.style.display = `flex` 
    krezo.style.justifyContent = `center` 
    krezo.style.alignItems = `center`
    krezo.style.flexDirection = `column`
    krezoImg.style.height = `0px`
    krezo.style.backgroundColor = `green`
    krezop1.innerText = `active substance ՝ krezoxin metil 500`
    krezop1.style.fontSize = `14px`
    krezop1.style.color = `white`
    krezop2.innerText = `made in Germany`
    krezop2.style.fontSize = `14px`
    krezop2.style.color = `white`
    krezop3.innerText = `creater ՝ DVA agro`
    krezop3.style.fontSize = `14px`
    krezop3.style.color = `white`
    krezoimg.style.marginLeft = `0px`
})

krezo.addEventListener(`mouseleave` , function () {
    krezoImg.style.height = `400px`
    krezo.style.backgroundColor = `transparent`
    krezop1.innerText = ``
    krezop2.innerText = ``
    krezop3.innerText = ``
    krezoimg.style.marginLeft = `0px`
})

let tebusol = document.getElementById(`tebusol`) ;
let tebusolImg = document.getElementById(`tebusolImg`) ;
let tebusolp1 = document.getElementById(`tebusolp1`) ;
let tebusolp2 = document.getElementById(`tebusolp2`) ;
let tebusolp3 = document.getElementById(`tebusolp3`) ;
let tebusolimg = document.querySelector(`#tebusol div`) ;

tebusol.addEventListener(`mouseover` , function () {
    tebusol.style.transition = `all , 0.5s`
    tebusol.style.display = `flex` 
    tebusol.style.justifyContent = `center` 
    tebusol.style.alignItems = `center`
    tebusol.style.flexDirection = `column`
    tebusolImg.style.height = `0px`
    tebusol.style.backgroundColor = `green`
    tebusolp1.innerText = `active substance ՝ tebukonazole 100g/kg + solphur 650g/kg`
    tebusolp1.style.fontSize = `14px`
    tebusolp1.style.color = `white`
    tebusolp2.innerText = `made in India`
    tebusolp2.style.fontSize = `14px`
    tebusolp2.style.color = `white`
    tebusolp3.innerText = `creater ՝ JUL`
    tebusolp3.style.fontSize = `14px`
    tebusolp3.style.color = `white`
    tebusolimg.style.marginLeft = `0px`
})

tebusol.addEventListener(`mouseleave` , function () {
    tebusolImg.style.height = `400px`
    tebusol.style.backgroundColor = `transparent`
    tebusolp1.innerText = ``
    tebusolp2.innerText = ``
    tebusolp3.innerText = ``
    tebusolimg.style.marginLeft = `0px`
})

let victoria = document.getElementById(`victoria`) ;
let victoriaImg = document.getElementById(`victoriaImg`) ;
let victoriap1 = document.getElementById(`victoriap1`) ;
let victoriap2 = document.getElementById(`victoriap2`) ;
let victoriap3 = document.getElementById(`victoriap3`) ;
let victoriaimg = document.querySelector(`#victoria div`) ;

victoria.addEventListener(`mouseover` , function () {
    victoria.style.transition = `all , 0.5s`
    victoria.style.display = `flex` 
    victoria.style.justifyContent = `center` 
    victoria.style.alignItems = `center`
    victoria.style.flexDirection = `column`
    victoriaImg.style.height = `0px`
    victoria.style.backgroundColor = `green`
    victoriap1.innerText = `active substance ՝ mancozrb 64% + metalaxil 8%`
    victoriap1.style.fontSize = `14px`
    victoriap1.style.color = `white`
    victoriap2.innerText = `made in India`
    victoriap2.style.fontSize = `14px`
    victoriap2.style.color = `white`
    victoriap3.innerText = `creater ՝ JUL`
    victoriap3.style.fontSize = `14px`
    victoriap3.style.color = `white`
    victoriaimg.style.marginLeft = `0px`
})

victoria.addEventListener(`mouseleave` , function () {
    victoriaImg.style.height = `400px`
    victoria.style.backgroundColor = `transparent`
    victoriap1.innerText = ``
    victoriap2.innerText = ``
    victoriap3.innerText = ``
    victoriaimg.style.marginLeft = `0px`
})

let kurzak = document.getElementById(`kurzak`) ;
let kurzakImg = document.getElementById(`kurzakImg`) ;
let kurzakp1 = document.getElementById(`kurzakp1`) ;
let kurzakp2 = document.getElementById(`kurzakp2`) ;
let kurzakp3 = document.getElementById(`kurzakp3`) ;
let kurzakimg = document.querySelector(`#kurzak div`) ;

kurzak.addEventListener(`mouseover` , function () {
    kurzak.style.transition = `all , 0.5s`
    kurzak.style.display = `flex` 
    kurzak.style.justifyContent = `center` 
    kurzak.style.alignItems = `center`
    kurzak.style.flexDirection = `column`
    kurzakImg.style.height = `0px`
    kurzak.style.backgroundColor = `green`
    kurzakp1.innerText = `active substance ՝ copper oxicolide 250g/kg`
    kurzakp1.style.fontSize = `14px`
    kurzakp1.style.color = `white`
    kurzakp2.innerText = `made in Germany`
    kurzakp2.style.fontSize = `14px`
    kurzakp2.style.color = `white`
    kurzakp3.innerText = `creater ՝ DVA agro`
    kurzakp3.style.fontSize = `14px`
    kurzakp3.style.color = `white`
    kurzakimg.style.marginLeft = `0px`
})

kurzak.addEventListener(`mouseleave` , function () {
    kurzakImg.style.height = `400px`
    kurzak.style.backgroundColor = `transparent`
    kurzakp1.innerText = ``
    kurzakp2.innerText = ``
    kurzakp3.innerText = ``
    kurzakimg.style.marginLeft = `0px`
})

let abek = document.getElementById(`abek`) ;
let abekImg = document.getElementById(`abekImg`) ;
let abekp1 = document.getElementById(`abekp1`) ;
let abekp2 = document.getElementById(`abekp2`) ;
let abekp3 = document.getElementById(`abekp3`) ;
let abekimg = document.querySelector(`#abek div`) ;

abek.addEventListener(`mouseover` , function () {
    abek.style.transition = `all , 0.5s`
    abek.style.display = `flex` 
    abek.style.justifyContent = `center` 
    abek.style.alignItems = `center`
    abek.style.flexDirection = `column`
    abekImg.style.height = `0px`
    abek.style.backgroundColor = `green`
    abekp1.innerText = `active substance ՝ abamektin 18g/l`
    abekp1.style.fontSize = `14px`
    abekp1.style.color = `white`
    abekp2.innerText = `made in India`
    abekp2.style.fontSize = `14px`
    abekp2.style.color = `white`
    abekp3.innerText = `creater ՝ Parijat`
    abekp3.style.fontSize = `14px`
    abekp3.style.color = `white`
    abekimg.style.marginLeft = `0px`
})

abek.addEventListener(`mouseleave` , function () {
    abekImg.style.height = `400px`
    abek.style.backgroundColor = `transparent`
    abekp1.innerText = ``
    abekp2.innerText = ``
    abekp3.innerText = ``
    abekimg.style.marginLeft = `0px`
})

let menu = document.getElementById(`menu`) ;
let x = true
menu.addEventListener(`click` , function(){
console.log(x);
    if (x === true) {
        menu.style.backgroundImage = `url(../images/close_img-removebg-preview.png)`
        console.log(x);
        x = false
    }else{
        menu.style.backgroundImage = `url(../images/menu-removebg-preview.png)`
        console.log(x);
        x = true
    }
})