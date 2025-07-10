"use client";

import styled, { keyframes } from "styled-components";
import { useMatch, useScoreboard } from "@/hooks";
import { createGlobalStyle } from "styled-components";

export const Big = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const { scoreboard } = useScoreboard();

  return (
    <Wrapper style={{ display: show ? "block" : "none" }}>
      <LocalFonts />
      {/* Фолы над row */}
      <Row>
        <TeamBox side="left">
          <TeamLogo side="left" src={match.team_1.img} />
          <InnerBox side="left">
            <ScoreValue>{scoreboard?.team_1_score}</ScoreValue>
            <TeamName>{match.team_1.name}</TeamName>
          </InnerBox>
        </TeamBox>

        <TeamBox side="right">
          <TeamLogo side="right" src={match.team_2.img} />
          <InnerBox side="right">
            <TeamName>{match.team_2.name}</TeamName>
            <ScoreValue>{scoreboard?.team_2_score}</ScoreValue>
          </InnerBox>
        </TeamBox>

        <TimerText>1T</TimerText>
      </Row>
    </Wrapper>
  );
};

const LocalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Tablon';
    src: url('/fonts/tablon-2.ttf') format('truetype');
    font-weight: 900, 600, 400;
    font-style: extra-bold, semi-bold, normal;
    font-display: swap;
  }
`;

const gradientGrow = keyframes`
  0% { transform: scaleX(0); opacity: 0; }
  100% { transform: scaleX(1); opacity: 0.8; }
`;

const shineAnimation = keyframes`
  0% {
    left: -150%;
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    left: 150%;
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const timerSlideDown = keyframes`
  from {
    transform: translate(-50%, -34px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 70px;
  left: 19%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: ${slideUp} 1.2s ease-out forwards;
  width: 1213px;
  font-family: "Tablon", sans-serif;
`;

const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(28, 29, 31, 0.9) 0%,
    rgba(35, 37, 40, 0.8) 100%
  );
  color: #d7deea;
  border-radius: 5px;
  overflow: visible;
  box-shadow: rgba(0, 0, 0, 0.15) 10px 10px 20px,
    rgba(0, 0, 0, 0.15) 1px 1px 0px, rgba(255, 255, 255, 0.1) 1px 1px 0px inset;
  overflow: visible; /* чтобы было видно абсолютные дети */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%; /* старт за левой границей */
    width: 50%;
    height: 96px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(75px);
    opacity: 0;
    animation: ${shineAnimation} 5s ease-in-out forwards infinite;
    pointer-events: none;
    z-index: 10;
  }
`;

const TeamBox = styled.div<{ side: "left" | "right" }>`
  width: 610px;
  border-radius: ${({ side }) =>
    side === "right" ? "0 10px 10px 0" : "10px 0 0 10px"};
  display: flex;
  align-items: center;
  padding: ${({ side }) => (side === "right" ? "0 10px 0 0" : "0 0 0 10px")};
  justify-content: ${({ side }) =>
    side === "left" ? "flex-start" : "flex-end"};
  height: 96px;
  position: relative;
  padding: 0 12px;
  box-sizing: border-box;
  gap: 20px;

  &::after {
    content: "";
    max-width: 160px;
    width: 100%;
    opacity: 0.8;
    height: 100%;
    position: absolute;
    top: 0;
    ${({ side }) => (side === "left" ? "right: 0;" : "left: -1px;")}
    z-index: 5;
    background: ${({ side }) =>
      side === "left"
        ? "linear-gradient(90deg, rgba(198, 7, 123, 0) 0%, rgba(209, 37, 95, 0.75) 50%, rgb(221, 66, 68) 100%)"
        : "linear-gradient(90deg, rgb(221, 66, 68) 0%, rgba(232, 96, 40, 0.75) 50%, rgba(244, 125, 14, 0) 100%)"};
    animation: ${gradientGrow} 3s ease forwards;
  }
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  width: 150px;
  height: 150px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ side }) => (side === "left" ? "left: -70px;" : "right: -60px;")}
`;

const InnerBox = styled.div<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row" : "row-reverse")};

  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const TeamName = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-family: "Tablon", sans-serif;
  font-size: 32px;
  color: #d7deea;
  font-weight: extra-bold;
  font-weight: 700;
  max-width: 300px;
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  height: 60px;
  line-height: 60px;
`;

const ScoreValue = styled.div`
  font-size: 56px;
  font-weight: 900;
  color: #d7deea;
  min-width: 50px;
  text-align: center;
  z-index: 10;
  font-family: "Arial", sans-serif;
`;

const TimerText = styled.div`
  position: absolute;
  bottom: -34px;
  left: 50%;
  font-family: "Arial", sans-serif;
  transform: translate(-50%, 0);
  width: 160px;
  height: 34px;
  background: rgba(28, 29, 31, 0.9);
  color: #c2cbdb;
  font-size: 16px;
  line-height: 34px;
  padding: 0 10px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0;
  animation: ${timerSlideDown} 1.2s ease-out 3s forwards;
`;
