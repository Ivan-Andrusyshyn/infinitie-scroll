import { MutableRefObject, useEffect } from "react";

interface UseObserverTargetProps {
  fetchNextPage: () => void;
  observerTarget: MutableRefObject<HTMLElement | null>;
}

const useObserverTarget = ({
  fetchNextPage,
  observerTarget,
}: UseObserverTargetProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
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
  }, [observerTarget, fetchNextPage]);
};

export default useObserverTarget;
