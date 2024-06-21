import React from "react";
import './Home.css'; // Create a CSS file for styling

const Home = () => {
  return (
    <div>
        <h1 id='SpectoConsultHelp'>Competencies</h1>
        <br></br>
        <h2>Main focus area is data-based solutions within IT and Pharma</h2>
        <div id="flexContainer">
                <div className='box'>
                    <h2>IT</h2>
                        <br></br>
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
                                <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataSciencePythonLogo.png`} alt="Python Logo" />
                                {/* <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/DataSciencePandasLogo.png`} alt="Pandas Logo" /> */}
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
                    <br></br>
                    <p>Clinical Systems</p>
                        <div className='row'>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalSystemsVeevaVaultRimLogo.png`} alt="Veeva Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalSystemsOracleLogo.png`} alt="Oracle Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalSystemsVeevaCRMLogo.png`} alt="Veeva CRM Logo" />
                        </div>
                    <p>Clinical Studies</p>
                        <div className='row'>
                             <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalDataICHLogo.png`} alt="ICH Logo" /> 
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalDataCDISCLogo.png`} alt="CDISC Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ClinicalDataMedDRALogo.png`} alt="MedDRA Logo" />
                        </div>
                    <p>Validation</p>
                        <div className='row'>
                            <img className='image' id="GAMP5" src={`${process.env.PUBLIC_URL}/MainImages/ValidationGAMP5Logo.png`} alt="GAMP5 Logo" />
                            <img className='image' id="HPALM" src={`${process.env.PUBLIC_URL}/MainImages/ValidationHPALMLogo.png`} alt="HPALM Logo" />
                            {/* <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/ValidationDocuSignLogo.png`} alt="DocuSign Logo" /> */}
                        </div>
                    <p>Medical knowledge</p>
                        <div className='row'>
                            <img className='image' id="aau" src={`${process.env.PUBLIC_URL}/MainImages/MedicalKnowledgeAAULogo.png`} alt="AAU Logo" />
                            {/*                            
                            <p>Oncology</p>
                            <p>Diabetes</p>
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/MedicalKnowledgeOncologyLogo.jpg`} alt="Oncology Logo" />
                            <img className='image' src={`${process.env.PUBLIC_URL}/MainImages/MedicalKnowledgeDiabetesLogo.png`} alt="Diabetes Logo" />
                            */}
                        </div>
                </div>
        </div>
    </div>
  );
};

export default Home;
