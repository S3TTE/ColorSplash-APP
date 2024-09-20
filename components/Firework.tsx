import React from 'react';
import { View, Animated, Easing, ViewStyle, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface FireworksProps {
  speed: number;
  density: number;
  colors: string | string[];
  iterations: number;
  height: number;
  width: number;
  zIndex: number;
  circular: boolean;
}

interface Particle {
  id: string;
  x: Animated.Value;
  y: Animated.Value;
  size: Animated.Value;
  color: string;
}

interface Firework {
  id: string;
  particles: Particle[];
  x: number;
  y: number;
}

let uniqueId = 0;
const getUniqueId = () => {
  uniqueId += 1;
  return `${Date.now()}-${uniqueId}`;
};

const Fireworks: React.FC<FireworksProps> = ({
  speed = 3,
  density = 8,
  colors = ['#ff0000', '#00ff00', '#0000ff'],
  iterations = 5,
  height = SCREEN_HEIGHT,
  width = SCREEN_WIDTH,
  zIndex = 2,
  circular = true
}) => {
  const [fireworks, setFireworks] = React.useState<Firework[]>([]);
  const animationsRef = React.useRef<Animated.CompositeAnimation[]>([]);

  const createParticle = (fireworkX: number, fireworkY: number, index: number): Particle => {
    const angle = circular ? (Math.PI * 2 * index) / density : Math.random() * Math.PI * 2;
    const radius = circular ? 50 : Math.random() * 50 + 25;

    return {
      id: getUniqueId(),
      x: new Animated.Value(fireworkX),
      y: new Animated.Value(fireworkY),
      size: new Animated.Value(0),
      color: Array.isArray(colors) ? colors[index % colors.length] : colors,
    };
  };

  const createFirework = (): Firework => {
    const fireworkX = Math.random() * width;
    const fireworkY = Math.random() * height * 0.5 + height * 0.3;

    return {
      id: getUniqueId(),
      particles: Array.from({ length: density }, (_, i) => createParticle(fireworkX, fireworkY, i)),
      x: fireworkX,
      y: fireworkY,
    };
  };

  const animateParticle = (particle: Particle, fireworkX: number, fireworkY: number, index: number) => {
    const angle = circular ? (Math.PI * 2 * index) / density : Math.random() * Math.PI * 2;
    const radius = circular ? 50 : Math.random() * 50 + 25;
    const endX = fireworkX + Math.cos(angle) * radius;
    const endY = fireworkY + Math.sin(angle) * radius;

    const duration = (1 / speed) * 1000;

    const animation = Animated.parallel([
      Animated.timing(particle.x, {
        toValue: endX,
        duration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(particle.y, {
        toValue: endY,
        duration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(particle.size, {
          toValue: 4,
          duration: duration / 2,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(particle.size, {
          toValue: 0,
          duration: duration / 2,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: false,
        }),
      ]),
    ]);

    return animation;
  };

  React.useEffect(() => {
    let iterationCount = 0;

    const animate = () => {
      const newFireworks = Array.from({ length: density }, () => createFirework());
      setFireworks(newFireworks);

      animationsRef.current = newFireworks.flatMap(firework =>
        firework.particles.map((particle, index) =>
          animateParticle(particle, firework.x, firework.y, index)
        )
      );

      Animated.parallel(animationsRef.current).start(() => {
        iterationCount++;
        if (iterationCount < iterations) {
          animate();
        }
      });
    };

    animate();

    return () => {
      animationsRef.current.forEach(animation => animation.stop());
    };
  }, [speed, density, colors, iterations, height, width, circular]);

  return React.createElement(
    View,
    { style: { height, width, zIndex } as ViewStyle },
    fireworks.flatMap(firework =>
      firework.particles.map(particle =>
        React.createElement(Animated.View, {
          key: particle.id,
          style: {
            position: 'absolute',
            transform: [
              { translateX: particle.x },
              { translateY: particle.y },
            ],
            width: particle.size,
            height: particle.size,
            borderRadius: particle.size,
            backgroundColor: particle.color,
          },
        })
      )
    )
  );
};

export default Fireworks;