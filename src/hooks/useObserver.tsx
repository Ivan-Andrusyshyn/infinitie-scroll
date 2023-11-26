import { MutableRefObject, useEffect, useRef, useState } from "react";

interface UseObserverProps {
  observedNextPage?: () => void;
  observerTarget: MutableRefObject<HTMLElement | null>;
}

const useObserver = ({
  observedNextPage,
  observerTarget,
}: UseObserverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsVisible(true);
        observedNextPage?.();
      } else {
        setIsVisible(false);
      }
    };

    const observerOptions = { threshold: 1 };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const target = observerTarget.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observerTarget, observedNextPage]);

  return { isVisible };
};

export default useObserver;
