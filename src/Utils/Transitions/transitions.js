// #region fadeIn
const fadeInExited = {
  opacity: "0",
}

export const fadeInLeftExited = {
  ...fadeInExited,
  transform: "translateX(-20vw)",
}

export const fadeInRightExited = {
  ...fadeInExited,
  transform: "translateX(20vw)",
}

export const fadeInTopExited = {
  ...fadeInExited,
  transform: "translateY(-20vw)",
}

export const fadeInLeftCornerExited = {
  ...fadeInExited,
  transform: "translate(-20vw,20vh) scale(.8)",
}

export const fadeInRightCornerExited = {
  ...fadeInExited,
  transform: "translate(20vw,20vh) scale(.8)",
}

export const fadeInEntered = {
  transitionProperty: "transform, opacity",
  transition: ".7s ease-out",
  transform: "translate(0) scale(1)",
  opacity: "1",
}

export const fadeInEnteredDelay = {
  ...fadeInEntered,
  transitionDelay: ".3s",
}

export const fadeInEnteredLargeDelay = {
  ...fadeInEntered,
  transitionDelay: ".5s",
}
// #endregion


export const expandFromTopExited = {
  transformOrigin: "top",
  transform: "scaleY(0)"
}

export const expandFromTopEntered = {
  transformOrigin: "top",
  transform: "scaleY(1)",
  transition: 'transform .7s ease-in'
}

export const expandFromTopEnteredDelay = {
    ...expandFromTopEntered,
    transitionDelay: ".3s",
  }

