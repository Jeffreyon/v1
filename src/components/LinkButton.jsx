function LinkButton({ linkTo, style, label, ...rest }) {
    let baseStyle =
        "py-2 px-4 w-full sm:w-auto text-center font-semibold transition-colors delay-75";
    let filled = "hover:bg-indigo-800 text-white bg-indigo-600";
    let outline =
        "hover:bg-indigo-600 border text-indigo-600 hover:text-white border-indigo-600";

    switch (style) {
        case "outline": {
            baseStyle = `${baseStyle} ${outline}`;
            break;
        }
        default: {
            baseStyle = `${baseStyle} ${filled}`;
        }
    }
    return (
        <a className={baseStyle} href={linkTo} {...rest}>
            {label}
        </a>
    );
}

export default LinkButton;
