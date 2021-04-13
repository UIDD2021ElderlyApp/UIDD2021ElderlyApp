//隱藏自介
$('#intro1').css({ 'opacity': 0 })
$('#intro2').css({ 'opacity': 0 })
$('#intro3').css({ 'opacity': 0 })
$('#intro4').css({ 'opacity': 0 })
$('#intro5').css({ 'opacity': 0 })
$('#intro6').css({ 'opacity': 0 })

$('#photo1').css({ 'opacity': 0 })
$('#photo2').css({ 'opacity': 0 })
$('#photo3').css({ 'opacity': 0 })
$('#photo4').css({ 'opacity': 0 })
$('#photo5').css({ 'opacity': 0 })
$('#photo6').css({ 'opacity': 0 })

$('#title_white').css({ 'opacity': 0 })
//冒出頭
let display1 = true
$('#box1').hover(function () {
    const style = display1 ? { top: '-=5vh', left: '+=5vw' } : { top: '+=5vh', left: '-=5vw' }
    $('#member1').animate(style, 100) //delay time
    display1 = !display1
    console.log('a')
})
let display2 = true
$('#box2').hover(function () {
    const style = display2 ? { top: '-=5vh', left: '-=5vw' } : { top: '+=5vh', left: '+=5vw' }
    $('#member2').animate(style, 200) //delay time
    display2 = !display2
})
let display3 = true
$('#box3').hover(function () {
    const style = display3 ? { top: '-=5vh', left: '+=5vw' } : { top: '+=5vh', left: '-=5vw' }
    $('#member3').animate(style, 200) //delay time
    display3 = !display3
})
let display4 = true
$('#box4').hover(function () {
    const style = display4 ? { top: '-=10vh', left: '-=2vw' } : { top: '+=10vh', left: '+=2vw' }
    $('#member4').animate(style, 200) //delay time
    display4 = !display4
})
let display5 = true
$('#box5').hover(function () {
    const style = display5 ? { top: '-=10vh' } : { top: '+=10vh' }
    $('#member5').animate(style, 200) //delay time
    display5 = !display5
})
let display6 = true
$('#box6').hover(function () {
    const style = display6 ? { top: '-=8vh', left: '-=2vw' } : { top: '+=8vh', left: '+=2vw' }
    $('#member6').animate(style, 200) //delay time
    display6 = !display6
})

//顯示自介
$('#box1').click(function () {
    //LOGO移到左上角
    const style = {
        position: 'absolute',
        width: '28vw',
        top: '165vh',
        left: '-6vw'
    }
    $('#us1').animate(style, 300)
    $('#title_white').animate({ opacity: '1' }, 300)

    $('#intro1').animate({ opacity: '1' }, 500)
    $('#intro2').animate({ opacity: '0' }, 100)
    $('#intro3').animate({ opacity: '0' }, 100)
    $('#intro4').animate({ opacity: '0' }, 100)
    $('#intro5').animate({ opacity: '0' }, 100)
    $('#intro6').animate({ opacity: '0' }, 100)

    $('#photo1').animate({ opacity: '1' }, 500)
    $('#photo2').animate({ opacity: '0' }, 100)
    $('#photo3').animate({ opacity: '0' }, 100)
    $('#photo4').animate({ opacity: '0' }, 100)
    $('#photo5').animate({ opacity: '0' }, 100)
    $('#photo6').animate({ opacity: '0' }, 100)
})
$('#box2').click(function () {
    const style = {
        position: 'absolute',
        width: '28vw',
        top: '165vh',
        left: '-6vw'
    }
    $('#us1').animate(style, 300)
    $('#title_white').animate({ opacity: '1' }, 300)

    $('#intro1').animate({ opacity: '0' }, 100)
    $('#intro2').animate({ opacity: '1' }, 500)
    $('#intro3').animate({ opacity: '0' }, 100)
    $('#intro4').animate({ opacity: '0' }, 100)
    $('#intro5').animate({ opacity: '0' }, 100)
    $('#intro6').animate({ opacity: '0' }, 100)

    $('#photo1').animate({ opacity: '0' }, 100)
    $('#photo2').animate({ opacity: '1' }, 500)
    $('#photo3').animate({ opacity: '0' }, 100)
    $('#photo4').animate({ opacity: '0' }, 100)
    $('#photo5').animate({ opacity: '0' }, 100)
    $('#photo6').animate({ opacity: '0' }, 100)
})
$('#box3').click(function () {
    const style = {
        position: 'absolute',
        width: '28vw',
        top: '165vh',
        left: '-6vw'
    }
    $('#us1').animate(style, 300)
    $('#title_white').animate({ opacity: '1' }, 300)

    $('#intro1').animate({ opacity: '0' }, 100)
    $('#intro2').animate({ opacity: '0' }, 100)
    $('#intro3').animate({ opacity: '1' }, 500)
    $('#intro4').animate({ opacity: '0' }, 100)
    $('#intro5').animate({ opacity: '0' }, 100)
    $('#intro6').animate({ opacity: '0' }, 100)

    $('#photo1').animate({ opacity: '0' }, 100)
    $('#photo2').animate({ opacity: '0' }, 100)
    $('#photo3').animate({ opacity: '1' }, 500)
    $('#photo4').animate({ opacity: '0' }, 100)
    $('#photo5').animate({ opacity: '0' }, 100)
    $('#photo6').animate({ opacity: '0' }, 100)
})
$('#box4').click(function () {
    //LOGO移到左上角
    const style = {
        position: 'absolute',
        width: '28vw',
        top: '165vh',
        left: '-6vw'
    }
    $('#us1').animate(style, 300)
    $('#title_white').animate({ opacity: '1' }, 300)

    $('#intro1').animate({ opacity: '0' }, 100)
    $('#intro2').animate({ opacity: '0' }, 100)
    $('#intro3').animate({ opacity: '0' }, 100)
    $('#intro4').animate({ opacity: '1' }, 500)
    $('#intro5').animate({ opacity: '0' }, 100)
    $('#intro6').animate({ opacity: '0' }, 100)

    $('#photo1').animate({ opacity: '0' }, 100)
    $('#photo2').animate({ opacity: '0' }, 100)
    $('#photo3').animate({ opacity: '0' }, 100)
    $('#photo4').animate({ opacity: '1' }, 500)
    $('#photo5').animate({ opacity: '0' }, 100)
    $('#photo6').animate({ opacity: '0' }, 100)
})
$('#box5').click(function () {
    //LOGO移到左上角
    const style = {
        position: 'absolute',
        width: '28vw',
        top: '165vh',
        left: '-6vw'
    }
    $('#us1').animate(style, 300)
    $('#title_white').animate({ opacity: '1' }, 300)

    $('#intro1').animate({ opacity: '0' }, 100)
    $('#intro2').animate({ opacity: '0' }, 100)
    $('#intro3').animate({ opacity: '0' }, 100)
    $('#intro4').animate({ opacity: '0' }, 100)
    $('#intro5').animate({ opacity: '1' }, 500)
    $('#intro6').animate({ opacity: '0' }, 100)

    $('#photo1').animate({ opacity: '0' }, 100)
    $('#photo2').animate({ opacity: '0' }, 100)
    $('#photo3').animate({ opacity: '0' }, 100)
    $('#photo4').animate({ opacity: '0' }, 100)
    $('#photo5').animate({ opacity: '1' }, 500)
    $('#photo6').animate({ opacity: '0' }, 100)
})
$('#box6').click(function () {
    //LOGO移到左上角
    const style = {
        position: 'absolute',
        width: '28vw',
        top: '165vh',
        left: '-6vw'
    }
    $('#us1').animate(style, 300)
    $('#title_white').animate({ opacity: '1' }, 300)

    $('#intro1').animate({ opacity: '0' }, 100)
    $('#intro2').animate({ opacity: '0' }, 100)
    $('#intro3').animate({ opacity: '0' }, 100)
    $('#intro4').animate({ opacity: '0' }, 100)
    $('#intro5').animate({ opacity: '0' }, 100)
    $('#intro6').animate({ opacity: '1' }, 500)

    $('#photo1').animate({ opacity: '0' }, 100)
    $('#photo2').animate({ opacity: '0' }, 100)
    $('#photo3').animate({ opacity: '0' }, 100)
    $('#photo4').animate({ opacity: '0' }, 100)
    $('#photo5').animate({ opacity: '0' }, 100)
    $('#photo6').animate({ opacity: '1' }, 500)
})


