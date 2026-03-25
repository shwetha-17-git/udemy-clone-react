import saleimg from '../assets/images/saleimg.jpg';

function Saleimg() {
    return (
        <div class="sale-image">
            <img src={saleimg} alt="sale"></img>
                <div class="sale-image__offer">
                    <h2>Great offer!!</h2>
                    <p><strong>Hurry up!!</strong> The biggest sale is on liive.. you can purchase any course for just 499 only.</p>

                </div>
        </div>
    )
};
export default Saleimg;