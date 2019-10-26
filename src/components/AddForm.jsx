import React from "react";
import styles from "./Styles/AddForm.module.css"

const AddForm = (props) => {
    return (
        <div className={styles.AddForm}>
            <span> <input/> </span>
            <span>
                <button>Добавить</button>
            </span>
        </div>
    );
}

export default AddForm;
