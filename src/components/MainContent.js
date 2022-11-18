import React, { useState, useMemo } from "react";
import Container from "@mui/material/Container";
import styles from "./MainContent.module.scss";

const HOSPITALS = [
  {
    name: "Fortis Hospital Gurgaon",
    no_of_beds: 400,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Fortis-Hospital-Gurgaon.jpgw3.webp",
    address:
      "Sector - 44, Opposite HUDA City Centre Gurgaon Haryana 122002 India",
  },
  {
    name: "Max Super Speciality Hospital, Saket, New Delhi",
    no_of_beds: 319,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Max-Super-Specialty-Hospital-Saket-New-Delhi.jpgw3.webp",
    address:
      "Press Enclave Road, Mandir Marg, Saket New Delhi Delhi 110017 India",
  },
  {
    name: "Fortis Escorts Hospital New Delhi",
    no_of_beds: 300,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2021/05/fortis_escorts-e1622264796333.jpgw3.webp",
    address:
      "Okhla road, Sukhdev Vihar Metro Station New Delhi Delhi 110025 India",
  },
  {
    name: "Indraprastha Apollo Hospital New Delhi",
    no_of_beds: 1000,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Indraprastha-Apollo-Hospital-New-Delhi.jpgw3.webp",
    address:
      "Indraprastha Apollo Hospitals, Sarita Vihar, Delhi Mathura Road New Delhi Delhi 110076 India",
  },
  {
    name: "Global Hospital Chennai",
    no_of_beds: 1100,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Global-Hospital-Chennai.jpgw3.webp",
    address: "439, Cheran Nagar, Perumbakkam, Chennai Tamil Nadu 600001 India",
  },
  {
    name: "MGM Healthcare, Chennai",
    no_of_beds: 450,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/04/MGM-Healthcare-Chennai.jpgw3.webp",
    address:
      "New No 72, Old No 54 Nelson Manickam Road, Aminjikarai Chennai Tamil Nadu 600029 India",
  },
  {
    name: "Artemis Hospital Gurgaon",
    no_of_beds: 414,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Artemis-Hospital-Gurgaon.jpgw3.webp",
    address: "Near Unitech Cyber park, Sector 51 Gurgaon Haryana 122001 India",
  },
  {
    name: "BLK Super Specialty Hospital New Delhi",
    no_of_beds: 775,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/BLK-Super-Specialty-Hospital-New-Delhi.pngw3.webp",
    address:
      "Pusa Rd, Radha Soami Satsang, Rajendra Place New Delhi Delhi 110005 India",
  },
  {
    name: "Kokilaben Dhirubhai Ambani Hospital Mumbai",
    no_of_beds: 1000,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Kokilaben-Dhirubhai-Ambani-Hospital-Mumbai.jpgw3.webp",
    address:
      "Rao Saheb, Achutrao Patwardhan Marg, Four Bungalows, Andheri West Mumbai Maharashtra 400053 India",
  },
  {
    name: "Apollo Hospitals, Greams Road, Chennai",
    no_of_beds: 600,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "21, Greams Lane, Off Greams Road Chennai Tamil Nadu 600006 India",
  },
];

const MainContent = () => {
  const [searchText, setSearchText] = useState("");
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('');

  const searchedData = useMemo(() => {
    const tempArr = JSON.parse(JSON.stringify(HOSPITALS));
    if (searchText) {
      return tempArr.filter((item) =>
        item.name?.toLowerCase()?.includes(searchText)
      );
    } else {
      return [];
    }
  }, [searchText]);

  const onSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleOptions = () => setOptionsVisible(!optionsVisible);

  const renderData = searchedData?.length > 0 ? searchedData : HOSPITALS;

  const onItemSelection = (i) => {
    setSearchText(i.name)
    setSelectedHospital(i)
    setOptionsVisible(false)
  }

  return (
    <Container className={styles.mainContainer}>
      <span className={styles.title}>Search For Hospitals Nearby You</span>
      <input
        placeholder="Search..."
        data-is-options-visible={optionsVisible}
        value={searchText}
        onChange={onSearch}
        onClick={toggleOptions}
      />
      {optionsVisible && (
        <div className={styles.optionsContainer}>
          {renderData?.map((i, index) => {
            return (
              <div
                key={index}
                className={styles.listItem}
                onClick={() => onItemSelection(i)}
              >
                <span>{i?.name}</span>
              </div>
            )
          })
          }
        </div>
      )}

      {selectedHospital && <div
        className={styles.listItemCard}
      >
        <img src={selectedHospital.img} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>{selectedHospital.name}</span>
          <span>{selectedHospital.address}</span>
          <span>No of Beds : {selectedHospital.no_of_beds}</span>
        </div>
      </div>}
    </Container>
  );
};

export default MainContent;
