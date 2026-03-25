import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';  
import c5 from '../assets/images/c5.jpg'; 
import c6 from '../assets/images/c6.jpg';



function Coursecard() {
    return(
         <div class="recommended_container">
            <div class="course-card">
                <img src={c1} alt="Course 1"></img>
                <h3>2025 python visualzation</h3>
                <p>core</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹899 <del>₹3999</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt="Course 2"></img>
                <h3>2025 UI/UX designing </h3>
                <p>havoc john</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt="Course 3"></img>
                <h3>2025 web development</h3>
                <p> andrew marcus</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹15k <del>₹30k</del></p>
            </div>

            <div class="course-card">
                <img src={c5} alt="Course 5"></img>
                <h3>2025 graphics desigining</h3>
                <p>afnel</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>₹1999 <del>₹2999</del></p>
            </div>

        </div>

    )
};
export default Coursecard;