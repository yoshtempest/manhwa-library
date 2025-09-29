"use client";

import ICONS from "@/assets";
import Icon from "@/frontend/components/Icon";

interface StarProps {
    filled: boolean;
    halfFilled: boolean;
}

export default function Star({filled, halfFilled}: StarProps) {

    if (filled) {
      return <Icon iconPath={ICONS.star.src} alt="star" width={25} height={25} />;
    }
    if (halfFilled) {
      return <Icon iconPath={ICONS.halfStar.src} alt="half star" width={25} height={25} />;
    }
    return <Icon iconPath={ICONS.emptyStar.src} alt="empty star" width={25} height={25} />;
};