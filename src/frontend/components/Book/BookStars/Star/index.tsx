"use client";

import ICONS from "@/assets";
import Icon from "@/frontend/components/Icon";

interface StarProps {
    filled: boolean;
    halfFilled: boolean;
}

export default function Star({filled, halfFilled}: StarProps) {

    if (filled) {
      return <Icon iconPath={ICONS.star.src} alt="star" />;
    }
    if (halfFilled) {
      return <Icon iconPath={ICONS.halfStar.src} alt="half star" />;
    }
    return <Icon iconPath={ICONS.emptyStar.src} alt="empty star" />;
};