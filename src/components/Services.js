import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info:
          "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
