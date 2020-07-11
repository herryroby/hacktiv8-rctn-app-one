import React from 'react';
import AttendanceInfo from '../atoms/AttendanceInfo';
import Card from '../molecules/Card';
import Layout from '../templates/Layout';

const QtemuPage = () => (
  <Layout>
    <section>
      <h4>Next Meetup</h4>
      <div className="section-container">
        <div className="section-box">
          <p className="sub-section-title">Awesome meetup and event</p>
          <p className="subtitle">25 January 2019</p>
          <p>
            Hello, JavaScript & Node.js Ninjas!
            <br />
            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!
            <br />
            The meetup format will contain some short stories and technical talks.
            <br />
            If you have a short announcement you'd like to share with the audience, you may do so during open mic
            announcements.
          </p>
          <p>Remember to bring a photo ID to get through building security.</p>
          <p>-----</p>
          <p>See you there!</p>
          <p>Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
        </div>
      </div>
    </section>
    <section>
      <h4>About Meetup</h4>
      <div className="section-container">
        <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
        <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
      </div>
    </section>
    <section>
      <h4>Members</h4>
      <a href="/">See all</a>
      <div className="section-container">
        <div className="section-box">
          <div className="member-content">
            <div className="profile-picture" />
            <div className="member-info">
              <p className="sub-section-title">Organizers</p>
              <p>
                Adhy Wiranata
                <span className="member-person">4 others.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section />
    <section>
      <h4>Past Meetups</h4>
      <a href="/">See all</a>
      <div className="section-past-meetups">
        <Card title="27 November 2017">
          <p>#39 JakartaJS April Meetup with kumparan</p>
          <AttendanceInfo total={139} />
        </Card>
        <Card title="27 October 2017">
          <p>#38 JakartaJS April Meetup with BliBli</p>
          <AttendanceInfo total={113} />
        </Card>
        <Card title="27 September 2017">
          <p>#37 JakartaJS April Meetup with Hacktiv8</p>
          <AttendanceInfo total={110} />
        </Card>
      </div>
      <div />
    </section>
  </Layout>
);

export default QtemuPage;
