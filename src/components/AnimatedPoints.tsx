
import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

interface AnimatedPointsProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  connectionRadius?: number;
  className?: string;
}

const AnimatedPoints: React.FC<AnimatedPointsProps> = ({
  count = 50,
  color = '#0043FF',
  minSize = 2,
  maxSize = 4,
  speed = 0.5,
  connectionRadius = 150,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill parent
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        initPoints();
      }
    };

    // Initialize points
    const initPoints = () => {
      points.current = [];
      for (let i = 0; i < count; i++) {
        points.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: minSize + Math.random() * (maxSize - minSize),
          color: color,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i];
        
        // Move points
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2, false);
        ctx.fillStyle = point.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      // Draw connections
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = color;
      
      for (let i = 0; i < points.current.length; i++) {
        for (let j = i + 1; j < points.current.length; j++) {
          const dx = points.current[i].x - points.current[j].x;
          const dy = points.current[i].y - points.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionRadius) {
            ctx.beginPath();
            ctx.moveTo(points.current[i].x, points.current[i].y);
            ctx.lineTo(points.current[j].x, points.current[j].y);
            ctx.globalAlpha = 0.2 * (1 - distance / connectionRadius);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      
      raf.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resize();
    window.addEventListener('resize', resize);
    raf.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [count, color, minSize, maxSize, speed, connectionRadius]);

  return <canvas ref={canvasRef} className={`absolute top-0 left-0 w-full h-full ${className}`} />;
};

export default AnimatedPoints;
