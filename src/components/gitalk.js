import React from 'react';
import GitalkComponent from "gitalk/dist/gitalk-component";

export default function comment() {
  return (
    <GitalkComponent options={{
      clientID: 'GitHub Application Client ID',
      clientSecret: 'GitHub Application Client Secret',
      repo: 'GitHub repo',
      owner: 'GitHub repo owner',
      admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
      id: location.pathname,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    }} />
  );
}