export const colors = {
  mainBlack: "#000",
  yellow: "#ffc914",
  grey: "#e0e0e0",
  black: "rgb(46, 40, 42)",
  cream: "#eddea4",
  rust: "#C15C48",
  blue: "#6F7EA7",
  white: "rgb(245, 243, 245)",
}

export const transDefault = "transition: all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}

export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition:${property} ${time} ${type}`
}
