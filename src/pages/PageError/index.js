import React from "react";
import './styles.css';

function PageError() {
  return (
  <div className="teste">
    <div class="containerError">
      <div class="error">404</div>
      <div class="text"> _ <a href="http://www.tldp.org/FAQ/Linux-FAQ/error-messages.html#you-don-t-exist" target="_blank">You don't exist.</a></div>
      <div class="text">_ <a ahref="http://www.tldp.org/FAQ/Linux-FAQ/error-messages.html#you-don-t-exist" target="_blank">Go away.</a><span class="line">∣</span></div>
    </div>
  </div>
  );
}
export default PageError;

