import React from "react";

export function ModalDiv({ close }) {
  return (
    <div>
      <div className="subTitle">Report Abuse</div>
      <p className="modalText">
        Flagged content is reviewed by Udemy staff to determine whether it
        violates Terms of Service or Community Guidelines. If you have a
        question or technical issue, please contact our{" "}
        <a
          target="blank" // opens a new tab when link is clicked
          href="https://support.udemy.com/hc/en-us?flash_digest=c746089a37590bdef80f6eabbbe529c74a14be49"
        >
          Support team here
        </a>
        <br />
        <br />
        Issue Type
      </p>
      <div className="select-style">
        <select>
          <option value="select">--Select One--</option>
          <option value="content">Inappropriate Course Content</option>
          <option value="behavior">Inappropriate Behavior</option>
          <option value="policy">Udemy Policy Violation</option>
          <option value="spam">Spammy Content</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br />
      <textarea rows="12" cols="90" />
      <br />
      <button onClick={close}>close</button>
    </div>
  );
}
