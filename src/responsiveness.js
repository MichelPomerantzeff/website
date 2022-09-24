import { css } from "styled-components"


export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 420px) {
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 600px) {
            ${props}
        }
        `
}

export const bigTablet = (props) => {
    return css`
        @media only screen and (max-width: 900px) {
            ${props}
        }
        `
}

export const laptop = (props) => {
    return css`
        @media only screen and (max-width: 1200px) {
            ${props}
        }
        `
}

export const midDesktop = (props) => {
    return css`
        @media only screen and (max-width: 1500px) {
            ${props}
        }
    `
}