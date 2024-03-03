import React from "react";

const About = () => {
  return (
    <div>
        <h1 id='BizviewHelp'>About</h1>
        <div id="flexContainer">
            {/* <div className='box'> */ }
            <div>
              <h2>Flemming Hein Andersen, Founder</h2>
                <p>Flemming is the founder of Bizview. He previously worked for a range of pharma companies in Denmark and for various companies in Switzerland primarily as a consultant.
                   He holds a M.Sc. in International Business & Finance from the University of Aarhus, a B.Sc. in Medicine with Industrial Specialization from the University of Aalborg 
                   and various certifications from Microsoft and Snowflake</p>
                <img className='image' src={`${process.env.PUBLIC_URL}/AboutImages/microsoft-certified-associate-badge.svg`} alt="Microsoft Associate Badge Logo" />
                <ul>Azure Data Engineer Associate</ul>
                <ul>Azure Data Science Associate</ul>
                <ul>PowerBI Data Analyst Associate</ul>
                <img className='image' src={`${process.env.PUBLIC_URL}/AboutImages/snowflake-certified-snowprocore-badge.png`} alt="Snowflake SnowPro Core Badge Logo" />
                <ul>Snowflake SnowPro Core</ul>
              {/*
                <h2>IT</h2>
                    <p>Data Engineering</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataEngineeringAzureLogo.png`} alt="Azure Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataEngineeringSnowflakeLogo.svg`} alt="Snowflake Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataEngineeringAzureDevOpsLogo.png`} alt="Azure DevOps Logo" />
                        </div>
                    <p>Data Visualisation</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataVisualizationQlikLogo.png`} alt="Qlik Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataVisualizationPowerBILogo.png`} alt="PowerBI Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataVisualizationTableauLogo.png`} alt="Tableau Logo" />
                        </div>
                    <p>Data Science</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataScienceAzureMLLogo.png`} alt="Azure ML Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataScienceTensorflowLogo.png`} alt="Tensorflow Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataSciencePandasLogo.png`} alt="Pandas Logo" />
                        </div>
                    <p>Web Development</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/WebDevelopmentReactLogo.png`} alt="React Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/WebDevelopmentDjangoLogo.png`} alt="Django Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/WebDevelopmentRORLogo.png`} alt="RoR Logo" />
                        </div>
            </div>
            <div className='box'>
                <h2>Pharma</h2>
                    <p>Clinical Systems</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalSystemsVeevaVaultRimLogo.png`} alt="Veeva Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalSystemsOracleLogo.png`} alt="Oracle Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalSystemsVeevaCRMLogo.png`} alt="Veeva CRM Logo" />
                        </div>
                    <p>Clinical Studies</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalDataICHLogo.jpg`} alt="ICH Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalDataCDISCLogo.png`} alt="CDISC Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalDataMedDRALogo.jpg`} alt="MedDRA Logo" />
                        </div>
                    <p>Validation</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ValidationGAMP5Logo.jpg`} alt="GAMP5 Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ValidationHPALMLogo.png`} alt="HPALM Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ValidationDocuSignLogo.png`} alt="DocuSign Logo" />
                        </div>
                    <p>Medical knowledge</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/MedicalKnowledgeAAULogo.jpg`} alt="AAU Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/MedicalKnowledgeOncologyLogo.jpg`} alt="Oncology Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/MedicalKnowledgeDiabetesLogo.png`} alt="Diabetes Logo" />
                        </div>
                */}
            </div>
          
        </div>
        
    </div>
    
  );
};

export default About;
