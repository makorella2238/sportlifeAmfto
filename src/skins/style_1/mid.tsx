"use client";

import { HexBackground } from "@/component/HexBackground";
import { useMatch } from "@/hooks";
import { RefObject, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Mid = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const titleWords = match?.tournament?.full_name;

  const titleRef = useRef<HTMLDivElement>(null);
  const [isTwoLines, setIsTwoLines] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;

    const checkHeight = () => {
      const height = titleRef.current!.offsetHeight;
      setIsTwoLines(height > 75);
    };

    checkHeight();

    const resizeObserver = new ResizeObserver(checkHeight);
    resizeObserver.observe(titleRef.current);

    return () => resizeObserver.disconnect();
  }, [titleWords]);

  return (
    <Container>
      <LocalFonts />
      <Wrapper style={{ display: show ? "flex" : "none" }}>
        <BackgroundImage>
          <HexBackground />
        </BackgroundImage>

        <TitleContainer>
          <TitleLine>{titleWords}</TitleLine>
          <TourContainer>
            <div>1 тур</div>
            <div>СК ТУЛГУ</div>
          </TourContainer>
        </TitleContainer>

        <LogosWrapper>
          <TeameBox color={match?.team_1?.color}>
            <TeamLogo src={match?.team_1?.img} />
            <TeamName>{match?.team_1?.name}</TeamName>
          </TeameBox>

          <CrossIcon />

          <TeameBox color={match?.team_2?.color}>
            <TeamLogo src={match?.team_2?.img} />
            <TeamName>{match?.team_2?.name}</TeamName>
          </TeameBox>
        </LogosWrapper>

        <DateTimeBlock>31.07.2025 / 03:00</DateTimeBlock>
      </Wrapper>
    </Container>
  );
};

const LocalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&display=swap');

  @font-face {
    font-family: 'Lozung';
    src: url('/fonts/Lozung.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;


const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 32px;
  font-family: "Lozung", sans-serif;
  color: white;
  width: 100%;
  height: auto;
  display: grid;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  animation: ${slideDown} 0.5s ease forwards;

  padding-bottom: 20px;
  z-index: 2;
`;

const animatedGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: url("/Group.png") no-repeat center center / cover;
  background: rgba(54, 56, 66, 0.9);
  background-size: 200% 200%;
  animation: ${animatedGradient} 20s linear infinite;
  z-index: -1;
`;

const TitleContainer = styled.div`
  width: 1042px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 6;
  position: relative;
  margin-bottom: 24px;
`;

const TitleLine = styled.div`
  font-size: 56px;
  line-height: 70px;
  letter-spacing: -2%;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

const TeameBox = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamName = styled.div`
  width: 100%;
  font-weight: 200;
  font-size: 24px;
  color: #fff;
  padding: 0 24px;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TeamLogo = styled.img`
  margin-bottom: 42px;
  aspect-ratio: 1;
  max-width: 260px;
  animation: ${pulse} 3s ease-in-out infinite;
`;


const TourContainer = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;
  text-align: center;
  font-weight: 300;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0;
  line-height: 32px;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  font-family: "Onest", sans-serif;
`;

const LogosWrapper = styled.div`
  width: 100%;
  z-index: 2;
  position: relative;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr auto 1fr;
  align-items: center; /* ВЫРАВНИВАНИЕ по центру */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  z-index: 6;
`;

const CrossIcon = styled.div`
  width: 75px;
  height: 75px;
  position: relative;
  margin-bottom: 70px;
  transform: rotate(45deg); /* ПОВОРОТ крестика */

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #fff;
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  &::after {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const DateTimeBlock = styled.div`
  font-family: "Onest", sans-serif;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 32px;
  margin-top: 34px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-flex;
  padding: 8px 0;
  align-self: center;
  justify-self: center;
  color: #fff;
`;
