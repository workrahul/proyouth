import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import styles from "./employerDetails.module.css";
import AppContext from "../../../context/AppContext";
const EmployerDetails = () => {
  const context = useContext(AppContext);
  const { Employer, FetchEmployerDetails } = context;

  const [CompanyName, setCompanyName] = useState('');
  const [CompanyRegistrationProof, setCompanyRegistrationProof] =
    useState('');
  const [BusinessDomain, setBusinessDomain] = useState();
  const [CompanyLogo, setCompanyLogo] = useState();
  const [CompanyWebsiteAddress, setCompanyWebsiteAddress] = useState('');
  const [WhatsappNumber, setWhatsappNumber] = useState('');
  const [RegisteredAddress, setRegisteredAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [CompanyRegistrationNumber, setCompanyRegistrationNumber] =
    useState('');
  const [TaxIdNumber, setTaxIdNumber] = useState('');
  const [AboutYourself, setAboutYourself] = useState('');

  useEffect(() => {
    const fetchdata = FetchEmployerDetails();
    if (fetchdata) {
      // setEmployerData(...employerData, Employer);
      // setEmployerData(...employerData)
      setWhatsappNumber(Employer.WhatsappNumber)
      setCompanyName(Employer.CompanyName)
      setCompanyRegistrationNumber(Employer.CompanyRegistrationNumber)
      setCompanyWebsiteAddress(Employer.CompanyWebsiteAddress)

      console.log(Employer);
    }
  }, []);

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handleCompanyRegistrationProofChange(e) {
    setCompanyRegistrationProof(e.target.value);
  }

  function handleBusinessDomainChange(e) {
    setBusinessDomain(e.target.value);
  }

  function handleCompanyLogoChange(e) {
    setCompanyLogo(e.target.value);
  }

  function handleCompanyWebsiteAddressChange(e) {
    setCompanyWebsiteAddress(e.target.value);
  }

  function handleWhatsappNumberChange(e) {
    setWhatsappNumber(e.target.value);
  }

  function handleRegisteredAddressChange(e) {
    setRegisteredAddress(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleCompanyRegistrationNumberChange(e) {
    setCompanyRegistrationNumber(e.target.value);
  }

  function handleTaxIdNumberChange(e) {
    setTaxIdNumber(e.target.value);
  }

  const HandleSubmitData = async () => {
    if (!CompanyName || !CompanyRegistrationProof || !BusinessDomain || !CompanyLogo || !CompanyWebsiteAddress || !WhatsappNumber || !RegisteredAddress || !Email || !CompanyRegistrationNumber || !TaxIdNumber || !AboutYourself) {
      alert("Please fill all the fields")
    }
    console.log(CompanyName,
      CompanyLogo,
      CompanyRegistrationNumber,
      CompanyRegistrationProof,
      CompanyWebsiteAddress,
      AboutYourself,
      BusinessDomain,
      Email,
      RegisteredAddress,
      TaxIdNumber,
      WhatsappNumber)

    const token = await localStorage.getItem("token");
    const response = await fetch(`/employer/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        CompanyName,
        CompanyLogo,
        CompanyRegistrationNumber,
        CompanyRegistrationProof,
        CompanyWebsiteAddress,
        AboutYourself,
        BusinessDomain,
        Email,
        RegisteredAddress,
        TaxIdNumber,
        WhatsappNumber
      }),
    });
    if (response.success === true) {
      // sethospital(...hospital, {
      //   hospitalname,
      //   hospitalemailid,
      //   hospitalphoneno
      // })
      console.log(true)
      return true;
    }
    if (response.success === false) {
      console.log(false)
      return false
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#010517" }}>
        <Navbar />
      </div>

      <div className={styles["details-container"]}>
        <div>
          <h1>Enter Your Details!</h1>
          <p>These details will help us finding you the best opportunities</p>
        </div>
        <form className={styles["form-container"]}>
          <div className={styles["form-fields"]}>
            <div className={styles["form-subfields"]}>
              <label>Company Name</label>
              <input
                type="text"
                name="CompanyName"
                value={CompanyName}
                onChange={handleCompanyNameChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Whatsapp Number</label>
              <input
                type="number"
                name="WhatsappNumber"
                value={WhatsappNumber}
                onChange={handleWhatsappNumberChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Company Website Address</label>
              <input
                type="email"
                name="CompanyWebsiteAddress"
                value={CompanyWebsiteAddress}
                onChange={handleCompanyWebsiteAddressChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Business Domain</label>
              <input
                type="text"
                name="BusinessDomain"
                value={BusinessDomain}
                onChange={handleBusinessDomainChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Upload your Company Logo</label>
              <input
                type="file"
                name="CompanyLogo"
                //value={Employer.CompanyLogo}
                onChange={handleCompanyLogoChange}
                required
              />
            </div>
          </div>
          <div className={styles["form-fields"]}>
            <div className={styles["form-subfields"]}>
              <label>Registered Address</label>
              <input
                type="text"
                name="RegisteredAddress"
                value={RegisteredAddress}
                onChange={handleRegisteredAddressChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Enter email Address</label>
              <input
                type="text"
                name="Email"
                value={Email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Company Registeration Number</label>
              <input
                type="number"
                name="CompanyRegistrationNumber"
                value={CompanyRegistrationNumber}
                onChange={handleCompanyRegistrationNumberChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Tax ID Number</label>
              <input
                type="number"
                name="TaxIdNumber"
                value={TaxIdNumber}
                onChange={handleTaxIdNumberChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Proof of Company Registeration</label>
              <input
                type="file"
                name="CompanyRegistrationProof"
                // value={Employer.CompanyRegistrationProof}
                onChange={handleCompanyRegistrationProofChange}
                required
              />
            </div>
          </div>
        </form>
        <div className={styles.textarea}>
          <p>About Yourself (optional)</p>
          <textarea ></textarea>
        </div>
        <button onClick={HandleSubmitData} className={styles.btn}>
          Continue
        </button>
      </div>

      <Footer />
    </>
  );
};

export default EmployerDetails;
