import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  color: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  flex-direction: column;

  ul {
    margin: 3rem 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 1rem 0;
      transition: 0.2s;

      border: double;
      cursor: pointer;

      div {
        text-align: center;
        margin: 0.5rem;
      }

      span {
        flex: 1;
        padding: 1rem;
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;
