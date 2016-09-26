import React from 'react';

const WelcomeView = () => (
  <div className="ui text container">
    <h1 className="ui header centered">
      Welcome to <a href="https://github.com/microapps/MoonMail" target="_blank">MoonMail</a> sample client
    </h1>
    <h3 className="ui header">
      With this client you'll have the ability to send an email campaign. We're assuming that:
    </h3>
    <ul>
      <li>
        You've set up the Serverless project as described in the
        {' '}
        <a href="https://github.com/microapps/MoonMail#getting-started" target="_blank">documentation</a>
      </li>
      <li>You're using a SES endpoint that has production access (not sandbox mode)</li>
      <li>You've created an email list and some recipients through the API</li>
    </ul>
  </div>
);
export default WelcomeView;