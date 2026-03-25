function Navbar() {
    return (    
<div class="navbar">
        <div class="navbar-s1">
            <div class="navbar-s1__title">
                <h1>Udemy</h1>
            </div>

        </div>
        <div class="navbar-s2">

            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search anything.. books, courses, materials"></input>

        </div>

        <div class="navbar-s3">
            <div class="courses">
               <p>Courses</p>
               <div class="courses__popup">
            
                    <p>web developement</p>
                    <p>UI/UX desigining</p>
                    <p>graphics desigining</p>
                    <p>python</p>
                    <p>SQL database managemnent</p>

               </div>
            </div>
            
            <div class="mylearning">
                <p>Mylearning</p>
                <div class="mylearning__popup">
                    <p>you didn't purchased anything yet</p>

                </div>

            </div>
           <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
        </div>

    <div class="navbar-s4">
        <i class="fa-solid fa-bars"></i>

    </div>
    </div>
    )
};
export default Navbar;