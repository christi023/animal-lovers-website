import React from 'react';
// components
import TeamCard from './TeamCard';
import TeamDetails from './TeamDetails';
// style
import './Team.css';

export default function Team() {
  return (
    <>
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h1 className="text-center" style={{ paddingTop: '50px' }}>
              OUR TEAM
            </h1>
            <br />
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
              quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
              impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            {TeamDetails.map((val, i) => {
              return <TeamCard key={i} imgSrc={val.imgSrc} name={val.name} title={val.title} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
