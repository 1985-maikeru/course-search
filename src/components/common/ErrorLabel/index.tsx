
// libs
import React from "react";
import parse from "html-react-parser";

type PROPS = {
    message?: any;
};

/**
 * ErrorLabel
 */
const ErrorLabel = ({ message }: PROPS) => (
    <>
        {message && (
            <p className="form_input_error_label">
                {typeof message === "string" ? parse(message) : message}
            </p>
        )}
    </>
);

export default ErrorLabel;
