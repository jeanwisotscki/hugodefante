import styled, { keyframes } from "styled-components";

import breakpoints from "../../common/breakpoints";

const PressStartAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const MainWrapper = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 50rem;
`;

export const PerspectiveTextWrapper = styled.div`
  text-align: center;

  // 599.99px ou menor
  @media screen and (${breakpoints.xtSmall}) {
    padding: 1rem 6rem;
  }

  // 600px ou maior
  @media screen and (${breakpoints.small}) {
    padding: 1rem 3rem;
  }

  // 768px ou maior
  @media screen and (${breakpoints.medium}) {
    padding: 1rem 7rem;
  }

  // 992px ou maior
  @media screen and (${breakpoints.large}) {
    padding: 1rem 7.5rem;
  }
`;

export const PerspectiveText = styled.span`
  display: block;

  text-transform: uppercase;

  transform-origin: 50% 0%;
  transform: perspective(300px) rotateX(45deg);

  background: ${(props) => props.theme.colors.orange};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.purple} 11%,
    ${(props) => props.theme.colors.cyan} 54%,
    ${(props) => props.theme.colors.secondary} 87%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.colors.primary};
    font-size: 6rem;
    text-shadow: -0.25rem -0.25rem;
  }

  // 599.99px ou menor
  @media screen and (${breakpoints.xtSmall}) {
    font-size: 2.2rem;

    &::before {
      font-size: 2.2rem;
    }
  }

  // 600px ou maior
  @media screen and (${breakpoints.small}) {
    font-size: 3.5rem;

    &::before {
      font-size: 3.5rem;
    }
  }

  // 768px ou maior
  @media screen and (${breakpoints.medium}) {
    font-size: 4rem;

    &::before {
      font-size: 4rem;
    }
  }

  // 992px ou maior
  @media screen and (${breakpoints.large}) {
    font-size: 5rem;

    &::before {
      font-size: 5rem;
    }
  }
`;

export const PressStartWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;

  margin: 6rem 0;

  a {
    color: ${(props) => props.theme.colors.primary};

    padding: 1rem;

    transition: 0.2s;
    animation: ${PressStartAnimation} 2s forwards infinite;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
      animation: none;
    }
  }

  @media screen and (${breakpoints.xtSmall}) {
    a {
      font-size: 0.6rem;
    }
  }
  @media screen and (${breakpoints.small}) {
    a {
      font-size: 0.8rem;
    }
  }
  @media screen and (${breakpoints.medium}) {
    a {
      font-size: 1rem;
    }
  }
`;

export const CopyRightWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;

  @media screen and (${breakpoints.xtSmall}) {
    p {
      font-size: 0.5rem;
    }
  }
  @media screen and (${breakpoints.small}) {
    p {
      font-size: 0.6rem;
    }
  }
  @media screen and (${breakpoints.medium}) {
    p {
      font-size: 0.8rem;
    }
  }
`;