import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook for i18n
import Listing1 from "./../../assets/ft1image.jpg";
import Listing2 from "./../../assets/ft4image.jpg";
import Listing3 from "./../../assets/ft6image.jpg";
import "./listing.css"
// Sample listings (the ID and corresponding keys match with the translation JSON)
const listings = [
  {
    id: 1,
    key: "firstApartment", // Reference to the translation key
    image: Listing1,
  },
  {
    id: 2,
    key: "parkingLot", // Reference to the translation key
    image: Listing2,
  },
  {
    id: 3,
    key: "mallSpace", // Reference to the translation key
    image: Listing3,
  }
];

const Listing = () => {
  const { t } = useTranslation(); // Hook for translation

  return (
    <div className="recent-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>{t('regular.listing.recentListings')}</h2> {/* Translation key for Recent Listings */}
              <h6>{t('regular.listing.exploreOptions')}</h6> {/* Translation key for Explore Available Options */}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="owl-carousel owl-listing">
              {listings.map((item) => (
                <div className="item" key={item.id}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="listing-item">
                        <div className="left-image">
                          <a href="/#">
                            <img src={item.image} alt={t(`regular.listing.${item.key}.title`)} />
                          </a>
                        </div>
                        <div className="right-content align-self-center">
                          <a href="/#">
                            <h4>{t(`regular.listing.${item.key}.title`)}</h4>
                          </a>
                          <h6>{t('regular.listing.by')} {t(`regular.listing.${item.key}.agent`)}</h6> {/* Translation for agent */}
                          <p>{t(`regular.listing.${item.key}.description`)}</p> {/* Translation for description */}
                          <ul className="amenities">
                            <li><strong>{t('regular.listing.amenities')}:</strong> {t(`regular.listing.${item.key}.amenities`)}</li>
                            <li><strong>{t('regular.listing.location')}:</strong> {t(`regular.listing.${item.key}.location`)}</li>
                          </ul>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
