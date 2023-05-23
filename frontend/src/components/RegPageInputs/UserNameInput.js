import React from "react";

const UserNameInput = ({ formData, setFormData }) => {
    return (
        <div className="login-inputs all-inputs">
            <input 
                type="text"
                placeholder="Логин" 
                defaultValue={formData.login}
                onChange={(event) => 
                    setFormData({ ...formData, username: event.target.value })
                }
            />
        </div>
    );
}

export default UserNameInput;