// import React from 'react';
import 'gitalk/dist/gitalk.css'
import GitalkComponent from "gitalk/dist/gitalk-component";

export default function comment() {
  return (
    <GitalkComponent options={{
      clientID: 'e2b2c04e10ff738cfd52',
      clientSecret: '12954387f6af3262b2028684ed125eec6624389d',
      repo: 'gitalk',
      owner: 'b9348',
      admin: ['b9348'],
      id: 'gta4',      // Ensure uniqueness and length less than 50
      distractionFreeMode: false , // Facebook-like distraction free mode
      language:'zh-CN',
      title: 'gitalks'
      
    }} />
  );
}