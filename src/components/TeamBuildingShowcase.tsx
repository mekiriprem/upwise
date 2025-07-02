import React from 'react';

const TeamBuildingShowcase: React.FC = () => {
  return (
    <div className="container">
      {/* Desktop View */}
      <div className="scrollingDiv mobileRepoBanner">
        <div className="scrolling-section">
          {/* Scroll Column 1 */}
          <div className="scroll-column">
            <div className="scrolling-content" style={{ animationDuration: '32s', animationName: 'scroll-up-tq4q5' }}>
              <div className="box">
                <img className="scrollImage" src="assets/images/landing/Terrarium 14.webp" alt="Participants enjoying a DIY Terrarium activity at The Thought Bulb" />
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/Tech Terrain-mini.webp" alt="Teams tackling the Scavenger Hunt Team Building Activity with Thought Bulb" />
              </div>
              <div className="box">
                <div className="iconDiv icon-blueDiv">
                  <img src="assets/images/Motivation-mini.webp" style={{ maxWidth: '120px' }} alt="Motivation" />
                  <p className="iconDivTitle">Motivational Activities</p>
                </div>
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/landing/Idea Ring 2.webp" alt="Teams brainstorming during the innovation activity at The Thought Bulb" />
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/landing/Terrarium 14.webp" alt="Participants enjoying a DIY Terrarium activity at The Thought Bulb" />
              </div>
            </div>
          </div>

          {/* Scroll Column 2 */}
          <div className="scroll-column alternative-Direction">
            <div className="scrolling-content" style={{ animationDuration: '32s', animationName: 'scroll-down-g89oh' }}>
              <div className="box">
                <img className="scrollImage" src="assets/images/Local Flavours Challenge 2-mini.webp" alt="Exploring local flavors of India in a Scavenger Hunt with The Thought Bulb." />
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/landing/Mixology 34.webp" alt="Participants learning mixology skills in a creative team development activity" />
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/Showtime-mini.webp" alt="Team members showcasing creativity in the Showtime activity at The Thought Bulb." />
              </div>
              <div className="box">
                <div className="iconDiv icon-OrangeDiv">
                  <img src="assets/images/leader-mini.webp" alt="Leader" />
                  <p className="iconDivTitle">Leadership Team Building</p>
                </div>
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/Local Flavours Challenge 2-mini.webp" alt="Exploring local flavors of India in a Scavenger Hunt with The Thought Bulb." />
              </div>
            </div>
          </div>

          {/* Scroll Column 3 */}
          <div className="scroll-column">
            <div className="scrolling-content" style={{ animationDuration: '32s', animationName: 'scroll-up-31kz2' }}>
              <div className="box">
                <img className="scrollImage" src="assets/images/Cooking-mini.webp" alt="Teams collaborating in a Cooking team building at The Thought Bulb" />
              </div>
              <div className="box">
                <div className="iconDiv icon-greenDiv">
                  <img src="assets/images/adventure-map-mini.webp" alt="Adventure" />
                  <p className="iconDivTitle">City Adventures</p>
                </div>
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/Colors of India F1-mini.webp" alt="Team members celebrating diversity in the diversity team building activity" />
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/landing/Symphony Dance Challenge 4.webp" alt="Participants enjoying the Musical Team Building Activity" />
              </div>
              <div className="box">
                <img className="scrollImage" src="assets/images/Cooking-mini.webp" alt="Teams collaborating in a Cooking team building at The Thought Bulb" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobileScrollingDiv">
        <div className="d-flex gap-3">
          {/* Column 1 */}
          <div className="scroll-column-mobile">
            <div className="scrolling-content-mobile">
              {[...Array(2)].flatMap(() => [
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/landing/Terrarium 14.webp" alt="Participants enjoying a DIY Terrarium activity at The Thought Bulb" />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/Tech Terrain-mini.webp" alt="Teams tackling the Scavenger Hunt Team Building Activity with Thought Bulb" />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <div className="iconDiv-mobile icon-blueDiv">
                    <img src="assets/images/Motivation-mini.webp" style={{ maxWidth: '120px' }} alt="Motivation" />
                    <p className="iconDivTitle">Motivational Activities</p>
                  </div>
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/landing/Idea Ring 2.webp" alt="Teams brainstorming during the innovation activity at The Thought Bulb" />
                </div>
              ])}
            </div>
          </div>

          {/* Column 2 */}
          <div className="scroll-column-mobile alternative-Direction-mobile">
            <div className="scrolling-content-mobile">
              {[...Array(2)].flatMap(() => [
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/Local Flavours Challenge 2-mini.webp" alt="Exploring local flavors of India in a Scavenger Hunt with The Thought Bulb." />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/landing/Mixology 34.webp" alt="Participants learning mixology skills in a creative team development activity" />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/Showtime-mini.webp" alt="Team members showcasing creativity in the Showtime activity at The Thought Bulb." />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <div className="iconDiv-mobile icon-OrangeDiv">
                    <img src="assets/images/leader-mini.webp" alt="Leader" />
                    <p className="iconDivTitle">Leadership Team Building</p>
                  </div>
                </div>
              ])}
            </div>
          </div>

          {/* Column 3 */}
          <div className="scroll-column-mobile">
            <div className="scrolling-content-mobile">
              {[...Array(2)].flatMap(() => [
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/Cooking-mini.webp" alt="Teams collaborating in a Cooking team building at The Thought Bulb" />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <div className="iconDiv-mobile icon-greenDiv">
                    <img src="assets/images/adventure-map-mini.webp" alt="Adventure" />
                    <p className="iconDivTitle">City Adventures</p>
                  </div>
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/Colors of India F1-mini.webp" alt="Team members celebrating diversity in the diversity team building activity" />
                </div>,
                <div className="box-mobile" key={Math.random()}>
                  <img className="scrollImage" src="assets/images/landing/Symphony Dance Challenge 4.webp" alt="Participants enjoying the Musical Team Building Activity" />
                </div>
              ])}
            </div>
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <div className="MainHeading">
        <h1>
          <span>Ready to create a</span>
          <br />
          <span className="gradientHeader">High Performing Team?</span>
        </h1>
        <p>
          Discover a wide range of team-development, leadership activities, and professional growth ideas, and
          easily book memorable experiences for your team.
        </p>
        <div className="d-flex gap-3 headerBtns">
          <a href="tel:+918929174404">
            <button className="PrimaryBtn">Talk to Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamBuildingShowcase;
