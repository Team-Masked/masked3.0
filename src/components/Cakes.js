import React from 'react';
import CakeItem from './CakeItem';
import './Cakes.css';

function Cakes() {
    return (
        <div className="cards" id="products">
            {/* <h1></h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CakeItem 
                        src="images/image_1.jpg"
                        text="A zesty creamy treat with a sweet shortbread crust. Bodvar's favorite."
                        label= "Rs. 300/dozen"
                        />
                         <CakeItem 
                        src="images/image_2.jpg"
                        text="Classic, chewy chocolate squares. Simple, but timeless."
                        label= "Rs. 250/dozen"
                        />
                        <CakeItem 
                        src="images/image_3.jpg"
                        text="Thatch's Tubby Gingerbread Men - X-Mas special."
                        label= "Rs. 240/dozen"
                        />
                    </ul>
                    <ul className="cards__items">
                         <CakeItem 
                        src="images/image_4.jpg"
                        text="Like brownies, but without the chocolate. Studded with white chocolate. Scrumptious."
                        label= "Rs. 260/dozen"
                        />
                        <CakeItem 
                        src="images/image_5.jpg"
                        text="Golden, buttery, and filled with chocolate. Goes great with a glass of milk!"
                        label= "Rs. 220/dozen"
                        />
                        <CakeItem 
                        src="images/image_6.jpg"
                        text="A soft-centered, large cookie with whatever candy and mix-ins you request!"
                        label= "Depends on your order"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cakes;
