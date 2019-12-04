import React from "react";
import styled from "styled-components";
import crossIcon from "../asserts/crossIcon.png";
import Tests from './Patients/Tests';
import Profile from './Patients/Profile';
import PatientHistory from './Patients/PatientHistory';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

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
            <NavItem margin={'0 12px 0 0'} onClick={() => {window.location.href = '/patients/profile';}}>
                Кабинет пациента
            </NavItem>
            <NavItem margin={'0 12px 0 0'} onClick={() => {window.location.href = '/patients/patientHistory';}}>
                Медицинская карта
            </NavItem>
            <NavItem margin={'0 12px 0 0'} onClick={() => {window.location.href = '/patients/tests';}}>
                Результаты обследований
            </NavItem>
            <NavItem margin={'0 12px 0 0'} onClick={() => {window.location.href = '/signIn';}}>
                Выйти
            </NavItem>
        </RightContainer>
      </Header>
      <Router>
      <Switch>
        <Route path='/patients/profile'>
          <Profile />
        </Route>
        <Route path='/patients/tests'>
        <Tests />
        </Route>
        <Route path='/patients/patientHistory'>
        <PatientHistory />
        </Route>
        <Redirect exact from="/patients" to="/patients/profile" />
      </Switch>
    </Router>
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
  border-bottom: 2px solid #F2F2F2;
`;

const Page = styled.div`
  background: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
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
