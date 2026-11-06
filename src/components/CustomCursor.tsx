import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable for fine pointer (desktop mice/trackpads) and when not reduced-motion
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointer.matches || reducedMotion.matches) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest('[data-cursor="view"]')) {
          setCursorState('view');
        } else if (target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="expand"]')) {
          setCursorState('hover');
        } else if (target.closest('[data-cursor="drag"]')) {
          setCursorState('drag');
        } else {
          setCursorState('default');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp follower loop (0.16 smoothing factor)
    const followLoop = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      setFollowerPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(followLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isEnabled || !isVisible) return null;

  const isHovered = cursorState === 'hover';
  const isView = cursorState === 'view';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Precision center dot */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out ${
          isView ? 'opacity-0' : 'bg-[#183C35]'
        } ${isHovered ? 'h-2 w-2 scale-150 bg-[#C6A77A]' : 'h-1.5 w-1.5'}`}
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 4 : 3)}px, ${pos.y - (isHovered ? 4 : 3)}px, 0)`,
        }}
      />

      {/* Trailing brass outline circle */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-300 ease-out flex items-center justify-center ${
          isView
            ? 'h-16 w-16 border-[#C6A77A] bg-[#183C35]/90 text-[#F8F5EE] shadow-lg scale-100'
            : isHovered
            ? 'h-11 w-11 border-[#C6A77A] bg-[#C6A77A]/15 scale-110'
            : 'h-7 w-7 border-[#183C35]/35 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${
            followerPos.x - (isView ? 32 : isHovered ? 22 : 14)
          }px, ${followerPos.y - (isView ? 32 : isHovered ? 22 : 14)}px, 0)`,
        }}
      >
        {isView && (
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#C6A77A]">
            VIEW
          </span>
        )}
      </div>
    </div>
  );
};
