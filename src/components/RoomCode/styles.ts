import styled from "styled-components";

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => props.theme.colors.content};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;

  display: flex;

  div {
    background: ${(props) => props.theme.colors.primary};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
  }
`;
