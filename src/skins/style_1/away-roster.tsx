"use client";

import styled, { keyframes } from "styled-components";
import { useMatch } from "@/hooks";
import { HexBackground } from "@/component/HexBackground";

export const AwayRoster = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const players = match?.results_2 || [];
  const teamName = match?.team_2?.name || "";
  const coaches = match?.team_2?.coaches || [];
  const representatives = match?.team_2?.representativs || [];

  return (
    <Container style={{ display: show ? "flex" : "none" }}>
      <Wrapper>
        <BackgroundImage >
          <HexBackground />
        </BackgroundImage>

        <TeamLogo src={match?.team_2?.img} alt="Team Logo" />

        <RosterTitle>
          <strong>СОСТАВ:</strong>&nbsp;{teamName}
        </RosterTitle>

        <GridWrapper>
          {players.slice(0, 18).map((player, i) => (
            <PlayerBlock key={i} delay={i * 0.15}>
              <NumberAndNameWrapper>
                <NameBlock>
                  {i + 1} {player.player_fio}
                </NameBlock>
              </NumberAndNameWrapper>
              <PlayerImage src="/pers.png" alt="Player" />
            </PlayerBlock>
          ))}
        </GridWrapper>

        <CoachesSection>
          <PlayerBlock>
            <RoleText>Представителей</RoleText>
            <NameBlock>{coaches[0]?.fio}</NameBlock>
            <PlayerImage src="/pers.png" alt="Representative" />
          </PlayerBlock>

          <PlayerBlock>
            <RoleText>Тренеры</RoleText>
            <NameBlock>{representatives[0]?.fio}</NameBlock>
            <PlayerImage src="/pers.png" alt="Coach" />
          </PlayerBlock>
        </CoachesSection>
      </Wrapper>
    </Container>
  );
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  text-color: #fff;
  width: 1720px;
  height: 820px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 200% 200%;
  animation: ${slideDown} 0.5s ease forwards;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  background: rgba(54, 56, 66, 0.9);
  background-size: 400% 400%;
  width: 1016px;
  height: 833px;
  overflow: hidden;
  animation: ${slideDown} 0.5s ease forwards;
  padding: 30px 40px;
  box-sizing: border-box;
  z-index: 10;
`;

const TeamLogo = styled.img`
  position: absolute;
  top: 30px;
  right: 60px;
  width: 150px;
  height: 150px;
  object-fit: contain;
  z-index: 20;
`;


const RosterTitle = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 140px;
  margin-left: 40px;
  strong {
    font-weight: 700;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  max-width: 900px; /* или фиксированная ширина */
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  margin-left: 10px;
  column-gap: 50px;
  row-gap: 20px;
`;

const NumberAndNameWrapper = styled.div`
  display: flex;
  max-width: 180px; /* максимально 176-180px */
  min-width: 176px;
  align-items: center;
  flex-shrink: 0;
  overflow-wrap: break-word;
`;

const PlayerBlock = styled.div<{ delay?: number }>`
  position: relative;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(184, 183, 183, 0.3);
  width: 271.5px;
  height: 60px;
  box-sizing: border-box;

  animation: ${fadeInUp} 0.4s ease-out forwards;
  opacity: 0;
  animation-delay: ${({ delay }) => delay ?? 0}s;
`;
const NameBlock = styled.div`
  font-size: 17px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  white-space: normal; /* разрешаем переносы */
  word-break: break-word;
  line-height: 1.4;
  overflow: hidden;
`;

const PlayerImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

const CoachesSection = styled.div`
  width: 90%;
  margin: 60px 10px 0;
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const RoleText = styled.div`
  position: absolute;
  top: -24px; /* смещение наверх, отрегулируй под себя */
  left: 0;
  color: white;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  font-family: "Anton", sans-serif;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  width: 100%; /* чтобы растянуть по ширине PlayerBlock */
  text-align: left;
`;
