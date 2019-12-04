import React from "react";
import styled from "styled-components";
import redCross from "../asserts/redCross.png";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#e95d3c',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#e95d3c',
      },
      '& .MuiOutlinedInput-root': {
        // '& fieldset': {
        //   borderColor: '#e95d3c',
        // },
        '&:hover fieldset': {
          borderColor: '#e95d3c',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#e95d3c',
        },
      },
    },
  })(TextField);

 const CustomTabs = withStyles({
        indicator: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          '& > div': {
            width: '100%',
            backgroundColor: '#e95d3c',
          },
        },
      })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
      
      const CustomTab = withStyles(theme => ({
        root: {
          textTransform: 'none',
          color: '#333333',
          fontWeight: 500,
          fontSize: theme.typography.pxToRem(15),
          '&:focus': {
            opacity: 1,
          },
        },
      }))(props => <Tab disableRipple {...props} />);

const Authorization = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue); }

  return (
    <PageContainer>
      <SignInWrapper>
        <LeftContainer>
          <ImageWrapper src={redCross} alt="Красный крест" />
          <Text marginTop={"12px"} color={"white"}>
            Электронная поликлиника
          </Text>
          <Question>
            Если вы не зарегестрированы в системе, то всегда можете это сделать
            с помощью кнопки Регистрация
          </Question>
          <SignUpButton style={{ marginTop: "28px" }}>Регистрация</SignUpButton>
        </LeftContainer>
        <RightContainer>
          <Text color={"#e95d3c"} marginTop={'50px'}>Войти</Text>
          <CustomTabs
            value={tabValue}
            onChange={handleChange}
            centered
            style={{marginTop: '6px'}}
          >
            <CustomTab label="Пациент" />
            <CustomTab label="Медицинский работник" />
          </CustomTabs>
          <CssTextField id="outlined-basic" label="Логин" variant="outlined"  style={{marginTop: '20px'}} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleOutlinedIcon color="disabled" />
            </InputAdornment>
          ),
        }} />
          <CssTextField id="outlined-basic" label="Пароль" variant="outlined" style={{marginTop: '20px'}} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HttpsOutlinedIcon color="disabled" />
            </InputAdornment>
          ),
        }}/>
        <SignInButton style={{paddingLeft: '32px', paddingRight: '32px', marginTop: '38px'}} onClick={() => {window.location.href = '/patients';}}>
            Войти
        </SignInButton>
        </RightContainer>
      </SignInWrapper>
    </PageContainer>
  );
};

export default Authorization;

const PageContainer = styled.div`
  background: #f2f2f2;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInWrapper = styled.div`
  background: white;
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 300px;
  background: #e95d3c;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RightContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
  color: ${({ color }) => color};
  letter-spacing: 1px;
  margin-top: ${({ marginTop }) => marginTop};
`;

const ImageWrapper = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 90px;
`;

const Question = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-top: 15px;
  padding: 0 10px 0;
`;

const SignUpButton = styled(Button)`
  background: #e95d3c;
  font-family: "Roboto";
  color: white !important;
  border: white 1px solid !important;
  border-radius: 5px;
  &:hover {
    background: white !important;
    color: #e95d3c !important;
  }
`;

const SignInButton = styled(Button)`
  background: white;
  font-family: "Roboto";
  color: #e95d3c !important;
  border: #e95d3c 1px solid !important;
  border-radius: 5px;
  &:hover {
    background: #e95d3c !important;
    color: white !important;
  }
`;