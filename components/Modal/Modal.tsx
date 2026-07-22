'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const router = useRouter();

  const close = () => {
    router.back();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.back();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={close}
        className="animate-fade-in absolute inset-0 bg-[#1a2421]/45 backdrop-blur-[2px]"
      />

      <div className="animate-fade-up relative z-10 flex max-h-[92vh] w-full max-w-xl flex-col border border-border/80 bg-surface shadow-[0_24px_60px_-28px_rgba(26,36,33,0.45)] sm:max-h-[85vh]">
        <div className="flex shrink-0 items-center justify-between border-b border-border/70 px-5 py-3.5 sm:px-6">
          <p className="font-display text-sm font-medium tracking-tight text-muted">
            Note preview
          </p>
          <button
            type="button"
            onClick={close}
            className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-6 sm:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
