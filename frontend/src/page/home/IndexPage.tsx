import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SwiperSlider from '../../components/common/SwiperSlider';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background: url(../images/banner2.jpg);
  background-size: cover;
  background-position: 50%;
`;

const ChevronIcon = styled(KeyboardArrowDownIcon).attrs(() => ({}))`
  position: absolute;
  bottom: 23px;
  left: 50%;
  color: ${({ theme }) => theme.color.text};
  width: 32px;
  height: 32px;
  transform: translate3d(-50%, 0, 0);
  cursor: pointer;
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes move {
    from {
    }
    to {
      bottom: 15px;
    }
  }
`;

const ContentBox = styled.div`
  position: absolute;
  left: 40px;
  top: 168px;
`;

const SubText = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.grey_text};
  animation-duration: 0.8s;
  animation-name: move;
  animation-fill-mode: forwards;
  opacity: 0;
  @media (max-width: 500px) {
    font-size: 14px;
  }
  @keyframes move {
    from {
      transform: translate3d(0, 20px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const MainText = styled.h2`
  font-size: 52px;
  margin: 0;
  line-height: 72px;
  font-weight: 700;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.color.grey_text};
  animation-duration: 0.8s;
  animation-delay: 0.15s;
  animation-name: move;
  animation-fill-mode: forwards;
  opacity: 0;
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @keyframes move {
    from {
      transform: translate3d(0, 20px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const AboutContainer = styled.div`
  position: relative;
  padding-top: 90px;
  width: 100%;
  height: 702px;
  @media (max-width: 1023px) {
    padding-top: 60px;
    height: 992px;
  }
  @media (max-width: 414px) {
    padding-top: 60px;
    height: 1752px;
  }
`;

const AboutContent = styled.div`
  display: none;
`;

const IconArea = styled.div`
  width: 1090px;
  height: 313px;
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  @media (max-width: 1023px) {
    width: 545px;
  }
  @media (max-width: 414px) {
    width: 240px;
  }
`;

const Icon = styled.div`
  width: 240px;
  height: 313px;
  margin: 0 8px;
  float: left;
  box-sizing: border-box;
  animation-duration: 0.8s;
  animation-name: move;
  @keyframes move {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const ActionContainer = styled.div`
  width: 100%;
  height: 1103px;
  background-color: #f5f5f6;
  position: relative;
  padding-top: 100px;
  @media (max-width: 1023px) {
    padding-top: 60px;
    height: 992px;
  }
  @media (max-width: 414px) {
    padding-top: 60px;
    height: 752px;
  }
`;

const ActionContent = styled.div`
  display: none;
`;

const TabList = styled.ul`
  padding: 0;
  padding-top: 20px;
  list-style: none;
  text-align: center;
`;

const ListItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: #3c4758;
  padding-bottom: 7px;
  display: inline-block;
  list-style: none;
  margin: 0 12px;
`;

const PcContainer = styled.div`
  background: #1c1c1c;
  width: 100%;
  height: 480px;
  max-width: 720px;
  margin: 0 auto 0;
  padding: 30px 24px 30px 24px;
  border-radius: 18px;
  border-top: 2px solid #3c3f45;
  border-right: 2px solid #202227;
  border-bottom: 2px solid #202227;
  border-left: 2px solid #3c3f45;
  box-shadow: 11px 11px 24px rgba(0, 0, 0, 0.5);
  @media (max-width: 1020px) {
    width: 600px;
    height: 400px;
  }
  @media (max-width: 720px) {
    width: 450px;
    height: 300px;
  }
  @media (max-width: 500px) {
    width: 270px;
    height: 180px;
  }
`;

const PcScreen = styled.div`
  position: absolute;
  color: black;
  padding: 50px 40px 50px 40px;
  height: 380px;
  width: 640px;
  text-align: justify;
  @media (max-width: 1020px) {
    width:  520px;
    height: 300px;
  }
  @media (max-width: 720px) {
    width: 370px;
    height: 200px;
  }
  @media (max-width: 500px) {
    padding: 20px 10px 20px 10px;
    width: 250px;
    height: 140px;
  }
  animation: moveToLeft .6s ease both;
  @keyframes moveToLeft {
    from { -webkit-transform: translateX(-20%); opacity: 0;}
    to { -webkit-transform: translateX(0%); transform: translateX(0%); opacity: 1;}
  }
`;

const PopularContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  padding-top: 100px;
`;

const PopularContent = styled.div`
  visibility: hidden;
  animation-duration: 0.8s;
  animation-name: move;
  animation-play-state:paused;
  @keyframes move {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const StyledButton = styled.div`
  display: inline-block;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: rgba(225,94,0,0.7);
  border-radius: 0;
  padding: 18px 40px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(250,237,125,0.8), rgba(246,111,52,0.8), rgba(34,34,34,0), rgba(34,34,0,0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 3px solid rgba(225,94,0);
  border-radius: 3px;
  width: 200px;
  :hover {
    color: #fff;
    border: 3px solid rgba(145,94,0,0);
    color: $white;
    background-position: 99% 50%;
  }
`;

let isActive: boolean = true;
const IndexPage = () => {
  const [tabNo, setTabNo] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const PeopleRef = useRef<HTMLDivElement>(null);
  const DealRef = useRef<HTMLDivElement>(null);
  const MoneyRef = useRef<HTMLDivElement>(null);
  const DownRef = useRef<HTMLDivElement>(null);
  const ActionRef = useRef<HTMLDivElement>(null);
  const PopularRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.setIsIndex(true));
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('scroll', myFunction);
    const countdown = setInterval(() => {
      setTabNo((tabNo+1)%3);
    }, 4000);
    return () => {
      window.removeEventListener('scroll', myFunction);
      dispatch(commonActions.setIsIndex(false));
      clearInterval(countdown);
    };
  }, [dispatch, tabNo]);

  function myFunction() {
    if (null !== aboutRef.current) {
      if (
        window.pageYOffset >
        aboutRef.current.offsetHeight + window.innerHeight * 1.1
      ) {
        if (null !== ActionRef.current) {
          ActionRef.current.style.display = 'block';
          if (isActive) {
            setTabNo(0);
            isActive = false
          }
          else if (window.pageYOffset >
            aboutRef.current.offsetHeight + ActionRef.current.offsetHeight + window.innerHeight * 1.2) {
              if (null !== PopularRef.current){
                PopularRef.current.style.visibility = 'visible';
                PopularRef.current.style.animationPlayState = 'running';
              }
          }
        }
      } else if (window.pageYOffset > window.innerHeight / 1.5) {
        aboutRef.current.style.display = 'block';
      }
      if (
        null !== PeopleRef.current &&
        null !== DealRef.current &&
        null !== MoneyRef.current &&
        null !== DownRef.current
      ) {
        let num: number;
        if (aboutRef.current.scrollHeight === 1476) {
          num = window.pageYOffset - (aboutRef.current.offsetHeight + window.innerHeight / 1);
        } else {
          num = window.pageYOffset - (aboutRef.current.offsetHeight + window.innerHeight / 1.5);
        }
        if (num > 0) {
          const opacityIdx: string = String(1 - num / 200);
          const transformIdx: number = num / 3;
          PeopleRef.current.style.transform = `translate3d(-${transformIdx}px,0,0)`;
          PeopleRef.current.style.opacity = opacityIdx;
          DealRef.current.style.transform = `translate3d(-${transformIdx}px,0,0)`;
          DealRef.current.style.opacity = opacityIdx;
          MoneyRef.current.style.transform = `translate3d(${transformIdx}px,0,0)`;
          MoneyRef.current.style.opacity = opacityIdx;
          DownRef.current.style.transform = `translate3d(${transformIdx}px,0,0)`;
          DownRef.current.style.opacity = opacityIdx;
        } else {
          PeopleRef.current.style.opacity = '1';
          PeopleRef.current.style.transform = 'translate3d(0,0,0)';
          DealRef.current.style.opacity = '1';
          DealRef.current.style.transform = 'translate3d(0,0,0)';
          MoneyRef.current.style.opacity = '1';
          MoneyRef.current.style.transform = 'translate3d(0,0,0)';
          DownRef.current.style.opacity = '1';
          DownRef.current.style.transform = 'translate3d(0,0,0)';
        }
      }
    }
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Container>
        <ChevronIcon style={{ fontSize: 35 }} onClick={scrollToBottom} />
        <ContentBox>
          <SubText>NO.1 ?????? ?????? ?????????</SubText>
          <MainText>
            {' '}
            Haggle Credit?????? <br /> ?????? ????????? ?????? ?????????{' '}
          </MainText>
        </ContentBox>
      </Container>
      <AboutContainer>
        <AboutContent ref={aboutRef}>
          <MainText style={{ textAlign: 'center' }}> Haggle Credit??? </MainText>
          <SubText style={{ textAlign: 'center' }}>
            <br />
            ?????? ???????????? ???????????? ???????????? ???????????? ????????????
            <br />
            ????????? ?????? ?????? ??????????????? ?????????,{' '}
            <span style={{ fontWeight: 700 }}>????????? 1???</span>
            <br />
            <span style={{ fontWeight: 700 }}>?????????</span>?????????.
          </SubText>
          <IconArea>
            <Icon ref={PeopleRef}>
              <img
                height="140"
                width="140"
                src={'../images/main/people.png'}
                alt=""
              />
              <SubText>????????? ???</SubText>
              <MainText>250??????</MainText>
            </Icon>
            <Icon ref={DealRef}>
              <img
                height="140"
                width="140"
                src={'../images/main/deal.png'}
                alt=""
              />
              <SubText>?????? ??? ???</SubText>
              <MainText>1?????????</MainText>
            </Icon>
            <Icon ref={MoneyRef}>
              <img
                height="140"
                width="140"
                src={'../images/main/money.png'}
                alt=""
              />
              <SubText>?????? ???????????? ?????????</SubText>
              <MainText>40??????</MainText>
            </Icon>
            <Icon ref={DownRef}>
              <img
                height="140"
                width="140"
                src={'../images/main/down.png'}
                alt=""
              />
              <SubText>?????? ??? ????????????</SubText>
              <MainText>1?????????</MainText>
            </Icon>
          </IconArea>
        </AboutContent>
        <p
          style={{
            bottom: '80px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          *2023??? 1??? ??????
        </p>
      </AboutContainer>
      <ActionContainer>
        <ActionContent ref={ActionRef}>
          <MainText style={{ textAlign: 'center' }}>????????? ????????????<br />?????????</MainText>
          <TabList>
            <ListItem
              style={
                tabNo === 0
                  ? { borderBottom: '3px solid #ff8787' }
                  : { borderBottom: 'none' }
              }
              onClick={() => {setTabNo(0);}}
            >
              ?????? ??????
            </ListItem>
            <ListItem
              style={
                tabNo === 1
                  ? { borderBottom: '3px solid #ff8787' }
                  : { borderBottom: 'none' }
              }
              onClick={() => {setTabNo(1);}}
            >
              ?????????
            </ListItem>
            <ListItem
              style={
                tabNo === 2
                  ? { borderBottom: '3px solid #ff8787' }
                  : { borderBottom: 'none' }
              }
              onClick={() => {setTabNo(2);}}
            >
              ????????????
            </ListItem>
          </TabList>
          <SubText style={{ textAlign: 'center', lineHeight: '29px' }}>
            <br />
            {DESCRIPTION[tabNo].split('<br />').map((line) => {
              return (
                <span key={line}>
                  {line}
                  <br />
                </span>
              );
            })}
          </SubText>
          <PcContainer>
            {(tabNo===0) && <PcScreen 
              style={
                {background: `url(${process.env.PUBLIC_URL}/images/main/active0.jpg) no-repeat center/cover`, 
              }}
            />}
            {(tabNo===1) &&<PcScreen 
              style={
                {background: `url(${process.env.PUBLIC_URL}/images/main/active1.jpg) no-repeat center/cover`, 
              }}
            />}
            {(tabNo===2) &&<PcScreen 
              style={
                {background: `url(${process.env.PUBLIC_URL}/images/main/active2.jpg) no-repeat center/cover`, 
              }}
            />}
          </PcContainer>
        </ActionContent>
      </ActionContainer>
      <PopularContainer>
        <PopularContent ref={PopularRef}>
          <MainText style={{ textAlign: 'center', marginBottom: '30px'}}>????????? ?????? ??????</MainText>
          <SubText style={{ textAlign: 'center' }}>Haggle Credit??? ??????????????? <br /> ?????? ?????? ???????????????!</SubText>
          <div style={{ margin: '60px 50px' }}><SwiperSlider/></div>
          <div style={{ textAlign: 'center' }}><Link to={"/home"}><StyledButton>Haggle Credit ????????????</StyledButton></Link></div>
        </PopularContent>
      </PopularContainer>
    </>
  );
};
export default IndexPage;

const DESCRIPTION: string[] = [
  `????????? ??????????????? ????????? ??????<br />
  ???????????? ???????????? ???????????????.<br />`,
  `????????? ????????? ?????? ?????? ????????? ?????? ????????? No!<br />
  ???????????? ?????? ????????? ????????? ????????? ???????????????.<br />`,
  `????????? ???????????? ???????????? ????????? ?????????,<br />
  ????????? ???????????? ????????? ????????? ???????????????!<br />`,
];
