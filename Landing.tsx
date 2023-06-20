import './Landing.css';
import html from'./image/html.png';
import css from'./image/css.jpeg';
import js from'./image/js.png';
import sam from'./image/sam.jpg';
import Spin from './Spin.tsx';
import Weather from'./Weather.tsx';
function Landing(){
return(<>

<div className="landing-page">
<header className="header">
<div className="logo">ZSam</div>
    <nav className="navbar">
    
 <nav className='spin'><Spin/></nav>
 <span className='middlewriting'>
    
    <span className='s'>S</span>
    <span className='a'>A</span>
    <span className='m'>M</span>
    <span className='z'>Z</span>
    <span className='e'>E</span>
    <span className='c'>C</span>
    <span className='k'>K</span>
    <span className='y'>Y</span>

 </span>
        <nav className="dropdown">
            <button className='menu-button'>MENU</button>
            <div className='dropdown-content'>
        <ul>
        <li><a href="#features">COURCES</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
        </ul>
        </div>
        </nav>
    </nav>
</header>

<main className="main-content">
<section className="hero-section">
<div className="hero-text">
    <h1 className='welcome'>Welcome to My Website</h1>
    <p className='intro'>Sam Zecky is a computer programer
    With more than 5years of experience
    in programing.
    <h3 className='experience'> Experience level</h3>
    <p className='intro'>
    Bachelor's degree in Web development .
Solid knowledge and experience in programming applications.
Proficient in JavaScript, HTML, CSS.
Proficient in My SQL.
Dedicated team player.
Ability to thrive in a fast-paced environment.</p></p>
    <button className="cta-button">Get Started</button>

</div>
<div className='cardsam'>
<div className="hero-image">
    <img src={sam} alt='samm' width="200px" height="150px"></img>
</div>
<div className='image-writing'>
    <h2>Sam Zecky</h2>
    <p>Junior Software Engineer</p>
</div>
</div>
</section>

<section className="feature-section" id="features">
<h2>COURCES </h2>
<div className="feature">
<img src={html} alt="html"></img> 
<h3>Hypertext Markup Language(HTML) </h3>
<p className='explanation'>What is HTML
HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
</p>
</div>
<div className="feature">
    <img src={css} alt="css"></img>
    <h3>Cascadel Style Sheet (CSS)</h3>
    <p className='explanation'>What is CSS?
CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files</p>
</div>
<div className="feature">
    <img src={js} alt="js"></img>
    <h3>JavaScript (Js)</h3>
    <p className='explanation'>JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced.

</p>
</div>
</section>

<section className="pricing-section" id="pricing">
<h2>PRICING</h2>
<div className="pricing-card">

    <h3>Basic</h3>
    <p>Learning HTML & CSS doesn’t come with many formal
         prerequisites, aside from a basic knowledge of computers. 
         Since HTML & CSS is often the first programming language 
         that novice coders learn, it is crucial to understand what
          goes into coding web pages. In addition, users should 
          consider their goals as programmers to make informed
           decisions about their next steps.</p>
           <p>Assuming that HTML & CSS is the first programming language
             a student will learn, they need to understand what goes into
              the programming process. Learning to code can be a slow process
               of making minute changes to code, repeatedly checking to 
               ensure that all the code’s tags are appropriately placed, 
               and searching through documents to find mistakes that lead to 
               bugs and errors.</p>
    <p className="price">900/month</p>
    <button className="cta-button">Sign Up</button>
</div>
<div className="pricing-card">
    <h3>Pro</h3>
    <p>Are you looking forward to becoming a web developer, designer, or programmer? Or do you want to learn a new skill for yourself and build a portfolio? If that is a Yes, then this course is for you.

HTML and CSS are the two most important languages every potential web designer or programmer out there should learn because they are the fundamental and prerequisite skills that must be in place in other to kick off or set the ball rolling. Also, every website, application, template, or framework has a frontend where people have to interact with, and these frontend designs are at their core mostly done with HTML and CSS, and this course will give you the working knowledge of these two crucial languages.

Why You Should Learn HTML and CSS

HTML and CSS are the foundational and fundamental skills you need to become a web designer, developer, or programmer in any career path.
<p></p>
You need a working knowledge of HTML and CSS to understand and flow with other programming languages easily as well as work with them.

Most frontend applications, CMSs, Frameworks have HTML and CSS at their core.

Most online instructors will already assume you have these fundamental skills when teaching you a different programming language. So it's important you learn it.

Why This Course?

</p>
    <p className="price">290000/month</p>
    <button className="cta-button">Sign Up</button>
</div>

<div className="pricing-card">
    <h3>Premium</h3>
    <p>About this gig
This gig shows about our web designing packages and we 
will create unique web sites for personal usage, commercial 
and many types of usages. The premium package is the highest
 package and it can be used for commercial purposes. We're not 
 Creating Member registration Databases but we will offer any
  other servce.Talentive web designing service is not offering
</p>
    <p className="price">290000/month</p>
    <button className="cta-button">Sign Up</button>
</div>

</section>
<section className="contact-section" id="contact">
    <h2>Contact Me</h2>
<form className="contact-form">
    <input type="text" placeholder="Name"></input>
    <input type="email" placeholder="email"></input>
    <textarea placeholder="Message"></textarea>
    <button className="cta-button">Submit</button>
</form>
<nav><Weather/></nav>
</section>
</main>
<footer className="footer">
<p><h3>CONTACT</h3>
<nav className='contact'>0742559045</nav><p></p>
<hr></hr>
&copy;Sam Zecky  2023
</p>


</footer>

</div>

</>
)
}
export default Landing;