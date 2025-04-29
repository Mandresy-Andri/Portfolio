import {React, useEffect} from 'react';
import BlogImage from '../img/blog background.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
/*global gsap*/
/*global ScrollTrigger*/

const BlogArticle = () => {
      /*This makes it scroll to top on reload */
      useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".revealUp").forEach(function (elem) {
          ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            onEnter: function () {
              gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                  duration: 1.25,
                  y: 0,
                  autoAlpha: 1,
                  ease: "back",
                  overwrite: "auto"
                }
              );
            },
            onLeave: function () {
              gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
              gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                  duration: 1.25,
                  y: 0,
                  autoAlpha: 1,
                  ease: "back",
                  overwrite: "auto"
                }
              );
            },
            onLeaveBack: function () {
              gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
          });
        });
      }, []);
    
  return (
    <>
        <div className='revealUp pt-2 pb-5'>
    <div className="max-w-4xl mx-auto sm:p-6 lg:p-8">
      {/* Image with overlay title */}
      <h1 style={{backgroundColor:'black', padding:'10px', color:'white', paddingLeft:'20%', paddingRight:'20%'}} >
          Leveraging Data Mining at Darkam: A Strategic Approach
        </h1>
      <div style={{marginRight:'20%', marginLeft:'20%'}} >
        <img
          src={BlogImage}
          style={{width:'100%'}}
          alt="Blog header"
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Author info and date */}
      <div className="flex items-center mb-6 text-gray-600" style={{marginRight:'20%', marginLeft:'20%'}} >
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
        </div>
        <div>
            <hr></hr>
          <p className="font-medium">Mandresy Andriamasinoro</p>
          <p className="text-sm">April 23, 2025 · 8 min read</p>
          <hr></hr>
        </div>
      </div>

      {/* Article content with proper side margins */}
      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700" style={{marginRight:'20%', marginLeft:'20%'}}>
        <p className="text-lg font-medium">
          As the Chief Data Officer at Darkam, a small IT company specializing in website development and full-stack web applications, I have researched how data mining can elevate our business. This short article talks about why we should leverage data mining, how we will prepare for it, the practical process we will undertake, and eventually how we will evaluate success or failure.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Why Leverage Data Mining</h2>
        <p>
          Data mining can provide key insights that will help us make informed decisions. By analyzing our sales data, we can identify which products sell the most. We can also understand what makes some products high in demand. First, by using data mining techniques like classification, we can see and prioritize these well performing products (Han et al., 2011). Furthermore, we can also make an analysis on the customer sentiment through the feedback they give us. This can further help determine what makes a product successful or not.
        </p>
        <p>
          Aside from the sales data on the products, we can also leverage the customer data. By mining customer demographics and behavior, we can know who our main audience is and optimize our marketing efforts to fit them more (Hickman, 2024). With predictive models, we can then estimate the probability of potential clients buying our services. These are just a few starting points for our business, but there are many more applications and reasons why leveraging data mining can bring us considerable growth.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Preparation and Processing</h2>
        <p>
          Effective data mining is not easy and requires careful preparations. We will start by creating a database or an Excel sheet to maintain detailed records of our products, costs, and sales. We will also collect data on past clients, including their purchase, basic info, and feedback to identify the audience better. Finally, we will also collect info on potential customers by recording and capturing data on our website traffic. It's important to carry out the collection properly since poor data will only undermine the quality of the insights. Therefore, even if it might take a while to put the systems in place, we will do so carefully to ensure accuracy and consistency (Gandomi & Haider, 2015).
        </p>
        <p>
          The next step is organizing and normalizing the data. We will ensure it is actually usable by making sure everything is in the proper format, not missing or blank, not having duplicates, and accurate. With this data, we will generate initial visuals like frequency charts of the sales or bar charts of the customer age ranges. These initial graphs can be combined into a dashboard for us to have a quick business overview. However, with more time and research, we will be able to apply more advanced techniques. They could include predictive models to know the probability of sales, classification algorithms to group services or customers, and decision trees to know which factors influence the sales more (Han et al., 2011).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">How to Evaluate Success and Failure</h2>
        <p>
          As much as possible, we will try to evaluate our data mining success through clear metrics. First, we will assess our models' accuracy. For example, using some test data, we can check if a predictive model has an 80% accuracy, indicating it is successful (Han et al., 2011). We will also test the customer insights to guide our marketing decisions. We will do so by targeting the high-probability clients and tracking the results to see if there is a positive change in customer numbers. Finally, the analysis on our customer feedback will tell us if there are improvements or strong selling points in our products. We will improve them based on the analysis and see if it results in higher customer satisfaction and retention.
        </p>

        {/* Styled References section */}
        <hr></hr>
        <div className="mt-10 pt-6 border-t border-gray-200"  style={{marginTop:'5%', marginBottom:'5%'}}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">References</h2>
          <ul className="space-y-3 text-sm">
            <li className="pb-2">
              Hickman, M. (2024, August 13). Leveraging data to drive business growth for SMBS. Forbes.{' '}
              <a href="https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/03/leveraging-data-to-drive-business-growth-for-smbs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-words">
                https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/03/leveraging-data-to-drive-business-growth-for-smbs/
              </a>
            </li>
            <li className="pb-2">
              Gandomi, A., & Haider, M. (2015). Beyond the hype: Big data concepts, methods, and analytics. International Journal of Information Management, 35(2), 137-144.{' '}
              <a href="https://doi.org/10.1016/j.ijinfomgt.2014.10.007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800">
                https://doi.org/10.1016/j.ijinfomgt.2014.10.007
              </a>
            </li>
            <li className="pb-2">
              Han, J., Kamber, M., & Pei, J. (2011). Data Mining: Concepts and Techniques (3rd ed.). Morgan Kaufmann.
            </li>
          </ul>
        </div>
        <hr></hr>
      </div>
    </div>




        </div>



            {/* ENDING */}
                <div className="social-container revealUp">
            <h3>"Hard work pays off"</h3>
            <div className='pt-5'>
            <a rel="noreferrer" target="_blank" href="https://github.com/Mandresy-Andri"
              className="github">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mandresy-andria/"
              className="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            </div>
            <p className='pt-5'>Designed by me</p>
      </div>
    </>
  );
};

export default BlogArticle;