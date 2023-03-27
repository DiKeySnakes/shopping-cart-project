import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 83vh;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f5c7a9;
`;

const Contacts = () => {
  return (
    <>
      <Wrapper>
        <h1>This is Contacts Page</h1>
      </Wrapper>
    </>
  );
};

export default Contacts;
