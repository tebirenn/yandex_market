import React from "react";

const EmailInput = ({ formData, setFormData }) => {
    return (
        <div className="number-inputs all-inputs">
            <input 
                type="text" 
                placeholder="Email почта" 
                defaultValue={formData.email} 
                onChange={(event) => 
                    setFormData({ ...formData, email: event.target.value })
                }
            />
        </div>
    );
}

export default EmailInput;