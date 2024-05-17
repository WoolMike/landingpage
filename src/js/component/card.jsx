import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = () => {


    return (
        <div className="text-center mb-5">
            <div class="card">
                <div class="card-header">
                    <img src={rigoImage} />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Card tittle</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet molestias sit iusto earo eos beatae dolores nesciunt esse.</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
            </div>

        </div>
    );
};

export default Card;