import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const NUM_DYNAMIC_HEXES = 10;
const ANIMATION_DURATION = 10000; // 10 секунд анимация полного цикла

type HexData = {
  id: number;
  top: number;   // в процентах
  left: number;  // в процентах
  size: number;  // в px
  animationKey: string; // уникальный ключ для повторного запуска анимации
};

const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

const generateAnimation = (x: number, y: number) => keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translate(${x}px, ${y}px);
    opacity: 0.5;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
`;

export const HexBackground = () => {
  const [hexes, setHexes] = useState<HexData[]>([]);

  // Инициализация hex при маунте
  useEffect(() => {
    const initialHexes: HexData[] = Array.from({ length: NUM_DYNAMIC_HEXES }, (_, i) => ({
      id: i,
      top: randomFloat(-20, 120),
      left: randomFloat(-20, 120),
      size: randomFloat(50, 200),
      animationKey: Math.random().toString(),
    }));
    setHexes(initialHexes);
  }, []);

  // Цикличное обновление hex: "уход" и появление на новом месте
  useEffect(() => {
    const interval = setInterval(() => {
      setHexes((prev) =>
        prev.map((hex) => ({
          ...hex,
          top: randomFloat(-20, 120),
          left: randomFloat(-20, 120),
          size: randomFloat(50, 200),
          animationKey: Math.random().toString(), // изменяем ключ чтобы заново анимировалось
        }))
      );
    }, ANIMATION_DURATION); // через длительность анимации

    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      {hexes.map((hex) => (
        <FloatingHexagon
          key={hex.id}
          top={hex.top}
          left={hex.left}
          size={hex.size}
          animationKey={hex.animationKey}
        />
      ))}
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;

const FloatingHexagon = styled.div<{
  top: number;
  left: number;
  size: number;
  animationKey: string;
}>`
  position: absolute;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;
  width: ${(p) => p.size}px;
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.15);
  clip-path: polygon(
    50% 0%,
    93% 25%,
    93% 75%,
    50% 100%,
    7% 75%,
    7% 25%
  );
  animation: ${(p) => {
    const x = randomFloat(-300, 300);
    const y = randomFloat(-300, 300);
    return generateAnimation(x, y);
  }} ${ANIMATION_DURATION / 1000}s ease-in-out forwards;
  pointer-events: none;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;
