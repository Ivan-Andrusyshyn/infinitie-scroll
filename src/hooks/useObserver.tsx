import { MutableRefObject, useEffect, useState } from "react";

interface UseObserverProps {
  observedNextPage: (() => void) | undefined;
  observerTarget: MutableRefObject<HTMLElement | null>;
}

const useObserver = ({
  observedNextPage,
  observerTarget,
}: UseObserverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observedNextPage?.();
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, observedNextPage]);
  return { isVisible };
};

export default useObserver;
