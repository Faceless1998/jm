import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", form);
      alert(t("regular.contact.success"));
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert(t("regular.contact.error"));
    }
  };

  return (
    <section className="contact_section">
      <div className="container">
        <div className="heading_container">
          <h2>{t("regular.contact.us")}</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="map_container">
              <div className="map-responsive">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1307.1861082812916!2d41.63382223178844!3d41.642015536524084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ska!2sge!4v1746556297440!5m2!1ska!2sge"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("regular.contact.name")}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("regular.contact.email")}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder={t("regular.contact.phone")}
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="message"
                    placeholder={t("regular.contact.message")}
                    className="message-box"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex">
                  <button type="submit">{t("regular.contact.send")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
