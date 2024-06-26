import React from "react";
import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string;
};

export const Icon = (props: IconPropsType) => {
    return (
        <svg width="120" height="119" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};
