function LinkRegular({ label, linkTo }) {
    return (
        <a
            className=" font-semibold text-slate-500 hover:text-indigo-600 transition-colors delay-75 p-1"
            href={linkTo}>
            {label}
        </a>
    );
}

export default LinkRegular;
