import React from 'react';
// components
import TeamCard from './TeamCard';
import TeamDetails from './TeamDetails';

export default function Team() {
  return (
    <>
      <section id="services" className="services section-bg">
        <div className="my-5">
          <h1 className="text-center" style={{ paddingTop: '50px' }}>
            Our Team
          </h1>
          <br />
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="container-fluid mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {TeamDetails.map((val, i) => {
                  return <TeamCard key={i} imgSrc={val.imgSrc} name={val.name} title={val.title} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
