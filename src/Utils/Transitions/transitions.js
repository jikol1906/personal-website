export const fadeInLeftExited = {   
    transform:'translateX(-20vw)',
    opacity:'0'
}

export const fadeInRightExited = {  
    transform:'translateX(20vw)',
    opacity:'0'
}

export const fadeInTopExited = { 
    transform:'translateY(-20vw)',
    opacity:'0'
}

export const fadeInLeftCornerExited = { 
    transform:'translate(-20vw,20vh) scale(.8)',
    opacity:'0'
}

export const fadeInRightCornerExited = { 
    transform:'translate(-20vw,20vh) scale(.8)',
    opacity:'0'
}

export const fadeInEntered = {
    transition:'all .7s',
    transform:'translate(0) scale(1)',
    opacity:'1'
}

export const fadeInEnteredDelay = {
    ...fadeInEntered,
    transitionDelay:'.3s',
}

export const fadeInEnteredLargeDelay = {
    ...fadeInEntered,
    transitionDelay:'.4s',
}



