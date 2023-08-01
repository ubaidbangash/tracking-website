import React from 'react'
import './TestSlider.css';


import group1 from '../Images/group1.png'
import star1 from '../Images/star1.png'
import group2 from '../Images/group2.png'
import group3 from '../Images/group3.png'
import group4 from '../Images/group4.png'
import star3 from '../Images/star3.png'
import group5 from '../Images/group5.png'
import group6 from '../Images/group6.png'
import group7 from '../Images/group7.png'
import star4 from '../Images/star4.png'
import group8 from '../Images/group8.png'
import star5 from '../Images/star5.png'
import group9 from '../Images/group9.png'
import group10 from '../Images/group10.png'
import group11 from '../Images/group11.png'
import group12 from '../Images/group12.png'
import group13 from '../Images/group13.png'
import group14 from '../Images/group14.png'
import group15 from '../Images/group15.png'
import group16 from '../Images/group16.png'
import group17 from '../Images/group17.png'
import group18 from '../Images/group18.png'



const productData = [
  {
    title: "Elsyd",
    para: "It Fullfilled Exactly What I Wanted ,Very Hardworking,Very Helpful,Delivered Ahead Of Schedule,Very Professional.Definetly A Seller I Would Like To Work With Again.Thanks Dude",
    img: group1,
    pic: star1

  },
  {
    title: "Raul Rios",
    para: "Abubakar was fast on his tum arrounds,Quality of screen design was top notch and functionality was superb.I look forward to working with Abubakar on my next project.Thank you Raul R",
    img: group2,
    pic: star1

  },
  {
    title: "Beni Hall",
    para: "Realy great communication with Abu,Done an app design with his team and really happy with the delivery so far.About to hava our demo session later today i have high expectations",
    img: group3,
    pic: star1

  },
  {
    title: "Kalinda",
    para: "Froom first point of contact through revisions and delivery it was great experiance.Very happy with the final product and would recomend highly",
    img: group4,
    pic: star3

  },
  {
    title: "Evander",
    para: "Good teamwork sometime we have to do a lot of communication but in the end they deliver.Longterm relationship is in the making according to me",
    img: group5,
    pic: star1

  },
  {
    title: "Olivia",
    para: "Created an app for me from start to finish.I am vey greatful for all of their hard work and will definetly be using again",
    img: group6,
    pic: star3

  },
  {
    title: "Beni Hall",
    para: "I am really happy with this tech team very good communication and problem solving.Thank you for the beautiful app design",
    img: group7,
    pic: star4

  },
  {
    title: "Camilo",
    para: "We have been working with them for quite a while now we are really happy with their work.We are looking forward to working with them again!Thanks",
    img: group8,
    pic: star5

  },
  {
    title: "Sophia",
    para: "I was very pleased with the work of goittech99.The communication was also very positive and responsive.",
    img: group9,
    pic: star4

  },
  {
    title: "Jiraiya",
    para: "Seller was responsive,quickly look at the requirements or open issues and helped launch the app on time.",
    img: group10,
    pic: star3

  },
  {
    title: "Isabella",
    para: "We are really happy with their delivery.Its exactly what we were looking for.Thanks!",
    img: group11,
    pic: star4

  },
  {
    title: "Amelia",
    para: "Excellent experiance ana amazing feeling of working with professional its my firts order but i am sure of a relationship.Thanks all team.",
    img: group12,
    pic: star1

  },
  {
    title: "Banks",
    para: "I am really happy with Gotitechs work.Really fast delivey,quality work and overall great experince.",
    img: group13,
    pic: star1

  },
  {
    title: "Gian",
    para: "Great application design user friendly interface and exceede expectations highly recomen this team for any design project.",
    img: group14,
    pic: star3

  },
  {
    title: "Bridger",
    para: "Worked very good togther but deployment phase took a very long time.Due to apple factor as well of course overall a very good project and i will startmy second app with them.",
    img: group15,
    pic: star3

  },
  {
    title: "Amiri",
    para: "I worked with Kalpesh on a mobile app project and was impressed by their quality work communication and fast delivery through out the project and delivered a head of ",
    img: group16,
    pic: star4

  },
  {
    title: "Eliam",
    para: "Phenomenal development delivered as agreed with clear instructions on testing.I like the extremly professional approach and its 100% as they advertise it clear concise and right on time",
    img: group17,
    pic: star4

  },
  {
    title: "Colter",
    para: "We are thrilled with the design changes Gotitech99 is making with their easy fast and modern approach we can enjoy a completly updated look.Thank you!",
    img: group18,
    pic: star1

  },




];

const TestSlider = () => {
  return (
    <div className='carousel-dev'>
      <div className='slider-text'>
        <h4>OUR HAPPY CLIENTS</h4>
      </div>
      <div className='slider-page'>
        <div className='slide-track-dev'>

          {productData.map((item) => {
            return (
              <>

                <div className=' top-slide' >
                  <div className='card-area'>
                    <img src={item.img} alt="" />
                    <div className='vertical-card'>
                      <h6>{item.title}</h6>
                      <img src={item.pic} alt="" />
                      <p>{item.para}</p>

                    </div>

                  </div>
                </div>

              </>
            );
          })}




        </div>

      </div>


    </div>

  )
}

export default TestSlider