import React from "react";
import Showdown from "showdown";


const Editor = ({ currentNote, updateNote }) => {
  const [selectedTab, setSelectedTab] = React.useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="section">

    </section>
  )
};
