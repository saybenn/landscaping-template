import { FaStar } from "react-icons/fa";

export const renderStars = (count) =>
  Array.from({ length: count }, (_, i) => (
    <FaStar key={i} className="text-[var(--color-accent)]" />
  ));

