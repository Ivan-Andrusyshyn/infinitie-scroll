import { MutableRefObject, useEffect } from "react";

interface UseObserverTargetProps {
  observedNextPage: (() => void) | undefined;
  observerTarget: MutableRefObject<HTMLElement | null>;
}

const useObserverTarget = ({
  observedNextPage,
  observerTarget,
}: UseObserverTargetProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observedNextPage?.();
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
};

export default useObserverTarget;
