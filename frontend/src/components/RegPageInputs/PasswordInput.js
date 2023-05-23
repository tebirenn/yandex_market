import React from "react";

const PasswordInput = ({ formData, setFormData }) => {
    return (
        <div className="password-inputs all-inputs">
            <input 
                type="password" 
                placeholder="Придумайте пароль" 
                defaultValue={formData.password}
                onChange={(event) => 
                    setFormData({ ...formData, password: event.target.value })
                }
            />
            <input 
                type="password" 
                placeholder="Повторите пароль" 
                defaultValue={formData.confirmPassword}
                onChange={(event) => 
                    setFormData({ ...formData, confirmPassword: event.target.value })
                }
            />
        </div>
    );
}

export default PasswordInput;