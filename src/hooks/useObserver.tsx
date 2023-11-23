import { MutableRefObject, useEffect } from "react";

interface UseObserverProps {
  observedNextPage: (() => void) | undefined;
  observerTarget: MutableRefObject<HTMLElement | null>;
}

const useObserver = ({
  observedNextPage,
  observerTarget,
}: UseObserverProps) => {
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

export default useObserver;
