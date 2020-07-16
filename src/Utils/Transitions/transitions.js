const fadeInExited = {
    opacity:'0',
    visibility:'hidden',
}

export const fadeInLeftExited = {
    ...fadeInExited,   
    transform:'translateX(-20vw)',
}

export const fadeInRightExited = {
    ...fadeInExited,  
    transform:'translateX(20vw)',
}

export const fadeInTopExited = {
    ...fadeInExited, 
    transform:'translateY(-20vw)',
}

export const fadeInLeftCornerExited = {
    ...fadeInExited, 
    transform:'translate(-20vw,20vh) scale(.8)',
}

export const fadeInRightCornerExited = {
    ...fadeInExited, 
    transform:'translate(20vw,20vh) scale(.8)',
}

export const fadeInEntered = {
    transition:'all .7s ease-out',
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



