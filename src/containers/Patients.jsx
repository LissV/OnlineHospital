import React from "react";
import styled from "styled-components";
import crossIcon from "../asserts/crossIcon.png";

const Patients = () => {
  return (
    <Page>
      <Header>
        <LeftContainer>
          <ImageWrapper src={crossIcon} alt="Красный крест" />
          <Title>Электронная поликлиника</Title>
        </LeftContainer>
        <RightContainer>
            <NavItem margin={'0 12px 0 0'}> 
                Новости
            </NavItem>
            <NavItem margin={'0 12px 0 0'}>
                Поликлиника
            </NavItem>
            <NavItem margin={'0 12px 0 0'}>
                Кабинет пациента
            </NavItem>
            <NavItem margin={'0 12px 0 0'}>
                Медицинская карта
            </NavItem>
            <NavItem margin={'0 12px 0 0'}>
                Результаты обследований
            </NavItem>
            <NavItem margin={'0 12px 0 0'}>
                Выйти
            </NavItem>
        </RightContainer>
      </Header>
    </Page>
  );
};

export default Patients;

const Header = styled.div`
  width: 100%;
  position: sticky;
  height: 50px;
  top: 0;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Page = styled.div`
  background: #f2f2f2;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  color: ${({ color }) => "#e95d3c"};
`;

const ImageWrapper = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  margin-left: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

const NavItem = styled.div`
    cursor: pointer;
    color: #e95d3c;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;
    color: ${({ color }) => "#e95d3c"};
    margin: ${({ margin }) => margin};
`;
