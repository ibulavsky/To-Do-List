import React, {Component} from 'react';
import styles from "./Styles/Header.module.css"
import AddForm from "./AddForm";


class Header extends Component {
    state = {
        isFormShow: false,
    };

    showAddForm = () => {
        this.setState({isFormShow: true})
    }
    hideAddForm = () => {
        this.setState({isFormShow: false})
    }

    render() {

        return (
            <div className={styles.HeaderWrapper}>
                <span className={styles.Header}>
                     <span className={styles.Title}>Списки задач</span>
                    {this.state.isFormShow && <AddForm/>}
                    <button className={styles.IconButton}
                        onClick={this.showAddForm}
                            onBlur={this.hideAddForm}> +</button>
                </span>


            </div>
        )
    }
}

export default Header;
