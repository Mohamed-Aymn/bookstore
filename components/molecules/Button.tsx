/*
type this in the documentation:-
--------------------------------

type (primary, secondary, danger,link)

text

icon (icon name)
    righticon (ture, false) left icons is set as default

isAccessible (disabled/enabled)

isLoading (true, flase)
*/
import styles from "./Button.module.scss";
import Loading from "../atoms/icons/Loading";

export default function (props: any) {
    let { type, text, Icon, iconposition, isaccessible, isloading, click } =
        props;

    return (
        <button className={styles.button} onClick={click} {...props}>
            <>
                {Icon && !isloading ? <Icon /> : isloading ? <Loading /> : null}
            </>
            {text}
        </button>
    );
}
