import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Tests = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <Content>
      <Title color={"#e95d3c"} margin={"15px 0 0 15px"}>
        Результаты обследований
      </Title>
      <RecentTestsWrapper>
          <TestItem>
            <TestTitle>Общий анализ крови</TestTitle>
            <TestStatus color={"#EB5757"}>Не пройден</TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 26 ноября 2019 года, врач-терапевт Галкина С.С.
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
          </TestItem>
          <CustomDivider />
          <TestItem>
            <TestTitle>Биохимический анализ крови</TestTitle>
            <TestStatus color={"#F2C94C"}>Ожидается результат</TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 20 ноября 2019 года, врач-терапевт Галкина С.С.
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
          </TestItem>
          <CustomDivider />
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Рентген коленного сустава</TestTitle>
            <TestStatus color={"#27AE60"} marginBottom={"0"}>
              Результат получен
            </TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 24 ноября 2019 года, врач-хирург Сурок Е.А.
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
            <TestTitle style={{color: '#e95d3c', marginTop: '4px'}}>Посмотреть результат</TestTitle>
          </TestItem>
          <CustomDivider />
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Рентген коленного сустава</TestTitle>
            <TestStatus color={"#27AE60"} marginBottom={"0"}>
              Результат получен
            </TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 24 ноября 2019 года, врач-хирург Сурок Е.А.
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
            <TestTitle style={{color: '#e95d3c', marginTop: '4px'}}>Посмотреть результат</TestTitle>
          </TestItem>
          <CustomDivider />
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Рентген коленного сустава</TestTitle>
            <TestStatus color={"#27AE60"} marginBottom={"0"}>
              Результат получен
            </TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 24 ноября 2019 года, врач-хирург Сурок Е.А.
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
            <TestTitle style={{color: '#e95d3c', marginTop: '4px'}}>Посмотреть результат</TestTitle>
          </TestItem>
        </RecentTestsWrapper>
        <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
      >
        <DialogTitle>{"Рентген коленного сустава"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Здесь должно быть описание обследования
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleClose}>
            Закрыть
          </CustomButton>
        </DialogActions>
      </Dialog>
    </Content>
  );
};

export default Tests;

const Content = styled.div`
  background: white;
  overflow-y: auto;
  margin: 20px 50px;
  height: calc(100% - 60px);
`;

const Title = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

const ContentText = styled.div`
  color: #333333;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "10px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "10px")};
`;

const CustomDivider = styled(Divider)`
  margin: ${({ width }) => (width ? width : "100%")};
`;

const RecentTestsWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 15px 15px 0;
`;

const TestItem = styled.div`
    height: 90px;
    cursor: pointer;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover {
        background: #E0E0E0;
    }
`;

const TestTitle = styled.div`
    color: #333333;
    font-family: "Roboto";
     font-size: 14px;
    font-weight: 700;
`;

const TestStatus = styled.div`
    color: ${({ color }) => color};
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 500;
`;

const CustomButton = styled(Button)`
  background: white;
  font-family: "Roboto";
  color: #e95d3c !important;
  border-radius: 5px;
  &:hover {
    background: #e95d3c !important;
    color: white !important;
  }
`;