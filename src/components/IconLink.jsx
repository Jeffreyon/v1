import { Icon } from "@iconify/react";

function IconLink({ linkTo, icon, ...rest }) {
    return (
        <a
            href={linkTo}
            className="text-slate-500 hover:text-indigo-600 transition-colors delay-75 inline-block"
            {...rest}>
            <Icon icon={icon} width="36" height="36" />
        </a>
    );
}

export default IconLink;
