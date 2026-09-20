import React, { useRef, useEffect, useMemo } from 'react';

export const FlickeringGrid = ({
  squareSize = 2,
  gridGap = 2,
  flickerChance = 0.3,
  color = '#e60b0b',
  maxOpacity = 0.5,
  className = '',
  style = {},
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Parse color hex to rgb
  const rgb = useMemo(() => {
    let r = 230, g = 11, b = 11;
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      }
    }
    return `${r}, ${g}, ${b}`;
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let gridParams = {
      cols: 0,
      rows: 0,
      opacities: new Float32Array(0),
      dpr: 1,
    };

    const setupCanvas = (width, height) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cols = Math.floor((width + gridGap) / (squareSize + gridGap));
      const rows = Math.floor((height + gridGap) / (squareSize + gridGap));
      const count = cols * rows;
      const opacities = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        opacities[i] = Math.random() * maxOpacity;
      }

      gridParams = { cols, rows, opacities, dpr };
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setupCanvas(width, height);
        }
      }
    });

    resizeObserver.observe(container);

    let lastTime = 0;
    const animate = (time) => {
      // ~30 fps for smooth performance and authentic flicker
      if (time - lastTime >= 40) {
        lastTime = time;
        const { cols, rows, opacities, dpr } = gridParams;

        if (cols > 0 && rows > 0 && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const step = (squareSize + gridGap) * dpr;
          const sSize = squareSize * dpr;

          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              if (Math.random() < flickerChance) {
                opacities[idx] = Math.random() * maxOpacity;
              }
              const opacity = opacities[idx];
              if (opacity > 0.01) {
                ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
                ctx.fillRect(c * step, r * step, sSize, sSize);
              }
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [squareSize, gridGap, flickerChance, rgb, maxOpacity]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative ${className}`}
      style={style}
    >
      <canvas ref={canvasRef} className="pointer-events-none block absolute inset-0" />
    </div>
  );
};

export default FlickeringGrid;
