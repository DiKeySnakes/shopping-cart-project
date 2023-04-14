import styled from 'styled-components';
import Frame from '../assets/images/frame.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FrameContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const FramedImage = (props) => {
  return (
    <Container>
      <Image src={props.src} alt={props.alt} />
      <FrameContainer>
        <ImageFrame src={Frame} alt='' />
      </FrameContainer>
    </Container>
  );
};

export default FramedImage;
