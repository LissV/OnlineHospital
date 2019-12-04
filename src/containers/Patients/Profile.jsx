import React from "react";
import styled from "styled-components";
import user from "../../asserts/user.png";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Profile = () => {
    const [openTest, setOpenTest] = React.useState(false);
    const handleClickOpen = () => {
        setOpenTest(true);
      };
    
      const handleClose = () => {
        setOpenTest(false);
      };
  return (
    <Content>
      <Title color={"#e95d3c"} margin={"15px 0 0 15px"}>
        Кабинет пациента
      </Title>
      <ProfileHeader>
        <Avatar src={user} alt="Аватар" />
        <Info>
          <FIO>Иванов Иван Иванович</FIO>
          <OMS>Полис ОМС 1111141111141111</OMS>
          <City>Калуга, Калужская область</City>
          <Hospital>Городская поликлиника №4, ул. Московская, 339А</Hospital>
        </Info>
      </ProfileHeader>
      <ProfileInfo>
        <InnerContainersWrapper>
          <InnerContainer>
            <ContentText>
              <b>Дата рождения:</b> 12.11.1976
            </ContentText>
            <ContentText>
              <b>Адрес:</b> г. Калуга, ул. Московская, д. 350, кв. 5
            </ContentText>
            <ContentText>
              <b>Телефон:</b> +7(900) 654-56-57
            </ContentText>
            <ContentText>
              <b>E-mail:</b> iviv1211@yandex.ru
            </ContentText>
          </InnerContainer>
          <InnerContainer margin={"0 0 0 170px"}>
            <ContentText>
              <b>Группа крови:</b> АВ(+)
            </ContentText>
            <ContentText>
              <b>Рост:</b> 186 см
            </ContentText>
            <ContentText>
              <b>Вес:</b> 80 кг
            </ContentText>
            <ContentText>
              <b>Следующая диспансеризация:</b> 2020 год
            </ContentText>
          </InnerContainer>
        </InnerContainersWrapper>
        <CustomDivider />
        <ContentText>
          <b>Хронические заболевания:</b> диабет
        </ContentText>
        <ContentText>
          <b>Аллергические реакции:</b> глютен
        </ContentText>
        <CustomDivider />
        <RecentTestsWrapper>
          <TestsTitle>Недавние обследования</TestsTitle>
          <TestItem>
            <TestTitle>Общий анализ крови</TestTitle>
            <TestStatus color={"#EB5757"}>Не пройден</TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 26 ноября 2019 года, врач-терапевт Галкина С.С.
            </ContentText>
          </TestItem>
          <TestItem>
            <TestTitle>Биохимический анализ крови</TestTitle>
            <TestStatus color={"#F2C94C"}>Ожидается результат</TestStatus>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              <b>Назначено:</b> 20 ноября 2019 года, врач-терапевт Галкина С.С.
            </ContentText>
          </TestItem>
          <TestItem onClick={handleClickOpen}>
            <TestTitle>Рентген коленного сустава</TestTitle>
            <TestStatus color={"#27AE60"} marginBottom={"0"}>
              Результат получен
            </TestStatus>
            <ContentText marginTop={"0"}>
              <b>Назначено:</b> 24 ноября 2019 года, врач-хирург Сурок Е.А.
            </ContentText>
          </TestItem>
        </RecentTestsWrapper>
        <CustomDivider />
        <RecentTestsWrapper>
          <TestsTitle>Текущие записи к специалистам</TestsTitle>
          <TestItem style={{ height: "70px" }}>
            <TestTitle style={{ color: "#e95d3c" }}>
              Врач-хирург Сурок Е.А.
            </TestTitle>
            <TestTitle>15 декабря 2019 года, 15:30</TestTitle>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              Городская поликлиника №4, ул. Московская, 339А, кабинет 201
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
            <b>Примечания:</b> обязательно иметь при себе описание рентгеновского снимка коленного сустава.
            </ContentText>
            {/* <CloseIcon color="disabled"/> */}
          </TestItem>
          <TestItem style={{ height: "70px" }}>
            <TestTitle style={{ color: "#e95d3c" }}>
              Врач-терапевт Галкина С.С.
            </TestTitle>
            <TestTitle>10 декабря 2019 года, 08:30</TestTitle>
            <ContentText marginTop={"0"} marginBottom={"0"}>
              Городская поликлиника №4, ул. Московская, 339А, кабинет 120
            </ContentText>
            <ContentText marginTop={"0"} marginBottom={"0"}>
            <b>Примечания:</b> отсутствуют.
            </ContentText>
            {/* <CloseIcon color="disabled"/> */}
          </TestItem>
        </RecentTestsWrapper>
      </ProfileInfo>
      <Dialog
        open={openTest}
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

export default Profile;

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

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

const ProfileHeader = styled.div`
  display: flex;
  margin: 30px 0 10px 15px;
  flex-direction: row;
`;

const FIO = styled.div`
  color: #333333;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
`;

const City = styled.div`
  color: #828282;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 15px;
`;

const OMS = styled.div`
  color: #828282;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

const Hospital = styled.div`
  color: #828282;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

const ProfileInfo = styled.div`
  margin: 10px 15px 10px;
  padding-left: 5px;
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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
`;

const InnerContainersWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecentTestsWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 15px 0 0;
`;

const TestItem = styled.div`
    height: 50px;
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

const TestsTitle = styled.div`
     color: #333333;
    font-family: "Roboto";
     font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
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

// const CloseIcon = styled(CloseOutlinedIcon)``;