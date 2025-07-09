"use client";

import { createGlobalStyle } from "styled-components";
import styled, { keyframes } from "styled-components";
import { useMatch, useScoreboard } from "@/hooks";

export const Little = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const { scoreboard } = useScoreboard();

  return (
    <>
      <LocalFonts />
    <Wrapper style={{ display: show ? "block" : "none" }}>
      {/* Фолы над row */}
      <Row>
        {scoreboard.is_fouls && (
          <FoulsRowNew>
            <FoulNumber>{scoreboard?.team_1_fouls ?? 0}</FoulNumber>
            <FoulText>ФОЛЫ</FoulText>
            <FoulNumber>{scoreboard?.team_2_fouls ?? 0}</FoulNumber>
          </FoulsRowNew>
        )}

        <TeamBox side="left">
          <InnerBox side="left">
            <TeamLogo side="left" src={match.team_1.img} />
            <TeamName>{match.team_1.name}</TeamName>
            <ScoreValue>{scoreboard?.team_1_score}</ScoreValue>
            <Prym side="left" />
          </InnerBox>
        </TeamBox>

        <TeamBox side="right">
          <InnerBox side="right">
            <TeamLogo side="right" src={match.team_2.img} />
            <TeamName>{match.team_2.name}</TeamName>
            <ScoreValue>{scoreboard?.team_2_score}</ScoreValue>
            <Prym side="right" />
          </InnerBox>
        </TeamBox>

        <TimerText>
          1T
          <Separator />
          {"26:03"}
        </TimerText>
      </Row>
    </Wrapper>
    </>
  );
};

const LocalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Tablon';
    src: url('/fonts/tablon-2.ttf') format('truetype');
    font-weight: 900, 600, 400;
    font-style: normal;
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

const slideUpDelayed = keyframes`
  from {
    transform: translate(-50%, 34px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
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
  top: 70px;
  left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  z-index: 100;
  overflow: visible;
  animation: ${slideDown} 1.2s ease forwards;
  font-family: "Tablon", sans-serif;
`;

const TeamBox = styled.div<{ side: "left" | "right" }>`
  width: 400px;
  border-radius: ${({ side }) =>
    side === "right" ? "0 10px 10px 0" : "10px 0 0 10px"};
  display: flex;
  align-items: center;
  padding: ${({ side }) => (side === "right" ? "0 10px 0 0" : "0 0 0 10px")};
  justify-content: ${({ side }) =>
    side === "left" ? "flex-start" : "flex-end"};
  height: 66px;
  position: relative;
  padding: 0 12px;
  box-sizing: border-box;
  gap: 20px;

  &::after {
    content: "";
    max-width: 140px;
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

const InnerBox = styled.div<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  gap: 8px;
`;

const FoulsRowNew = styled.div`
  position: absolute;
  top: -34px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 140px;
  height: 34px;
  background: rgba(28, 29, 31, 0.9);
  color: #c2cbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  box-sizing: border-box;
  z-index: 10;
  opacity: 0;
  animation: ${slideUpDelayed} 1.2s ease-out 3s forwards;
`;

const FoulNumber = styled.div`
  font-size: 20px;
  line-height: 34px;
  width: 48px;
  min-width: 48px;
  font-family: "Arial", sans-serif;

  font-weight: 600;
  display: flex; /* флекс-контейнер */
  justify-content: center; /* горизонтальное центрирование */
  align-items: center; /* вертикальное центрирование */
`;

const ScoreValue = styled.div`
  font-size: 42px;
  min-width: 40px;
  text-align: center;
  font-weight: 900;
  color: #d7deea;
  z-index: 10;
  font-family: "Arial", sans-serif;

`;

const TimerText = styled.div`
  font-family: "Arial", sans-serif;
  position: absolute;
  bottom: -34px; /* чуть ниже Row */
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  line-height: 34px;
  padding: 0 10px;
  height: 34px;
  background: rgba(28, 29, 31, 0.9);
  color: #c2cbdb;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  justify-content: center;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0;
  opacity: 0;
  animation: ${timerSlideDown} 1.2s ease-out 3s forwards;
`;

const Separator = styled.div`
  width: 2px;
  height: 16px;
  background-color: #c2cbdb;
  opacity: 0.3;
  margin: 0 8px;
  font-weight: 100;
`;

const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 10px 10px 20px,
    rgba(0, 0, 0, 0.15) 1px 1px 0px, rgba(255, 255, 255, 0.1) 1px 1px 0px inset;
  z-index: 5;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(28, 29, 31, 0.9) 0%,
    rgba(35, 37, 40, 0.8) 100%
  );
  color: #d7deea;
  border-radius: 5px;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%; /* старт за левой границей */
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(45px);
    opacity: 0;
    animation: ${shineAnimation} 5s ease-in-out forwards infinite;
    pointer-events: none;
    z-index: 10;
  }
`;
const TeamLogo = styled.img<{ side: "left" | "right" }>`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-left: ${({ side }) => (side === "left" ? "20px" : "0")};
  margin-right: ${({ side }) => (side === "right" ? "20px" : "0")};
`;

const TeamName = styled.div`
  font-weight: 900;
  color: #d7deea;
  font-size: 22px;
  letter-spacing: 0.02em;
  font-family: var(--font-tablon);
  display: flex; /* переключаем на флекс-контейнер */
  align-items: center; /* вертикальное центрирование */
  justify-content: center; /* горизонтальное центрирование, если нужно */
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 300px;
  height: 60px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  animation: 2s ease 0s 1 normal none running fadeIn;
  overflow: hidden;
  white-space: nowrap;
`;

const FoulText = styled.div`
  font-size: 12px;
  line-height: 34px;
  height: auto;
  font-weight: 600;
  text-transform: uppercase;
  width: 42px; /* добавлено */
  text-align: center; /* чтобы текст ровно по центру был */
`;

const Prym = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: -3px;
  ${({ side }) => (side === "left" ? "left: -12px;" : "right: -14px;")};
  width: 8px;
  height: 66px;
  background: ${({ side }) =>
    side === "left" ? "rgb(255, 123, 0);" : "rgb(255, 0, 0)"};

  /* Скошенные углы: для левого — скос справа, для правого — скос слева */
  border-radius: ${({ side }) =>
    side === "right" ? "0 5px 5px 0" : "5px 0 0 5px"};
`;
