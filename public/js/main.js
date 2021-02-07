// Porter L
// Portfolio Site

function swap(n)
{
    var slides = [
        document.getElementById("slide1"), 
        document.getElementById("slide2"), 
        document.getElementById("slide3"), 
        document.getElementById("slide4"),
        document.getElementById("slide5")
    ];
    for (x=1; x<6; x++)
    {
        if (x == n)
        {
            if (slides[x-1].style.display == 'none')
            {
                fadeI(slides[x-1].id);
            }
        }
        else
        {
            if (slides[x-1].style.display != 'none')
            {
                fadeO(slides[x-1].id);
            }
        }
    }
}

function start()
{

    $("body").animate({
        opacity: 1
    }, 400);

    $("#slide2").animate({
        right: '200px',
        opacity: 0,
        show: 'toggle',
    }, 0);

    $("#slide3").animate({
        right: '200px',
        opacity: 0,
        show: 'toggle',
    }, 0);

    $("#slide4").animate({
        right: '200px',
        opacity: 0,
        show: 'toggle',
    }, 0);

    $("#slide5").animate({
        right: '200px',
        opacity: 0,
        show: 'toggle',
    }, 0);
}

function fadeO(elemName)
{
    $("#" + elemName).animate({
        right: '200px',
        opacity: 0,
        show: 'toggle'
    }, 200);
    
}

function fadeI(elemName)
{
    setTimeout(function(){ 
        $("#" + elemName).animate({
            right: '200px',
            opacity: 1,
            show: 'toggle'
        }, 200);
     }, 200);
}

function copyToClipboard(text)
{
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

//$(document).ready(function() { swap(1) });