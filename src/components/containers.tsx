import styled from "@emotion/styled";

interface IContainerProps {
  justifyContent?: string;
  padding?: string;
  width?: string;
  direction?: string;
  alignItems?: string;
  maxWidth?: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: ${p => p.justifyContent || "space-between"};
  flex-direction: ${p => p.direction || "row"};
  padding: ${p => p.padding || "0"};
  align-items: ${p => p.alignItems || "center"};
  flex-wrap: wrap;
  max-width: ${p => p.maxWidth || "100%"};
  width: ${p => p.width || "auto"};
`;

export const PageContainer = styled(Container)`
  align-items: center;
  max-width: 1024px;
  padding: 0 1rem 1rem;

  > * {
    width: 100%;
    margin-top: 1rem;
  }
`;
