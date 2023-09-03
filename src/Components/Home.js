import React from 'react';
import Navbar from '../components/Navabar';
import './Home.css';

const Home = () => {
  return (
    <Navbar>
      <div className='homes'>

        <div className='background-shade'></div>

        <img
          src='https://img.freepik.com/premium-vector/crm-customer-relationship-management-concept-virtual-screen-customer-service-relationship-robotic-hand-touching-digital-interface_127544-772.jpg'
          className='homepage'
          alt=''
          style={{ height: "500px" }}
        />
      </div>
      <div className='background-shade2'>
        <p style={{ color: "white" }}>
          Customer relationship management (CRM) is a process in which a
          business or other organization administers its interactions with
          customers, typically using data analysis to study large amounts of
          information.[1] CRM systems compile data from a range of different
          communication channels, including a company's website, telephone,
          email, live chat, marketing materials and more recently, social
          media.[2] They allow businesses to learn more about their target
          audiences and how to best cater to their needs, thus retaining
          customers and driving sales growth.[3] CRM may be used with past,
          present or potential customers. The concepts, procedures, and rules
          that a corporation follows when communicating with its consumers are
          referred to as CRM. This complete connection covers direct contact
          with customers, such as sales and service-related operations,
          forecasting, and the analysis of consumer patterns and behaviors, from
          the perspective of the company.[4] According to Gartner, the global
          CRM market size is estimated at $69 billion in 2020.[5][6]
          <br />
          <br />
          The concept of customer relationship management started in the early
          1970s, when customer satisfaction was evaluated using annual surveys
          or by front-line asking.[7] At that time, businesses had to rely on
          standalone mainframe systems to automate sales, but the extent of
          technology allowed them to categorize customers in spreadsheets and
          lists. One of the best-known precursors of the modern-day CRM is the
          Farley File. Developed by Franklin Roosevelt’s campaign manager, James
          Farley, the Farley File was a comprehensive set of records detailing
          political and personal facts on people FDR and Farley met or were
          supposed to meet. Using it, people that FDR met were impressed by his
          "recall" of facts about their family and what they were doing
          professionally and politically.[8] In 1982, Kate and Robert D.
          Kestenbaum introduced the concept of database marketing, namely
          applying statistical methods to analyze and gather customer
          data.[citation needed] By 1986, Pat Sullivan and Mike Muhney released
          a customer evaluation system called ACT! based on the principle of
          digital Rolodex, which offered a contact management service for the
          first time.
        </p>
      </div>

      <div className='background-shade3'>
        <img
          src="https://www.perfectviewcrm.com/wp-content/uploads/sites/7/2018/08/PerfectView-What-is-CRM.png"
          alt="crm"
        />
        <p style={{ color: "white" }}>
          With Customer relationship management systems, customers are served
          better on the day-to-day process. With more reliable information,
          their demand for self-service from companies will decrease. If there
          is less need to interact with the company for different problems,
          customer satisfaction level increases.[37] These central benefits of
          CRM will be connected hypothetically to the three kinds of equity that
          are relationship, value, and brand, and in the end to customer equity
          <br />
          Research has found a 5% increase in customer retention boosts lifetime
          customer profits by 50% on average across multiple industries, as well
          as a boost of up to 90% within specific industries such as
          insurance.[46] Companies that have mastered customer relationship
          strategies have the most successful CRM programs.
        </p>

      </div>
      <div className='background-shade4'>
        <img
          src="https://www.act.com/uploads/2021/08/what-is-crm-6-benefits_021220.png"
          alt="benefits of crm"
        />
      </div>



    </Navbar>
  );
};

export default Home;
