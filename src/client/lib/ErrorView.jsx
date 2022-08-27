import React from "react";
import "../../shared/css/Error.css";

export function ErrorView({ error, reload }) {
  return (
    <>
      <div id="error-view">
          Something went wrong {error}
          <div>
              {reload && <button className="btn" onClick={reload}>Try Again</button>}
          </div>
      </div>
    </>
  );
}
