import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 7vmin;
  margin-bottom: 7vmin;
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Bottom = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

const Edge = styled.div`
  width: calc(25% + 15px);
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  align-items: center;
  margin-left: 3rem;
  margin-right: 3rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Bitter', serif;
  font-size: 2.2vmin;
  font-weight: 800;
  line-height: 110%;
  color: #333333;
  @media (max-width: 800px) {
    font-size: 4.2vmin;
  }
  @media (max-width: 350px) {
    font-size: 6.2vmin;
  }
`;

const CustomHeaderText = (props) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Edge />
        <Left>
          <Top />
          <Bottom />
        </Left>
      </LeftWrapper>
      <TextWrapper>
        <Text>{props.text}</Text>
      </TextWrapper>
      <RightWrapper>
        <Right>
          <Top />
          <Bottom />
        </Right>
        <Edge />
      </RightWrapper>
    </Wrapper>
  );
};

export default CustomHeaderText;
