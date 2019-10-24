import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import styles from "./Styles/AddForm.module.css"

const AddForm = (props) => {
    return (
        <div className={styles.AddForm}>
            <span> <Input/> </span>
            <span> <Button variant="contained" color="primary">
                Добавить
            </Button> </span>
        </div>
    );
}

export default AddForm;
