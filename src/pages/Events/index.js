import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import SectionCustom from "../../components/SectionCustom";
import sectionContents from "../../content/sectionContents.json";
import { AppContext } from "../../store/context";

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const { events } = React.useContext(AppContext).events;
  return (
    <PageWrapper>
      <Section title={"Workshops and Events"}>{sectionContents.events}</Section>
      {events.map((event, i) => (
        <SectionCustom
          title={event.title}
          bg={event.images[0]}
          i={i}
          key={i}
          id={`event${i}`}
          images={event.images}
        >
          {event.content}
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
