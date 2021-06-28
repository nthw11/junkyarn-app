import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 3px solid ${props => (props.isActive ? '#d77e6a' : '#eee')};
`;
