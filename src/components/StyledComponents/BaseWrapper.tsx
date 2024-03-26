import styled from 'styled-components';

export const TitleWrapper = styled.span`
  margin-left: 1.5rem;
  margin-right: 0.5rem;
  text-align: right;
`;

export const FitContentWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardTitleWrapper = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;
