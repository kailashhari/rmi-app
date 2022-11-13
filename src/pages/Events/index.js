import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import SectionCustom from "../../components/SectionCustom";

const images = [
  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/31/954124-rajinikanth-aishwarya-rai-bachchan.jpg",
  "https://images.indianexpress.com/2021/04/Anniyan.jpg",
  "https://images.indianexpress.com/2022/08/kamal-haasan-indian-2.jpg",
  "https://i.ytimg.com/vi/UMr1EI11Wjs/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8fPh6h4X8lOLWrmFoIdwOMm7GmPrCny4eg&usqp=CAU",
  "https://s1.dmcdn.net/v/Bw7Fe1MB5nzUhpBs7/x1080",
];

const contents = [
  "Our annual workshop for the freshmen that serves as a platform to kindle their interest in Robotics. Various topics in Robotics are introduced that build a foundation for them to explore further. The workshop is structured for students to learn through hands-on-experience by building a bot combining multiple domains of Robotics.",
  "The annual inter-hostel technical tournament held in collaboration with Pragyan that provides an intellectual challenge and is a source of healthy competition between hostels. Participating teams build robots specific to problem statements and complete a set of tasks within predefined constraints, exhibiting technical prowess.",
  "Our annual Robotics competition that tests a variety of technical domains, providing an opportunity for the freshmen to innovate and build complex systems with a mix of twists and additional challenges, making the competition a huge dive into the world of line-followers and autonomous bots.",
  "A 24-hour hackathon,  held consecutive to  Following,  where participants work and build on solutions to problem statements with  hardware available from our inventory, within the short time-frame. The platform aims to prove that, sometimes Beauty lies in simplicity !",
  "Conducted in collaboration with Pragyan, the annual technical fest of NIT Trichy,  this consists of a plethora of events for Robotics enthusiasts from various institutions to showcase their technical skills by competing against each other and proving their prowess in each of their desired domains.",
  "Visit our stalls during Pragyan to take a peek at the exciting projects and get to know what  we have been building over the years.  Get mesmerized at what the future of technology holds for humanity !",
];

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <PageWrapper>
      <Section title={"Workshops and Events"}>
        RMI firmly believes that besides all the work we do as a team to
        innovate and create the up and coming tech, it is highly necessary to
        give back to the community. We organise several workshops and events
        every year with the vision to make newcomers feel welcome and not alien
        to the field of Robotics. Some of our most important workshops and
        events include: Genesis, InHoTTs, Following, RMI Hackathon, Robovigyan,
        Pragyan Exhibition
      </Section>
      {images.map((image, i) => (
        <SectionCustom
          title={"Genesis"}
          bg={image}
          i={i}
          key={image}
          id={`event${i}`}
        >
          {contents[i]}
        </SectionCustom>
      ))}
      {/* <SectionCustom
        title={"Genesis"}
        bg={
          "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/31/954124-rajinikanth-aishwarya-rai-bachchan.jpg"
        }
      >
        {sectionContents.events}
      </SectionCustom>
      <SectionCustom
        title={"Genesis"}
        bg={"https://images.indianexpress.com/2021/04/Anniyan.jpg"}
      >
        {sectionContents.events}
      </SectionCustom>
      <SectionCustom
        title={"Genesis"}
        bg={
          "https://images.indianexpress.com/2022/08/kamal-haasan-indian-2.jpg"
        }
      >
        {sectionContents.events}
      </SectionCustom>
      <SectionCustom
        title={"Genesis"}
        bg={"https://i.ytimg.com/vi/UMr1EI11Wjs/maxresdefault.jpg"}
      >
        {sectionContents.events}
      </SectionCustom>
      <SectionCustom
        title={"Genesis"}
        bg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8fPh6h4X8lOLWrmFoIdwOMm7GmPrCny4eg&usqp=CAU"
        }
      >
        {sectionContents.events}
      </SectionCustom>
      <SectionCustom
        title={"Genesis"}
        bg={"https://s1.dmcdn.net/v/Bw7Fe1MB5nzUhpBs7/x1080"}
      >
        {sectionContents.events}
      </SectionCustom> */}
    </PageWrapper>
  );
};

export default index;
