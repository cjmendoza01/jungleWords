import React from "react";
import "./SPED.css";

function SpecialEducation() {
	return (
		<div id="specEd">
			<div className="App">
				<header>
					<audio autoPlay loop src={"/BgMusic.mp3"} />
					<nav className="nav">
						<div className="logo">
							<img src="/Logo.png" alt="JW Logo" />
						</div>
						<div className="nav-linksz">
							<a href="/" className="home-linkz">
								<img src="/home.png" alt="Home" />
							</a>
						</div>
					</nav>
				</header>
				<main>
					<div className="jungle-background-sped">
						<div className="contents_spec_ed">
							<div
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<img src="/specEd.png" alt="Special Education Image" />
							</div>
							<div className="text-content">
								<h2>
									{" "}
									Government Support and Policies Supporting SPED in the
									Philippines
								</h2>
								<p>
									Every child deserves equal opportunities, regardless of the
									challenges they encounter. Special education plays a crucial
									role for children with learning disabilities, as it provides
									them with access to quality education tailored to their
									specific needs. This support helps students achieve
									independence and reach their full potential. For some, clear
									and effective speech can be a difficult and intricate form of
									communication. Learning disabilities cover a broad spectrum of
									challenges, including speech and language disorders, as well
									as motor skill difficulties.
								</p>

								<p>
									The Department of Education in the Philippines highlights the
									Special Education (SPED) program as an important facet of the
									country’s educational system as it aims to enhance access to
									learning materials and to increase the efficiency of special
									education services for learners with learning disabilities in
									elementary and secondary schools. The current efforts in the
									field of Speech and Language Development (SLD) initiatives for
									Filipino children reveal a predominant emphasis on improving
									education, preventive measures, regulation, and ensuring equal
									rights for all learners. A recent study by the United Nations
									Children’s Fund (UNICEF, 2022) estimates that around 1.6
									million Filipino children have disabilities. According to data
									from the Department of Education (DepEd) for the 2016-2017
									school year, 232,975 students with disabilities or learning
									exceptionalities were integrated into regular classes.
								</p>
								<br></br>
								<h2>Learning Exceptionalities</h2>
								<p>
									The Department of Education (DepEd) categorizes
									exceptionalities into two groups:
									<p>
										a. those with a diagnosis from a specialist (11 conditions)
										and{" "}
									</p>
									b. those based on manifestation (five conditions). Among the
									diagnosed conditions, intellectual disability was the most
									common among elementary students, with 20,377 cases. Regarding
									manifestation, high prevalence rates were observed for
									difficulties with vision, as well as challenges in
									remembering, concentrating, paying attention, and
									understanding, affecting both elementary and secondary
									learners, with totals of 41,317 and 64,338, respectively.
								</p>
								<br></br>
								<h2>SPED Teachers</h2>
								<p>
									DepEd teachers who underwent formal training in SPED at the
									national, regional, and division level and who are presently
									teaching children with special needs are considered as SPED
									teachers. These educators possess specialized skills and
									knowledge tailored to address the unique learning challenges
									of children with disabilities. Their continuous development
									and dedication ensure that inclusive education practices are
									effectively implemented, fostering an environment where all
									learners can thrive.
								</p>

								<br></br>
								<h2>SPED Learners by Region</h2>
								<p>
									Region IV-A had the highest number of learners with
									exceptionalities integrated into regular classes, totaling
									34,644 or 14.9%. This was closely followed by the National
									Capital Region (NCR), with 33,977 learners or 14.6%. Region XI
									had 17,601 learners (7.6%), and Region III had 17,295 (7.4%).
									In contrast, the BARMM and CARAGA regions reported the lowest
									numbers, with 2,568 and 4,227 learners, accounting for 1.1%
									and 1.8%, respectively.
								</p>

								<div className="reference-section">
									<br></br>
									  {/* Second row: 3 images */}
  <div className="image-row">
  <img src="/4.jpg" alt="Image 4" />
    <img src="/5.jpg" alt="Image 5" />
    <img src="/7.jpg" alt="Image 6" />
  </div>

									<br></br>
									<h3>References</h3>
									<p>
										[1] "Special Education (SPED) Profile in the Philippines,"
										Congressional Policy and Budget Research Department.
										[Online]. Available:
										https://cpbrd.congress.gov.ph/2012-06-30-13-06-51/2012-06-30-13-36-50/1604-ff2023-17-special-education-sped-profile-in-the-philippines.
										[Accessed: Oct. 23, 2024].
									</p>
									<p>
										[2] A. B. Author, "Title of the Document," ScholarWorks @
										UNI, [Online]. Available:
										https://scholarworks.uni.edu/cgi/viewcontent.cgi?article=1909&context=grp.
										[Accessed: Oct. 23, 2024].
									</p>
									<p>
										[3] Author(s), "Title of the Article," KnE Social Sciences,
										[Online]. Available:
										https://kneopen.com/KnE-Social/article/view/10592/.
										[Accessed: Oct. 23, 2024].
									</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default SpecialEducation;
