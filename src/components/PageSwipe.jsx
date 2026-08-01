import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

export function usePageSwipe({
  leftRoute,
  rightRoute,
}) {
  const navigate = useNavigate();

  return useSwipeable({
    onSwipedLeft: () => {
      if (leftRoute) navigate(leftRoute);
    },
    onSwipedRight: () => {
      if (rightRoute) navigate(rightRoute);
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });
}