import styled from 'styled-components'

export const CarouselContainer = styled.div`
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: #010606;
    width: 100%;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
export const CarouselH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    /* margin-bottom: 64px; */

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
