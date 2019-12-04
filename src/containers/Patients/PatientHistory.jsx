import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PatientHistory = () => {
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
        Медицинская карта
      </Title>
      <RecentTestsWrapper>
      <CustomDivider />
      <DateWrapper>
          15 ноября 2019
      </DateWrapper>
          <CustomDivider />
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Врач-терапевт Галкина С.С.</TestTitle>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Время:</b> 10:30
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
            <TestTitle style={{color: '#e95d3c', marginTop: '4px'}}>Подробнее о приеме</TestTitle>
          </TestItem>
          <CustomDivider />
          <DateWrapper>
          10 ноября 2019
      </DateWrapper>
          <CustomDivider />
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Врач-терапевт Галкина С.С.</TestTitle>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Время:</b> 10:30
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
            <TestTitle style={{color: '#e95d3c', marginTop: '4px'}}>Подробнее о приеме</TestTitle>
          </TestItem>
          <CustomDivider />
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Врач-терапевт Галкина С.С.</TestTitle>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Время:</b> 10:30
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Место:</b> Городская поликлиника №4, ул. Московская, 339А, кабинет 430
            </ContentText>
            <TestTitle style={{color: '#e95d3c', marginTop: '4px'}}>Подробнее о приеме</TestTitle>
          </TestItem>
        </RecentTestsWrapper>
        <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
      >
        <DialogTitle>{"Информация об обращении пациента"}</DialogTitle>
        <DialogContent>
        <ContentText>
              <b>Повторное обращение:</b> нет.
            </ContentText>
        <ContentText>
              <b>Жалобы:</b> головная боль, шум в ушах.
            </ContentText>
            <ContentText>
              <b>Результаты осмотра:</b> зрачки сильно сужены.
            </ContentText>
            <ContentText>
              <b>Требуемые обследования:</b> общий анализ крови.
            </ContentText>
            <ContentText>
              <b>Назначенные препараты:</b> анальгин.
            </ContentText>
            <ContentText>
              <b>Рекомендации:</b> посещение невролога, посещение офтальмолога, пастельный режим.
            </ContentText>
            <ContentText>
              <b>Оформление больничного:</b> да.
            </ContentText>
            <ContentText>
              <br />
              24.11.2019 14:45
              <br />
              Врач-терапевт Галкина С.С.
            </ContentText>
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

export default PatientHistory;

const DateWrapper = styled.div`
    font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  color: ${({ color }) => '#333333'};
  margin: ${({ margin }) => margin};
`;

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