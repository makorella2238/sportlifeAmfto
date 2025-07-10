import { useMatch } from "@/hooks";
import styled, { keyframes } from "styled-components";

export const Person = ({
  kind,
  show,
}: {
  kind: "red" | "yellow" | "goal" | "coach" | "judge";
  show: boolean;
}) => {
  const match = useMatch();

  const renderCards = () => {
    if (kind === "red") {
      return (
        <CardGroup side="red">
          <Card src="/redCard.png" alt="Red Card" />
        </CardGroup>
      );
    }
    if (kind === "yellow") {
      return (
        <CardGroup side="yellow">
          <Card src={"/yellowCard.png"} alt={`${kind} Card`} />
        </CardGroup>
      );
    }
    if (kind === "goal") {
      return (
        <CardGroup side="goal">
          <Card
            src="/goal.png"
            alt={`${kind} Card`}
            style={{ filter: "invert(1)" }}
          />
        </CardGroup>
      );
    }
    return null;
  };

  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <BackgroundLayer />
      <TeamBoxWrapper>
        {kind === "goal" && <PersImage src="/personCard.png" alt="Player" />}
        {renderCards()}
        <TeamBox side="left" kind={kind}>
          <Col>
            <Row>
              <TeamName side="left">28</TeamName>
              <TeamName side="left">ДМИТРИЙ ПОКРОВСКИЙ</TeamName>
            </Row>
            <TeamNameLit side="left">{match?.team_1?.name}</TeamNameLit>
          </Col>
        </TeamBox>
        <TeamLogo side="left" src={match?.team_1?.img} />
      </TeamBoxWrapper>
    </Wrapper>
  );
};

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(151, 155, 170);
  z-index: 0;
`;

const Row = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center;
  gap: 16px;
  width: 560px;
  padding: 6px 12px;
  z-index: 10;
  background: radial-gradient(transparent 25%, #0000004f), rgba(239, 109, 21, 0.85);
`;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 770px;
  align-items: center;
  z-index: 9999;
  overflow: visible; // ← добавлено
`;

const CardGroup = styled.div<{ side: "yellow" | "red" | "goal" }>`
  position: absolute;
  right: ${(props) => (props.side === "red" ? "25px;" : props.side === "goal" ? "25px" : "25px")};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 5;
`;

const Card = styled.img`
  width: 50px;
  height: 60px;
  object-fit: contain;
`;

const Goal = styled.div`
  position: relative;
`;

const TeamBoxWrapper = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 750px;
  display: flex;
  align-items: flex-start;
  animation: ${slideInFromRight} 0.6s ease-out forwards;
  z-index: 10;
  background: transparent;
  overflow: visible; // ← добавлено
`;
const PersImage = styled.img`
  position: absolute;
  top: -165px;
  left: 95px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  z-index: 2;
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  top: -20px;
  left: -125px;
  width: 127px;
  object-fit: contain;
  margin-left: 20px;
  z-index: 3;
  align-self: center;
`;

const TeamBox = styled.div<{
  side: "left" | "right";
  kind?: "red" | "yellow" | "goal" | "coach" | "judge";
}>`
  width: 750px;
  position: relative;
  height: 90px;
    background: radial-gradient(transparent 25%, #0000004f);  
  align-items: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-right: 100px;
  align-items: flex-end;
  position: relative; // добавлено
  height: 100%; // важно, чтобы позиционировать потомков
`;

const TeamName = styled.div<{ side: "left" | "right" }>`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center; /* Добавлено */
  font-family: "Furore", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  z-index: 1;
`;

const TeamNameLit = styled.div<{ side: "left" | "right" }>`
  position: absolute; // добавлено
  left: ${({ side }) => (side === "left" ? "25px" : "auto")};
  bottom: 6px; // прижимаем вниз
  height: 40px;
  display: flex;
  align-items: center;
  font-family: "Furore", sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  color:rgb(224, 224, 224) ; /* Светло-серый цвет */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;

  ${({ side }) =>
    side === "left"
      ? `
        padding-left: 40px;
        justify-content: flex-end;
      `
      : `
        padding-right: 15px;
        justify-content: flex-end;
      `}
`;
