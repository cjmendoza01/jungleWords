import React from "react";
import "./SPED.css";

function SupportSDES() {
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
								<img src="/spedSup.png" alt="Your Image Alt Text" />
							</div>
							<div className="text-content">
								<h2>
									{" "}
									Government Support and Policies Supporting SPED in the
									Philippines
								</h2>
								<p>
									The development of special education in the Philippines has
									received considerable support over the years from the
									government, non-government organizations, and stakeholders,
									addressing the needs and challenges of the times. Awareness
									among both government and private sectors regarding the
									importance of providing equal opportunities for children with
									special needs has significantly improved.
								</p>
								<br></br>
								<h2> RA 10533 – The Enhanced Basic Education Act </h2>
								<p>
									Pursuant to Section 16 of Republic Act No. 10533, entitled "An
									Act Enhancing the Philippine Basic Education System by
									Strengthening Its Curriculum and Increasing the Number of
									Years for Basic Education, Appropriating Funds Therefor and
									for Other Purposes," otherwise known as the "Enhanced Basic
									Education Act of 2013," approved on May 15, 2013, and which
									took effect on June 8, 2013, the Department of Education
									(DepEd), the Commission on Higher Education (CHED), and the
									Technical Education and Skills Development Authority (TESDA),
									hereby issue the following rules and regulations to implement
									the provisions of the Act.
								</p>
								<p>
									Republic Act No. 10533, also known as the "Enhanced Basic
									Education Act of 2013," introduced significant reforms to the
									Philippine education system. The Act aimed to strengthen the
									curriculum by aligning it with international standards and
									enhancing students' skillsets. It also increased the number of
									years in basic education through the implementation of the
									K-12 program, which includes Kindergarten, six years of
									elementary education, four years of junior high school, and
									two additional years of senior high school. Additionally, the
									Act ensured the allocation of funds to support improvements in
									infrastructure, teaching materials, and other resources needed
									to implement these reforms. The Department of Education
									(DepEd), the Commission on Higher Education (CHED), and the
									Technical Education and Skills Development Authority (TESDA)
									were tasked with executing the provisions of the law, focusing
									on different educational levels: DepEd for basic education,
									CHED for higher education, and TESDA for technical-vocational
									education. Ultimately, the law seeks to improve the overall
									quality of education in the Philippines, equipping students
									with the necessary skills for higher education and the
									workforce, and fostering global competitiveness.
								</p>
								<br></br>
								<h2> RA 7277 – The Magna Carta for Disabled Persons</h2>
								<p>
									One positive development in special education is the
									implementation of Republic Act 7277, otherwise known as the
									Magna Carta for Disabled Persons, an Act providing for the
									rehabilitiation, self-development and self-reliance of
									disabled persons and their integration into the mainstream of
									society. Centers on employment, education, health care, social
									services, telecommunications, buildings and transportation,
									and political and civil rights. This Act also prohibits
									discrimination against disabled persons in employment,
									transportation, and in public accommodation and services. In
									support of this legislation, the Department of Education has
									directed all school divisions in the country to establish
									Special Education Centers to help provide effective delivery
									of special education services nationwide.
								</p>
								<br></br>
								<h2>
									{" "}
									DepEd Order No. 72, s. 2009 – Guidelines for SPED Programs
								</h2>
								<p>
									The Department of Education (DepEd) in the Philippines issued
									DepEd Order No. 72, s. 2009 to promote inclusive education as
									a strategy to increase school participation among children,
									especially those with disabilities or special needs. The order
									encourages schools to adopt child-friendly environments and
									ensure that children with diverse learning needs are given the
									opportunity to learn alongside their peers. It emphasizes
									collaborative efforts among teachers, parents, and communities
									to create supportive educational experiences for all students,
									in line with international conventions and national laws.
								</p>
								<h2> Government-Funded Support for SPED </h2>
								<p>
									The Department of Education (DepEd) issued DepEd Order (DO)
									No. 042, s. 2021 (Guidelines on the Utilization of Support
									Funds for Special Education (SPED) Program) to provide
									guidance on the rules for the release, allocation,
									utilization, and liquidation/reporting of the SPED Program
									Support Fund (PSF) for public elementary and secondary schools
									offering the SPED Program, as well as regional offices and
									schools division offices. The SPED PSF supports the
									implementation of appropriate programs and services to
									Learners with Disabilities.
								</p>

								<div className="reference-section">
									<br></br>{" "}
									<div className="reference-section">

  {/* First row: 4 images */}
  <div className="image-row">
    <img src="/1.jpg" alt="Image 1" />
    <img src="/2.jpg" alt="Image 2" />
    <img src="/3.jpg" alt="Image 3" />
  </div>


 
</div>

									{/* nilagyan ko lang ng gantong space para sa pic hehe */}
								
									<h3>References</h3>
									<p>
										[1] O. Seaman, "IRR of Republic Act No. 10533," Japan's
										Ministry of Education, Culture, Sports, Science and
										Technology, [Online]. Available:
										https://www.jpmac.or.jp/img/research/pdf_seamanlaw/O8_IRR-RA-10533-BSA.pdf.
										[Accessed: Oct. 23, 2024].
									</p>
									<p>
										[2] "Disability Inclusion in the Philippines," DisabilityIN,
										[Online]. Available:
										https://disabilityin.org/country/the-philippines/#:~:text=Legislation,into%20the%20mainstream%20of%20society.
										[Accessed: Oct. 23, 2024].
									</p>
									<p>
										[3] "DO 72, s. 2009: Inclusive Education as Strategy for
										Increasing Participation Rate of Children," Department of
										Education, Philippines, Jul. 6, 2009. [Online]. Available:
										https://www.deped.gov.ph/2009/07/06/do-72-s-2009-inclusive-education-as-strategy-for-increasing-participation-rate-of-children/.
										[Accessed: Oct. 23, 2024].
									</p>
									<p> </p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default SupportSDES;
