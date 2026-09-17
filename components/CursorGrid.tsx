"use client";

import { useEffect, useRef } from "react";

type CursorGridProps = {
  cellSize?: number;
  color?: string;
  radius?: number;
  falloff?: "linear" | "smooth" | "sharp";
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  className?: string;
};

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  const value = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = Number.parseInt(value.slice(0, 6), 16);

  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
};

export default function CursorGrid({
  cellSize = 84,
  color = "#8ec5ff",
  fadeDuration = 520,
  lineWidth = 1.2,
  maxOpacity = 0.9,
  fillOpacity = 0.09,
  className = "",
}: CursorGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Array<{ x: number; y: number; startedAt: number; size: number }>>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const [cr, cg, cb] = hexToRgb(color);

      const active = pointsRef.current.filter((point) => now - point.startedAt < fadeDuration);
      pointsRef.current = active;

      active.forEach((point) => {
        const elapsed = now - point.startedAt;
        const alpha = Math.max(0, 1 - elapsed / fadeDuration);
        const size = point.size * (1 + elapsed / 900);
        const x = point.x;
        const y = point.y;

        const glow = ctx.createRadialGradient(x, y, 18, x, y, size * 1.7);
        glow.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${maxOpacity * alpha})`);
        glow.addColorStop(0.5, `rgba(${cr}, ${cg}, ${cb}, ${0.25 * alpha})`);
        glow.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(x - size * 1.8, y - size * 1.8, size * 3.6, size * 3.6);

        const boxX = x - size / 2;
        const boxY = y - size / 2;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.85 * alpha})`;
        ctx.lineWidth = lineWidth;
        if (ctx.roundRect) {
          ctx.roundRect(boxX, boxY, size, size, 16);
        } else {
          ctx.rect(boxX, boxY, size, size);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${fillOpacity * alpha})`;
        if (ctx.roundRect) {
          ctx.roundRect(boxX, boxY, size, size, 16);
        } else {
          ctx.rect(boxX, boxY, size, size);
        }
        ctx.fill();
      });

      if (active.length > 0) {
        frameRef.current = requestAnimationFrame(draw);
      } else {
        frameRef.current = null;
        ctx.clearRect(0, 0, rect.width, rect.height);
      }
    };

    const addPoint = (x: number, y: number) => {
      pointsRef.current.push({ x, y, startedAt: performance.now(), size: cellSize });
      pointsRef.current = pointsRef.current.slice(-8);
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      addPoint(x, y);
    };

    const onPointerLeave = () => {
      pointsRef.current = [];
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      ctx.clearRect(0, 0, container.offsetWidth, container.offsetHeight);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [cellSize, color, fadeDuration, fillOpacity, lineWidth, maxOpacity]);

  return (
    <div ref={containerRef} className={`cursor-grid${className ? ` ${className}` : ""}`}>
      <canvas ref={canvasRef} className="cursor-grid__canvas" />
    </div>
  );
}
